function toggleDropdown(button) {
    var dropdown = button.parentNode;
    var dropdownContent = dropdown.querySelector('.dropdown-content');
  
    // Close all dropdowns
    closeAllDropdowns();
  
    // Toggle the current dropdown
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  
    // Add an event listener to close the dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
      }
    });
  }
  
  function closeAllDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function (dropdown) {
      dropdown.style.display = 'none';
    });
  }
  