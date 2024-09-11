import { Icons } from "@/icons/connect_icons";
import { SkillIcons } from "@/icons/skillicon";

export type Skill = string;

export type SocialLink = {
  name: string;
  url: string;
  icon: JSX.Element;
};

export type ProjectLink = {
  type: string;
  href: string;
  icon: JSX.Element;
};

export type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  image?: string;
  video?: string;
};


export type Education = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};



export const DATA = {
  name: "Maheshwar Reddy",
  initials: "DV",
  resume: '/resume.pdf',
  url: "",
  bookmeeting: 'https://cal.com/maheshwar-reddy-20',
  x: "https://x.com/Maheshwarr20",
  location: "Hyderabad, India",
  description: "I’m a software engineer with experience at Microsoft, Google, and LinkedIn. I’ve built scalable cloud solutions ☁️, optimized search algorithms 🔍, and developed data-driven systems 💼. Passionate about delivering innovative, impactful solutions across the stack.",
  avatarUrl: "/profile.jpg",
  coverimageUrl: '/coverphoto.png',
  skills: [
    "Javascript", "Python", "TypeScript", "Java", "React", "Next.js", "Redux", "Recoil", "TailwindCSS", "CSS", "HTML",
    "Framer Motion", "Node", "SocketIO", "WebRTC", "tRPC", "Express", "GraphQL", "SQL", "Prisma", "MongoDB", "Docker",
    "AWS", "CI/CD", "GitHub", "Redis", "Firebase"
  ] as const,
  contact: {
    email: "maheshwarreddymutupuri@gmail.com",
    tel: "+91 9705768802",
    social: [
      {
        name: "@maheshwarreddy7075",
        url: "https://leetcode.com/u/maheshwarreddy7075/",
        icon: Icons.leetcode,
      },
      {
        name: "/Maheshwarreddy",
        url: "https://www.linkedin.com/in/maheshwar-reddy-713927258/",
        icon: Icons.linkedin,
      },
      {
        name: "@Maheshwarr20",
        url: "https://x.com/Maheshwarr20",
        icon: Icons.x,
      },
      {
        name: "/Maheshwarreddy970",
        url: "https://github.com/Maheshwarreddy970",
        icon: Icons.github,
      },
    ] as const,
  },
  work: [
    {
      company: "Microsoft",
      location: "Austin, Texas",
      title: "Software Engineer",
      logoUrl: "/microsoft.jpg",
      start: "July 2021",
      end: "Present",
      description: [
        "Developing and optimizing high-performance APIs and microservices for Azure.",
        "Collaborating with cross-functional teams to design and implement new features.",
        "Leading the migration of legacy systems to cloud-based infrastructure, improving performance and scalability by 40%.",
      ],
    },
    {
      company: "Google",
      location: "Boulder, Colorado",
      title: "Software Engineer",
      logoUrl: "/google.jpg",
      start: "January 2024",
      end: "March 2024",
      description: [
        "Spearheaded the optimization of a key search feature that reduced latency by 30%.",
        "Designed and implemented machine learning models for personalized content recommendations, resulting in a 15% increase in user engagement.",
        "Worked closely with data scientists and UX designers to launch new features for Google Search.",
      ],
    },
    {
      company: "LinkedIn",
      location: "Savannah, Georgia",
      title: "Web Development Intern",
      logoUrl: "/linkedin.jpg",
      start: "January 2023",
      end: "April 2023",
      description: [
        "Developed a recommendation algorithm that boosted profile view rates by 20%.",
        "Collaborated with product managers and data engineers to develop new features that enhanced user retention.",
        "Implemented real-time data pipelines for personalized job and connection suggestions.",
      ],
    },
  ] as const,
  education: [
    {
      school: "Harvard University",
      href: "https://www.harvard.edu/",
      degree: "Master of Science in Computer Science",
      logoUrl: "/harvard.png",
      start: "September 2020",
      end: "May 2022",
    },
    {
      school: "Osmania University",
      href: "https://www.osmania.ac.in/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/ou.png",
      start: "August 2016",
      end: "May 2020",
    },
  ] as const,
  projects: [
    {
      title: "LayerUI",
      href: "https://www.layerui.com/",
      dates: "March 2024 - Present",
      active: true,
      description: "Designed and developed LayerUI, a comprehensive library of animated UI components that streamlined development workflows by offering pre-built elements, reducing the need for custom coding, and accelerating project timelines.",
      technologies: [
        "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "React", "Firebase",
      ] as const,
      links: [
        {
          type: "Website",
          href: "https://www.layerui.com/",
          icon: <SkillIcons.globe className="size-4" />,
        },
      ] as const,
      video: "/herovideo.mp4",
    },
    {
      title: "CORINNA-AI",
      href: "https://corinna-ai-gray.vercel.app/",
      dates: "December 2023 - February 2024",
      active: true,
      description: "Created Corinna-AI, a customizable chatbot with advanced NLP for diverse queries, allowing businesses to personalize interactions with custom greetings, email collection, and tailored chat features.",
      technologies: [
        "Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "React", "Node.js",
      ] as const,
      links: [
        {
          type: "Website",
          href: "https://corinna-ai-gray.vercel.app/",
          icon: <SkillIcons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/Maheshwarreddy970/corinna-ai",
          icon: <Icons.github />,
        },
      ] as const,
      video: "/coranaai.mp4",
    },
    {
      title: "CHATDOC",
      href: "https://chatdoc-fawn.vercel.app/",
      dates: "November 2023 - December 2023",
      active: true,
      description: "Developed an AI-integrated document chat system for context-aware interactions. Enhanced productivity via intuitive design and efficient communication. Enables users to engage in natural language interactions with documents. Utilized advanced AI capabilities for seamless user-document engagement.",
      technologies: [
        "tRPC", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "AWS", "Langchain", "OpenAI API", "MonoRepo",
      ] as const,
      links: [
        {
          type: "Website",
          href: "https://chatdoc-fawn.vercel.app/",
          icon: <SkillIcons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/Maheshwarreddy970/chatdoc",
          icon: <Icons.github />,
        },
      ] as const,
      image: "/chatdocproject.png",
    },
    {
      title: "Automatic Chat",
      href: "https://specto-wheat.vercel.app/",
      dates: "June 2023 - August 2023",
      active: true,
      description: "Specto revolutionizes agency management with its all-in-one platform, integrating goal setting, progress tracking, and web design. Its intuitive interface and dynamic charting streamline multitasking and enhance performance monitoring, enabling agencies to efficiently achieve their goals.",
      technologies: [
        "Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI", "AWS",
      ] as const,
      links: [
        {
          type: "Website",
          href: "https://specto-wheat.vercel.app/",
          icon: <SkillIcons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/Maheshwarreddy970/specto",
          icon: <Icons.github />,
        },
      ] as const,
      image: "/specto.png",
    },
  ] as const,
  testimonials: [
    {
      name: "Gaurav Agrawal",
      text: "Maheshwar's technical expertise and problem-solving skills were pivotal to the success of our projects. His ability to quickly adapt and deliver high-quality solutions makes him an invaluable asset.",
      image: "./photo1.jpg",
    },
    {
      name: "Nidhi Sharma",
      text: "Working with Maheshwar has been a great experience. His deep understanding of the latest technologies and commitment to excellence have significantly enhanced our development processes.",
      image: "./photo2.jpg",
    },
    {
      name: "Ravi Kumar",
      text: "Maheshwar's innovative approach and dedication to crafting exceptional digital solutions have been impressive. His work on our projects has consistently exceeded expectations.",
      image: "./photo3.jpg",
    },
  ] as const,
};
