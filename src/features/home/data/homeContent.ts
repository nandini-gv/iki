/**
 * Verified Homepage Content for IKI Career Platform.
 * Source of truth: EduNxt project data and approved IKI mockup hierarchy.
 * Content maintained separately from presentation components.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PromoItem {
  id: string;
  category: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  image: string;
  accentColor: string;
}

export interface StorySlide {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const brand = {
  name: 'IKI',
  tagline: 'People. Skills. Progress.',
  email: 'hello@iki.demo',
  phone: '+91 98765 43210',
  address: 'IKI Global Capability Center, Bengaluru, India',
};

export const navItems: NavItem[] = [
  { label: 'Jobs', href: '#opportunities' },
  { label: 'For Employers', href: '#hiring' },
  { label: 'Resources', href: '#faq' },
  { label: 'About', href: '#conversations' },
];

export const heroContent = {
  eyebrow: 'TOP FEATURE',
  titleLine1: 'We Connect',
  titleLine2: 'Talent to Opportunity',
  tagline: 'Jobs. Opportunities. People. Progress.',
  description:
    'A unified platform for job seekers, recruiters, freelancers and learners — built for a brighter tomorrow.',
  primaryCta: 'Get Started',
  secondaryCta: 'For Employers',
  callout: 'Build your next chapter',
  socialProof: '10K+ professionals found better opportunities',
  stats: [
    { value: '50K+', label: 'Jobs & Opportunities' },
    { value: '1K+', label: 'Hiring Partners' },
    { value: '10K+', label: 'Learners Trained' },
    { value: '95%', label: 'Placement Support' },
  ] as StatItem[],
  image: '/images/hero-portrait.jpg',
};

export const promoGrid: PromoItem[] = [
  {
    id: 'jobseeker',
    category: 'CAREERS',
    title: 'Job Seeker',
    description: 'Find the right opportunities and build your career with companies that care.',
    cta: 'Explore Jobs',
    link: '#opportunities',
    image: '/images/svc-jobseeker.jpg',
    accentColor: '#0071e3',
  },
  {
    id: 'hiring',
    category: 'RECRUITERS',
    title: 'End-to-End Hiring for HR',
    description: 'Find, assess and hire job-ready, pre-screened talent at scale.',
    cta: 'For Recruiters',
    link: '#hiring',
    image: '/images/svc-hiring.jpg',
    accentColor: '#f59e0b',
  },
  {
    id: 'freelance',
    category: 'FREELANCE',
    title: 'Freelance Marketplace',
    description: 'Turn your specialized skills into high-impact, verified projects.',
    cta: 'Find Projects',
    link: '#opportunities',
    image: '/images/svc-freelance.jpg',
    accentColor: '#06b6d4',
  },
  {
    id: 'training',
    category: 'LEARNING',
    title: 'Technology Training',
    description: 'Learn in-demand skills with live mentor sessions for real-world growth.',
    cta: 'Explore Training',
    link: '#faq',
    image: '/images/svc-training.jpg',
    accentColor: '#a855f7',
  },
];

export const opportunitiesContent = {
  eyebrow: 'EXPLORE WHAT’S POSSIBLE',
  title: 'Real Opportunities. Real Growth.',
  description:
    'From learning new skills to finding your next opportunity, discover experiences designed around people, skills and progress.',
  slides: [
    {
      id: 'skills',
      title: 'Build Skills That Matter',
      description: 'Hands-on technology training designed around real-world industry work.',
      cta: 'Explore training',
      image: '/images/story-skills.jpg',
      featured: true,
    },
    {
      id: 'opportunity',
      title: 'Find Opportunities That Fit',
      description: 'Discover jobs, freelance projects and career paths built around your strengths.',
      cta: 'Explore jobs',
      image: '/images/story-opportunity.jpg',
      featured: false,
    },
    {
      id: 'team',
      title: 'Build Teams for What’s Next',
      description: 'Connect forward-thinking organizations with trained, job-ready talent.',
      cta: 'Explore hiring',
      image: '/images/story-team.jpg',
      featured: false,
    },
    {
      id: 'tech',
      title: 'Grow With Technology',
      description: 'Learn practical, in-demand skills that keep you ready for what’s next.',
      cta: 'Explore skills',
      image: '/images/story-tech.jpg',
      featured: false,
    },
  ] as StorySlide[],
};

export const partnerContent = {
  title: 'Trusted by our innovation partners',
  subtitle: 'Working together to create opportunities and build a skilled future.',
  ctaText: 'Learn more about partners',
  partners: [
    { name: 'Microsoft', category: 'Cloud & AI' },
    { name: 'Google Cloud', category: 'Enterprise Cloud' },
    { name: 'AWS', category: 'Cloud Infrastructure' },
    { name: 'Cisco', category: 'Networking & Security' },
    { name: 'Apple', category: 'Hardware & Ecosystem' },
    { name: 'IBM', category: 'Hybrid Cloud' },
    { name: 'Oracle', category: 'Database & Cloud' },
    { name: 'Meta', category: 'AI Research' },
  ],
};

export type FaqCategory =
  | 'Job Seekers'
  | 'Recruiters'
  | 'Freelancers'
  | 'Technology Training'
  | 'General';

export const faqCategories: FaqCategory[] = [
  'Job Seekers',
  'Recruiters',
  'Freelancers',
  'Technology Training',
  'General',
];

export const faqData: Record<FaqCategory, FaqItem[]> = {
  'Job Seekers': [
    {
      q: 'How does the job search work?',
      a: 'Search by title, skill or company in the platform, then filter by industry, location or company size. Apply in one click once you have an active profile.',
    },
    {
      q: 'How do I create a profile?',
      a: 'Create a free profile with your skills, experience and portfolio work samples. It takes just a few minutes and can be reused across every application.',
    },
    {
      q: 'How do I apply for jobs?',
      a: 'Open a company’s profile from the opportunities section and choose a listed role, or reach out directly through Meaningful Conversations for roles not yet posted.',
    },
    {
      q: 'Can I track my applications?',
      a: 'Yes. Once signed in, every application status updates in your dashboard, from submitted through to interview and offer.',
    },
    {
      q: 'What kind of jobs are available?',
      a: 'Roles across technology, consulting, finance, healthcare, manufacturing, education, retail and startups, from internships to senior hires.',
    },
    {
      q: 'Is there any cost to use the platform?',
      a: 'Job search is completely free for job seekers, including profile creation, applications and community learning programmes.',
    },
  ],
  Recruiters: [
    {
      q: 'How can recruiters post jobs?',
      a: 'Create an employer account, share your requirements and we surface job-ready, pre-assessed candidates for your open roles.',
    },
    {
      q: 'How are candidates screened?',
      a: 'Every candidate profile is reviewed against hands-on project work and, where relevant, a practical skills assessment.',
    },
    {
      q: 'Can we manage multiple job openings?',
      a: 'Yes. Recruiter accounts support multiple postings with a shared pipeline view across your whole hiring team.',
    },
    {
      q: 'Is there a cost for hiring through IKI?',
      a: 'Recruiter and corporate plans are transparently priced by scope and hiring volume. Reach out through Meaningful Conversations for details.',
    },
    {
      q: 'How fast can we get a shortlist?',
      a: 'Most roles receive an initial shortlist of screened candidates within a few working days of sharing requirements.',
    },
  ],
  Freelancers: [
    {
      q: 'How does freelance work on IKI?',
      a: 'Build a profile, get matched with verified clients, deliver in a shared workspace and get paid securely by milestone.',
    },
    {
      q: 'How do I get matched with clients?',
      a: 'We match your listed skills and past work against live client briefs, so you mostly see projects that are a genuine fit.',
    },
    {
      q: 'How and when do I get paid?',
      a: 'Clients fund each milestone up front, and payment is released to you as soon as the milestone is approved.',
    },
    {
      q: 'Can I build a portfolio on the platform?',
      a: 'Yes. Completed projects become case studies on your profile automatically, visible to future clients and recruiters.',
    },
    {
      q: 'Is freelance work free to join?',
      a: 'Creating a freelancer profile and applying to projects is free. We only charge a small platform fee on completed, paid milestones.',
    },
  ],
  'Technology Training': [
    {
      q: 'What kind of technology training do you offer?',
      a: 'Live, mentor-led paths in software development, data, AI, cloud, cybersecurity and UI/UX, each ending in a capstone portfolio project.',
    },
    {
      q: 'Are the courses live or self-paced?',
      a: 'Courses combine live mentor-led sessions with self-paced hands-on labs, so you can practise on your own schedule between classes.',
    },
    {
      q: 'Do I get a certificate?',
      a: 'Yes, every completed path ends in an assessed capstone project and a verified certificate you can share with employers.',
    },
    {
      q: 'Is there placement support after training?',
      a: 'Graduates receive resume reviews, mock interviews and direct introductions to hiring partners across our network.',
    },
    {
      q: 'Is there any cost for learning?',
      a: 'Community learning programmes are free. Some advanced cohort-based paths carry tuition, displayed clearly before enrollment.',
    },
  ],
  General: [
    {
      q: 'Is there any cost to use the platform?',
      a: 'Job search and community programmes are free. Recruiter, corporate and certain advanced training plans are priced by scope.',
    },
    {
      q: 'Is my data secure?',
      a: 'Profile and application data is encrypted in transit and at rest, and is never sold to third parties.',
    },
    {
      q: 'Which countries do you operate in?',
      a: 'IKI is headquartered in Bengaluru, India, serving talent and employers globally across remote and hybrid opportunities.',
    },
    {
      q: 'How do I contact support?',
      a: 'Use the Meaningful Conversations section on this page, or email hello@iki.demo, and our team will follow up promptly.',
    },
  ],
};

export const conversationContent = {
  eyebrow: "LET'S CONNECT",
  heading: 'We Believe In Meaningful Conversations',
  bodyText:
    'We may not always be able to respond instantly, but we assure you that your every message is important to us. Our team will get back to you as soon as possible.',
  subText: 'Every great piece begins with a conversation. Let’s start yours.',
  cta: "Let's Talk",
  email: brand.email,
  phone: brand.phone,
  address: brand.address,
};

export const footerContent = {
  brandStatement:
    'IKI is a career platform that connects talent with opportunities and helps businesses grow.',
  columns: [
    {
      title: 'Products',
      items: [
        { label: 'Find Jobs', href: '#opportunities' },
        { label: 'Post a Job', href: '#hiring' },
        { label: 'Talent Network', href: '#opportunities' },
        { label: 'Career Resources', href: '#faq' },
        { label: 'Pricing', href: '#hiring' },
      ],
    },
    {
      title: 'Company',
      items: [
        { label: 'About', href: '#conversations' },
        { label: 'Team', href: '#conversations' },
        { label: 'Careers', href: '#opportunities' },
        { label: 'Blog', href: '#conversations' },
        { label: 'Contact Us', href: '#conversations' },
      ],
    },
    {
      title: 'Policies',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Use', href: '/terms' },
        { label: 'Cookies', href: '/cookies' },
        { label: 'Accessibility', href: '/accessibility' },
        { label: 'Sitemap', href: '/sitemap' },
      ],
    },
  ],
  legalStrip: {
    links: [
      { label: 'Terms Of Use', href: '/terms' },
      { label: 'Legal Notices', href: '/legal' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
    ],
    copyright: '© 2026, IKI. All rights reserved.',
  },
};
