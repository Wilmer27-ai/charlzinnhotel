document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".hero-slides");
  const slideDivs = Array.from(document.querySelectorAll(".hero-slide"));
  const leftBtn = document.querySelector(".hero-arrow-left");
  const rightBtn = document.querySelector(".hero-arrow-right");
  let currentIndex = 1; // Start at 1 because of prepended clone

  // Clone first and last slides
  const firstClone = slideDivs[0].cloneNode(true);
  const lastClone = slideDivs[slideDivs.length - 1].cloneNode(true);

  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  slides.appendChild(firstClone);
  slides.insertBefore(lastClone, slideDivs[0]);

  const allSlides = slides.querySelectorAll(".hero-slide");
  const slideCount = allSlides.length;

  // Set initial position
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;

  function updateSlider(animate = true) {
    if (animate) {
      slides.style.transition = "transform 0.5s ease";
    } else {
      slides.style.transition = "none";
    }
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;

    // Show only the correct text
    allSlides.forEach((slide, idx) => {
      const text = slide.querySelector(".hero-slide-text");
      if (text) text.style.display = idx === currentIndex ? "block" : "none";
    });
  }

  // Hide all texts except the first real slide on load
  allSlides.forEach((slide, idx) => {
    const text = slide.querySelector(".hero-slide-text");
    if (text) text.style.display = idx === currentIndex ? "block" : "none";
  });

  rightBtn.addEventListener("click", () => {
    if (currentIndex >= slideCount - 1) return;
    currentIndex++;
    updateSlider();
  });

  leftBtn.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateSlider();
  });

  slides.addEventListener("transitionend", () => {
    // If at the cloned last (real first), jump to real first
    if (currentIndex === slideCount - 1) {
      currentIndex = 1;
      updateSlider(false);
    }
    // If at the cloned first (real last), jump to real last
    if (currentIndex === 0) {
      currentIndex = slideCount - 2;
      updateSlider(false);
    }
  });
});
