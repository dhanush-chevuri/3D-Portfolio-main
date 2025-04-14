import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Junior Developer Intern",
    company_name: "Intern at Namoona 3D Labs",
    icon: "/assets/company/images.jpeg",
    iconBg: "#E6DEDD",
    date: "January 2025 - March 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern",
    company_name: "Intern at Rashtriya Ispat Nigam Limited",
    icon: "/assets/company/rinl.jpeg",
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Developed a machine learning model to predict the blast furnace skin temperature, aiming to enhance operational efficiency and safety in steel production.",
      "Performed data preprocessing and feature engineering on real-time sensor data, handling missing values, outliers, and normalization for model readiness.",
      "Implemented regression algorithms (such as Linear Regression and Random Forest) using Python (scikit-learn, pandas, NumPy) to identify accurate prediction models.",
      "Evaluated model performance using metrics like RMSE and R² score, and fine-tuned hyperparameters to improve predictive accuracy.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
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
    name: "Rhyno-Electrical Vehicle Website",
    description:
      "Rhyno Electric Vehicles is a sustainable mobility startup focused on innovative electric scooters designed for urban commuting. The website, built using React.js during my internship, features a sleek UI and responsive design to showcase product specifications, dealership info, and customer support. It includes dynamic components and smooth navigation for an enhanced user experience. Promote clean transportation and explore Rhyno's offerings through an engaging digital platform!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "orange-text-gradient",
      },
      {
        name: "cloudinary",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/React App_page-0004-imageonline.co-merged.jpg",
    source_code_link: "https://github.com/dhanush-chevuri/rhyno-ev",
  },
  {
    name: "Edu-Assistant",
    description:
      "Edu-Assistant is an AI-powered educational web application designed to support students with academic tasks and queries. Built using React.js and integrated with GPT-based APIs, it provides instant answers, study guidance, and personalized assistance. The platform features a clean, user-friendly interface for seamless interaction and efficient learning. Edu-Assistant aims to make education more accessible and engaging through intelligent automation and real-time support.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Screenshot 2025-04-14 160220.png",
    source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
 
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/dhanush-chevuri",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/dhanush-chevuri-48669a2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/DhanushChevuri",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/damn_itx.dhanush_",
  },
];

const heroTexts = [
  "React.js developer",
  500,
  "Freelancer",
  500,
  "Data Analyst",
  500,
  "Frontend developer",
  500,
  "Problem solver",
  500,
];

export { navLinks, services, technologies, experiences, testimonials, projects, socials, heroTexts };
