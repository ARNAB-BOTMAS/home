document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        navLinks.forEach(function (link) {
            var section = document.querySelector(link.getAttribute('href'));
            var sectionTop = section.offsetTop;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
});