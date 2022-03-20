const btnMobile = document.querySelector(".btn-mobile");

btnMobile.onclick = () => {
  const iconBtnMobile = btnMobile.querySelector("[class*='fa-']");
  const isBars = iconBtnMobile.classList.contains("fa-bars");
  const nav = document.querySelector(".nav-header");

  changeMenuIcon(iconBtnMobile, isBars);
  showNav(nav);
};

function showNav(nav) {
   if (nav.classList.contains("hidden")) {
      nav.classList.replace("hidden", "show");
   } else if (nav.classList.contains("show")) {
      nav.classList.replace("show", "hidden");
   } else {
      nav.classList.add("show");
   }
}

function changeMenuIcon(iconBtnMobile, isBars) {
   isBars ?
      iconBtnMobile.classList.replace("fa-bars", "fa-x") :
      iconBtnMobile.classList.replace("fa-x", "fa-bars");
}