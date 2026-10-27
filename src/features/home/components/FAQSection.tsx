import { useId, useState } from 'react';
import {
  Box,
  ButtonBase,
  Collapse,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Reveal } from '../../../components/common/Reveal';
import {
  faqContent,
  faqDataByTopic,
  faqTopics,
  type FaqTopic,
} from '../data/homeContent';

function FaqRow({
  q,
  a,
  id,
  isOpen,
  onToggle,
  reducedMotion,
}: {
  q: string;
  a: string;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  reducedMotion: boolean;
}) {
  return (
    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
      <Box component="h3" sx={{ m: 0 }}>
        <ButtonBase
          type="button"
          disableRipple
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-question`}
          sx={{
            width: '100%',
            minHeight: { xs: 58, md: 68 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            py: { xs: 2, md: 2.25 },
            px: { xs: 1, md: 1.5 },
            mx: { xs: -1, md: -1.5 },
            textAlign: 'left',
            borderRadius: '8px',
            color: isOpen ? 'primary.main' : 'text.primary',
            transition: reducedMotion ? 'none' : 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
            '&:hover': {
              color: 'primary.main',
              bgcolor: 'rgba(0, 0, 0, 0.016)',
            },
            '&.Mui-focusVisible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: -2,
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: { xs: '1rem', md: '1.0625rem' },
              fontWeight: isOpen ? 600 : 500,
              lineHeight: 1.45,
              letterSpacing: '-0.01em',
              color: 'inherit',
              transition: 'color 0.2s ease',
            }}
          >
            {q}
          </Typography>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              bgcolor: isOpen ? 'rgba(0, 113, 227, 0.1)' : 'rgba(0, 0, 0, 0.035)',
              color: isOpen ? 'primary.main' : 'text.secondary',
              transition: reducedMotion ? 'none' : 'all 0.26s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <KeyboardArrowDownIcon
              sx={{
                fontSize: 20,
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: reducedMotion ? 'none' : 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </Box>
        </ButtonBase>
      </Box>
      <Collapse
        in={isOpen}
        timeout={reducedMotion ? 0 : 260}
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-question`}
        aria-hidden={!isOpen}
        sx={{
          overflow: 'hidden',
          ...(!isOpen && { visibility: 'hidden', height: 0 }),
        }}
      >
        <Box sx={{ pb: 3.5, pt: 0.5, pr: { xs: 2, md: 6 }, pl: { xs: 1, md: 1.5 } }}>
          <Typography
            sx={{
              m: 0,
              fontSize: { xs: '0.9375rem', md: '1rem' },
              color: 'text.secondary',
              lineHeight: 1.7,
              letterSpacing: '-0.005em',
            }}
          >
            {a}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}

