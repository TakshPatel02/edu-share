// Interactive background for semester pages
const interactiveBg = document.getElementById('interactive-bg');

document.addEventListener('mousemove', (e) => {
    if (interactiveBg) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        interactiveBg.style.setProperty('--x', x + '%');
        interactiveBg.style.setProperty('--y', y + '%');
    }
});

// Enhanced hover effects for subject boxes
document.querySelectorAll('.subject-box').forEach(element => {
    element.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-12px) scale(1.08)';
        this.style.filter = 'brightness(1.1)';

        // Create ripple effect in background
        if (interactiveBg) {
            const x = (Math.random() * 100);
            const y = (Math.random() * 100);
            interactiveBg.style.setProperty('--x', x + '%');
            interactiveBg.style.setProperty('--y', y + '%');
            interactiveBg.style.filter = 'brightness(1.2)';
        }
    });

    element.addEventListener('mouseleave', function () {
        this.style.transform = '';
        this.style.filter = '';
        if (interactiveBg) {
            interactiveBg.style.filter = '';
        }
    });
});

// Modal functionality - Handle both modal structures
const modal = document.getElementById('subject-modal') || document.getElementById('subjectModal');
const modalTitle = document.getElementById('modal-title') || document.getElementById('modalTitle');
const modalCode = document.getElementById('modal-code') || document.getElementById('modalSubtitle');
const closeBtn = document.querySelector('.close-btn') || document.querySelector('.modal-close');

// Subject links database - Easy to manage Google Drive links
const subjectLinks = {
    // Semester 1 & 2 subjects
    'calculus': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'physics': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'chemistry': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'graphics': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'basic-electrical': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'mechanics': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'programming': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'workshop': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'basic-electronics': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'mathematics-1': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'mathematics-2': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'environmental': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'mechanical': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'electrical': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'english': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },

    // Semester 3 subjects
    'digital-fundamentals': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'dbms': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'data-structures': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'design-engineering': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'constitution': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'probability-statistics': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'technical-communication': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },

    // Semester 4 subjects
    'operating-systems': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'economics-management': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'discrete-mathematics': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'computer-architecture': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'oop-1': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'design-engineering-1b': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },

    // Semester 5 subjects
    'data-science': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'web-development': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'algorithms': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'cyber-security': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'computer-networks': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'professional-ethics': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'personality-development': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'design-engineering-2a': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },

    // Semester 6 subjects
    'data-visualization': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'mobile-development': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'advanced-web': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'artificial-intelligence': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'cryptography': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'software-engineering': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'personality-development-2': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'design-engineering-2b': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },

    // Semester 7 subjects
    'blockchain': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'machine-learning': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'computer-vision': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'ui-ux': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'project-management': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'wireless-communication': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },
    'summer-internship': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' },

    // Semester 8 subjects
    'internship-project': { syllabus: '', papers: '', notes: '', youtube: '', solutions: '', books: '' }
};

// Add click event listeners to subject boxes
document.querySelectorAll('.subject-box').forEach(element => {
    element.addEventListener('click', function () {
        const subjectName = this.querySelector('h3')?.textContent || this.textContent;
        const subjectCode = this.querySelector('p')?.textContent || '';
        const subjectKey = this.dataset.subject;

        if (modalTitle) modalTitle.textContent = subjectName;
        if (modalCode) modalCode.textContent = subjectCode;

        // Update modal links - Handle both link structures
        const links = subjectLinks[subjectKey] || {};

        // New structure links
        const syllabusLink = document.getElementById('syllabus-link');
        const papersLink = document.getElementById('papers-link');
        const notesLink = document.getElementById('notes-link');
        const youtubeLink = document.getElementById('youtube-link');
        const solutionsLink = document.getElementById('solutions-link');
        const booksLink = document.getElementById('books-link');

        // Old structure links
        const syllabusLinkOld = document.getElementById('syllabusLink');
        const papersLinkOld = document.getElementById('papersLink');
        const notesLinkOld = document.getElementById('notesLink');
        const youtubeLinkOld = document.getElementById('youtubeLink');
        const solutionsLinkOld = document.getElementById('solutionsLink');
        const booksLinkOld = document.getElementById('booksLink');

        // Update links based on available elements
        if (syllabusLink) syllabusLink.href = links.syllabus || '#';
        if (papersLink) papersLink.href = links.papers || '#';
        if (notesLink) notesLink.href = links.notes || '#';
        if (youtubeLink) youtubeLink.href = links.youtube || '#';
        if (solutionsLink) solutionsLink.href = links.solutions || '#';
        if (booksLink) booksLink.href = links.books || '#';

        if (syllabusLinkOld) syllabusLinkOld.href = links.syllabus || '#';
        if (papersLinkOld) papersLinkOld.href = links.papers || '#';
        if (notesLinkOld) notesLinkOld.href = links.notes || '#';
        if (youtubeLinkOld) youtubeLinkOld.href = links.youtube || '#';
        if (solutionsLinkOld) solutionsLinkOld.href = links.solutions || '#';
        if (booksLinkOld) booksLinkOld.href = links.books || '#';

        if (modal) modal.style.display = 'block';
    });
});

// Close modal functionality
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        if (modal) modal.style.display = 'none';
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (modal && e.target === modal) {
        modal.style.display = 'none';
    }
});

// Global function for onclick handlers (if needed)
window.closeModal = function () {
    if (modal) modal.style.display = 'none';
};