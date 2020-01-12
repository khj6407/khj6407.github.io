const about = document.getElementById("js-menu-about");
const works = document.getElementById("js-menu-works");
const port = document.getElementById("js-menu-port");
const contact = document.getElementById("js-menu-contact");
const nav = document.getElementById("primary-nav");
const backBtn = document.getElementById("js-back-btn");

// const backPage = () => {
//   location.reload();
// };

const init = () => {};

init();

const clickMenu = name => {
  const menus = ["ABOUT", "WORKS", "PORTFOLIO", "CONTACT"];

  // 나중에 주석처리해도 됨
  //   for (let i = 0; i < menus.length; i++) {
  //     menus[i] === name ? console.log(menus[i]) : null;
  //   }

  switch (name) {
    case "ABOUT":
      $("#js-menu-about").trigger("click");
      hideNav();
      break;
    case "WORKS":
      $("#js-menu-works").trigger("click");
      hideNav();
      break;
    case "PORTFOLIO":
      $("#js-menu-port").trigger("click");
      hideNav();
      break;
    case "CONTACT":
      $("#js-menu-contact").trigger("click");
      hideNav();

      break;
  }
};

const hideNav = () => {
  nav.classList.remove();
  nav.classList.add("hide_nav");
};