export function FAQSection() {
  const [selectedTopic, setSelectedTopic] = useState<FaqTopic>(faqContent.defaultTopic);
  const [openIndex, setOpenIndex] = useState(-1);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const instanceId = useId();
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const topicId = selectedTopic.toLowerCase().replace(/\s+/g, '-');

  const handleTopicChange = (topic: FaqTopic) => {
    setSelectedTopic(topic);
    setOpenIndex(-1);
  };

  return (
    <Box
      id="faq"
      component="section"
      aria-label="Frequently Asked Questions"
      sx={{
        bgcolor: 'common.white',
        color: 'text.primary',
        py: { xs: 6, md: 9 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              md: 'minmax(0, 320px) minmax(0, 1fr)',
              lg: 'minmax(0, 360px) minmax(0, 1fr)',
            },
            gap: { xs: 4, md: 6, lg: 8 },
            alignItems: 'start',
          }}
        >
          {/* Left Column: Heading, Static Blue IKI, and Category Navigation */}
          <Reveal>
            <Typography
              component="h2"
              sx={{
                fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'text.primary',
                m: 0,
              }}
            >
              {faqContent.headingPrefix}
            </Typography>
            {/* Accordion header with arrow for IKI category navigation */}
            <ButtonBase
              type="button"
              onClick={() => setIsCategoryOpen((prev) => !prev)}
              aria-expanded={isCategoryOpen}
              aria-controls="faq-category-accordion-content"
              aria-label="Toggle FAQ categories"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                mt: 0.25,
                mb: { xs: 2.5, md: 3 },
                textAlign: 'left',
                borderRadius: 1,
                color: 'primary.main',
                p: 0,
                fontSize: '2.5rem !important',
                '&.Mui-focusVisible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: 2,
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: '2.5rem !important',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: 'primary.main',
                }}
              >
                IKI
              </Box>
              <KeyboardArrowDownIcon
                sx={{
                  fontSize: '2.25rem',
                  color: 'primary.main',
                  transform: isCategoryOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: reducedMotion ? 'none' : 'transform 240ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </ButtonBase>

            {/* Accordion content: categories list */}
            <Collapse in={isCategoryOpen} id="faq-category-accordion-content">
              <Box
                role="group"
                aria-label="FAQ topics"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'column' },
                  flexWrap: { xs: 'wrap', md: 'nowrap' },
                  gap: { xs: 1, md: 0.5 },
                  pb: { xs: 2, md: 0 },
                }}
              >
                {faqTopics.map((topic) => {
                  const active = topic === selectedTopic;
                  const label = topic === 'IKI' ? 'About IKI' : topic;
                  return (
                    <ButtonBase
                      key={topic}
                      type="button"
                      disableRipple
                      aria-pressed={active}
                      onClick={() => handleTopicChange(topic)}
                      sx={{
                        justifyContent: 'flex-start',
                        minHeight: 44,
                        width: { xs: 'auto', md: '100%' },
                        // Blue vertical indicator ONLY on active category; NO vertical border on inactive categories
                        borderLeft: {
                          xs: 'none',
                          md: active ? '3px solid' : 'none',
                        },
                        borderBottom: {
                          xs: active ? '2.5px solid' : 'none',
                          md: 'none',
                        },
                        borderColor: active ? 'primary.main' : 'transparent',
                        bgcolor: active
                          ? { xs: 'rgba(0, 113, 227, 0.08)', md: 'rgba(0, 113, 227, 0.035)' }
                          : 'transparent',
                        // Precise padding so text alignment never shifts between active and inactive states
                        pl: {
                          xs: 1.75,
                          md: active ? 2 : '19px',
                        },
                        pr: { xs: 1.75, md: 2 },
                        py: { xs: 1, md: 1.25 },
                        borderRadius: { xs: '999px', md: '0 8px 8px 0' },
                        textAlign: 'left',
                        fontSize: '1rem',
                        fontWeight: active ? 600 : 400,
                        color: active ? 'text.primary' : 'text.secondary',
                        transition: reducedMotion
                          ? 'none'
                          : 'color 0.2s ease, background-color 0.2s ease',
                        '&:hover': {
                          bgcolor: active
                            ? { xs: 'rgba(0, 113, 227, 0.12)', md: 'rgba(0, 113, 227, 0.06)' }
                            : 'action.hover',
                          color: 'text.primary',
                        },
                        '&.Mui-focusVisible': {
                          outline: '2px solid',
                          outlineColor: 'primary.main',
                          outlineOffset: -2,
                        },
                      }}
                    >
                      {label}
                    </ButtonBase>
                  );
                })}
              </Box>
            </Collapse>
          </Reveal>

          {/* Right Column: Full-Width Accordion Rows with 10px right spacing */}
          <Reveal delay={0.08} sx={{ minWidth: 0, borderTop: '1px solid', borderColor: 'divider', pr: '10px' }}>
            {faqDataByTopic[selectedTopic].map((item, index) => (
              <FaqRow
                key={`${topicId}-${index}`}
                q={item.q}
                a={item.a}
                id={`faq-${instanceId}-${topicId}-${index}`}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
                reducedMotion={reducedMotion}
              />
            ))}
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

export default FAQSection;
