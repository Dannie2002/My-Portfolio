document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.project-header');

  function handleScroll() {
    const rect = header.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.8) {
      header.style.opacity = '1';
      header.style.transform = 'translateX(0)';
      header.style.transition = 'opacity 0.2s, transform 2s';
    } else {
      header.style.opacity = '0';
      header.style.transform = 'translateX(100%)';
      header.style.transition = 'opacity 0.8s, transform 1.5s';
    }
  }

  // Initial state
  header.style.opacity = '0';
  header.style.transform = 'translateX(100%)';

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});


document.addEventListener("DOMContentLoaded", function() {
  const aboutParagraph = document.querySelector('.about-paragraph');

  // Set initial state
  aboutParagraph.style.opacity = '0';
  aboutParagraph.style.transform = 'translateY(250px)';
  aboutParagraph.style.transition = 'opacity 0.2s, transform 1.2s';

  function handleScroll() {
    const rect = aboutParagraph.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      aboutParagraph.style.opacity = '1';
      aboutParagraph.style.transform = 'translateY(0)';
    } else {
      aboutParagraph.style.opacity = '0';
      aboutParagraph.style.transform = 'translateY(250px)';
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});


document.addEventListener("DOMContentLoaded", function() {
  const aboutParagraph = document.querySelector('.contact-paragraph');

  // Set initial state
  aboutParagraph.style.opacity = '0';
  aboutParagraph.style.transform = 'translateX(250px)';
  aboutParagraph.style.transition = 'opacity 0.8s, transform 2s';

  function handleScroll() {
    const rect = aboutParagraph.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      aboutParagraph.style.opacity = '1';
      aboutParagraph.style.transform = 'translateX(0)';
    } else {
      aboutParagraph.style.opacity = '0';
      aboutParagraph.style.transform = 'translateX(250px)';
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});




document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.project-card');

  // Set initial state for all cards
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(80px)';
    card.style.transition = 'opacity 0.8s, transform 1.9s';
  });

  function handleScroll() {
    const windowHeight = window.innerHeight;
    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < windowHeight * 0.85) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateX(0)';
        }, idx * 700); // 700ms delay per card for wave effect
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateX(80px)';
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});



  


// Scroll to Top Button Logic
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > window.innerHeight * 0.8) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});







document.addEventListener("DOMContentLoaded", function() {
  const aboutParagraph = document.querySelector('.about-h1');

  // Set initial state
  aboutParagraph.style.opacity = '0';
  aboutParagraph.style.transform = 'translateX(250px)';
  aboutParagraph.style.transition = 'opacity 0.2s, transform 1.3s';

  function handleScroll() {
    const rect = aboutParagraph.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      aboutParagraph.style.opacity = '1';
      aboutParagraph.style.transform = 'translateX(0)';
    } else {
      aboutParagraph.style.opacity = '0';
      aboutParagraph.style.transform = 'translateX(250px)';
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});




// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.querySelector('nav ul');

  menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Optional: Close menu when a link is clicked (for better UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});








document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const navLinks = document.querySelector('nav ul');

  menuIcon.addEventListener('click', function() {
    navLinks.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', function() {
    navLinks.classList.remove('active');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  });

  // Optional: Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
    });
  });
});
