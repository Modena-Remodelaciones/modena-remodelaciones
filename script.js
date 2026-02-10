let slideActual = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function moverSlide(direccion) {
    slideActual += direccion;

    if (slideActual < 0) slideActual = slides.length - 1;
    if (slideActual >= slides.length) slideActual = 0;

    mostrarSlide(slideActual);
}


document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.parentElement;
        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");
        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});
