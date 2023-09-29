// const wrapper = document.querySelector(".work-list");

// const carousel = document.querySelector(".carousel");
// const arrowBtns = document.querySelector(".work-list i");
// const firstCardWidth = document.querySelector(".work").offsetWidth;
// const carouselChildrens = [...carousel.children];

// let isDragging = false, startX, startScrollLeft, timeoutId;

// let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth);

// carouselChildrens.slice(-cardPerview).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// carouselChildrens.slice(0, -cardPerview).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft = btn.id === "left" ? -firstCardWidth : firstCardWidth;
//     })
// });

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");

//     startX = e.pageX;
//     startScrollX = carousel.scrollLeft;
// }
// const dragging = (e) => {
//     if (!isDragging) return;
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }
// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// const infiniteScroll = (e) => {
//     if (carousel.scrollLeft === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }
//     else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }

//     clearTimeout(timeoutId);
//     if (!wrapper.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if (window.innerWidth < 800) return;
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);

// }
// autoPlay();

// carousel.addEventListener("mousemove", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);



// const wrapper = document.querySelector(".work-list");
// const carousel = document.querySelector(".carousel");
// const arrowBtns = document.querySelectorAll(".work-list i");
// const cardWidth = document.querySelector(".work").offsetWidth;

// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const scrollAmount = btn.id === "left" ? -cardWidth : cardWidth;
//         carousel.scrollBy({
//             left: scrollAmount,
//             behavior: "smooth"
//         });
//     })
// });

// const autoPlay = () => {
//     if (window.innerWidth < 800) return;
//     setInterval(() => {
//         carousel.scrollBy({
//             left: cardWidth,
//             behavior: "smooth"
//         });
//     }, 2500);
// }

// autoPlay();


const wrapper = document.querySelector(".work-list");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".work-list i");
const cardWidth = document.querySelector(".work").offsetWidth;
const carouselChildren = Array.from(carousel.querySelectorAll(".work"));

let isDragging = false;
let startX, startScrollLeft, timeoutId;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const scrollAmount = btn.id === "left" ? -cardWidth : cardWidth;
        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");

    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    const diffX = e.pageX - startX;
    carousel.scrollLeft = startScrollLeft - diffX;
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => {
        const scrollAmount = cardWidth;
        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    }, 2500);
};

autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);