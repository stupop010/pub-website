class HeroUI {
  constructor() {
    this.intervalTime = 5000;
    this.rightButton = document.querySelector("#btn-right");
    this.leftButton = document.querySelector("#btn-left");
    this.heroPics = document.querySelectorAll("[data-hero]");
    this.circle = document.querySelectorAll(".circle");
    this.nextPic = this.nextPic.bind(this);
    this.prevPic = this.prevPic.bind(this);
    this.clickedRight = this.rightButton.addEventListener("click", () => {
      this.nextPic();
      clearInterval(picInterval);
      this.picInterval = setInterval(nextPic, intervalTime);
    });
    this.clickedLeft = this.leftButton.addEventListener("click", () => {
      this.prevPic();
      clearInterval(picInterval);
      this.picInterval = setInterval(prevPic, intervalTime);
    });
    this.picInterval = setInterval(this.nextPic, this.intervalTime);
  }

  nextPic = function() {
    const current = document.querySelector(".hero-active");
    const currentCircle = document.querySelector(".circle-active");

    current.classList.remove("hero-active");
    currentCircle.classList.remove("circle-active");

    if (current.nextElementSibling && currentCircle.nextElementSibling) {
      current.nextElementSibling.classList.add("hero-active");
      currentCircle.nextElementSibling.classList.add("circle-active");
    } else {
      this.heroPics[0].classList.add("hero-active");
      this.circle[0].classList.add("circle-active");
    }
  };

  prevPic = function() {
    const current = document.querySelector(".hero-active");
    const currentCircle = document.querySelector(".circle-active");

    current.classList.remove("hero-active");
    currentCircle.classList.remove("circle-active");

    if (
      current.previousElementSibling &&
      currentCircle.previousElementSibling
    ) {
      current.previousElementSibling.classList.add("hero-active");
      currentCircle.previousElementSibling.classList.add("circle-active");
    } else {
      this.heroPics[this.heroPics.length - 1].classList.add("hero-active");
      this.circle[this.circle.length - 1].classList.add("circle-active");
    }
    setTimeout(() => current.classList.remove("hero-active"));
    setTimeout(() => currrentCircle.classList.remove("circle-active"));
  };
}

class Hamburger {
  constructor() {
    this.hamburger = document.querySelector(".hamburger");
    this.moblieMenu = document.querySelector(".moblie-menu");
    this.hamburgerClick = this.hamburger.addEventListener(
      "click",
      this.onClick
    );
  }
  onClick = () => {
    if (this.hamburger.className.match("active")) {
      this.hamburger.classList.remove("active");
      this.moblieMenu.classList.remove("active");
    } else {
      this.hamburger.classList.add("active");
      this.moblieMenu.classList.add("active");
    }
  };
}

const hero = new HeroUI();
const hamburger = new Hamburger();
