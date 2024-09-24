import  nullclass  from "../assets/images/nullclass.png";

import {
    car,
    movie,
    adviceapp,
    nike,
    gofood,
    keeper,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    react,
    summiz,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer-Intern",
        company_name: "NullClass",
        icon: nullclass,
        iconBg: "#accbe1",
        date: "May 2024 - June 2024",
        points: [
            "Trained to develop a full stack clone of Internshala Website.",
            "Implemented multilanguage support for languages like hindi,chinese,portugese etc..",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implemented differenet Login methods like OTP signin,email Login.",
            "Implemnted Email Verification when anyone signed in."
        ],
    }
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Hansadhwaja',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'linkedin.com/in/hansadhwaja-biswal-4033502b4',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://threads-one-sooty.vercel.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://summerizer-ai-two.vercel.app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://cars-showcase-ebon.vercel.ap',
    },
    {
        iconUrl: gofood,
        theme: 'btn-back-green',
        name: 'Go Food',
        description: 'Developed a web application for real time food ordering, facilitating food searches and connecting with customers.',
        link: 'https://go-food-ten.vercel.app',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-black',
        name: 'Movie Finding App',
        description: 'Designed and built a website to find cool movies for you.',
        link: 'https://movieland-three.vercel.app',
    },
    {
        iconUrl: keeper,
        theme: 'btn-back-yellow',
        name: 'Keeper App',
        description: 'Designed and built a website to note down anything you want.',
        link: 'https://keeper-app-bice-theta.vercel.app',
    },
    {
        iconUrl: adviceapp,
        theme: 'btn-back-green',
        name: 'Advice App',
        description: 'Developed a web application which gives random advice to people.',
        link: 'https://advice-app-alpha-ten.vercel.app',
    },
    {
        iconUrl: nike,
        theme: 'btn-back-orange',
        name: 'Nike App',
        description: 'Built a complete clone of Nike Website, allowing users to know the new arrivals and shop them all.',
        link: 'https://nike-copy.vercel.app',
    }
];