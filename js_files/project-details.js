const projects = [
    {
        id: 1,
        title: "OvaTech AI Website & Models",
        description: "This project was developed during the AI4Good Lab. It combines AI models with a React-based website for deploying real-world solutions.",
        image: "assets/black-splash.avif",
        technologies: ["Python", "ML Models", "React", "TypeScript", "Vite"]
    },
    {
        id: 2,
        title: "Netflix Data Modelling & Query System",
        description: "This project explores database concepts, focusing on modeling and querying a Netflix-style database system.",
        image: "assets/black-splash.avif",
        technologies: ["Java", "SQL", "Command Line"]
    },
    {
        id: 3,
        title: "OvaTech AI App",
        description: "gonna talk about the app",
        image: "assets/black-splash.avif",
        technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
        id: 4,
        title: "World Hub E-commerce Website",
        description: "An e-commerce platform designed to enhance user experience, focusing on usability and accessibility.",
        image: "assets/black-splash.avif",
        technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
        id: 5,
        title: "My Personal Website",
        description: "An e-commerce platform designed to enhance user experience, focusing on usability and accessibility.",
        image: "assets/black-splash.avif",
        technologies: ["JavaScript", "HTML", "CSS"]
    }
];
// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load project details dynamically
function loadProjectDetails() {
    const projectId = parseInt(getQueryParam('id'));
    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-description').textContent = project.description;

        const techList = document.getElementById('project-technologies');
        techList.innerHTML = ""; // Clear existing content
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });
    } else {
        document.body.innerHTML = "<h1>Project not found</h1>";
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', loadProjectDetails);