// ============================================================
// SITE CONSTANTS — Change agency name, colors, and data here
// ============================================================

export const SITE = {
  name: "Nexus Digital",
  tagline: "We Grow Businesses Online",
  description:
    "Nexus Digital is a full-service digital marketing agency offering website development, SEO, social media management, Google Ads, and graphic design.",
  url: "https://nexusdigital.agency",
  email: "hello@nexusdigital.agency",
  phone: "+1 (555) 000-0000",
  address: "123 Marketing Ave, New York, NY 10001",
  founded: "2020",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export const SERVICES = [
  {
    id: "web-development",
    icon: "Monitor",
    title: "Website Development",
    shortDesc:
      "High-performance websites that load fast, rank higher, and convert visitors into customers.",
    features: [
      "Custom Next.js & React builds",
      "Lightning-fast Core Web Vitals",
      "Mobile-first responsive design",
      "CMS integration & e-commerce",
    ],
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO",
    shortDesc:
      "Data-driven search strategies that put your business at the top of Google and keep it there.",
    features: [
      "Technical SEO audits",
      "Keyword & competitor research",
      "On-page & off-page optimization",
      "Monthly reporting & tracking",
    ],
  },
  {
    id: "social-media",
    icon: "Share2",
    title: "Social Media Management",
    shortDesc:
      "Consistent, creative content that builds your brand and turns followers into loyal customers.",
    features: [
      "Content strategy & calendar",
      "Platform-native creative",
      "Community management",
      "Performance analytics",
    ],
  },
  {
    id: "google-ads",
    icon: "Target",
    title: "Google Ads",
    shortDesc:
      "Profitable PPC campaigns that put your business in front of people ready to buy — right now.",
    features: [
      "Search, Display & Shopping ads",
      "Conversion-focused copy",
      "A/B testing & optimization",
      "Transparent ROAS reporting",
    ],
  },
  {
    id: "graphic-design",
    icon: "Palette",
    title: "Graphic Design",
    shortDesc:
      "Premium visual identities and marketing assets that make your brand impossible to ignore.",
    features: [
      "Brand identity & logo design",
      "Social media graphics",
      "Marketing collateral",
      "Ad creatives & banners",
    ],
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 3.2, suffix: "x", label: "Average ROI" },
  { value: 6, suffix: " yrs", label: "In Business" },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn your business goals, target audience, and current challenges in a focused 30-minute call.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We build a custom, data-backed growth strategy tailored to your industry and budget.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our team executes every deliverable with precision — on time and to the highest standard.",
  },
  {
    number: "04",
    title: "Reporting",
    description:
      "You get a clear monthly report showing exactly what we did and the results it produced.",
  },
];

export const CASE_STUDIES = [
  {
    industry: "E-Commerce",
    challenge: "Declining organic traffic and rising ad costs with flat revenue growth.",
    result: "312% increase in organic revenue in 8 months.",
    metric: "312%",
    metricLabel: "Organic Revenue Growth",
    tags: ["SEO", "Google Ads"],
  },
  {
    industry: "SaaS",
    challenge: "Brand new website with zero search visibility and no social presence.",
    result: "0 to 18,000 monthly organic visitors in 6 months.",
    metric: "18K",
    metricLabel: "Monthly Organic Visitors",
    tags: ["SEO", "Web Development"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Nexus Digital completely transformed our online presence. Our organic leads tripled within four months and the team communicates everything clearly.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "BrightPath Solutions",
    rating: 5,
  },
  {
    quote:
      "The Google Ads team cut our cost-per-lead by 40% while tripling the volume. We finally have a marketing partner that treats our budget like their own.",
    name: "Marcus T.",
    role: "Founder",
    company: "Apex Commerce",
    rating: 5,
  },
  {
    quote:
      "Our new website loads in under 1.5 seconds and the SEO results have been staggering. Best investment we have made in three years of running this business.",
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    rating: 5,
  },
];

export const BLOG_POSTS = [
  {
    slug: "seo-strategy-2026",
    category: "SEO",
    title: "The Complete SEO Strategy Guide for 2026",
    excerpt:
      "Everything you need to know about E-E-A-T, Core Web Vitals, and AI-powered search to dominate Google this year.",
    date: "April 20, 2026",
    readTime: "8 min read",
  },
  {
    slug: "google-ads-roi",
    category: "Google Ads",
    title: "How to Triple Your Google Ads ROI Without Increasing Budget",
    excerpt:
      "The exact bidding strategies, audience targeting, and ad copy frameworks we use for our highest-performing clients.",
    date: "April 15, 2026",
    readTime: "6 min read",
  },
  {
    slug: "social-media-strategy-2026",
    category: "Social Media",
    title: "Social Media Content Strategy That Actually Converts in 2026",
    excerpt:
      "Stop posting for vanity metrics. Here is the framework we use to turn social media followers into paying customers.",
    date: "April 10, 2026",
    readTime: "7 min read",
  },
];

export const CLIENTS = [
  "Acme Corp",
  "BrightPath",
  "TechFlow",
  "Apex Commerce",
  "Meridian Group",
  "Stellar Labs",
  "Nova Partners",
  "Quantum Digital",
];

export const WHY_US_POINTS = [
  {
    icon: "Award",
    title: "Certified Google & Meta Partner",
    description:
      "Our team holds active certifications across Google Ads, Analytics, and Meta Business, giving you a team that knows the platforms inside out.",
  },
  {
    icon: "User",
    title: "Dedicated Account Manager",
    description:
      "You get one point of contact who knows your business, answers within hours, and proactively brings you ideas.",
  },
  {
    icon: "BarChart3",
    title: "Transparent Monthly Reports",
    description:
      "No vanity metrics. Every report shows the exact numbers that matter to your revenue — traffic, leads, and conversions.",
  },
  {
    icon: "Shield",
    title: "Zero Long-Term Contracts",
    description:
      "We earn your business every month. Our agreements are month-to-month because our results are what keep clients.",
  },
];
