/**
 * Amazon Bedrock Connection & Inference Test Script
 *
 * Verifies:
 * 1. Bedrock Control Plane: AWS authentication, region reachability, and foundation model listing.
 * 2. Bedrock Runtime Plane: Model invocation (Anthropic Claude 3 / 3.5 or specified model).
 *
 * Usage:
 *   npm run test:bedrock
 *   or: node scripts/test-bedrock.ts
 */

import { BedrockClient, ListFoundationModelsCommand } from '@aws-sdk/client-bedrock';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

// Attempt to load .env if present (native in Node 20.12+)
try {
  if (typeof process.loadEnvFile === 'function') {
    process.loadEnvFile();
  }
} catch {
  // .env file is optional if env variables are already set
}

// Configuration from environment variables
const region = process.env.BEDROCK_REGION || process.env.AWS_REGION || 'us-east-1';
const modelId =
  process.env.BEDROCK_MODEL_ID || 'anthropic.claude-3-haiku-20240307-v1:0';

const hasEnvCredentials = Boolean(
  process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
);

console.log('='.repeat(65));
console.log('       AMAZON BEDROCK CONNECTION & INFERENCE TEST       ');
console.log('='.repeat(65));
console.log(`Region:           ${region}`);
console.log(`Target Model ID:  ${modelId}`);
console.log(
  `Credential Source: ${
    hasEnvCredentials
      ? 'Environment Variables (AWS_ACCESS_KEY_ID / SECRET)'
      : 'Default Provider Chain (AWS profile, SSO, or IAM role)'
  }`
);
console.log('-'.repeat(65));

interface ClaudeResponse {
  id?: string;
  type?: string;
  role?: string;
  content?: Array<{ type: string; text: string }>;
  model?: string;
  usage?: {
    input_tokens?: number;
    output_tokens?: number;
  };
}

async function runBedrockTest(): Promise<void> {
  const startTime = Date.now();

  // 1. Bedrock Control Plane Client
  const bedrockClient = new BedrockClient({ region });
  const runtimeClient = new BedrockRuntimeClient({ region });

  // --------------------------------------------------------------------------
  // STEP 1: Test Bedrock Control Plane (Listing Foundation Models)
  // --------------------------------------------------------------------------
  console.log('\n[1/2] Testing Bedrock Control Plane (ListFoundationModels)...');
  try {
    const listCommand = new ListFoundationModelsCommand({});
    const listResponse = await bedrockClient.send(listCommand);

    const modelSummaries = listResponse.modelSummaries ?? [];
    console.log(`✔ Connected to AWS Bedrock successfully!`);
    console.log(`✔ Found ${modelSummaries.length} available foundation models in ${region}.`);

    // Show available Anthropic and Amazon models
    const anthropicModels = modelSummaries.filter((m) =>
      m.providerName?.toLowerCase().includes('anthropic')
    );
    const titanModels = modelSummaries.filter((m) =>
      m.providerName?.toLowerCase().includes('amazon')
    );

    console.log(`  - Anthropic models available: ${anthropicModels.length}`);
    console.log(`  - Amazon Titan models available: ${titanModels.length}`);

    if (anthropicModels.length > 0) {
      console.log('\n  Sample available Anthropic models:');
      for (const m of anthropicModels.slice(0, 4)) {
        console.log(`    • ${m.modelId} (${m.modelName})`);
      }
    }
  } catch (error) {
    console.error('✖ Failed Bedrock Control Plane connectivity check.');
    handleBedrockError(error);
    return;
  }

  // --------------------------------------------------------------------------
  // STEP 2: Test Bedrock Runtime (Model Invocation)
  // --------------------------------------------------------------------------
  console.log(`\n[2/2] Testing Bedrock Runtime Inference with model "${modelId}"...`);
  const promptText = 'Hello Bedrock! Confirm connection in one short sentence.';

  try {
    const payload = {
      anthropic_version: 'bedrock-2023-05-31',
      max_tokens: 150,
      messages: [
        {
          role: 'user',
          content: promptText,
        },
      ],
    };

    const invokeCommand = new InvokeModelCommand({
      modelId,
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify(payload),
    });

    const invokeStart = Date.now();
    const invokeResponse = await runtimeClient.send(invokeCommand);
    const invokeDuration = Date.now() - invokeStart;

    const rawResponse = new TextDecoder('utf-8').decode(invokeResponse.body);
    const parsed = JSON.parse(rawResponse) as ClaudeResponse;

    const reply =
      parsed.content?.[0]?.text?.trim() || '(No text content in response)';

    console.log('✔ Inference succeeded!');
    console.log(`✔ Response latency: ${invokeDuration} ms`);
    if (parsed.usage) {
      console.log(
        `✔ Tokens: Input: ${parsed.usage.input_tokens ?? 0}, Output: ${parsed.usage.output_tokens ?? 0}`
      );
    }
    console.log('\n--- Model Output ---');
    console.log(reply);
    console.log('--------------------');

    const totalDuration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n🎉 All Bedrock connection tests passed in ${totalDuration}s!`);
  } catch (error) {
    console.error(`✖ Inference failed with model "${modelId}".`);
    handleBedrockError(error);
  }
}

function handleBedrockError(error: unknown): void {
  const err = error as { name?: string; message?: string; $metadata?: { httpStatusCode?: number } };

  console.error(`\nError Name:    ${err.name || 'UnknownError'}`);
  console.error(`Message:       ${err.message || String(error)}`);
  if (err.$metadata?.httpStatusCode) {
    console.error(`HTTP Status:   ${err.$metadata.httpStatusCode}`);
  }

  console.log('\n💡 Troubleshooting Tips:');
  switch (err.name) {
    case 'UnrecognizedClientException':
    case 'InvalidSignatureException':
    case 'AuthFailure':
    case 'CredentialsProviderError':
      console.log('  1. Check your AWS credentials in `.env` or system environment:');
      console.log('       AWS_ACCESS_KEY_ID=your_access_key');
      console.log('       AWS_SECRET_ACCESS_KEY=your_secret_key');
      console.log('       AWS_REGION=us-east-1 (or your region)');
      console.log('       AWS_SESSION_TOKEN=... (if using temporary STS credentials)');
      break;

    case 'AccessDeniedException':
      console.log('  1. Model Access: Make sure model access is granted in the AWS Bedrock Console');
      console.log('     Navigate to AWS Console -> Amazon Bedrock -> "Model access" -> "Enable specific models".');
      console.log('  2. IAM Permissions: Ensure your IAM user/role has:');
      console.log('     - bedrock:ListFoundationModels');
      console.log('     - bedrock:InvokeModel');
      break;

    case 'ResourceNotFoundException':
      console.log(`  1. The model "${modelId}" might not be supported in region "${region}".`);
      console.log('  2. Try setting BEDROCK_REGION to "us-east-1" or "us-west-2".');
      console.log('  3. Or test with cross-region inference profile:');
      console.log('     BEDROCK_MODEL_ID=us.anthropic.claude-3-haiku-20240307-v1:0');
      break;

    case 'ValidationException':
      console.log('  1. Verify the request payload format matches the requested model family.');
      console.log('  2. If using cross-region inference, pass the inference profile ID.');
      break;

    default:
      console.log('  - Verify your network connection and AWS region.');
      console.log('  - Check AWS Bedrock service health and status.');
      break;
  }
}

runBedrockTest();
