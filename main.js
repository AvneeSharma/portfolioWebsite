document.addEventListener('DOMContentLoaded', function() {

    let downloadCVBtn = document.getElementById('download-cv-btn');
        console.log("Download button:", downloadCVBtn);
        if (downloadCVBtn) {
            downloadCVBtn.addEventListener('click', function(event) {
                console.log("Download button clicked");
                // Prevent default link behavior
                event.preventDefault();
                // Get the CV file URL
                let cvUrl = downloadCVBtn.getAttribute('href');
                console.log("CV URL:", cvUrl);
                // Trigger the download
                downloadCV(cvUrl);
            });
        }

        // Function to download the CV
        function downloadCV(cvUrl) {
            console.log("Downloading CV:", cvUrl);
            // Create a temporary anchor element
            let anchorElement = document.createElement('a');
            anchorElement.href = cvUrl;
            anchorElement.download = 'Avnee_Sharma_CV.pdf'; // Adjust the filename as needed
            // Append the anchor element to the body
            document.body.appendChild(anchorElement);
            // Trigger a click event on the anchor element
            anchorElement.click();
            // Remove the anchor element from the body
            document.body.removeChild(anchorElement);
        }

    //Typed JS
    const typed= new Typed('.multiple-text', {
        strings: ['Fullstack Developer', 'Web Designer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

    // Initialize ScrollReveal with options
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    // Call .reveal() method once and pass an array of elements with their respective options
    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    // Toggle Icon Navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        }
    }

    // Scroll Section Active Link
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });

        // Sticky Navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove toggle icon and navbar
        if (menuIcon) {
            menuIcon.classList.remove('fa-xmark');
        }
        if (navbar) {
            navbar.classList.remove('active');
        }
    }
});

