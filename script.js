function toggleDropdown() {
    const dropdown = document.getElementById('dropdownContent');
    const arrow = document.getElementById('arrow');

    dropdown.classList.toggle('open');
    arrow.classList.toggle('rotated');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const hamburger = document.querySelector('.hamburger');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('hidden');
}

// Close sidebar when clicking on a link
document.querySelectorAll('.sidebar .nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleSidebar();
    });
});

// Prevent body scroll when sidebar is open
const sidebar = document.querySelector('.sidebar');
const observer = new MutationObserver(() => {
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});
observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });