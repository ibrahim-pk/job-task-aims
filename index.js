let carousel = document.querySelector(".carousel");
let cardWidth = document.querySelector(".card").offsetWidth;
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function moveToCard(index) {
  currentIndex = index;
  let position = -cardWidth * currentIndex;
  carousel.style.transform = `translateX(${position}px)`;

  // Update active dot
  dots.forEach((dot, dotIndex) => {
    dot.classList.remove("active");
    if (dotIndex === currentIndex) {
      dot.classList.add("active");
    }
  });
}

// Move to card on dot click
dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    moveToCard(dotIndex);
  });
});

// Previous and Next buttons
document.querySelector("#prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    moveToCard(currentIndex - 1);
  }
});

document.querySelector("#next").addEventListener("click", () => {
  let numCards = document.querySelectorAll(".card").length;
  if (currentIndex < numCards - 1) {
    moveToCard(currentIndex + 1);
  }
});
