/**
 * Verified Content for the Approved IKI Homepage.
 * Source of truth:
 * 1. Layout & hierarchy: Approved IKI Mockup (IKI desktop landing page.png)
 * 2. Visual styling: Dark IKI mood board
 * 3. Text content: EduNxt project data
 */

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const brand = {
  name: 'IKI',
  tagline: 'We Connect Talent to Opportunity',
  description:
    'IKI is a career platform that connects talent with opportunities and helps businesses grow.',
  email: 'hello@iki.demo',
  phone: '+91 98765 43210',
  address: 'Bengaluru, India',
};

export const navItems: NavItem[] = [
  { label: 'Jobs', href: '#opportunities' },
  { label: 'For Employers', href: '#partners', hasDropdown: true },
  { label: 'Resources', href: '#faq', hasDropdown: true },
  { label: 'About', href: '#conversations' },
];

export const heroContent = {
  eyebrow: 'TOP FEATURE',
  titleLine1: 'We Connect',
  titleLine2: 'Talent to Opportunity',
  subtitle: 'Find meaningful jobs, build your career, and grow with companies that care.',
  primaryCta: 'Get Started',
  secondaryCta: 'For Employers',
  callout: 'Build your next chapter',
  socialProof: '10K+ professionals found better opportunities',
  bgImage: '/images/mockup/hero-bg.jpg',
};

export interface PromoTile {
  id: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  secondaryCtaText?: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  textColor?: string;
}

export const promoTiles: PromoTile[] = [
  {
    id: 'global-talent',
    title: 'Global Talent',
    subtitle: 'Curated leadership and specialized engineering roles across leading tech companies.',
    ctaText: 'Explore roles',
    image: '/images/grid1.jpg',
    textColor: '#000000',
  },
  {
    id: 'enterprise-hiring',
    title: 'Enterprise Hiring',
    subtitle: 'Scale high-performing engineering and product teams with vetted talent.',
    ctaText: 'Hire talent',
    secondaryCtaText: 'Request demo',
    image: '/images/grid13.jpg',
    textColor: '#ffffff',
  },
  {
    id: 'direct-access',
    title: 'Direct Access',
    subtitle: 'Direct conversations with verified hiring managers. No gatekeepers.',
    ctaText: 'Get matched',
    secondaryCtaText: 'Learn more',
    image: '/images/grid11.jpg',
    textColor: '#ffffff',
  },
  {
    id: 'career-advisory',
    title: 'Career Advisory',
    subtitle: 'Personalized mentorship, industry insights, and career path coaching.',
    ctaText: 'Start consulting',
    image: '/images/grid5.jpg',
    textColor: '#111111',
  },
];

export const carouselContent = {
  activeCard: {
    id: 'watch-ultra-4',
    title: 'WATCH ULTRA 4',
    subtitle: 'A battery you can’t outrun.',
    ctaText: 'Learn more',
    secondaryCtaText: 'Buy',
    image: '/images/mockup/carousel-center-card.jpg',
  },
  fullStripImage: '/images/mockup/carousel-ultra4.jpg',
  totalSlides: 4,
};

export const partnerContent = {
  title: 'Trusted by our innovation partners',
  ctaText: 'Learn more about our partners',
  ctaLink: '#partners',
  partners: ['Microsoft', 'Google Cloud', 'AWS', 'Cisco', 'Apple'],
  stripImage: '/images/mockup/partners-strip.jpg',
};

export type FaqTopic = 'IKI' | 'Job Seekers' | 'Employers';

export const faqTopics: FaqTopic[] = ['IKI', 'Job Seekers', 'Employers'];

export const faqDataByTopic: Record<FaqTopic, FaqItem[]> = {
  IKI: [
    {
      q: 'What is IKI?',
      a: 'IKI is a modern career platform built to connect talent with opportunities and help forward-thinking organizations scale with job-ready candidates.',
    },
    {
      q: 'How can I find a job on IKI?',
      a: 'Search by title, role or expertise, filter by industry and location, and apply directly with your unified profile in one click.',
    },
    {
      q: 'Is IKI free to use?',
      a: 'Job search, profile creation, and core learning programmes are 100% free for job seekers. Enterprise and recruitment plans are priced transparently.',
    },
    {
      q: 'Can employers post jobs on IKI?',
      a: 'Yes. Employers and hiring teams can create recruiter accounts to post roles, review pre-screened talent, and manage candidates collaboratively.',
    },
  ],
  'Job Seekers': [
    {
      q: 'How do I create and optimize my IKI profile?',
      a: 'Sign up with your email or professional account, upload your CV, and highlight your verified skills, projects, and career preferences.',
    },
    {
      q: 'Are the jobs listed on IKI verified?',
      a: 'Yes, every job posting is verified directly with hiring partners to ensure genuine opportunities and transparent salary bands.',
    },
    {
      q: 'Can I apply for remote and hybrid roles?',
      a: 'Absolutely. Use our smart filters to find fully remote, hybrid, or on-site opportunities worldwide.',
    },
    {
      q: 'Does IKI provide career mentorship?',
      a: 'Yes, IKI connects members with industry mentors, interview prep resources, and skill development workshops.',
    },
  ],
  Employers: [
    {
      q: 'How does IKI help companies source qualified talent?',
      a: 'We leverage skill-based matching and pre-vetted candidate pools to drastically reduce time-to-hire and improve retention.',
    },
    {
      q: 'Can I integrate IKI with our existing ATS?',
      a: 'Yes, IKI integrates seamlessly with major applicant tracking systems including Greenhouse, Lever, and Workday.',
    },
    {
      q: 'What hiring plans are available?',
      a: 'We offer flexible self-serve job postings, team seats, and full enterprise recruitment partnerships.',
    },
    {
      q: 'How do we schedule a product demo?',
      a: 'Reach out to our employer partnerships team at hello@iki.demo to schedule a personalized walkthrough.',
    },
  ],
};

export const faqContent = {
  headingPrefix: 'Answers to questions about',
  defaultTopic: 'IKI' as FaqTopic,
  topics: faqTopics,
  items: faqDataByTopic.IKI,
};

export const conversationContent = {
  eyebrow: "LET'S CONNECT",
  heading: 'We Believe In Meaningful Conversations',
  bodyText:
    'We may not always be able to respond instantly, but we assure you that your every message is important to us. Our team will get back to you as soon as possible.',
  subText: 'Every great piece begins with a conversation. Let’s start yours.',
  ctaText: "Let's Talk",
  email: brand.email,
};

export const footerContent = {
  brandStatement: brand.description,
  columns: [
    {
      title: 'Products',
      items: [
        { label: 'Find Jobs', href: '#opportunities' },
        { label: 'Post a Job', href: '#partners' },
        { label: 'Talent Network', href: '#opportunities' },
        { label: 'Career Resources', href: '#faq' },
        { label: 'Pricing', href: '#partners' },
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
    {
      title: 'Developers',
      items: [
        { label: 'API Sandbox', href: '#developers' },
        { label: 'Documentation', href: '#developers' },
        { label: 'Release Notes', href: '#developers' },
        { label: 'System Status', href: '#developers' },
        { label: 'Community', href: '#developers' },
      ],
    },
  ],
  legalLinks: [
    { label: 'Terms Of Use', href: '/terms' },
    { label: 'Legal Notices', href: '/legal' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookies', href: '/cookies' },
  ],
  copyright: '© 2026, IKI. All rights reserved',
};
