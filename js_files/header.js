//WILL DELETE LATERRRR
// 
//-------------- FOR NAV BAR SECTION UPDATES 
// Get all navigation links and sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Function to update active link for multi-page navigation
const updateActiveLink = () => {
    const currentPath = window.location.pathname;   // Current page path
    const currentHash = window.location.hash;       // Current hash (e.g., #skills-tools)

    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');

        // Add active class if the link matches the current path or hash
        if (
            link.href.includes(currentPath + currentHash) || // Match full URL with hash
            (link.href.includes(currentPath) && currentHash === '' && link.hash === '') // Match base URL
        ) {
            link.classList.add('active');
        }
    });
};

// Function to update active link for sections on scroll (only for index.html)
const updateActiveSection = () => {
    if (!window.location.pathname.includes('index.html')) return; // Only apply on index.html

    const sections = document.querySelectorAll('section[id]'); // Get all sections with IDs
    const offset = 100; // Adjust for header height
    let activeSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - offset;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            activeSection = section.getAttribute('id'); // Get active section ID
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.hash === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
};

// Add event listeners
window.addEventListener('DOMContentLoaded', updateActiveLink);      // Update on page load
window.addEventListener('scroll', updateActiveSection);             // Update on scroll
window.addEventListener('hashchange', updateActiveLink);            // Update on hash change