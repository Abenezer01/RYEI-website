import { 
  Sprout, 
  Lightbulb, 
  Users, 
  Handshake, 
  Globe, 
  BookOpen, 
  Landmark,
  Scale
} from 'lucide-react';
import { Program, Value, Objective, Stat, Project } from './types';

export const MISSION_STATEMENT = "To empower rural youth through entrepreneurship, cooperative development, technology, financial inclusion, and training that promotes inclusive growth and social transformation.";

export const VISION_STATEMENT = "To create a generation of capable, innovative, and economically empowered rural youth who drive sustainable community development in Ethiopia.";

export const WHO_WE_ARE = "The Rural Youth Empowerment Initiative (RYEI) is dedicated to improving the lives of young people in rural Ethiopia. We support youth through training, mentorship, access to finance, and partnership with local institutions. Our programs help rural youth build confidence, develop leadership skills, and create sustainable livelihoods.";

export const CORE_VALUES: Value[] = [
  { title: "Integrity and Accountability", description: "We operate with honesty and take responsibility for our actions." },
  { title: "Inclusiveness and Gender Equity", description: "We ensure equal opportunities for all, regardless of gender or background." },
  { title: "Innovation and Self-Reliance", description: "We foster creativity and sustainable independence." },
  { title: "Partnership and Collaboration", description: "We believe in the power of working together with communities and institutions." },
  { title: "Transparency and Good Governance", description: "We maintain openness in all our operations." }
];

export const CORE_OBJECTIVES: Objective[] = [
  { id: 1, text: "Providing entrepreneurship and employment training to rural youth." },
  { id: 2, text: "Encourage and demand access to finance, technology, and markets for rural youth." },
  { id: 3, text: "Increasing rural youth participation in peace building, sustainable development, and climate change." },
  { id: 4, text: "Create awareness for the equal inclusion of women and persons with disabilities in youth development and participation." },
  { id: 5, text: "Provide awareness and facilitate training for rural youth to actively participate in their country's affairs." },
  { id: 6, text: "Empower rural youth to achieve the technological, creative, and leadership excellence our world has achieved." },
  { id: 7, text: "To inspire and encourage the creation of self-reliant rural youth through development and capacity building." },
  { id: 8, text: "To strengthen youth cooperatives and social enterprises in rural areas and promote the creation of sustainable employment opportunities." }
];

export const PROGRAMS: Program[] = [
  {
    id: 'skills-tech',
    title: 'Skills & Technological Development',
    description: 'We offer training in technical skills, digital literacy, financial planning, and leadership to help rural youth thrive in a changing world.',
    icon: BookOpen,
    details: [
      "Digital literacy workshops",
      "Technical vocational training",
      "Financial planning seminars",
      "Leadership development courses"
    ]
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship Promotion',
    description: 'RYEI supports youth-led agribusinesses, green energy projects, and creative innovations that contribute to local development.',
    icon: Lightbulb,
    details: [
      "Agribusiness incubation",
      "Green energy project support",
      "Creative innovation grants",
      "Business mentorship programs"
    ]
  },
  {
    id: 'finance',
    title: 'Access to Finance',
    description: 'We help link rural youth to credit, savings groups, and cooperative financing systems to broaden their economic opportunities.',
    icon: Landmark,
    details: [
      "Credit linkage facilitation",
      "Savings group formation",
      "Cooperative financing systems",
      "Financial literacy education"
    ]
  },
  {
    id: 'collaboration',
    title: 'Institutional Collaboration',
    description: 'We partner with cooperatives, universities, local administrations, and NGOs to strengthen support systems around rural youth.',
    icon: Handshake,
    details: [
      "University partnerships",
      "NGO networking events",
      "Local administration joint-projects",
      "Cooperative strengthening"
    ]
  },
  {
    id: 'organization',
    title: 'Youth Organization',
    description: 'We encourage youth to form cooperatives, associations, and community groups that build collective power and promote local leadership.',
    icon: Users,
    details: [
      "Cooperative formation support",
      "Community group building",
      "Association governance training",
      "Collective bargaining power"
    ]
  },
  {
    id: 'policy',
    title: 'Policy–Practice Linkage',
    description: 'We promote communication between policymakers and rural communities to support youth-focused development strategies.',
    icon: Scale,
    details: [
      "Policy advocacy forums",
      "Community-policymaker dialogues",
      "Youth development strategy inputs",
      "Representation in local governance"
    ]
  },
  {
    id: 'sustainable',
    title: 'Sustainable Development',
    description: 'Contributing to SDGs 1, 4, 8, and 10, advancing inclusive and sustainable rural transformation.',
    icon: Globe,
    details: [
      "SDG 1: No Poverty initiatives",
      "SDG 4: Quality Education programs",
      "SDG 8: Decent Work & Economic Growth",
      "SDG 10: Reduced Inequalities actions"
    ]
  }
];

export const IMPACT_STATS: Stat[] = [
  { label: "Youth Trained", value: "5000", suffix: "+" },
  { label: "Communities Reached", value: "120", suffix: "+" },
  { label: "Cooperatives Formed", value: "45", suffix: "" },
  { label: "Projects Launched", value: "85", suffix: "+" },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Green Energy Cooperative",
    category: "Completed",
    description: "Established a solar power cooperative servicing 500 households in rural Oromia.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    impact: "500 Households Electrified"
  },
  {
    id: 'p2',
    title: "Agri-Tech Training Hub",
    category: "Ongoing",
    description: "A training center providing digital farming tools and weather tracking for local farmers.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    impact: "200+ Farmers Trained"
  },
  {
    id: 'p3',
    title: "Women's Crafts Collective",
    category: "Completed",
    description: "A marketplace initiative connecting rural artisans with urban markets.",
    image: "https://images.unsplash.com/photo-1605116863958-527e2034fa55?q=80&w=2070&auto=format&fit=crop",
    impact: "$50k Generated in Year 1"
  }
];