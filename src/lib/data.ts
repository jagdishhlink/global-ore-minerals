export const COMPANY = {
  name: "Global Ore & Minerals",
  tagline: "Quality Is Our Pride",
  description:
    "A trusted name in the field of industrial minerals, committed to delivering premium quality minerals to clients across India and around the world.",
  founded: "2014",
  experience: "10+",
  address: {
    street: "Station Road, Bhatiya",
    city: "Devbhumi Dwarka",
    state: "Gujarat",
    country: "India",
    zip: "361315",
  },
  phones: ["+91 90162 94608", "+91 98988 59100", "+91 92276 01111"],
  email: "globalore.export@gmail.com",
  exportPort: "Mundra Port, Gujarat",
  vision:
    "To be a globally recognized supplier of high-quality minerals, known for our integrity, reliability, and commitment to sustainability.",
  mission:
    "To provide superior quality minerals at competitive prices, ensure timely delivery, and create value for our customers through excellence in every step.",
} as const;

export const PRODUCTS = [
  {
    id: "kaolin-clay",
    name: "Kaolin Clay",
    shortName: "Kaolin Clay",
    tagline: "High Purity. Fine Quality. Multiple Applications.",
    heroDescription:
      "High-quality Kaolin Clay (China Clay) valued for its whiteness, fine particle size, softness and chemical stability — supplied as per customer specifications and requirements.",
    description:
      "Premium Kaolin Clay (China Clay) with fine particle size, high whiteness, and chemical stability for ceramics, paints, paper, and construction industries.",
    image: "/images/kaolin-clay-closeup.jpg",
    specs: {
      composition: "SiO₂ & Al₂O₃",
      quality: ["Fine Particle Size", "High Whiteness & Brightness", "Chemical Stability", "Soft Texture"],
    },
    features: [
      "Fine particle size with high whiteness and brightness",
      "Excellent chemical stability and soft texture",
      "Versatile use across multiple industries",
      "Custom specifications as per buyer requirements",
    ],
    applications: [
      "Ceramics & Tiles",
      "Paints & Coatings",
      "Paper Industry",
      "Rubber & Plastics",
      "Cement & Construction",
      "Refractories & Others",
    ],
    keyProperties: [
      { label: "Whiteness", value: "High", unit: "" },
      { label: "Particle", value: "Fine", unit: "Size" },
      { label: "Stability", value: "High", unit: "Chemical" },
      { label: "Texture", value: "Soft", unit: "" },
    ],
  },
  {
    id: "silica-sand",
    name: "Silica Sand",
    shortName: "Silica Sand",
    tagline: "Pure. Reliable. Premium Quality.",
    heroDescription:
      "Processed using advanced washing and screening technology to deliver high purity, uniform grains and consistent quality.",
    description:
      "High purity silica for superior performance in glass, foundry, water filtration, and construction industries.",
    image: "/images/silica-sand-mountain.jpeg",
    specs: {
      purity: "99.5% SiO₂",
      ppm: "Up to 100 PPM",
      sizes: ["8 Mesh", "16 Mesh", "24 Mesh", "30 Mesh", "Fine Powder"],
    },
    features: [
      "High purity silica for superior performance",
      "Available in various grades and sizes",
      "Ideal for industrial and filtration applications",
      "Consistent quality and reliable supply",
    ],
    applications: [
      "Water Filtration",
      "Foundry",
      "Glass Industry",
      "Construction",
      "Chemical Industry",
    ],
    keyProperties: [
      { label: "Purity", value: "99.5%", unit: "SiO₂" },
      { label: "PPM Level", value: "≤100", unit: "PPM" },
      { label: "Iron Content", value: "Ultra Low", unit: "" },
      { label: "Quality", value: "Washed & Graded", unit: "" },
    ],
  },
  {
    id: "bauxite-ore",
    name: "Bauxite Ore",
    shortName: "Bauxite Ore",
    tagline: "Natural Strength. Industrial Value.",
    heroDescription:
      "High quality Bauxite Ore in various grades to meet the diverse requirements of cement, refractory, chemical and aluminum industries.",
    description:
      "Natural and high grade bauxite sourced from trusted mines, available in Cement Grade, Laterite, and High Grade variants.",
    image: "/images/mining-quarry.jpeg",
    specs: {
      grades: ["Cement Grade", "Laterite Bauxite", "High Grade Bauxite"],
    },
    features: [
      "Natural & high grade, enriched with alumina",
      "Available in multiple grades for specific needs",
      "Consistent quality through careful processing",
      "Reliable bulk supply with on-time delivery",
    ],
    applications: [
      "Cement Industry",
      "Refractory Industry",
      "Chemical Industry",
      "Alumina Refineries",
      "Industrial Applications",
    ],
    grades: [
      {
        name: "Cement Grade Bauxite",
        features: ["Low Silica", "Moderate Alumina", "Ideal for Cement Production"],
      },
      {
        name: "Laterite Bauxite",
        features: [
          "Medium to High Alumina",
          "Low Iron & Silica",
          "Suitable for Refractories & Chemical Use",
        ],
      },
      {
        name: "High Grade Bauxite",
        features: [
          "High Alumina Content",
          "Low Impurities",
          "Ideal for Alumina Refining & High Grade Applications",
        ],
      },
    ],
    keyProperties: [
      { label: "Alumina", value: "High", unit: "Al₂O₃" },
      { label: "Impurities", value: "Low", unit: "" },
      { label: "Grades", value: "3", unit: "Types" },
      { label: "Quality", value: "Export", unit: "Grade" },
    ],
  },
  {
    id: "calcined-bauxite",
    name: "Calcined Bauxite",
    shortName: "Calcined Bauxite",
    tagline: "High Strength. Low Impurities. Excellent Performance.",
    heroDescription:
      "Produced by carefully calcining high quality bauxite ore in rotary kilns at high temperature, ensuring excellent physical strength.",
    description:
      "Premium calcined bauxite processed for high refractoriness with low iron, low alkali, and excellent thermal stability.",
    image: "/images/calcined-bauxite-plant.jpeg",
    specs: {
      sizes: ["0–5 mm", "5–25 mm", "25–50 mm"],
    },
    features: [
      "Processed for high refractoriness",
      "Low iron & high alumina content",
      "Ideal for refractory, cement & foundry use",
      "Excellent thermal stability and strength",
    ],
    applications: [
      "Refractory Industry",
      "Cement Industry",
      "Foundry Industry",
      "Metallurgy Industry",
      "Chemical Industry",
      "Steel Industry",
    ],
    keyProperties: [
      { label: "Alumina", value: "High", unit: "Al₂O₃" },
      { label: "Iron", value: "Low", unit: "Fe₂O₃" },
      { label: "Alkali", value: "Low", unit: "" },
      { label: "Strength", value: "High", unit: "Physical" },
    ],
  },
] as const;

