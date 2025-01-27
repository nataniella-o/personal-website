const projects = [
    {
        id: 1,
        title: "OvaTech AI Website & Models",
        for: "AI4Good Lab",
        date: "May - June 2024",
        technologies: ["Python", "ML Models", "React", "TypeScript", "Vite"],
        links: [
            { name: "Website", url: "https://ovatech-ai.netlify.app"},
            { name: "GitHub", url: "https://github.com/orgs/OvaTech-AI"},
            { name: "Slide deck", url: "https://docs.google.com/presentation/d/e/2PACX-1vRLS-xjCLrx2b2uCwGPmbj8CHuBja-DmmbFrD0GoCqHpDoUOdwPpD7O660VWsU6yWL_qLnIFw9zX4Lu/pub?start=false&loop=false&delayms=3000"}
        ],
        description: "This project was developed during the AI4Good Lab. It combines AI models with a React-based website for deploying real-world solutions.",
        image: "assets/black-splash.avif"
    },
    {
        id: 2,
        title: "Netflix Data Modelling & Query System",
        for: "COMP 3380: Databases Concepts & Usages",
        date: "January - April 2024",
        technologies: ["Java", "SQL", "Command Line"],
        links: [

        ],
        description: "This project explores database concepts, focusing on modeling and querying a Netflix-style database system.",
        image: "assets/black-splash.avif"
        
    },
    // {
    //     id: 3,
    //     title: "OvaTech AI App Demo",
    //     for: "AI4Good Lab",
    //     date: "May - June 2024",
    //     technologies: ["Figma"],
    //     links: [

    //     ],
    //     description: "gonna talk about the app",
    //     image: "assets/black-splash.avif"
    // },
    {
        id: 3,
        title: "World Hub E-commerce Website",
        for: "COMP 3020: Human-Computer Interaction 1",
        date: "September - Decoember 2024",
        technologies: ["JavaScript", "HTML", "CSS", "Git"],
        links: [

        ],
        description: "An e-commerce platform designed to enhance user experience, focusing on usability and accessibility.",
        image: "assets/black-splash.avif"
    },
    {
        id: 4,
        title: "My Personal Website",
        for: "Personal project",
        date: "January 2025",
        technologies: ["JavaScript", "HTML", "CSS", "Figma", "Git"],
        links: [

        ],
        description: "An e-commerce platform designed to enhance user experience, focusing on usability and accessibility.",
        image: "assets/black-splash.avif"
    }
];
// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load project details dynamically
function loadProjectDetails() {
    const projectId = parseInt (getQueryParam('id'));
    const project = projects.find (p => p.id === projectId);

    if (project) {
        document.getElementById ('project-title').textContent = project.title;
        document.getElementById ('project-image').src = project.image;
        document.getElementById ('project-description').textContent = project.description;
        document.getElementById ('project-use').textContent = project.for;
        document.getElementById ('project-date').textContent = project.date;

        const techList = document.getElementById ('project-technologies');
        techList.innerHTML = ""; // Clear existing content
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild (li);
        });
    } else {
        document.body.innerHTML = "<h1>Project not found</h1>";
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', loadProjectDetails);