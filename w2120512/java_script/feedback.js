const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        stars.forEach((s, i) => {
            s.classList.toggle("selected", i <= index); // Add "selected" class to clicked stars
        });
    });
});