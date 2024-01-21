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
    cricket,
    lyft,
    coding,
    olympiads,
    justS,
    nitd,
    bee,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

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
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Freelancer",
        icon: backend,
    },
    {
        title: "Competitive Coder",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "vite",
    //     icon: vite,
    // },
];

const experiences = [
    {
        title: "Academics & Education",
        company_name: "NIT Delhi",
        icon: nitd,
        iconBg: "#E6DEDD",
        date: "Dec 2021 - May 2025",
        points: [
            "Currently pursuing B.Tech in C.S.E. from N.I.T. Delhi.",
            "Achieved 99.14 %ile in JEE Mains and 10k rank in JEE Advanced.",
            "Done my schooling from C.B.S.E. board.",
        ],
    },
    {
        title: "Competitive Coder",
        company_name: "",
        icon: coding,
        iconBg: "#383E56",
        date: "Dec 2021 - Present",
        points: [
            "Started my C.P. journey from first sem onwards.",
            "Solved over 600 problems on all platforms.",
            "Currently Pupil(1314) on Codeforces, 3⭐(1600) on Codechef.",
        ],
    },
    {
        title: "Freelancer",
        company_name: "Just. STARTED",
        icon: justS,
        iconBg: "#383E56",
        date: "January 2024",
        points: [
            "First ever freelancing oppurtunity.",
            "Got approached from company via Unstop.",
            "Created the landing page for the company.",
        ],
    },
    {
        title: "Front-end Developer Intern",
        company_name: "Lyft",
        icon: lyft,
        iconBg: "#383E56",
        date: "July 2023 - August 2023",
        points: [
            "This intern in Lyft was totally a remote intern.",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Front-end Developer Intern",
        company_name: "BeeSolver Technologies",
        icon: bee,
        iconBg: "#E6DEDD",
        date: "July 2023 - August 2023",
        points: [
            "This intern was my first on-site intern.",
            "There, I work synergistically in teams of fellow developers to make their landing page much more responsive.",
            "My biggest contribution in this intern was the cursor animation for their logo.",
        ],
    },
    {
        title: "Olympiads & Hackathons",
        company_name: "IMO, KVPY",
        icon: olympiads,
        iconBg: "#383E56",
        date: "",
        points: [
            "Cleared round 1 of Kishore Vigyanik Protsahan Yojana [KVPY] exam in 2021.",
            "Among top 26 in India selected for finals of IMO [International Mathematical Olympiad].",
            "Participated in more than three hackathons."
        ],
    },
    {
        title: "Extra-curricular",
        company_name: "",
        icon: cricket,
        iconBg: "#E6DEDD",
        date: "",
        points: [
            "Recently our cricket club became the 3rd best club of India.",
            "Won the Gold medal in Table Tennis both at district & state level.",
            "Won several tournaments held in college.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "The responsive design and smooth animations are top notch. His imagination and designs are just out of the box.",
        name: "Gurvinder Singh",
        designation: "Manager",
        company: "BeeSover Technologies",
        image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
        testimonial:
            "I've never met a developer with such skill-set & who truly delivers projects on time, like Kanha does. I am truly pleased with his work.",
        name: "Venkat Krishnan",
        designation: "CEO",
        company: "Just. STARTED",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
        testimonial:
            "After having Kanha in my team, I can account for his skillset any day. After some modifications done by him our traffic got increased by 30%.",
        name: "Chris Brown",
        designation: "Senior Developer",
        company: "Lyft",
        image: "https://randomuser.me/api/portraits/men/74.jpg",
    },
];

const projects = [
    {
        name: "Portfolio",
        description:
            "Explore my portfolio website and engage with a sleek, user-friendly interface that seamlessly navigates through my work in development. Discover the perfect blend of creativity, proficiency & my dedication in delivering exceptional digital experiences.",
        tags: [
            {
                name: "Js",
                color: "blue-text-gradient",
            },
            {
                name: "vite",
                color: "green-text-gradient",
            },
            {
                name: "tailwind-CSS",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/KanhaMadan/KM_Portfolio",
    },
    {
        name: "Just. STARTED",
        description:
            "Web application made by me as my freelancing project for Just. STARTED studios. They makes their contributions in making your's every single moment memorable via their cameras. In this I've used GSAP & CSS animation to make it look much attractive",
        tags: [
            {
                name: "Js",
                color: "blue-text-gradient",
            },
            {
                name: "GSAP",
                color: "green-text-gradient",
            },
            {
                name: "tailwind-CSS",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/KanhaMadan/Just.-STARTED",
    },
    {
        name: "Brick-Breaker: The Game",
        description:
            "Dive into a thrilling Brick-Breaking game & experience dynamic gameplay as you skillfully control the paddle to smash through bricks. This game showcases the seamless synergy of Java Swing, delivering a captivating and entertaining gaming experience",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "java oops",
                color: "green-text-gradient",
            },
            {
                name: "java swing",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/KanhaMadan/Online_Brick_Breaker_Game",
    },
];

export { services, technologies, experiences, testimonials, projects };