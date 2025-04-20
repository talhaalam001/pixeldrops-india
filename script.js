// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.checked = savedTheme === 'dark-mode';
}

// Theme toggle event listener
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// File Upload Handling
const fileInput = document.getElementById('fileInput');
const uploadForm = document.getElementById('uploadForm');

fileInput.addEventListener('change', (e) => {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
        const fileLabel = document.querySelector('.file-label span');
        fileLabel.textContent = fileName;
    }
});

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    if (file) {
        // Here you would typically send the file to your server
        alert(`File "${file.name}" selected. Upload functionality would be implemented here.`);
    } else {
        alert('Please select a file first.');
    }
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Newsletter Form Handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Animate Skills Progress Bars on Scroll
const skillBars = document.querySelectorAll('.progress-bar');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

// Intersection Observer for Skills Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelector('.skills').forEach(skill => {
    observer.observe(skill);
});

// Portfolio Card Hover Effect
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Initialize Swiper
const swiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Contact Section Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Handle email click
  const emailItem = document.querySelector('.contact-item:nth-child(1)');
  if (emailItem) {
    emailItem.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'mailto:Pixeldropsstore@gmail.com';
    });
  }

  // Handle phone click
  const phoneItem = document.querySelector('.contact-item:nth-child(2)');
  if (phoneItem) {
    phoneItem.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'tel:+919798626202';
    });
  }

  // Handle WhatsApp click
  const whatsappItem = document.querySelector('.contact-item:nth-child(3)');
  if (whatsappItem) {
    whatsappItem.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://wa.me/919798626202', '_blank');
    });
  }

  // Add click feedback
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach(item => {
    item.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.98)';
    });
    
    item.addEventListener('mouseup', function() {
      this.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});