export const INDUSTRIES = [
  {
    name: "Glass Manufacturing",
    description:
      "High purity silica sand for float glass, container glass, and specialty glass production.",
    icon: "factory",
  },
  {
    name: "Cement Industry",
    description:
      "Essential raw materials for cement production, improving strength, durability and quality.",
    icon: "building",
  },
  {
    name: "Refractory & Ceramics",
    description:
      "Calcined bauxite and silica sand for refractory bricks, castables and ceramic manufacturing.",
    icon: "flame",
  },
  {
    name: "Water Filtration",
    description:
      "Silica sand widely used in water filtration plants, swimming pools and water treatment systems.",
    icon: "droplets",
  },
  {
    name: "Foundry Industry",
    description:
      "High purity silica sand for molding, core making and metal casting for superior finish.",
    icon: "anvil",
  },
  {
    name: "Construction",
    description:
      "Used in ready mix concrete, plaster, blocks, tiles and as a key raw material in various applications.",
    icon: "hardHat",
  },
  {
    name: "Chemical Industry",
    description:
      "Used in the manufacturing of chemicals, fillers, glass chemicals and industrial compounds.",
    icon: "flask",
  },
  {
    name: "Export & Trading",
    description:
      "Minerals supplied to traders, exporters and importers across the globe with reliable service.",
    icon: "globe",
  },
] as const;

export const STATS = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 7, suffix: "+", label: "Countries Served" },
  { value: 4, suffix: "", label: "Premium Products" },
  { value: 500, suffix: "+", label: "Shipments Delivered" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Premium Quality",
    description:
      "High grade raw materials processed with advanced technology to ensure superior and consistent quality.",
  },
  {
    title: "Consistent Supply",
    description:
      "Strong production capacity and efficient operations ensure continuous supply to meet bulk requirements on time.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Best quality products at competitive prices, providing maximum value for your investment.",
  },
  {
    title: "Export Ready",
    description:
      "Products meeting international quality standards, ready for global markets with complete export documentation.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Timely delivery through reliable logistics and strong shipping partnerships worldwide.",
  },
  {
    title: "Quality Tested",
    description:
      "Every batch is laboratory tested for chemical composition, size distribution and purity.",
  },
] as const;

export const PACKAGING = [
  { type: "25 KG Bag", description: "Strong & durable PP bags for safe handling" },
  { type: "50 KG Bag", description: "High quality packaging for protection and convenience" },
  { type: "Jumbo Bag (1 MT)", description: "Ideal for bulk orders, reduces loading & unloading time" },
  { type: "Bulk Loading", description: "Cost effective option for large volume shipments" },
] as const;

export const EXPORT_COUNTRIES = [
  "UAE",
  "Saudi Arabia",
  "Oman",
  "Qatar",
  "Kuwait",
  "Vietnam",
  "China",
] as const;

export const QUALITY_TESTS = [
  { name: "XRF Spectrometer", description: "Chemical Composition Analysis" },
  { name: "Sieve Analysis", description: "Particle Size Distribution" },
  { name: "Hot Air Oven", description: "Moisture Content Analysis" },
  { name: "Digital Balance", description: "Precision Weighing & Measurement" },
  { name: "Magnetic Separator", description: "Iron Content Detection" },
  { name: "Quality Report", description: "Detailed Report for Every Shipment" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Logistics", href: "/logistics" },
  { label: "Contact", href: "/contact" },
] as const;
