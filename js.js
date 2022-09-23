const sliderItems = [...document.querySelectorAll(".hover-slider_item")];
const navItems = [...document.querySelectorAll(".hover-slider-nav_item")];

sliderItems.forEach((item, index) => {
  item.dataset.index = index;
  if (index === 0) {
    item.classList.add("hover-slider_item--active");
  }
});

navItems.forEach((item, index) => {
  item.dataset.index = index;
  if (index === 0) {
    item.classList.add("hover-slider-nav_item--active");
  }
});
const toggleActivity = (index) => {
  for (let i = 0; i < sliderItems.length; i++) {
    if (i === Number(index)) {
      sliderItems[i].classList.add("hover-slider_item--active");
      navItems[i].classList.add("hover-slider-nav_item--active");
    } else {
      sliderItems[i].classList.remove("hover-slider_item--active");
      navItems[i].classList.remove("hover-slider-nav_item--active");
    }
  }
};
document
  .querySelector(".hover-slider-nav")
  .addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("hover-slider-nav_item")) {
      toggleActivity(event.target.dataset.index);
    }
  });
