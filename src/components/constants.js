import { nit, concept, edutainment, lenka, stat, akash,viral } from '../assets/images';
import { icon1, icon2, icon3 } from '../assets/icons';
export const aboutCards = [
    {
      img: viral,
      title: 'Viral Educator',
      desc: 'Makes tough JEE & Board topics easy and memorable.',
    },
    {
      img: stat,
      title: 'Millions of Views',
      desc: 'Learners across India follow his high-energy concept explainers.',
    },
    {
      img: akash,
      title: 'Ex-Aakash EM Faculty',
      desc: 'Trained thousands at a top coaching institute.',
    },
    {
      img: nit,
      title: 'NIT Bhopal Graduate',
      desc: 'Strong foundation + classroom expertise = outcomes.',
    },
    {
      img: concept,
      title: 'Concept-First',
      desc: 'Analogies, shortcuts & problem frameworks that stick.',
    },
    {
      img: edutainment,
      title: 'Edutainment',
      desc: 'You won’t want to skip class.',
    },
  ];

  export const scheduleData = {
    'SSC 11th': [
      { dateRange: 'Aug 18–23', topic: 'Trigonometry — Compound Angles' },
      { dateRange: 'Aug 25–30', topic: 'Trigonometry — up to Transformations' },
      { dateRange: 'Sep 1–6', topic: 'Trigonometry — Equations & Inverse Functions' },
      { dateRange: 'Sep 8–13', topic: 'Sets — Relations' },
      { dateRange: 'Sep 15–20', topic: 'Functions — Domain & Range' },
      { dateRange: 'Sep 22–27', topic: 'Functions — One-One, Onto, Periodic' },
      { dateRange: 'Sep 29–Oct 4', topic: 'Functions — Composite & Inverse' },
      { dateRange: 'Oct 6–11', topic: 'Functions — Miscellaneous' },
      { dateRange: 'Oct 13–18', topic: 'Matrices — Basics & Operations' },
      { dateRange: 'Oct 20–25', topic: 'Determinants — Properties & Applications' },
      { dateRange: 'Oct 27–Nov 1', topic: 'Locus, Transformation of Axes' },
      { dateRange: 'Nov 3–8', topic: 'Straight Line — Basic Forms' },
      { dateRange: 'Nov 10–15', topic: 'Straight Line — Part 2' },
      { dateRange: 'Nov 17–22', topic: 'Limits — Standard Limits & Techniques' },
      { dateRange: 'Nov 24–29', topic: 'Continuity & Differentiability' },
      { dateRange: 'Dec 1–6', topic: 'Differentiation — Basics & Formulas' },
      { dateRange: 'Dec 8–13', topic: 'Differentiation — Advanced Techniques' },
      { dateRange: 'Dec 15–20', topic: 'Applications of Derivatives — Increasing/Decreasing' },
      { dateRange: 'Dec 22–27', topic: 'Applications of Derivatives — Maxima & Minima' },
      { dateRange: 'Dec 29–Jan 3', topic: 'Vectors — Basics & Operations' },
      { dateRange: 'Jan 5–10', topic: 'Vectors — Scalar & Vector Product' },
      { dateRange: 'Jan 12–17', topic: '3D Geometry — Introduction' },
      { dateRange: 'Jan 19–24', topic: '3D Geometry — Lines' },
    ],
    'SSC 12th': [
      { dateRange: 'Aug 18–23', topic: 'Quadratic Equations' },
      { dateRange: 'Aug 25–30', topic: 'Sequence & Series' },
      { dateRange: 'Sep 1–6', topic: 'Circles' },
      { dateRange: 'Sep 8–13', topic: 'Permutations & Combinations — Part 1' },
      { dateRange: 'Sep 15–20', topic: 'Permutations & Combinations — Part 2' },
      { dateRange: 'Sep 22–27', topic: 'Probability — Part 1' },
      { dateRange: 'Sep 29–Oct 4', topic: 'Probability — Part 2' },
      { dateRange: 'Oct 6–11', topic: 'Indefinite Integrals — Part 1' },
      { dateRange: 'Oct 13–18', topic: 'Indefinite Integrals — Part 2' },
      { dateRange: 'Oct 20–25', topic: 'Definite Integrals — Part 1' },
      { dateRange: 'Oct 27–Nov 1', topic: 'Definite Integrals — Part 2' },
      { dateRange: 'Nov 3–8', topic: 'Area Under the Curve' },
      { dateRange: 'Nov 10–15', topic: 'Differential Equations' },
      { dateRange: 'Nov 17–22', topic: 'Conics — Parabola' },
      { dateRange: 'Nov 24–29', topic: 'Conics — Ellipse & Hyperbola' },
      { dateRange: 'Dec 1–6', topic: 'Complex Numbers' },
      { dateRange: 'Dec 8–13', topic: 'Revision' },
      { dateRange: 'Dec 15–20', topic: 'Revision' },
      { dateRange: 'Dec 22–27', topic: 'Revision' },
      { dateRange: 'Dec 29–Jan 3', topic: 'Revision' },
      { dateRange: 'Jan 5–10', topic: 'Revision' },
      { dateRange: 'Jan 12–17', topic: 'Revision' },
      { dateRange: 'Jan 19–24', topic: 'Revision' },
    ],
  };
  export const plans = [
  {
    id: 1,
    title: 'Zoom Blitz Live',
    price: '₹1,999',
    priceSuffix: '/ per month',
    description: 'Be there, ask live, learn fast',
    enrollLink: 'https://live.lenkaacademy.com/courses/716066',
    features: [
      'High-energy live sessions on Zoom',
      'Recording after class',
      'Weekly Tests + DPP',
      'Weekly schedule & guidance',
    ],
  },
  {
    id: 2,
    title: 'App Stream Live',
    price: '₹249',
    priceSuffix: '/ per month',
    description: 'Learn live inside the Lenka app.',
    enrollLink: 'https://live.lenkaacademy.com/courses/716050',
    features: [
      'Live classes in the app',
      'In-app recordings & notes',
      'Weekly Tests + DPP',
      'Instant notifications',
    ],
    badge: 'Most Popular',
  },
  {
    id: 3,
    title: 'Concept Vault (Recorded)',
    price: '₹99',
    priceSuffix: '/ per month',
    description: 'Perfect for revision & fast catch-up',
    enrollLink: 'https://live.lenkaacademy.com/courses/716074',
    features: [
      'Structured chapter playlists',
      'Weekly Tests + DPP mapped to videos',
      'Regular content updates',
      'Perfect for revision & fast catch-up',
    ],
  },
];

