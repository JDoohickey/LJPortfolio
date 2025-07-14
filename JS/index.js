// Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');

    mobileMenuToggle.addEventListener('click', function() {
      navbar.classList.toggle('show');
      hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', function() {
        navbar.classList.remove('show');
        hamburger.classList.remove('active');
      });
    });

    // Hide mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbar.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        navbar.classList.remove('show');
        hamburger.classList.remove('active');
      }
    });

    // Smooth Typewriter Effect
    const text = "I'm an Industrial Engineering graduate (BSc Eng, 2024) with a passion for crafting smarter, data-driven systems. My expertise spans process optimization, AI-driven solutions, and data analytics, with a proven track record in logistics, telehealth, and automation projects. As a collaborative problem-solver, I leverage tools like Power BI, Python, and reinforcement learning to drive efficiency and impact. Recognized with awards like 1st Prize at the SAIIE and AFRETECH competitions, I'm dedicated to delivering innovative, real-world solutions.";

    let i = 0;
    const typewriterElement = document.getElementById('typewriter-text');
    const cursor = document.getElementById('cursor');

    function typeWriter() {
      if (i < text.length) {
        typewriterElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor" id="cursor"></span>';
        i++;
        setTimeout(typeWriter, 30); // Adjust speed here (lower = faster)
      } else {
        // Keep cursor blinking after text is complete
        typewriterElement.innerHTML = text + '<span class="cursor" id="cursor"></span>';
      }
    }

    // Start typewriter effect when page loads
    window.addEventListener('load', () => {
      setTimeout(typeWriter, 1000); // Start after 1 second
    });

    // PDF Modal Functionality
    const modal = document.getElementById('pdfModal');
    const modalTitle = document.getElementById('modal-title');
    const pdfFrame = document.getElementById('pdfFrame');
    const closeModal = document.getElementById('closeModal');
    const projectCards = document.querySelectorAll('.project-card');

    // Project titles for modal
    const projectTitles = {
      'traffic-optimization.pdf': 'Urban Traffic Optimization',
      'ai-route-optimization.pdf': 'AI Route Optimization',
      'telehealth-kiosk.pdf': 'Telehealth Kiosk System'
    };

    // Add click event to each project card
    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        const pdfFile = this.getAttribute('data-pdf');
        const pdfPath = `Assets/${pdfFile}`;

        // Set modal title
        modalTitle.textContent = projectTitles[pdfFile] || 'Project Details';

        // Set PDF source
        pdfFrame.src = pdfPath;

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });
    });

    // Close modal when clicking the X
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
      pdfFrame.src = ''; // Clear PDF to stop loading
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        pdfFrame.src = '';
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        pdfFrame.src = '';
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
