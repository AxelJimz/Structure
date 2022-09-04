// * Dom
const $navbar = document.querySelector(".navbar");
const $navbar__menu = document.querySelector(".navbar__menu");
const $navbar__links = document.querySelector(".navbar__links");
// * Configuration Basic
let visibleNavbarLinks = false;
let getNavbarHeight = getComputedStyle($navbar).height;
$navbar__links.style.top = getNavbarHeight;
// * Navbar Function
const isVisibleNavbarLinks = () => {
  if (visibleNavbarLinks === false) {
    visibleNavbarLinks = true;
    $navbar__links.classList.add("navbar__links--visible");
    return;
  } else {
    visibleNavbarLinks = false;
    $navbar__links.classList.remove("navbar__links--visible");
    return;
  }
};
// * Click
$navbar__menu.addEventListener("click", isVisibleNavbarLinks);


