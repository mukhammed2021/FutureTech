import "../scss/style.scss";
import "./dynamic_adapt";

const iconMenu = document.querySelector(".icon-menu");

iconMenu.addEventListener("click", () => {
   document.documentElement.classList.toggle("menu-open");
});
