/**
 * GSAP Animations for EduShare GTU Notes Website
 * Enhanced animations for better user experience
 */

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Page Loading Animation Timeline
 */
function initPageAnimations() {
    // Create loading animation timeline
    const loadTl = gsap.timeline();

    // Preloader animation (if you add a preloader later)
    loadTl.set('body', { overflow: 'hidden' })
        .to('.preloader', {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
                gsap.set('body', { overflow: 'auto' });
            }
        });
}

/**
 * Navbar Animations
 */
function initNavbarAnimations() {
    // Navbar entrance animation
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
    });

    // Navbar logo animation
    gsap.from('.navbar-logo', {
        scale: 0,
        rotation: 180,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    // Navbar links staggered animation
    gsap.from('.navbar-links li', {
        y: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.8
    });

    // Scroll-triggered navbar background change
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
            className: 'navbar-scrolled',
            targets: '.navbar'
        }
    });
}

/**
 * Hero Section Animations
 */
function initHeroAnimations() {
    const heroTl = gsap.timeline({ delay: 0.5 });

    heroTl.from('.home-section h1', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    })
        .from('.home-section p', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.home-section', {
            scale: 0.95,
            duration: 1,
            ease: 'power2.out'
        }, 0);
}

/**
 * Section Scroll Animations
 */
function initSectionAnimations() {
    gsap.utils.toArray('.section').forEach((section, index) => {
        // Skip home section as it has its own animation
        if (section.classList.contains('home-section')) return;

        gsap.from(section, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse',
                once: true
            }
        });
    });
}

/**
 * Feature Boxes Animations
 */
function initFeatureAnimations() {
    // Feature boxes entrance
    gsap.from('.feature-box', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: {
            amount: 0.8,
            from: 'center',
            grid: 'auto'
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    // Enhanced hover animations
    document.querySelectorAll('.feature-box').forEach(box => {
        box.addEventListener('mouseenter', () => {
            gsap.to(box, {
                scale: 1.08,
                rotation: Math.random() * 6 - 3, // Random rotation between -3 and 3 degrees
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        box.addEventListener('mouseleave', () => {
            gsap.to(box, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

/**
 * Semester Boxes Animations
 */
function initSemesterAnimations() {
    // Semester boxes entrance
    gsap.from('.semester-box', {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.semester-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    // Enhanced hover animations
    document.querySelectorAll('.semester-box').forEach((box, index) => {
        box.addEventListener('mouseenter', () => {
            gsap.to(box, {
                scale: 1.1,
                y: -10,
                boxShadow: '0 15px 40px rgba(35, 61, 77, 0.5)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        box.addEventListener('mouseleave', () => {
            gsap.to(box, {
                scale: 1,
                y: 0,
                boxShadow: '0 4px 20px rgba(35, 61, 77, 0.25)',
                duration: 0.4,
                ease: 'elastic.out(1, 0.5)'
            });
        });

        // Click animation
        box.addEventListener('click', function () {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
        });
    });
}

/**
 * Contact Form Animations
 */
function initContactAnimations() {
    // Form elements entrance
    gsap.from('.contact-form > *', {
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    // Form input focus animations
    document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
}

/**
 * Subject Boxes Animations (for semester pages)
 */
function initSubjectAnimations() {
    // Subject boxes entrance
    gsap.from('.subject-box', {
        scale: 0.8,
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.08,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    // Enhanced hover effects
    document.querySelectorAll('.subject-box').forEach((box, index) => {
        box.addEventListener('mouseenter', () => {
            gsap.to(box, {
                y: -15,
                scale: 1.05,
                rotationX: 5,
                boxShadow: '0 20px 40px rgba(35, 61, 77, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        box.addEventListener('mouseleave', () => {
            gsap.to(box, {
                y: 0,
                scale: 1,
                rotationX: 0,
                boxShadow: '0 4px 16px rgba(35, 61, 77, 0.25)',
                duration: 0.4,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

/**
 * Modal Animations
 */
function initModalAnimations() {
    const modal = document.getElementById('subject-modal') || document.getElementById('subjectModal');

    if (!modal) return;

    // Enhanced modal opening animation
    window.openModal = function () {
        const modalContent = modal.querySelector('.modal-content');

        modal.style.display = 'block';

        // Set initial state
        gsap.set(modal, { opacity: 0 });
        gsap.set(modalContent, {
            scale: 0.5,
            opacity: 0,
            y: 100,
            rotationY: 90
        });

        // Animation timeline
        const modalTl = gsap.timeline();

        modalTl.to(modal, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        })
            .to(modalContent, {
                scale: 1,
                opacity: 1,
                y: 0,
                rotationY: 0,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }, '-=0.1')
            .from('.modal-feature-item', {
                x: -50,
                opacity: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: 'power2.out'
            }, '-=0.3');
    };

    // Enhanced modal closing animation
    window.closeModal = function () {
        const modalContent = modal.querySelector('.modal-content');

        const closeTl = gsap.timeline();

        closeTl.to('.modal-feature-item', {
            x: 50,
            opacity: 0,
            duration: 0.2,
            stagger: 0.05,
            ease: 'power2.in'
        })
            .to(modalContent, {
                scale: 0.5,
                opacity: 0,
                y: -50,
                rotationY: -90,
                duration: 0.4,
                ease: 'back.in(1.7)'
            }, '-=0.1')
            .to(modal, {
                opacity: 0,
                duration: 0.2,
                ease: 'power2.in',
                onComplete: () => {
                    modal.style.display = 'none';
                }
            }, '-=0.2');
    };
}

/**
 * Parallax Effects
 */
function initParallaxEffects() {
    // Subtle parallax for sections
    gsap.utils.toArray('.section').forEach(section => {
        gsap.to(section, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'bottom bottom',
                end: 'top top',
                scrub: 1
            }
        });
    });
}

/**
 * Text Reveal Animations
 */
function initTextAnimations() {
    // Heading reveals
    gsap.utils.toArray('h1, h2, h3').forEach(heading => {
        gsap.from(heading, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

/**
 * Initialize all animations
 */
function initAllAnimations() {
    // Wait for page load
    window.addEventListener('load', () => {
        initPageAnimations();
        initNavbarAnimations();
        initHeroAnimations();
        initSectionAnimations();
        initFeatureAnimations();
        initSemesterAnimations();
        initContactAnimations();
        initSubjectAnimations();
        initModalAnimations();
        initParallaxEffects();
        initTextAnimations();
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAllAnimations);

// Export functions for manual initialization if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAllAnimations,
        initNavbarAnimations,
        initHeroAnimations,
        initSectionAnimations,
        initFeatureAnimations,
        initSemesterAnimations,
        initContactAnimations,
        initSubjectAnimations,
        initModalAnimations,
        initParallaxEffects,
        initTextAnimations
    };
}