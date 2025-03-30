document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
//     <div class="project-details">
//     <h3>E-Commerce Website</h3>
//     <p>Developed a responsive e-commerce platform using HTML CSS and JavaScript</p>
//     <ul>
//         <li>Implemented user authentication</li>
//         <li>Created dynamic product catalog</li>
//     </ul>
// </div>
    // Example projects data
    const projects = [
        { title: 'Project One', description: 'E-Commerce Website.', link: '#' },
        { title: 'Project Two', description: 'Netfilx-clone.', link: '#' },
        { title: 'Project Three', description: 'Portfolio.', link: '#' }
    ];

    const projectContainer = document.querySelector('.project-container');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>`;
        
        projectContainer.appendChild(projectItem);
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert("Thank you for your message!");
        
        // Reset form fields
        contactForm.reset();
    });
});