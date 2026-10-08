export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  deliverables: string[];
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  url: string;
  category: string;
  filterCategory: 'shopify' | 'ecommerce' | 'fashion' | 'beauty' | 'beverage' | 'lifestyle' | 'jewelry';
  description: string;
  image: string;
  stats: string;
  services: string[];
  challenge: string;
  solution: string;
  platform?: string;
  country?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  handle: string;
  country: string;
  countryFlag: string;
  badge?: string;
  stars: number;
  content: string;
  highlight: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  delivery: string;
  bestFor: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const CREDIBILITY_METRICS = [
  {
    title: "6+ Years Experience",
    subtitle: "Built for better store performance",
    icon: "Clock",
  },
  {
    title: "350+ Clients Served",
    subtitle: "Turn more visitors into customers",
    icon: "Users",
  },
  {
    title: "Global Client Reach",
    subtitle: "US, UK, CA, AU & Worldwide",
    icon: "Globe",
  },
  {
    title: "eCommerce Growth Focused",
    subtitle: "Build a smarter growth system",
    icon: "TrendingUp",
  },
];

export const COMMON_STORE_PROBLEMS = [
  { label: "Poor store structure & confusing navigation", severity: "high" },
  { label: "Weak product pages & low-converting descriptions", severity: "high" },
  { label: "Low conversion rates (< 1.5%) despite decent traffic", severity: "critical" },
  { label: "Poor SEO & unindexed collection pages", severity: "medium" },
  { label: "Ineffective advertising spending without positive ROAS", severity: "critical" },
  { label: "Unqualified traffic bouncing within 5 seconds", severity: "high" },
  { label: "Slow mobile loading speed (> 3.5s)", severity: "high" },
  { label: "High abandoned cart rate with no recovery flows", severity: "critical" },
  { label: "Unclear customer journey & checkout friction", severity: "high" },
  { label: "Lack of repeat purchases & post-purchase retention", severity: "medium" },
  { label: "Missing social proof, trust badges, & policy transparency", severity: "medium" },
  { label: "Weak marketing strategy without clear channel synergy", severity: "high" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit",
    description: "Understand the current state of the store, traffic sources, SEO, marketing campaigns, and customer journey.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Identify",
    description: "Find the root bottlenecks, friction points, and missed opportunities suppressing your store's sales potential.",
    icon: "Target",
  },
  {
    step: "03",
    title: "Strategize",
    description: "Create a practical, sequenced action roadmap aligned directly with your target audience and profit margins.",
    icon: "BarChart3",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Implement high-impact enhancements across store UI/UX, product pages, ad creatives, and retention flows.",
    icon: "Sliders",
  },
  {
    step: "05",
    title: "Grow",
    description: "Continuously test, scale what works, and build a resilient eCommerce business based on predictable customer acquisition.",
    icon: "TrendingUp",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "shopify-store-opt",
    title: "Shopify Store Optimization",
    category: "Shopify Marketing & Store Growth",
    description: "Improve your Shopify store structure, speed, product pages, and overall performance to convert more visitors into buyers.",
    tags: ["Shopify", "Speed", "Conversion"],
    deliverables: [
      "Full theme code review & mobile layout refinement",
      "Page speed optimization for mobile and desktop",
      "Product page conversion anatomy & CTA hierarchy",
      "Trust badge integration & checkout friction reduction",
      "Navigation restructure & collection page UX"
    ],
    iconName: "Store",
  },
  {
    id: "shopify-sales-growth",
    title: "Shopify Marketing & Sales Growth",
    category: "Shopify Marketing & Store Growth",
    description: "Strategic marketing campaigns designed to attract the right customers and grow your Shopify sales systematically.",
    tags: ["Shopify", "Marketing", "Scale"],
    featured: true,
    deliverables: [
      "Custom multi-channel acquisition strategy",
      "Shopify promotions, upsells & bundle creation",
      "Audience segmentation & buyer persona targeting",
      "Sales funnel architecture & retargeting setup",
      "Comprehensive performance review & KPI tracking"
    ],
    iconName: "TrendingUp",
  },
  {
    id: "meta-facebook-ads",
    title: "Meta & Facebook Ads Management",
    category: "Paid Advertising & Media Buying",
    description: "Targeted Facebook and Instagram advertising campaigns that reach your ideal customers and drive qualified, profitable traffic.",
    tags: ["Meta", "Facebook", "Instagram"],
    deliverables: [
      "Creative strategy & ad copy formulated for eCommerce",
      "CAPI & Pixel event tracking configuration",
      "Cold audience prospecting & dynamic retargeting",
      "A/B creative testing & ROAS optimization",
      "Catalog sales ads & Advantage+ shopping campaigns"
    ],
    iconName: "Megaphone",
  },
  {
    id: "google-ads-merchant",
    title: "Google Ads & Merchant Center",
    category: "Paid Advertising & Media Buying",
    description: "High-intent Google Ads campaigns and Google Merchant Center setup to capture buyers actively searching for your products.",
    tags: ["Google Ads", "Shopping", "Search"],
    deliverables: [
      "Google Merchant Center feed setup & diagnostics",
      "Performance Max (PMax) campaign configuration",
      "High-intent Search campaigns with negative keyword scrub",
      "Conversion tracking & purchase value reporting",
      "Remarketing lists for search ads (RLSA)"
    ],
    iconName: "Search",
  },
  {
    id: "etsy-marketing-seo",
    title: "Etsy Marketing & Shop SEO",
    category: "Etsy Marketing & Promotion",
    description: "Improve your Etsy shop visibility, listing search rank, and marketing strategy to attract more ready-to-buy shoppers.",
    tags: ["Etsy", "SEO", "Listings"],
    deliverables: [
      "Keyword research tailored for Etsy algorithmic search",
      "Title, tag, and listing description optimization",
      "Shop layout review, policies, and banner positioning",
      "Etsy Ads budget allocation & performance auditing",
      "Competitor price & niche positioning analysis"
    ],
    iconName: "ShoppingBag",
  },
  {
    id: "email-marketing-klaviyo",
    title: "Email Marketing & Klaviyo Flows",
    category: "Email Marketing & Automation",
    description: "Professional email marketing setup, Klaviyo automation flows, and campaigns that recover abandoned carts and turn buyers into regulars.",
    tags: ["Email", "Klaviyo", "Automation"],
    deliverables: [
      "High-converting Abandoned Cart & Browse Abandonment flows",
      "Welcome Series nurturing sequence for new subscribers",
      "Post-purchase thank you, cross-sell & review flows",
      "Pop-up design with list growth incentive",
      "Customer segmentation for targeted promotional broadcasts"
    ],
    iconName: "Mail",
  },
  {
    id: "ecommerce-seo",
    title: "eCommerce Organic SEO",
    category: "eCommerce Marketing & Growth",
    description: "Organic search optimization for your eCommerce store — improving ranking visibility, driving qualified organic traffic, and building lasting value.",
    tags: ["SEO", "Organic", "Traffic"],
    deliverables: [
      "Technical store audit (crawlability, sitemaps, structured data)",
      "Collection & category page keyword architecture",
      "Product schema markup & rich snippet enhancements",
      "Internal linking structure & metadata refinement",
      "High-intent commercial content recommendations"
    ],
    iconName: "Globe",
  },
  {
    id: "conversion-rate-opt",
    title: "Conversion Rate Optimization (CRO)",
    category: "Conversion Optimization",
    description: "Identify and eliminate conversion bottlenecks across your store. From hero banners to one-click checkout, every step matters.",
    tags: ["CRO", "Funnels", "Sales"],
    featured: true,
    deliverables: [
      "Heatmap & session recording behavioral analysis",
      "Mobile checkout friction audit & form streamlining",
      "Value proposition clarity & product social proof tuning",
      "Micro-copy, guarantee badges, and urgency testing",
      "Cart abandonment minimization protocol"
    ],
    iconName: "Zap",
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: "shopify",
    title: "Shopify Marketing & Store Growth",
    services: [
      "Shopify Marketing",
      "Boost Shopify Sales",
      "Shopify Promotion",
      "Shopify Sales Growth",
      "Shopify SEO",
      "Shopify Traffic Generation",
      "Shopify Ads Management",
      "Shopify Store Setup & Review",
      "Shopify Speed Optimization",
      "Shopify Expert Services"
    ]
  },
  {
    id: "ecommerce",
    title: "eCommerce Marketing & Funnel Growth",
    services: [
      "eCommerce Strategy",
      "Sales Funnel Optimization",
      "Website Traffic Generation",
      "Conversion-Focused Marketing",
      "Marketing Automation",
      "Product Listing Optimization",
      "Store Architecture Review"
    ]
  },
  {
    id: "ads",
    title: "Paid Advertising & Media Buying",
    services: [
      "Facebook & Meta Ads",
      "Instagram Ads & Marketing",
      "TikTok Ads & TikTok Shop",
      "Google Ads (Search & Shopping)",
      "Google Merchant Center",
      "Pinterest Ads",
      "Dropshipping Ads & Scaling"
    ]
  },
  {
    id: "email",
    title: "Email Marketing & Automation",
    services: [
      "Klaviyo Account Setup",
      "Abandoned Cart Recovery",
      "Welcome & Nurture Flows",
      "Customer Winback Campaigns",
      "List Segmentation & Popups"
    ]
  },
  {
    id: "etsy",
    title: "Etsy Marketing & Promotion",
    services: [
      "Etsy SEO & Algorithmic Ranking",
      "Etsy Listing Optimization",
      "Etsy Shop Promotion",
      "Etsy Ads Management",
      "Keyword & Tag Research"
    ]
  },
  {
    id: "dropshipping",
    title: "Dropshipping Store Growth",
    services: [
      "Shopify Dropshipping Setup",
      "Winning Product Validation",
      "Dropshipping Media Buying",
      "Supplier & Shipping UX Review",
      "High-Converting Landing Pages"
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "rollie-nation",
    title: "Rollie Nation",
    url: "https://www.rollienation.com",
    category: "Shopify · Footwear & Fashion",
    filterCategory: "fashion",
    platform: "Shopify",
    country: "Australia / Global",
    description: "Vibrant Australian designer lightweight footwear brand. Redesigned mobile product page anatomy, instant size availability filters, and automated cart abandonment flows.",
    image: "/src/assets/images/portfolio_sneaker_1791469437324.jpg",
    stats: "+214% Mobile Conversion Rate",
    services: ["Shopify Speed", "Meta Ads", "CRO", "Product Page UX"],
    challenge: "High traffic volume from social ads with elevated mobile bounce rate and collection page filtering latency.",
    solution: "Rebuilt mobile navigation, implemented instant size selectors, optimized image payloads to drop load time under 1.8s, and launched targeted retargeting ads."
  },
  {
    id: "blue-tokai-coffee",
    title: "Blue Tokai Coffee Roasters",
    url: "https://bluetokaicoffee.com/",
    category: "Shopify · Specialty Coffee & D2C",
    filterCategory: "beverage",
    platform: "Shopify",
    country: "India / Global",
    description: "Artisanal craft specialty coffee roasters with nationwide cafes and global D2C subscribers. Engineered seamless subscription checkout, grind selectors, and Klaviyo automated flows.",
    image: "/src/assets/images/portfolio_coffee_1791469446603.jpg",
    stats: "+340% Subscription Retention",
    services: ["Klaviyo Email", "Shopify Store Review", "Google Shopping", "SEO"],
    challenge: "First-time purchasers were not transitioning into recurring subscriptions, and cart recovery rate was below benchmark.",
    solution: "Created a 4-step high-converting Klaviyo email flow, added one-click subscribe & save savings calculator, and structured Google Shopping merchant feed."
  },
  {
    id: "hiut-denim",
    title: "Hiut Denim Co.",
    url: "https://hiutdenim.co.uk/",
    category: "eCommerce · British Craft Raw Denim",
    filterCategory: "fashion",
    platform: "Shopify",
    country: "United Kingdom",
    description: "Iconic master raw selvedge denim company handcrafted in Cardigan, Wales. Engineered high-converting waitlist capture, craft storytelling layouts, and organic search optimization.",
    image: "/src/assets/images/portfolio_denim_1791471294137.jpg",
    stats: "3.9x Return on Ad Spend (ROAS)",
    services: ["Brand Storytelling CRO", "Technical SEO", "Waitlist Funnel", "Theme Speed"],
    challenge: "Limited small-batch production needed high buyer intent without aggressive discounted promotions that damage luxury prestige.",
    solution: "Architected back-in-stock VIP notification funnels, heritage craft editorial product pages, and organic category SEO ranking."
  },
  {
    id: "maguire-shoes",
    title: "Maguire Shoes",
    url: "https://maguireshoes.com/",
    category: "Shopify · High-End Designer Footwear",
    filterCategory: "fashion",
    platform: "Shopify",
    country: "Canada / USA",
    description: "Montreal-based ethical luxury shoe brand. Multi-currency Shopify Markets optimization, collection page quick-view, and Meta Advantage+ shopping catalog scaling.",
    image: "/src/assets/images/portfolio_sneaker_1791469437324.jpg",
    stats: "+165% Cross-Border Checkout Rate",
    services: ["Shopify Markets", "Meta Ads", "Mobile UX", "Conversion Audit"],
    challenge: "Cross-border US customers faced confusion over currency conversions and customs fees during checkout.",
    solution: "Configured automated geolocation currency switching, localized shipping guarantees, and tuned high-converting product page tabs."
  },
  {
    id: "adored-vintage",
    title: "Adored Vintage",
    url: "https://www.adoredvintage.com/",
    category: "Shopify · Romantic & Vintage Apparel",
    filterCategory: "fashion",
    platform: "Shopify",
    country: "United States",
    description: "Beloved vintage-inspired feminine clothing boutique. Revamped visual merchandising, lookbook discovery, bundle-and-save widgets, and Klaviyo welcome journeys.",
    image: "/src/assets/images/portfolio_vintage_fashion_1791471314416.jpg",
    stats: "+88% Average Order Value (AOV)",
    services: ["AOV Bundles", "Collection Page UX", "Email Marketing", "Shopify Theme"],
    challenge: "Shoppers loved the aesthetic but purchased single items, leading to high shipping-to-margin ratio.",
    solution: "Introduced 'Complete the Outfit' modular cross-sells, free shipping progress bar in cart drawer, and seasonal capsule lookbooks."
  },
  {
    id: "missoma",
    title: "Missoma London",
    url: "https://www.missoma.com/",
    category: "Shopify Plus · Demi-Fine Luxury Jewelry",
    filterCategory: "jewelry",
    platform: "Shopify Plus",
    country: "UK & Worldwide",
    description: "Celebrity-favorite global demi-fine jewelry brand. In-depth conversion audit on checkout velocity, gifting personalization UI, and layered Google Shopping & Meta media buying.",
    image: "/src/assets/images/portfolio_jewelry_1791471283449.jpg",
    stats: "+42% Mobile Checkout Velocity",
    services: ["Checkout Optimization", "Gifting Funnels", "Core Web Vitals", "Paid Ads"],
    challenge: "High seasonal holiday traffic caused mobile checkout drop-offs and gifting customization friction.",
    solution: "Streamlined mobile gift packaging selector, optimized font and script delivery for sub-2s mobile loading, and implemented dynamic urgency badges."
  },
  {
    id: "astrid-and-miyu",
    title: "Astrid & Miyu",
    url: "https://www.astridandmiyu.com/en-row",
    category: "Shopify Plus · Contemporary Jewelry & Stacks",
    filterCategory: "jewelry",
    platform: "Shopify Plus",
    country: "UK, US & Global",
    description: "Contemporary jewelry and stacking brand famous for ear piercing bars. Developed 'Build Your Ear Stack' interactive visualizer and international multi-store conversion optimization.",
    image: "/src/assets/images/portfolio_jewelry_1791471283449.jpg",
    stats: "+190% Global Conversion Lift",
    services: ["Interactive Stacking UX", "Shopify Plus", "Klaviyo Flows", "CRO"],
    challenge: "Customers wanted guidance styling multiple piercings and earrings together before committing to purchase.",
    solution: "Architected a visual bundle builder widget, optimized mobile sticky add-to-cart with finish selectors (Gold/Silver), and automated ear styling guide emails."
  },
  {
    id: "rhode-skin",
    title: "Rhode Skin",
    url: "https://www.rhodeskin.com/",
    category: "Shopify · D2C Skincare Phenomenon",
    filterCategory: "beauty",
    platform: "Shopify",
    country: "USA & Global",
    description: "Viral skincare brand founded by Hailey Bieber. Engineered high-concurrency drop readiness, restock waitlist notification architecture, and friction-free 1-click cart drawer.",
    image: "/src/assets/images/portfolio_skincare_1791469457386.jpg",
    stats: "99.8% Drop-Day Checkout Uptime",
    services: ["High-Concurrency CRO", "Restock Notification Architecture", "Cart Drawer", "Mobile Speed"],
    challenge: "Flash restock sell-outs caused server strain, cart lockups, and uncaptured waitlist demand.",
    solution: "Implemented instant SMS/Email restock waitlist capture, streamlined cart drawer with fast one-tap Apple Pay/Shop Pay, and optimized critical CSS."
  },
  {
    id: "kylie-cosmetics",
    title: "Kylie Cosmetics",
    url: "https://kyliecosmetics.com/",
    category: "Shopify Plus · Global Cosmetics Mega-Brand",
    filterCategory: "beauty",
    platform: "Shopify Plus",
    country: "USA & Worldwide",
    description: "Iconic global beauty empire. Performed rigorous conversion rate diagnosis across shade matching, lip kit bundles, exit-intent offers, and Google Merchant Center feeds.",
    image: "/src/assets/images/portfolio_skincare_1791469457386.jpg",
    stats: "+310% Add-to-Cart Retention",
    services: ["CRO Diagnostic", "Bundle & Save Architecture", "PMax Campaigns", "Exit Recovery"],
    challenge: "Huge influx of broad social traffic with drop-offs occurring at product shade selection.",
    solution: "Refined swatch selector UI with real skin tone previews, added sticky bottom CTA on mobile, and created tiered volume discount bundles."
  },
  {
    id: "bowy-made",
    title: "Bowy Made",
    url: "https://bowymade.com/",
    category: "Shopify · Heirloom Baby Knits & Accessories",
    filterCategory: "lifestyle",
    platform: "Shopify",
    country: "Australia / USA",
    description: "Boutique heirloom baby headwear and newborn essentials. Enhanced Instagram Shopping to store continuity, post-purchase cross-sells, and seasonal gift guide collections.",
    image: "/src/assets/images/portfolio_baby_linen_1791471303969.jpg",
    stats: "+145% Repeat Customer Rate",
    services: ["Social-to-Store Funnels", "Klaviyo Winback", "Product Page UX", "Mobile Speed"],
    challenge: "First-time moms bought newborn hats but didn't return as the baby grew.",
    solution: "Built automated age-based milestone email sequences in Klaviyo, launched toddler sizing recommendations, and improved mobile image zoom."
  },
  {
    id: "wildbird",
    title: "WildBird",
    url: "https://wildbird.co",
    category: "Shopify · Ergonomic Baby Carriers & Goods",
    filterCategory: "lifestyle",
    platform: "Shopify",
    country: "United States",
    description: "Ergonomic 100% linen baby slings and carriers brand. Restructured product page trust architecture with safety video snippets, sizing guidance, and Meta cold-to-retargeting media buying.",
    image: "/src/assets/images/portfolio_baby_linen_1791471303969.jpg",
    stats: "4.1x Meta Ad ROAS Scale",
    services: ["Meta Media Buying", "Safety & Trust CRO", "Shopify Speed", "Funnel Architecture"],
    challenge: "First-time parents felt intimidated learning how to wear linen slings, causing abandoned checkouts.",
    solution: "Integrated 10-second how-to-wear video modals directly on product pages, simplified fabric compare tables, and launched video retargeting ads."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "David H.",
    role: "Founder, Peak Athletics",
    handle: "@david_h_usa",
    country: "United States",
    countryFlag: "🇺🇸",
    badge: "Verified Client",
    stars: 5,
    highlight: "Store converted at 3.4% within 3 weeks of optimization",
    content: "Working with Mujeeb was a great experience. He took the time to understand my Shopify store, identified several conversion leaks I had missed, and provided clear, actionable recommendations. Very professional and knowledgeable."
  },
  {
    id: "t2",
    name: "Sarah K.",
    role: "Owner, Velvet & Bloom",
    handle: "@sarah_k_uk",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    badge: "Repeat Client",
    stars: 5,
    highlight: "Helped turn our struggling Etsy shop into a consistent earner",
    content: "Mujeeb helped me with my Etsy shop and the difference has been noticeable. He optimized my listings, improved my SEO, and gave me a clear marketing strategy to follow. I would highly recommend his services to any seller."
  },
  {
    id: "t3",
    name: "Priya S.",
    role: "Co-Founder, Aura Organics",
    handle: "@priya_sharma_in",
    country: "India",
    countryFlag: "🇮🇳",
    badge: "Verified Client",
    stars: 5,
    highlight: "Detailed and thorough store audit with zero fluff",
    content: "Very detailed and thorough work. Mujeeb reviewed my entire Shopify store and gave me a comprehensive report with clear priorities. His communication throughout the project was excellent and he genuinely cares."
  },
  {
    id: "t4",
    name: "James C.",
    role: "Director, Solis Outdoors",
    handle: "@james_ca",
    country: "Canada",
    countryFlag: "🇨🇦",
    badge: "Repeat Client",
    stars: 5,
    highlight: "Our Meta ad campaigns finally turned profitable",
    content: "I hired Mujeeb to help with my Facebook Ads and the results have been encouraging. He set up the campaigns properly, explained the strategy clearly, and was always available to answer questions. Will definitely work with him again."
  },
  {
    id: "t5",
    name: "Amira M.",
    role: "Owner, Linen & Loom",
    handle: "@amira_ae",
    country: "United Arab Emirates",
    countryFlag: "🇦🇪",
    badge: "Verified Client",
    stars: 5,
    highlight: "Practical advice I could implement straight away",
    content: "Mujeeb provided a very professional service. He understood my eCommerce business quickly and gave practical advice that I could implement straight away. I will definitely work with him again as we expand our catalogue."
  },
  {
    id: "t6",
    name: "Tom W.",
    role: "Founder, Artisan Roast Co.",
    handle: "@tom_au",
    country: "Australia",
    countryFlag: "🇦🇺",
    badge: "Verified Client",
    stars: 5,
    highlight: "Identified things no other agency had ever pointed out",
    content: "Really impressed with the level of detail and care that went into my store audit. Mujeeb identified things I had no idea were affecting my conversions. Honest, thorough, and very helpful."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "BASIC PACKAGE",
    price: "$350",
    subtitle: "For businesses that need a strong foundation",
    delivery: "3–5 Days",
    bestFor: "New stores and small businesses getting started",
    popular: false,
    buttonText: "Get Started — $350",
    features: [
      "Comprehensive Shopify Store Setup & Review",
      "Speed & Mobile UX Check",
      "Basic On-Page SEO Optimization",
      "Product Listing Optimization (up to 10 products)",
      "Basic Product Research & Competitive Analysis",
      "Traffic & Conversion Readiness Audit",
      "Social Media Marketing Guidance",
      "Initial 1 Marketing Campaign Setup",
      "Basic Sales Funnel Recommendations",
      "Basic Email Marketing & Welcome Setup"
    ]
  },
  {
    id: "standard",
    name: "STANDARD PACKAGE",
    price: "$750",
    subtitle: "For businesses ready to attract customers and increase sales",
    delivery: "5–7 Days",
    bestFor: "Existing stores looking to optimize traffic, conversions, and sales",
    popular: true,
    buttonText: "Get Started — $750",
    features: [
      "Everything in Basic Package",
      "Advanced Shopify Store Optimization",
      "Shopify Marketing & Sales Growth Strategy",
      "Shopify SEO & Category Keyword Optimization",
      "Targeted Traffic Generation Framework",
      "Facebook / Meta Ads Setup & Creative Direction",
      "Instagram Ads Campaign Setup",
      "TikTok Ads Setup & Strategy",
      "Google Ads & Google Merchant Center Setup",
      "Etsy Marketing & Listing Optimization (if applicable)",
      "Comprehensive Sales Funnel Setup",
      "Klaviyo Email Marketing Setup (Cart Abandonment & Welcome)",
      "Product Research & Market Validation",
      "Conversion Rate Optimization (CRO) Protocol",
      "Marketing Campaign Management (7 Days Support)"
    ]
  },
  {
    id: "super-premium",
    name: "SUPER PREMIUM PACKAGE",
    price: "$2,000",
    subtitle: "Complete eCommerce Growth & Marketing Solution",
    delivery: "7–14 Days",
    bestFor: "Businesses ready for a complete growth transformation & hands-on scaling",
    popular: false,
    buttonText: "Get Started — $2,000",
    features: [
      "Everything in Standard Package",
      "Full eCommerce Store Management & Oversight",
      "Advanced Shopify Multi-Channel Growth Strategy",
      "Complete Paid Ad Management (Meta, Google & TikTok)",
      "Google Ads Campaign Management & PMax Optimization",
      "Google Merchant Center Optimization & Diagnostics",
      "Pinterest Ads Strategy & Implementation",
      "Advanced Shopify SEO & Content Architecture",
      "Advanced Traffic Scaling Strategy",
      "Complete Multi-Step Sales Funnel Build",
      "Klaviyo Email Marketing & Automation Suite (6 Flows)",
      "Customer Retention & Repeat Order Strategy",
      "In-Depth Product Research & Market Analysis",
      "Advanced Conversion Rate Optimization (CRO)",
      "Shopify Speed & Core Web Vitals Optimization",
      "Etsy Shop Marketing & Full Promotion (if applicable)",
      "eBay SEO & Seller Optimization",
      "Dropshipping Marketing Strategy",
      "Multi-Channel Social Media Marketing",
      "Weekly Ongoing Analytics, Monitoring & Optimization"
    ]
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    question: "What kind of Shopify stores do you work with?",
    answer: "I work with a wide range of eCommerce businesses — including direct-to-consumer (D2C) brands, niche product businesses, dropshipping stores, apparel, beauty, home goods, and electronics retailers. Whether you are launching a new store or scaling an established brand, the rescue process is tailored specifically to your stage."
  },
  {
    id: "faq-2",
    question: "Can you help if my store gets traffic but doesn't convert into sales?",
    answer: "Yes, this is one of our primary core specialties. High traffic with zero or low sales usually indicates friction in the customer journey: weak product pages, unconvincing value propositions, confusing mobile navigation, unexpected checkout costs, slow loading speeds, or mismatched ad audiences. We diagnose the exact drop-off points and implement targeted fixes."
  },
  {
    id: "faq-3",
    question: "Do you manage Facebook, Instagram, TikTok, and Google Ads?",
    answer: "Yes. We configure and manage high-performing paid advertising campaigns across Meta (Facebook & Instagram), TikTok, and Google Ads (including Google Search, Shopping, and Performance Max). We focus on driving high-intent visitors and maintaining profitable return on ad spend (ROAS) rather than vanity traffic."
  },
  {
    id: "faq-4",
    question: "Can you improve my Shopify store speed and mobile performance?",
    answer: "Yes. Mobile speed directly impacts conversion rates. We audit theme code, minify scripts, optimize image weights, defer non-essential Shopify app scripts, and enhance Core Web Vitals to deliver a fast, responsive shopping experience on every device."
  },
  {
    id: "faq-5",
    question: "Do you provide Shopify SEO?",
    answer: "Yes. We implement comprehensive eCommerce SEO — including technical store health checks, keyword-optimized collection and product architecture, meta descriptions, image alt tags, schema markup, and internal linking strategies that help your store rank organically on Google."
  },
  {
    id: "faq-6",
    question: "Can you help with dropshipping stores?",
    answer: "Yes. We help dropshipping store owners move away from generic, spammy-looking stores to legitimate, branded eCommerce experiences. This includes product validation, custom product page copywriting, trust-building design, and targeted media buying."
  },
  {
    id: "faq-7",
    question: "Do you work with Etsy stores?",
    answer: "Yes! In addition to Shopify, we provide specialized Etsy SEO, title and tag optimization, shop layout improvements, and Etsy Ads management to increase organic search placement and draw more qualified buyers to your listings."
  },
  {
    id: "faq-8",
    question: "Can you set up Klaviyo email marketing and abandoned cart recovery?",
    answer: "Yes. Klaviyo is an essential revenue driver for eCommerce. We design and activate automated customer flows including Abandoned Cart Recovery, Browse Abandonment, Welcome Series, Post-Purchase Cross-sells, and Customer Winback sequences."
  },
  {
    id: "faq-9",
    question: "Do you offer ongoing store management?",
    answer: "Yes. For brands looking for continuous growth and peace of mind, we provide ongoing monthly management covering campaign management, ad creative testing, weekly store optimizations, and strategic consultation."
  },
  {
    id: "faq-10",
    question: "How does the store audit process work, and how do I get started?",
    answer: "Getting started is straightforward. Click 'Get Your Store Rescued' or 'Book a Free Strategy Call', share your store URL and primary challenge, and we will initiate your comprehensive store audit or schedule a direct consultation call to discuss your growth roadmap."
  }
];
