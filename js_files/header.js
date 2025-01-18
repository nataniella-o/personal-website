//WILL DELETE LATERRRR
// 
//-------------- FOR NAV BAR SECTION UPDATES 
// Get all navigation links and sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Function to update the active link based on URL and scrolling
function updateActiveLink() {
    const navLinks = document.querySelectorAll(".nav-links a"); // Select all nav links
    const sections = document.querySelectorAll("section"); // Sections to track

    let activeSection = null;

    // Check if the user is on a specific section of the current page
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeSection = section.id; // Get the id of the active section
        }
    });

    // Determine the current page or section
    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.remove("active"); // Remove active class from all links

        // Highlight based on section ID (for same-page links)
        if (href.startsWith("#") && href.replace("#", "") === activeSection) {
            link.classList.add("active");
        }

        // Highlight based on URL (for links to other HTML pages)
        const currentPage = window.location.pathname.split("/").pop();
        if (href.includes(currentPage) && !href.startsWith("#")) {
            link.classList.add("active");
        }
    });
}

// Attach the function to the scroll event
window.addEventListener("scroll", updateActiveLink);

// Run the function on page load to highlight the correct link
document.addEventListener("DOMContentLoaded", updateActiveLink);
