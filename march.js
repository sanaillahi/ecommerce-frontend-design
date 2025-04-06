document.querySelector('.mobile-search-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('mobile-search-active');
});


// Mobile menu toggle functionality
document.getElementById('menu').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.sec').classList.toggle('mobile-menu-active');
});

// Close menu when clicking outside
document.addEventListener('click', function() {
    document.querySelector('.sec').classList.remove('mobile-menu-active');
});

// Prevent menu from closing when clicking inside it
document.querySelector('.menu-container').addEventListener('click', function(e) {
    e.stopPropagation();
});









document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filter");
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");
    const applyFilters = document.getElementById("applyFilters");

    // Update price range display
    priceRange.addEventListener("input", function () {
        priceValue.textContent = this.value;
    });

    // Apply filters
    applyFilters.addEventListener("click", function () {
        let selectedFilters = {
            category: [],
            brand: [],
            condition: "",
            rating: "",
            price: priceRange.value
        };

        // Collect checkbox and radio selections
        filters.forEach(filter => {
            if (filter.type === "checkbox" && filter.checked) {
                selectedFilters[filter.dataset.filter].push(filter.value);
            }
            if (filter.type === "radio" && filter.checked) {
                selectedFilters[filter.dataset.filter] = filter.value;
            }
        });

        console.log("Applied Filters:", selectedFilters);
        alert("Filters Applied! Check Console.");
    });
});

// Function to change the main image when clicking a thumbnail
function changeImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
}
