document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");

    // If the click is neither on the dropdown button nor inside the dropdown, exit early
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

    let currentDropdown;

    // If the click is on the dropdown button, find the closest dropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active'); // Corrected typo from classlist to classList
    }

    // Close other dropdowns that are active
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return; // Skip the current dropdown
        dropdown.classList.remove('active'); // Remove 'active' class from other dropdowns
    });
});