export const faqs = [
  {
    question: 'Are these classes 100% online?',
    answer: 'Yes—Zoom Live, App Live, or Recorded videos. Pick what suits you.',
  },
  {
    question: 'Do all plans include recordings, tests & DPP?',
    answer:
      'Yes. Every plan includes recordings, weekly tests, and DPP. Access duration depends on the plan/platform policy.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Tap any <span class="font-medium text-gray-800">Enroll</span> or <span class="font-medium text-gray-800">Join Now</span> button and we’ll help you on WhatsApp instantly.',
    isHtml: true, 
  },
];

export const classesData = [
  {
    title: 'Class-11 & 12',
    subtitle: 'Select your class to begin',
    links: [
      {
        href: 'https://live.lenkaacademy.com/courses/716066',
        label: 'Zoom Live',
        bgColor: 'bg-blue-500',
        hoverColor: 'hover:bg-blue-600',
        icon: icon1,
        alt: 'Zoom Icon',
      },
      {
        href: 'https://live.lenkaacademy.com/courses/716050',
        label: 'App Live',
        bgColor: 'bg-[#3DDC84]',
        hoverColor: 'hover:bg-pink-600',
        icon: icon3,
        alt: 'App Icon',
      },
      {
        href: 'https://live.lenkaacademy.com/courses/716074',
        label: 'Recordings',
        bgColor: 'bg-[#FF0000]',
        hoverColor: 'hover:bg-red-600',
        icon: icon2,
        alt: 'Record Icon',
      },
    ],
  },
  {
    title: 'Class-10',
    subtitle: 'Select your class to begin',
    links: [
      {
        href: 'https://live.lenkaacademy.com/courses/716066',
        label: 'Zoom Live',
        bgColor: 'bg-blue-500',
        hoverColor: 'hover:bg-blue-600',
        icon: icon1,
        alt: 'Zoom Icon',
      },
      {
        href: 'https://live.lenkaacademy.com/courses/716050',
        label: 'App Live',
        bgColor: 'bg-[#3DDC84]',
        hoverColor: 'hover:bg-pink-600',
        icon: icon3,
        alt: 'App Icon',
      },
      {
        href: 'https://live.lenkaacademy.com/courses/716074',
        label: 'Recordings',
        bgColor: 'bg-[#FF0000]',
        hoverColor: 'hover:bg-red-600',
        icon: icon2,
        alt: 'Record Icon',
      },
    ],
  },
  {
    title: 'Class-9',
    subtitle: 'Select your class to begin',
    links: [
      {
        href: 'https://live.lenkaacademy.com/courses/716066',
        label: 'Zoom Live',
        bgColor: 'bg-blue-500',
        hoverColor: 'hover:bg-blue-600',
        icon: icon1,
        alt: 'Zoom Icon',
      },
      {
        href: 'https://live.lenkaacademy.com/courses/716050',
        label: 'App Live',
        bgColor: 'bg-[#3DDC84]',
        hoverColor: 'hover:bg-pink-600',
        icon: icon3,
        alt: 'App Icon',
      },
      {
        href: 'https://live.lenkaacademy.com/courses/716074',
        label: 'Recordings',
        bgColor: 'bg-[#FF0000]',
        hoverColor: 'hover:bg-red-600',
        icon: icon2,
        alt: 'Record Icon',
      },
    ],
  },
];
export const mathSymbols = ["+", "-", "%", "√", "×","="];

export const testimonials = [
  {
    name: "Student-1",
    role: "Class 10 Student",
    feedback:
      "The review will appear here, highlighting the student's or parent's experience with our program.",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    name: "Student-2",
    role: "Parent of Class 11 Student",
    feedback:
      "The review will appear here, highlighting the student's or parent's experience with our program.",
    avatar: "https://i.pravatar.cc/100?img=31",
    rating: 4,
  },
  {
    name: "Student-3",
    role: "JEE Dropper",
    feedback:
      "The review will appear here, highlighting the student's or parent's experience with our program.",
    avatar: "https://i.pravatar.cc/100?img=25",
    rating: 5,
  },
];
