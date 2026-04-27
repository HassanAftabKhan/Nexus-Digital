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
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ============================================================
// SERVICE TYPE
// ============================================================
export type Service = {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  deliverables: string[];
  price: string;
  resultStat: string;
  resultLabel: string;
};

export const SERVICES: Service[] = [
  {
    id: "web-development",
    icon: "Monitor",
    title: "Website Development",
    shortDesc:
      "High-performance websites that load fast, rank higher, and convert visitors into customers.",
    longDesc:
      "We build custom, blazing-fast websites using Next.js and React — the same stack powering the world's fastest digital companies. Every site we deliver scores 95+ on Google Lighthouse, is fully responsive on all devices, and is architected from the ground up for SEO and conversions. We don't use page builders or templates. Every pixel is intentional.",
    features: [
      "Custom Next.js & React builds",
      "Lightning-fast Core Web Vitals (LCP < 2.5s)",
      "Mobile-first responsive design",
      "CMS integration (Sanity, Contentful, WordPress)",
      "E-commerce (Shopify, WooCommerce)",
      "Full SEO technical infrastructure",
    ],
    deliverables: [
      "Custom website design & development",
      "Google Lighthouse audit report (95+ score)",
      "On-page SEO setup",
      "CMS training & documentation",
      "30-day post-launch support",
    ],
    price: "Starting from $3,500",
    resultStat: "156%",
    resultLabel: "Avg. increase in conversions post-launch",
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO",
    shortDesc:
      "Data-driven search strategies that put your business at the top of Google and keep it there.",
    longDesc:
      "SEO in 2026 is a full-stack discipline — technical foundations, content strategy, authority building, and AI-era optimizations all working in concert. Our process starts with a comprehensive audit, then builds a custom 12-month roadmap that attacks the highest-value opportunities first. We track every keyword, every backlink, and every Core Web Vital — and we show you exactly how it all translates to revenue.",
    features: [
      "Technical SEO audits (200-point checklist)",
      "Keyword & competitor gap analysis",
      "On-page & content optimization",
      "Link building & digital PR",
      "Core Web Vitals optimization",
      "Local SEO & Google Business Profile",
    ],
    deliverables: [
      "Full technical SEO audit report",
      "Custom 12-month SEO roadmap",
      "Monthly keyword ranking report",
      "Content briefs & optimization",
      "Backlink acquisition (min. 8/mo)",
    ],
    price: "Starting from $1,200/mo",
    resultStat: "312%",
    resultLabel: "Avg. organic traffic growth in 6 months",
  },
  {
    id: "social-media",
    icon: "Share2",
    title: "Social Media Management",
    shortDesc:
      "Consistent, creative content that builds your brand and turns followers into loyal customers.",
    longDesc:
      "We manage your social media presence end-to-end — strategy, creation, scheduling, and analytics. Our content team creates platform-native posts (not recycled graphics) that stop the scroll and start conversations. We handle Instagram, LinkedIn, Facebook, TikTok, and X — and every post is tied back to your business goals, not vanity metrics.",
    features: [
      "Multi-platform content strategy",
      "Platform-native creative (Reels, Stories, Carousels)",
      "Content calendar & scheduling",
      "Community management & replies",
      "Influencer & brand partnership sourcing",
      "Monthly performance analytics",
    ],
    deliverables: [
      "Social media content strategy deck",
      "20 posts/month (across 2 platforms)",
      "Monthly analytics & insights report",
      "Community management (5 days/week)",
      "Quarterly creative refresh",
    ],
    price: "Starting from $900/mo",
    resultStat: "4.8x",
    resultLabel: "Avg. engagement rate vs. industry benchmark",
  },
  {
    id: "google-ads",
    icon: "Target",
    title: "Google Ads",
    shortDesc:
      "Profitable PPC campaigns that put your business in front of people ready to buy — right now.",
    longDesc:
      "We run Google Ads campaigns that are engineered for profit, not just clicks. From Search to Performance Max, we build every campaign around your target ROAS and cost-per-acquisition — not arbitrary CTR benchmarks. Every campaign is tracked at the conversion level, A/B tested continuously, and optimized weekly. You only scale what works.",
    features: [
      "Search, Display, Shopping & YouTube ads",
      "Performance Max campaign management",
      "Conversion tracking & attribution setup",
      "Audience segmentation & remarketing",
      "A/B testing (copy, landing pages, bids)",
      "Weekly optimization & transparent ROAS reporting",
    ],
    deliverables: [
      "Full account audit & restructure",
      "Campaign setup & copywriting",
      "Conversion tracking implementation",
      "Weekly performance reports",
      "Monthly strategy review call",
    ],
    price: "Starting from $800/mo + ad spend",
    resultStat: "2.8x",
    resultLabel: "Average return on ad spend (ROAS)",
  },
  {
    id: "graphic-design",
    icon: "Palette",
    title: "Graphic Design",
    shortDesc:
      "Premium visual identities and marketing assets that make your brand impossible to ignore.",
    longDesc:
      "Your brand is the first thing prospects judge you on — often before they read a single word. We create visual systems that are instantly recognizable, deeply consistent, and built to work everywhere from your website to your Instagram to your pitch deck. Every design decision is rooted in strategy, not aesthetics alone.",
    features: [
      "Brand identity & logo design",
      "Brand guidelines & style guides",
      "Social media graphics & templates",
      "Marketing collateral (brochures, decks)",
      "Ad creatives & display banners",
      "Packaging & print design",
    ],
    deliverables: [
      "Primary & secondary logo suite",
      "Full brand guidelines document",
      "10 social media graphic templates",
      "Business card & letterhead design",
      "All source files (AI, EPS, PNG, PDF)",
    ],
    price: "Starting from $1,800",
    resultStat: "91%",
    resultLabel: "Of clients report stronger brand perception",
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
    slug: "brightpath-ecommerce-seo",
    industry: "E-Commerce",
    client: "BrightPath Solutions",
    challenge: "Declining organic traffic and rising ad costs with flat revenue growth.",
    solution:
      "We overhauled their technical SEO infrastructure, rebuilt their Google Ads account with Performance Max, and launched a 60-article topical authority content plan.",
    result: "312% increase in organic revenue in 8 months.",
    metric: "312%",
    metricLabel: "Organic Revenue Growth",
    duration: "8 months",
    services: ["SEO", "Google Ads", "Content"],
    tags: ["SEO", "Google Ads"],
  },
  {
    slug: "techflow-saas-growth",
    industry: "SaaS",
    client: "TechFlow Inc.",
    challenge: "Brand new website with zero search visibility and no social presence.",
    solution:
      "Built their Next.js website from scratch with a 98 Lighthouse score, implemented a full SEO strategy, and launched their LinkedIn content machine.",
    result: "0 to 18,000 monthly organic visitors in 6 months.",
    metric: "18K",
    metricLabel: "Monthly Organic Visitors",
    duration: "6 months",
    services: ["Web Development", "SEO", "Social Media"],
    tags: ["SEO", "Web Development"],
  },
  {
    slug: "apex-commerce-google-ads",
    industry: "Retail",
    client: "Apex Commerce",
    challenge: "High cost-per-lead from Google Ads with poor lead quality.",
    solution:
      "Restructured their entire Google Ads account, added audience layering and Performance Max, and A/B tested 40+ ad variations.",
    result: "Cost-per-lead reduced by 40% while tripling lead volume.",
    metric: "40%",
    metricLabel: "Cost-Per-Lead Reduction",
    duration: "4 months",
    services: ["Google Ads"],
    tags: ["Google Ads", "PPC"],
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
  {
    quote:
      "The social media team completely overhauled our content strategy. Engagement is up 480% and we now get inbound DMs from qualified leads every single week.",
    name: "Daniel O.",
    role: "CMO",
    company: "Meridian Group",
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
    content: `Search engine optimization has fundamentally shifted in 2026. Google's integration of AI Overviews into the SERP means that ranking #1 is no longer enough — you need to be the source that AI cites.\n\nThe three pillars of 2026 SEO are:\n\n**1. E-E-A-T Signals**\nExperience, Expertise, Authoritativeness, and Trustworthiness are now the primary quality signals Google uses to evaluate content. This means every article needs a genuine expert author, real first-hand experience documented, and a trust infrastructure (reviews, credentials, citations).\n\n**2. Core Web Vitals**\nWith Interaction to Next Paint (INP) now a Core Web Vital, JavaScript-heavy sites are being penalized. We benchmark all client sites at LCP < 2.5s, INP < 200ms, and CLS < 0.1.\n\n**3. Topical Authority**\nRanking for a single keyword is dead. Google rewards sites that comprehensively cover an entire topic space. Build content clusters, not individual blog posts.`,
    date: "April 20, 2026",
    readTime: "8 min read",
    author: "Hassan Aftab",
    authorRole: "Head of SEO",
  },
  {
    slug: "google-ads-roi",
    category: "Google Ads",
    title: "How to Triple Your Google Ads ROI Without Increasing Budget",
    excerpt:
      "The exact bidding strategies, audience targeting, and ad copy frameworks we use for our highest-performing clients.",
    content: `Most advertisers waste 40-60% of their Google Ads budget on poor match types, irrelevant audiences, and untested ad copy. Here is the exact framework we use to fix this.\n\n**Step 1: Conversion Tracking First**\nBefore touching bids, verify every conversion action is firing correctly. We use Google Tag Manager + GA4 + Ads conversion import to get a 3-way match on all conversion data.\n\n**Step 2: Consolidate Campaigns**\nGoogle's machine learning needs data. Fragmented campaigns starve the algorithm. Consolidate to 3-5 tightly themed campaigns with 50+ conversions per month per campaign before layering any smart bidding.\n\n**Step 3: Audience Layering**\nApply your customer match lists, in-market audiences, and remarketing lists to every campaign as observation. Bid up 30-50% on audiences that convert 2x the average.`,
    date: "April 15, 2026",
    readTime: "6 min read",
    author: "Hassan Aftab",
    authorRole: "Head of Paid Media",
  },
  {
    slug: "social-media-strategy-2026",
    category: "Social Media",
    title: "Social Media Content Strategy That Actually Converts in 2026",
    excerpt:
      "Stop posting for vanity metrics. Here is the framework we use to turn social media followers into paying customers.",
    content: `The brands winning on social media in 2026 are not posting more — they are posting with a system. Here is the framework we implement for every client.\n\n**The 3-3-3 Content Framework**\n- 3 educational posts (build trust & authority)\n- 3 social proof posts (case studies, testimonials, results)\n- 3 CTA posts (direct offers, lead magnets, consultations)\n\nThis ratio keeps your feed valuable while consistently moving followers toward conversion.\n\n**Platform-Native Content**\nThe algorithm penalizes content that looks like it was made for another platform. Reels need to be filmed vertically. LinkedIn posts need line breaks. TikToks need a hook in the first 1.5 seconds. We create platform-native assets for every channel — never recycled content.\n\n**Engagement Windows**\nThe first 30 minutes after posting are critical. Have a team member reply to every comment in that window. The algorithm reads engagement velocity and boosts posts that get early interaction.`,
    date: "April 10, 2026",
    readTime: "7 min read",
    author: "Hassan Aftab",
    authorRole: "Head of Social",
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

export const TEAM = [
  {
    name: "Hassan Aftab Khan",
    role: "Founder & CEO",
    bio: "10+ years in digital marketing. Former head of growth at two VC-backed startups. Built Nexus Digital to be the agency he always wished existed.",
    expertise: ["SEO Strategy", "Business Development", "Paid Media"],
    initial: "H",
  },
  {
    name: "Ayesha Raza",
    role: "Head of SEO",
    bio: "Technical SEO specialist with deep expertise in Core Web Vitals, structured data, and AI-era search optimization.",
    expertise: ["Technical SEO", "Content Strategy", "Link Building"],
    initial: "A",
  },
  {
    name: "Bilal Ahmed",
    role: "Lead Developer",
    bio: "Full-stack engineer specializing in Next.js and performance optimization. Every site he ships scores 95+ on Lighthouse.",
    expertise: ["Next.js", "React", "Performance Optimization"],
    initial: "B",
  },
  {
    name: "Sana Malik",
    role: "Head of Paid Media",
    bio: "Managed $4M+ in Google and Meta ad spend. Specializes in e-commerce and SaaS acquisition campaigns.",
    expertise: ["Google Ads", "Meta Ads", "CRO"],
    initial: "S",
  },
  {
    name: "Usman Tariq",
    role: "Creative Director",
    bio: "Brand designer with 8 years of experience building visual identities for startups and Fortune 500 companies.",
    expertise: ["Brand Identity", "UI/UX", "Motion Design"],
    initial: "U",
  },
  {
    name: "Hira Khan",
    role: "Social Media Lead",
    bio: "Content strategist who has grown brand accounts from zero to 100K+ followers across Instagram, LinkedIn, and TikTok.",
    expertise: ["Content Strategy", "Community Building", "Video Production"],
    initial: "H",
  },
];

export const FAQ = [
  {
    question: "How soon will I see results?",
    answer:
      "It depends on the service. Google Ads campaigns can drive results within the first week. SEO typically shows meaningful traction in 90 days and significant results in 6 months. Website builds are delivered in 4-8 weeks.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. All of our retainer services are month-to-month. We believe in earning your business every single month through results, not locking you in.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our services are priced based on scope. Monthly retainers start at $800/mo for Google Ads management and $900/mo for social media. Website builds start at $3,500. We offer custom packages for businesses that need multiple services.",
  },
  {
    question: "Do you work with businesses outside of New York?",
    answer:
      "Yes — we work with clients globally. Our team operates remotely and we have clients across North America, Europe, and the Middle East.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Three things: transparency (you always know what we're doing and why), no vanity metrics (every report is tied to revenue), and no long-term contracts (we earn your trust monthly).",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free 30-minute strategy call. We will audit your current online presence and give you a clear picture of the biggest growth opportunities — with no commitment required.",
  },
];

export const VALUES = [
  {
    number: "01",
    title: "Radical Transparency",
    description:
      "You always know exactly where your budget is going, what we are doing, and what results it is producing. No smoke, no mirrors.",
  },
  {
    number: "02",
    title: "Revenue Over Vanity",
    description:
      "We optimize for metrics that matter — leads, revenue, and profit — not followers, impressions, or page views.",
  },
  {
    number: "03",
    title: "Continuous Improvement",
    description:
      "Every campaign, every website, every piece of content is tested, measured, and improved. Good enough is never good enough.",
  },
  {
    number: "04",
    title: "Relationships First",
    description:
      "We only take on clients we are confident we can genuinely help. Your success is our reputation.",
  },
];
