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
    name: "MicroService  Project",
    description: "In collaboration with my team, we developed the Yams game using a microservices architecture, where each microservice is specifically designed to handle a distinct function and communicate seamlessly with others. We containerized each service using Docker to enhance scalability and ensure robust, isolated environments. This approach allowed for efficient deployment and simplified maintenance, showcasing our capability to integrate complex technologies effectively.",
    tags: [
      { name: "spring", color: "green-text-gradient" },
      { name: "docker", color: "gray-text-gradient" }
    ],
    source_code_link: "https://github.com/Master1-MIAGE-UCA/oil-2022-23-td2-shadow-team",
    image: tripguide,
    Links: {
      "Git Repository": "https://github.com/Master1-MIAGE-UCA/oil-2022-23-td2-shadow-team",
    },
  },
  {
    name: "MicroService  Project 2",
    description: "This project is organized into distinct branches for each major feature, enhancing clarity and management. Key achievements include the development of two essential services—Posts and Skills—both interconnected using Open Feign for robust communication. A gateway for service discovery and an API gateway are implemented to streamline microservice interactions. Additionally, resilience is bolstered by integrating a Circuit Breaker and centralizing configuration management",
    tags: [{ name: "spring", color: "green-text-gradient" }],
    image: tripguide,
    Links: {
      "Git Repository": "https://github.com/MBDS-23-24/projet-evaluation-spring-Ibrahim-krimi",
    },
  }
  ,
  {
    name: "Projet Big Data / Machine Learning",
    description: "In this project, we aggregated data from various databases including NoSQL, SQL, MongoDB, Graph, and Cassandra. We applied Java-based MapReduce jobs to process the data efficiently. Following this, we constructed a predictive model to analyze the data insights. Finally, the project culminated in the development of a data visualization module to effectively present the outcomes and patterns derived from our analysis.",
    tags: [
      { name: "big data", color: "purple-text-gradient" },
      { name: "machine learning", color: "red-text-gradient" },
      { name: "Java MapReduce", color: "red-text-gradient" }

    ],
    source_code_link: "https://github.com/Ibrahim-krimi/ProjetTPA-Map-Reduce",
    additional_links: [
      "https://github.com/Ibrahim-krimi/ProjetTPA-machine-learning",
      "https://github.com/MarwaneLarbi/3djs"
    ],
    image: tripguide,
    Links: {
     "MapReduce Java": "https://github.com/Ibrahim-krimi/ProjetTPA-Map-Reduce",
      "Machine Learning": "https://github.com/Ibrahim-krimi/ProjetTPA-machine-learning",
      "3djs": "https://github.com/MarwaneLarbi/3djs",
    },
  },
  {
    name: "Project Java IA",
    description: "In this project, I utilized AI algorithms such as Backtracking, A* (A star), to efficiently plan and sequence house construction tasks. These algorithms ensured adherence to building rules and optimized spatial and temporal arrangements in our simulations.",
    tags: [{ name: "java", color: "blue-text-gradient" }],
    source_code_link: "https://github.com/Ibrahim-krimi/ProjectL3IA",
    image: tripguide,
    Links: {
      "Git Repository": "https://github.com/Ibrahim-krimi/ProjectL3IA",
     }
  },
  {
    name: "Ricoche Robot Java",
    description: "I developed the 'Ricochet Robot' project in Java, designing an engaging and interactive game where players strategically navigate robots through a complex board to reach target spots. Additionally, I implemented intelligent bots using AI algorithms, which I developed to enhance the game's challenge and interactivity.",
    tags: [{ name: "java", color: "blue-text-gradient" }],
    image: tripguide,
    Links: {
      "Git Repository": "https://github.com/Ibrahim-krimi/Ricoche-Robot",
     }
  },
  {
    name: "Bataille Naval Java",
    description: "I developed the 'Bataille Naval' game using Java and Java Swing, creating a visually interactive naval combat simulator where players deploy ships and strategize to defeat their opponents. The game features user-friendly interfaces and dynamic animations to enhance player engagement and provide a realistic battle experience.",
    tags: [{ name: "java", color: "blue-text-gradient" }],
    source_code_link: "https://github.com/Ibrahim-krimi/bataille-naval",
    image: tripguide,
    Links: {
      "Git Repository": "https://github.com/Ibrahim-krimi/bataille-naval",
     }
    
  },
  {
    name: "Project Angular / Node js / Mongo",
    description: "I developed the 'AssignmentApp,' a comprehensive online exam management platform using Node.js, Angular, and MongoDB. This application allows instructors to upload exams, correct submissions, and assign grades, while also providing separate administrative and user interfaces to accommodate different user roles effectively. MongoDB is utilized to securely store and manage all user data and exam content.",
    tags: [
      { name: "angular", color: "red-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "yellow-text-gradient" }
    ],
    source_code_link: "https://github.com/Ibrahim-krimi/ProjectAngularFront",
    additional_link: "https://github.com/Ibrahim-krimi/ProjectAngularBack",
    image: tripguide
  }
  ,
  {
    name: "Project React / Node / Mongo",
    description: "We (me and my team) developed 'PixelBoard,' an interactive platform where users can color a single pixel at regular intervals from a limited color palette. Built with React, Node.js, MongoDB, and Docker, the application ensures real-time interaction through Socket.IO. Each artwork on PixelBoard has a defined lifespan, after which it is considered complete and no further changes are allowed, preserving the integrity of the finished pieces.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "yellow-text-gradient" },
      { name: "Docker", color: "yellow-text-gradient" }

    ],
    source_code_link: "https://github.com/yassine-berriri/M2MBDS_2023_2024_React_NodeJS_KBBL",
    image: tripguide
  },
  {
    name: "MyPortfolio",
    description: "My personal portfolio not only showcases my projects and skills but also integrates Three.js to display dynamic 3D elements like a computer model and a rotating Earth. Developed using React and Three.js, this portfolio effectively demonstrates my technical abilities and the creative application of web technologies to enhance user experience and engagement .",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "three.js", color: "gray-text-gradient" }
    ],
    source_code_link: "https://github.com/Ibrahim-krimi/portfolio",
    image: tripguide
  },
  {
    name: "IOT Project",
    description: "I developed an IoT-based Pool Surveillance Project during a course in the MIAGE program. This project leverages MQTT and HTTP protocols, Node-RED for data flow management, and integrates with various web services to facilitate communication between an ESP32 device and a MongoDB database. The primary goal is to showcase the use of IoT technologies in real-world applications, including a dedicated admin service and deployment solutions.",
    tags: [{ name: "iot", color: "orange-text-gradient" }],
    source_code_link: "https://github.com/Ibrahim-krimi/IOT",
    additional_links: [
      "https://github.com/Ibrahim-krimi/IOTProjectMiage",
      "https://github.com/Ibrahim-krimi/iotProjet_dashboardAdmin"
    ],
    image: tripguide
  },
  {
    name: "Projet Android Kotlin",
    description: "We (me and my team) developed 'AnneFlix,' an innovative Android application for movie and series enthusiasts, inspired by Netflix and powered by TheMovieDB API. AnneFlix offers an immersive and interactive streaming experience, allowing users to explore a vast library of multimedia content. Created using Kotlin, this app integrates advanced features to enhance user engagement and content accessibility.",
    tags: [{ name: "android", color: "green-text-gradient" }, { name: "kotlin", color: "blue-text-gradient" }],
    source_code_link: "https://github.com/MBDS-2023-2024/mini-projet-ibrahim-yassine-badis-marwan",
    image: tripguide
  },
  {
    name: "Flutter Project",
    description: "We (me and my team) developed 'Lalabi Collaborative Commuting,' a cutting-edge Flutter application designed to transform daily commuting by facilitating ride-sharing and hitchhiking in a user-friendly and secure platform. Integrating Node.js, real-time communication via Socket.IO, and Google Maps for route tracking, Lalabi connects drivers with available seats to passengers seeking transport, effectively reducing carbon emissions and easing traffic congestion. Additionally, it features WebRTC for video communication among users .",
    tags: [{ name: "flutter", color: "cyan-text-gradient" }],
    source_code_link: "https://github.com/Ibrahim-krimi/tpi-collaborative-commuting-mybi",
    image: tripguide
  },
];


export { services, technologies, experiences, testimonials, projects ,StudyParcours};
