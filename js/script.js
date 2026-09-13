/* =====================================================
   script.js — Tina Ayanda Fezani Portfolio
   Scroll-triggered animations (beginner-friendly)
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* --------------------------------------------------
       1. INTERSECTION OBSERVER — Slide-up on scroll
       Watches every element with class "slide-up" and
       adds "visible" when it enters the viewport.
    -------------------------------------------------- */

    const slideElements = document.querySelectorAll(".slide-up");

    if (slideElements.length > 0) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        // Stop watching once it's visible
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,   // Trigger when 12% of element is visible
                rootMargin: "0px 0px -40px 0px"
            }
        );

        slideElements.forEach(function (el) {
            observer.observe(el);
        });
    }


    /* --------------------------------------------------
       2. NAVBAR — Add shadow on scroll
    -------------------------------------------------- */

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 40) {
                navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
            } else {
                navbar.style.boxShadow = "none";
            }
        });
    }


    /* --------------------------------------------------
       3. ACTIVE NAV LINK — Highlight current page
    -------------------------------------------------- */

    const navLinks = document.querySelectorAll(".nav-links a, nav a");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");
        if (href && href === currentPath) {
            link.classList.add("active");
        }
    });


    /* --------------------------------------------------
       4. PROJECT CARD — Subtle hover lift via JS
       (CSS handles the visual, JS adds/removes class)
    -------------------------------------------------- */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.style.transition = "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease";
        });
    });


    /* --------------------------------------------------
       5. SMOOTH SCROLL — For any anchor links
    -------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

});
