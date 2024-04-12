import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  urssaf,
  intelligentconcepts,
  angular,
  jenkins,
  spring,
  symfony,
  jira,
  caen,
  coteazur,
  isima,
} from "../assets";
import { Study } from "../components";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "study",
    title: "study",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Microservices Spring",
    icon: web,
  },
  {
    title: "Web JS/TS",
    icon: mobile,
  },
  {
    title: "Backend Spring/Node/Symfony",
    icon: backend,
  },
  {
    title: "DevOps Docker/Jenkins",
    icon: creator,
  },
];


//angular, jenkins, spring, symfony, jira
const technologies = [
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "symfony",
    icon: symfony,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "jira",
    icon: jira,
  },
 
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

];

const experiences = [
  {
    title: "Software engineer - Apprenticeship",
    company_name: "URSSAF (ACOSS) 2022-2024",
    icon: urssaf,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Architected and developed 'Gucci', a cutting-edge application reservation management tool from scratch, significantly boosting operational efficiencies and enhancing user interfaces.",
      "In the first year, spearheaded the development of the Gucci tool using Symfony and JavaScript, focusing on robust functionality and user-centric design, and orchestrated advanced deployment processes utilizing GitHub Actions on CentOS 7 environments.",
      "During the second year, expanded the technology stack to incorporate a comprehensive admin portal for database management utilized by Gucci and other tools, engineered with Java Spring and Angular for enhanced performance and scalability.",
      "Designed, developed, and maintained sophisticated microservices architectures using Spring, ensuring high availability and resilience; managed complex deployments across both CentOS and Red Hat environments via Jenkins, aligning with URSSAF's stringent infrastructure requirements.",
      "Led close collaborations with development teams and Application Domain Managers to oversee the entire project lifecycle from initial requirement analysis to successful deployment, ensuring seamless integration and operation on both CentOS 7 and Red Hat servers.",
      "led the documentation process and implemented agile methodologies across the project, upholding stringent standards and adhering to industry best practices to optimize continuous integration and delivery pipelines for peak efficiency."
  ],
  },
  {
    title: "Web Developer - Internship",
    company_name: "INTELLIGENT CONCEPTS 2021-2022",
    icon: intelligentconcepts,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Played a key role in the development and deployment of an innovative billing tool, collaborating closely with clients and team members to ensure tailored solutions that meet specific needs.",
        "Designed and developed a billing solution using Symfony and JavaScript, which precisely addressed the unique requirements of our clients.",
        "Partnered closely with clients to gather requirements and continuously adapted the software to align with their needs, ensuring client satisfaction and system functionality.",
        "Co-led the project alongside a colleague and successfully delivered the final product within a stringent two-month timeline, demonstrating exceptional time management and teamwork skills.",
        "Managed the deployment of the application on Microsoft Azure, ensuring high system availability and optimal performance, and implemented GitHub Actions for continuous integration, which streamlined development workflows and enhanced deployment security."
    ],
  },
];






const StudyParcours = [
  {
    title: "Master's Degree in MIAGE - MBDS",
    company_name: "University of Nice Sophia Antipolis 2022-2024",
    icon: coteazur,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
        "Pursued a Master’s in MIAGE (Computer Methods Applied to Business Management), specializing in Mobiquité, Big Data, and System Integration (MBDS), a curriculum blending IT engineering with business management.",
        "Focused on developing cutting-edge applications with a strong emphasis on big data and data analytics, equipping graduates with the skills to analyze and leverage data to drive decision-making.",
        "Engaged in a highly professional program that included 'tutored prototypes' developed in collaboration with industry partners, enhancing practical learning and industry readiness.",
        "Participated in comprehensive project management courses and professional seminars, emphasizing agile methodologies such as SCRUM to ensure effective project execution and management.",
        "Studied a comprehensive range of software development frameworks, gaining exposure to nearly all major frameworks used in the industry today, which provided a well-rounded understanding of various development environments.",
        "The MIAGE MBDS pathway boasts a 100% professional integration rate within three months post-graduation and is ranked among the top 10 master's programs in computer science in France as of 2018 (SMBG/Eduniversal).",


  ],
  },
  {
    title: "Bachelor's Degree in Computer Science - AI Specialization",
    company_name: "Université de Caen Normandie 2020-2022",
    icon: caen,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Completed a comprehensive curriculum in Computer Science with a specialization in Artificial Intelligence, focusing on both theoretical foundations and practical applications.",
      "Explored core subjects including Parallel Computing, Network Technologies, and Advanced Database Systems, which equipped me with a deep understanding of complex technical systems.",
      "Chose a specialized track that provided hands-on experience in Microcontrollers and Electronic Prototyping, Technologies of Language, Decision Support and Artificial Intelligence, and Advanced Algorithms and Data Structures.",
      "Developed expertise in web technologies, language theory and compilation, graph theory, and enhanced algorithmic strategies in the context of software development.",
      "Gained proficiency in programming with extensive use of Java and PHP, focusing on applications in artificial intelligence, enhancing my problem-solving skills and technical versatility.",
    ],
  },
  {
    title: "Bachelor's Degree in Applied Computer Science",
    company_name: "Institut Supérieur d'Informatique de Mahdia (ISIMa)2017-2020",
    icon: isima,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Specialized in Information Systems and Software, focusing on the design and development of enterprise applications, underscoring strong practical and theoretical foundations.",
        "Mastered the conception and administration of databases, integrating robust data management skills with comprehensive software development practices.",
        "Developed proficiency in a variety of programming languages and technologies, including Java, C, C#, and .NET, which equipped me with versatile software development capabilities.",
        "Learned to effectively collaborate within teams in software development companies, improving my communication skills and ability to work cohesively in diverse groups."
    ],
  },
];










const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects ,StudyParcours};