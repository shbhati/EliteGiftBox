// Fix navbar on scroll down
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav.navbar.navbar-expand-lg');
    let lastScrollTop = 0;
    const scrollThreshold = 50; // Add class after scrolling 50px

    if (navbar) {
        window.addEventListener('scroll', function () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Add "fix" class when scrolling down past threshold
            if (scrollTop > scrollThreshold) {
                navbar.classList.add('fix');
            } else {
                navbar.classList.remove('fix');
            }

            lastScrollTop = scrollTop;
        });
    }
});

