// Smooth scroll to section
function smoothScroll(target) {
  const element = document.querySelector(target);
  const offset = 80; // Adjust this value to set the offset for the scrolling position

  window.scrollTo({
     top: element.offsetTop - offset,
     behavior: "smooth"
  });
}

// Scroll to the top of the page on load and reload
window.addEventListener("load", function () {
  scrollToTop();
});

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

// Toggle menu button
function toggleLeftMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const leftMenu = document.querySelector('.left-menu');

  menuBtn.classList.toggle('open');
  leftMenu.classList.toggle('open');
}

// Add event listeners to left menu links
document.addEventListener("DOMContentLoaded", function () {
  const leftMenuLinks = document.querySelectorAll(".left-menu ul li a");

  leftMenuLinks.forEach(function (link) {
     link.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href");

        // Smoothly scroll to the target section
        smoothScroll(sectionId);

        // Close the menu
        toggleLeftMenu();
     });
  });
});

// Add event listener to dark mode toggle button
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.getElementById("left-menu").classList.toggle("open");
});

// Fade-in effect on page load
window.addEventListener("load", function () {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
     element.style.opacity = '1';
  });
});

// Check if sections are in view
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function checkInView() {
     sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
           section.classList.add("in-view");
        } else {
           section.classList.remove("in-view");
        }
     });
  }

  window.addEventListener("scroll", checkInView);
  window.addEventListener("resize", checkInView);

  checkInView();
});

// Disable hover effect on overlapping elements
function disableHoverOnOverlap(element) {
  element.addEventListener('mouseover', function () {
     element.classList.add('no-hover');
  });

  element.addEventListener('mouseout', function () {
     element.classList.remove('no-hover');
  });
}

const section = document.querySelector('section');
const profilePhoto = document.querySelector('.profile-photo');

disableHoverOnOverlap(section);
disableHoverOnOverlap(profilePhoto);

// Show "Go to top" button on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     goToTopBtn.classList.add("show");
  } else {
     goToTopBtn.classList.remove("show");
  }
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
     top: 0,
     behavior: 'smooth'
  });
}
const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
     setTimeout(() => {
        menu.classList.toggle('expanded');
     }, 200);
  } else {
     menu.classList.toggle('expanded');
  }
});
const menuBtn = document.querySelector('.menu-btn');
const leftMenu = document.querySelector('.left-menu');

menuBtn.addEventListener('click', () => {
  leftMenu.classList.toggle('open');
});

function downloadPDF() {
  const fileUrl = '"C:\Users\shash\Downloads\Project_Report_PS.pdf"'; // Replace with the actual URL or path of your PDF file

  const link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank';
  link.download = 'file.pdf'; // Specify the desired filename for the downloaded file

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}