export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  categories: string[]
  slug: string
  isFeatured?: boolean
  tableOfContents: { id: string; title: string; level: number }[]
  relatedTopics: { title: string; type: string; thumbnail?: string; duration?: string }[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Fitness and Health Signal: What is VO₂ Max and Why it Matters?",
    excerpt:
      "VO₂ Max is the maximum amount of oxygen your body can use during intense exercise. It's one of the most accurate indicators of your cardiovascular fitness and endurance capacity.",
    date: "August 5, 2025",
    readTime: "3 mins read",
    image: "/nextjs/featured-vo2-max.png",
    categories: ["Fitness", "Research"],
    slug: "ultimate-fitness-health-signal-vo2-max",
    isFeatured: true,
    tableOfContents: [
      { id: "understanding-vo2", title: "Understanding VO₂", level: 1 },
      { id: "how-vortex-measures", title: "How Does the Vortex Measure It?", level: 1 },
      { id: "why-it-matters", title: "Why It Matters for You?", level: 1 },
      { id: "references", title: "References", level: 1 },
    ],
    relatedTopics: [
      {
        title: "Understanding Your Cardiorespiratory Fitness",
        type: "video",
        thumbnail: "/vo2-max-explanation.png",
        duration: "4:32",
      },
    ],
    content: `<p>VO₂ is more than just a number — it's a window into how efficiently your body uses oxygen. Discover how VO₂ tracking with AXOVOC's Vortex device can help you understand your performance and recovery.</p>

<h2 id="understanding-vo2">Understanding VO₂</h2>
<p>VO₂ stands for <strong>Volume of Oxygen consumed</strong>. It's a key metric used to assess your aerobic capacity — in simpler terms, how well your lungs and muscles are working together during physical activity.</p>

<p>Higher VO₂ levels often indicate better cardiovascular fitness. Athletes track it to optimize training. Clinicians monitor it to detect potential health issues. And now, with the <strong>Vortex device</strong>, you can too.</p>

<h2 id="how-vortex-measures">How Does the Vortex Measure It?</h2>
<p>The Vortex device uses advanced biomarker analysis to provide real-time VO₂ measurements. Unlike traditional lab-based testing, our portable device makes it easy to track your oxygen consumption during various activities.</p>

<p>Key features include:</p>
<ul>
<li>Real-time monitoring during exercise</li>
<li>Accurate measurements comparable to lab equipment</li>
<li>Easy-to-understand data visualization</li>
<li>Integration with your training programs</li>
</ul>

<h2 id="why-it-matters">Why It Matters for You?</h2>
<p>Understanding your VO₂ max can help you:</p>
<ul>
<li><strong>Optimize training intensity:</strong> Train in the right zones for maximum benefit</li>
<li><strong>Track fitness progress:</strong> See objective improvements over time</li>
<li><strong>Prevent overtraining:</strong> Know when to push harder or when to rest</li>
<li><strong>Set realistic goals:</strong> Base your targets on actual physiological data</li>
</ul>

<p>Whether you're a competitive athlete or someone looking to improve their health, VO₂ max provides valuable insights into your cardiovascular fitness and overall well-being.</p>

<h2 id="references">References</h2>
<ol>
<li>American College of Sports Medicine. (2018). ACSM's Guidelines for Exercise Testing and Prescription.</li>
<li>Bassett, D. R., & Howley, E. T. (2000). Limiting factors for maximum oxygen uptake and determinants of endurance performance. Medicine and Science in Sports and Exercise.</li>
<li>Jones, A. M., & Carter, H. (2000). The effect of endurance training on parameters of aerobic fitness. Sports Medicine.</li>
</ol>`,
  },
  {
    id: 2,
    title: "Understanding Metabolic Flexibility: The Key to Optimal Health",
    excerpt:
      "Metabolic flexibility is your body's ability to efficiently switch between different fuel sources. Learn how to optimize this crucial aspect of your health.",
    date: "August 3, 2025",
    readTime: "5 mins read",
    image: "/nextjs/metabolic-flexibility.jpg",
    categories: ["Research", "Health"],
    slug: "understanding-metabolic-flexibility",
    isFeatured: true,
    tableOfContents: [
      { id: "what-is-metabolic-flexibility", title: "What is Metabolic Flexibility?", level: 1 },
      { id: "measuring-flexibility", title: "Measuring Metabolic Flexibility", level: 1 },
      { id: "improving-flexibility", title: "Improving Your Flexibility", level: 1 },
      { id: "conclusion", title: "Conclusion", level: 1 },
    ],
    relatedTopics: [
      {
        title: "Metabolic Health Assessment",
        type: "article",
        thumbnail: "/metabolic-health.png",
      },
    ],
    content: `<p>Metabolic flexibility represents your body's remarkable ability to adapt its fuel usage based on availability and demand. This fundamental aspect of human physiology plays a crucial role in overall health and performance.</p>

<h2 id="what-is-metabolic-flexibility">What is Metabolic Flexibility?</h2>
<p>Metabolic flexibility refers to your body's capacity to switch between burning carbohydrates and fats for energy, depending on their availability and your current metabolic state.</p>

<p>A metabolically flexible person can:</p>
<ul>
<li>Efficiently burn fat during low-intensity activities</li>
<li>Quickly switch to carbohydrate burning during high-intensity exercise</li>
<li>Maintain stable energy levels throughout the day</li>
<li>Recover more effectively from training sessions</li>
</ul>

<h2 id="measuring-flexibility">Measuring Metabolic Flexibility</h2>
<p>Traditional methods of measuring metabolic flexibility require expensive laboratory equipment. However, the Vortex device makes it possible to assess your metabolic flexibility through advanced biomarker analysis.</p>

<h2 id="improving-flexibility">Improving Your Flexibility</h2>
<p>Several strategies can help improve your metabolic flexibility:</p>
<ul>
<li><strong>Varied training:</strong> Include both aerobic and anaerobic exercises</li>
<li><strong>Nutritional periodization:</strong> Strategically time carbohydrate intake</li>
<li><strong>Intermittent fasting:</strong> Allow periods of low insulin to promote fat oxidation</li>
<li><strong>Sleep optimization:</strong> Ensure adequate recovery for metabolic processes</li>
</ul>

<h2 id="conclusion">Conclusion</h2>
<p>Metabolic flexibility is a cornerstone of optimal health and performance. By understanding and improving this aspect of your physiology, you can enhance your energy levels, performance, and overall well-being.</p>`,
  },
  {
    id: 3,
    title: "Recovery Metrics That Actually Matter for Athletes",
    excerpt:
      "Not all recovery metrics are created equal. Discover which biomarkers provide the most actionable insights for athletic performance.",
    date: "August 1, 2025",
    readTime: "4 mins read",
    image: "/nextjs/recovery-metrics.png",
    categories: ["Athletic Performance", "Research"],
    slug: "recovery-metrics-athletes",
    isFeatured: true,
    tableOfContents: [
      { id: "key-recovery-metrics", title: "Key Recovery Metrics", level: 1 },
      { id: "heart-rate-variability", title: "Heart Rate Variability", level: 1 },
      { id: "lactate-clearance", title: "Lactate Clearance", level: 1 },
      { id: "practical-application", title: "Practical Application", level: 1 },
    ],
    relatedTopics: [
      {
        title: "Advanced Recovery Techniques",
        type: "video",
        thumbnail: "/recovery-techniques.png",
        duration: "6:15",
      },
    ],
    content: `<p>Recovery is where adaptation happens. Understanding which metrics truly matter can help athletes optimize their training and avoid the pitfalls of overreaching.</p>

<h2 id="key-recovery-metrics">Key Recovery Metrics</h2>
<p>While many metrics claim to indicate recovery status, only a few provide actionable insights for athletes:</p>
<ul>
<li>Heart Rate Variability (HRV)</li>
<li>Lactate clearance rates</li>
<li>Subjective wellness scores</li>
<li>Sleep quality metrics</li>
</ul>

<h2 id="heart-rate-variability">Heart Rate Variability</h2>
<p>HRV represents the variation in time between heartbeats and is considered one of the most reliable indicators of autonomic nervous system status.</p>

<h2 id="lactate-clearance">Lactate Clearance</h2>
<p>The rate at which your body clears lactate after exercise provides insights into your metabolic recovery capacity.</p>

<h2 id="practical-application">Practical Application</h2>
<p>The Vortex device integrates multiple recovery metrics to provide a comprehensive view of your recovery status, helping you make informed decisions about training intensity and rest periods.</p>`,
  },
  {
    id: 4,
    title: "Vortex shown to improve multiple metabolic biomarkers in prediabetic adults",
    excerpt: "New research demonstrates significant improvements in key metabolic markers.",
    date: "August 5, 2025",
    readTime: "3 mins read",
    image: "/nextjs/vortex-metabolic-study.png",
    categories: ["Fitness", "Athletic Performance"],
    slug: "vortex-metabolic-biomarkers-study",
    tableOfContents: [
      { id: "study-overview", title: "Study Overview", level: 1 },
      { id: "key-findings", title: "Key Findings", level: 1 },
      { id: "implications", title: "Clinical Implications", level: 1 },
    ],
    relatedTopics: [],
    content: `<p>A groundbreaking study reveals how the Vortex device can significantly improve metabolic health markers in prediabetic adults.</p>
<h2 id="study-overview">Study Overview</h2>
<p>This comprehensive study followed 120 prediabetic adults over 12 weeks...</p>`,
  },
  {
    id: 5,
    title: "The link between carb intake, BMI, and metabolic flexibility",
    excerpt: "Understanding how carbohydrate consumption affects your metabolic health.",
    date: "August 5, 2025",
    readTime: "5 mins read",
    image: "/nextjs/carb-intake-study.png",
    categories: ["Fitness", "Research"],
    slug: "carb-intake-bmi-metabolic-flexibility",
    tableOfContents: [
      { id: "carb-metabolism", title: "Carbohydrate Metabolism", level: 1 },
      { id: "bmi-relationship", title: "BMI Relationship", level: 1 },
      { id: "optimization-strategies", title: "Optimization Strategies", level: 1 },
    ],
    relatedTopics: [],
    content: `<p>Explore the complex relationship between carbohydrate intake, body mass index, and metabolic flexibility.</p>
<h2 id="carb-metabolism">Carbohydrate Metabolism</h2>
<p>Understanding how your body processes carbohydrates is key to optimizing metabolic health...</p>`,
  },
  {
    id: 6,
    title: "The latest V3.12 firmware update is launching on Vortex device this Saturday",
    excerpt: "Enhanced features and improved accuracy in the latest firmware release.",
    date: "August 5, 2025",
    readTime: "2 mins read",
    image: "/nextjs/firmware-update.png",
    categories: ["Athletic Performance"],
    slug: "vortex-v312-firmware-update",
    tableOfContents: [
      { id: "new-features", title: "New Features", level: 1 },
      { id: "improvements", title: "Performance Improvements", level: 1 },
      { id: "update-process", title: "How to Update", level: 1 },
    ],
    relatedTopics: [],
    content: `<p>The V3.12 firmware update brings significant enhancements to your Vortex device experience.</p>
<h2 id="new-features">New Features</h2>
<p>This update introduces several new capabilities...</p>`,
  },
  {
    id: 7,
    title: "The Science Behind Biomarker Testing",
    excerpt: "Understanding how advanced biomarker analysis can transform your approach to health and performance.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/nextjs/scientific-laboratory.png",
    categories: ["Research"],
    slug: "science-behind-biomarker-testing",
    tableOfContents: [
      { id: "biomarker-basics", title: "Biomarker Basics", level: 1 },
      { id: "testing-methods", title: "Testing Methods", level: 1 },
      { id: "interpretation", title: "Data Interpretation", level: 1 },
    ],
    relatedTopics: [],
    content: `<p>Dive deep into the scientific principles behind biomarker testing and analysis.</p>
<h2 id="biomarker-basics">Biomarker Basics</h2>
<p>Biomarkers are measurable indicators of biological processes...</p>`,
  },
  {
    id: 8,
    title: "Optimizing Recovery Through Data",
    excerpt: "Learn how to use your biomarker data to enhance recovery and prevent overtraining.",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "/nextjs/optimizing-data.png",
    categories: ["Athletic Performance"],
    slug: "optimizing-recovery-through-data",
    tableOfContents: [
      { id: "recovery-science", title: "Recovery Science", level: 1 },
      { id: "data-driven-approach", title: "Data-Driven Approach", level: 1 },
      { id: "practical-tips", title: "Practical Implementation", level: 1 },
    ],
    relatedTopics: [],
    content: `<p>Transform your recovery strategy with data-driven insights and personalized recommendations.</p>
<h2 id="recovery-science">Recovery Science</h2>
<p>Understanding the physiological processes of recovery is crucial...</p>`,
  },
  {
    id: 9,
    title: "Nutrition and Performance Markers",
    excerpt: "Discover the connection between what you eat and your key performance indicators.",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/nextjs/healthy-nutrition-performance.png",
    categories: ["Fitness"],
    slug: "nutrition-and-performance-markers",
    tableOfContents: [
      { id: "nutrition-basics", title: "Nutrition Fundamentals", level: 1 },
      { id: "performance-connection", title: "Performance Connection", level: 1 },
      { id: "optimization-guide", title: "Optimization Guide", level: 1 },
    ],
    relatedTopics: [],
    content: `<p>Explore how nutrition directly impacts your performance markers and overall health outcomes.</p>
<h2 id="nutrition-basics">Nutrition Fundamentals</h2>
<p>The foundation of performance starts with proper nutrition...</p>`,
  },
]

// Helper functions
export const getFeaturedArticles = (): BlogPost[] => {
  return blogPosts.filter((post) => post.isFeatured)
}

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts
}

// Keep this for backward compatibility if needed elsewhere
export const getRegularBlogPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => !post.isFeatured)
}

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}

export const getAllSlugs = (): string[] => {
  return blogPosts.map((post) => post.slug)
}
