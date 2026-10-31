const images = document.querySelectorAll(".portfolio-image");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

// عرض الصورة حسب الانديكس
function showImage(index) {

    images.forEach((image) => {
        image.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    images[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

// الضغط على النقاط
dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        const index = Number(dot.dataset.index);

        showImage(index);

    });

});

// الصورة السابقة
prevBtn.addEventListener("click", () => {

    let index = (currentIndex - 1 + images.length) % images.length;

    showImage(index);

});

// الصورة التالية
nextBtn.addEventListener("click", () => {

    let index = (currentIndex + 1) % images.length;

    showImage(index);

});