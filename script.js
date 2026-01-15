function toggleDropdown() {
    const dropdown = document.getElementById('dropdownContent');
    const arrow = document.getElementById('arrow');

    dropdown.classList.toggle('open');
    arrow.classList.toggle('rotated');
}