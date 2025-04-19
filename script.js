// Contact form submission handler
function thankMessage(e) {
    e.preventDefault(); // Prevent form submission
    document.getElementById('thanksText').classList.remove('hidden');
    
    // Add animation to success message
    const thanksText = document.getElementById('thanksText');
    thanksText.style.animation = 'pulse 1.5s ease';
    
    // Reset form after 3 seconds
    setTimeout(() => {
      document.querySelector('form').reset();
      thanksText.classList.add('hidden');
      thanksText.style.animation = '';
    }, 3000);
  }
  
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles.js with earthy color configuration
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#E8A44B", "#FFBF63", "#553811"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#E8A44B",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
  
  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  
  // Smooth scrolling for navigation links and any links pointing to page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Handle back to top link specifically
      if (targetId === '#top') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });
  
  // Typing effect for hero headline
  const heroHeadline = document.querySelector('.text-center.py-16 h2');
  if (heroHeadline) {
    const text = heroHeadline.textContent;
    heroHeadline.innerHTML = '';
    heroHeadline.classList.add('gradient-text');
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroHeadline.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        // Add blinking cursor after typing completes
        const cursor = document.createElement('span');
        cursor.classList.add('typing-cursor');
        cursor.innerHTML = '|';
        heroHeadline.appendChild(cursor);
        
        // Add dynamic gradient animation class
        setTimeout(() => {
          heroHeadline.classList.add('gradient-text');
        }, 500);
      }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 500);
  }
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
  
  // Add fade-in class to various elements for animation
  document.querySelectorAll('section > h2, .skill-category, .project-card, .contact-item').forEach(element => {
    element.classList.add('fade-in');
  });
  
  // Animate skill badges with staggered delay
  const skillBadges = document.querySelectorAll('.skill-badge');
  skillBadges.forEach((badge, index) => {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(20px)';
    badge.style.transition = 'all 0.3s ease';
    badge.style.transitionDelay = `${index * 0.05}s`;
    
    setTimeout(() => {
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }, 500 + (index * 50));
  });
  
  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
      card.style.boxShadow = 'var(--shadow-lg)';
      card.style.borderColor = 'rgba(79, 70, 229, 0.3)';
      
      // Add animation to project image
      const projectImage = card.querySelector('.project-image img');
      if (projectImage) {
        projectImage.style.transform = 'scale(1.1)';
      }
      
      // Add glow effect
      card.style.boxShadow = '0 10px 25px -5px rgba(79, 70, 229, 0.4), 0 10px 10px -5px rgba(79, 70, 229, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
      card.style.borderColor = '';
      
      const projectImage = card.querySelector('.project-image img');
      if (projectImage) {
        projectImage.style.transform = '';
      }
    });
  });
  
  // Dark mode toggle functionality
  const darkModeToggle = document.querySelector('#darkModeToggle');
  const body = document.body;
  
  // Check for saved theme preference or use preferred color scheme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.toggle('dark-mode', currentTheme === 'dark');
    if (darkModeToggle) {
      darkModeToggle.checked = currentTheme === 'dark';
    }
  } else {
    // If no saved preference, check system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.classList.toggle('dark-mode', prefersDarkMode);
    if (darkModeToggle) {
      darkModeToggle.checked = prefersDarkMode;
    }
  }
  
  // Toggle dark mode on button click
  if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
      body.classList.toggle('dark-mode');
      
      // Add transition animation to the entire page
      document.documentElement.style.transition = 'background-color 0.5s ease';
      
      // Save preference to localStorage
      const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      
      // Add a ripple effect from the toggle
      const ripple = document.createElement('div');
      ripple.classList.add('theme-ripple');
      ripple.style.position = 'fixed';
      ripple.style.top = '0';
      ripple.style.left = '0';
      ripple.style.width = '100%';
      ripple.style.height = '100%';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'scale(0)';
      ripple.style.backgroundColor = theme === 'dark' ? 'rgba(12, 10, 4, 0.2)' : 'rgba(255, 240, 220, 0.2)';
      ripple.style.zIndex = '-1';
      document.body.appendChild(ripple);
      
      // Animate the ripple
      ripple.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(4)', opacity: 0 }
      ], {
        duration: 1000,
        easing: 'ease-out'
      }).onfinish = () => {
        document.body.removeChild(ripple);
      };
    });
  }
  
  // Parallax effect for hero section
  const heroSection = document.querySelector('.text-center.py-16');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      
      // Move hero content in opposite direction for enhanced effect
      const heroContent = heroSection.querySelector('.relative.z-10');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    });
  }
  
  // Dynamic contact form interactions
  const formControls = document.querySelectorAll('input, textarea');
  formControls.forEach(control => {
    // Add focus effects
    control.addEventListener('focus', () => {
      if (control.parentElement) {
        control.parentElement.classList.add('focused');
      }
      control.style.borderColor = 'var(--primary-color)';
      control.style.boxShadow = '0 0 0 3px rgba(79, 70, 229, 0.2)';
    });
    
    control.addEventListener('blur', () => {
      if (control.parentElement) {
        control.parentElement.classList.remove('focused');
      }
      if (!control.value) {
        control.style.borderColor = '';
        control.style.boxShadow = '';
      }
    });
    
    // Add floating label effect
    if (control.value && control.parentElement) {
      control.parentElement.classList.add('has-value');
    }
    
    control.addEventListener('input', () => {
      if (control.parentElement) {
        control.parentElement.classList.toggle('has-value', control.value !== '');
      }
    });
  });
  
  // Animate contact icons
  const contactIcons = document.querySelectorAll('.contact-item i');
  contactIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.1) rotate(5deg)';
      icon.style.backgroundColor = 'var(--primary-color)';
      icon.style.color = 'white';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = '';
      icon.style.backgroundColor = '';
      icon.style.color = '';
    });
  });
  
  // Form submission with animation
  const contactForm = document.querySelector('.bg-white.dark\\:bg-gray-700 form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Add animation to the submit button
      const submitButton = this.querySelector('button[type="submit"]');
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitButton.disabled = true;
      
      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        // Show success message with animation
        const formSuccess = document.createElement('div');
        formSuccess.classList.add('form-success');
        formSuccess.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent.';
        formSuccess.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        formSuccess.style.color = '#10B981';
        formSuccess.style.padding = '1rem';
        formSuccess.style.borderRadius = '5px';
        formSuccess.style.marginTop = '1rem';
        formSuccess.style.opacity = '0';
        formSuccess.style.transform = 'translateY(20px)';
        formSuccess.style.transition = 'all 0.5s ease';
        
        contactForm.appendChild(formSuccess);
        
        // Reset form
        contactForm.reset();
        submitButton.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
        submitButton.disabled = false;
        
        // Show success message with animation
        setTimeout(() => {
          formSuccess.style.opacity = '1';
          formSuccess.style.transform = 'translateY(0)';
        }, 100);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.style.opacity = '0';
          formSuccess.style.transform = 'translateY(20px)';
          setTimeout(() => {
            contactForm.removeChild(formSuccess);
          }, 500);
        }, 5000);
      }, 2000);
    });
  }
  
  // Update copyright year dynamically
  const copyrightYear = document.querySelector('.copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
  
  // Navbar scroll effect
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Initialize counters for statistics if they exist
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const countUp = (counter, target) => {
      const count = +counter.innerText;
      const increment = target / 100;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => countUp(counter, target), 30);
      } else {
        counter.innerText = target;
      }
    };
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute('data-target');
          countUp(counter, target);
          observer.unobserve(counter);
        }
      });
    }, observerOptions);
    
    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }
  
  // Add wave effect to the footer
  const footer = document.querySelector('footer');
  if (footer) {
    const wave = document.createElement('div');
    wave.classList.add('footer-wave');
    wave.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="rgba(255,255,255,0.1)" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>`;
    wave.style.position = 'absolute';
    wave.style.bottom = '0';
    wave.style.left = '0';
    wave.style.width = '100%';
    wave.style.height = '120px';
    wave.style.zIndex = '1';
    footer.style.position = 'relative';
    footer.style.overflow = 'hidden';
    footer.insertBefore(wave, footer.firstChild);
  }
});
  