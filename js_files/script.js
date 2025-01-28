// Function to load an external HTML file into a specified element
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading file:`, error));
}

// Load page contents when the page is ready
document.addEventListener ('DOMContentLoaded', () => {
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
    loadHTML('projects.html', 'project-cards');
});


// ----- FOR TYPING EFFECT
// Function to shuffle an array
function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Strings to type
const greetings = ["Hello,", "Bonjour,", "Ciao,", 
                    "안녕하세요,", "Nǐ hǎo,", "こんにちは,", 
                    "Báwo ní,", "Hallo,", "Sannũ,",
                    "Hola,", " Olá,", "नमस्ते,",
                    "שלום,", "Hej,"];

// Shuffle the strings array
const shuffledPhrases = shuffleArray (greetings);

var typed = new Typed (".auto-type", {
    strings: greetings,
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
}); 

// // JavaScript for Hamburger Menu Toggle

 // Show the sidebar
 function showSidebar() {
    const sidebar = document.querySelector('.side-nav');
    sidebar.style.display = 'flex'; // Show the sidebar
}

// Hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.side-nav');
    sidebar.style.display = 'none'; // Hide the sidebar
}
