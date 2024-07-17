
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const modal = document.getElementById("myModal");
    const closeModal = document.querySelector(".close");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
