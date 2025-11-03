const toggleBtn = document.getElementById("toggleBtn");
const menu = document.getElementById("menuList");
const list = document.querySelectorAll("li");
const indicator = document.getElementById("indicator");
/* ▲ Using getElementsByTagName('li') might grab <li> outside .menu.
querySelectorAll is safer since it only scopes within .menu. */

// toggle the active class to the toggler button & the menu-list
toggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");

  // adding blocking transition
  indicator.classList.add("block-transition");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.add("block-transition");
    list[i].classList.remove("active");

    // removing blocking transition afterwards
    setTimeout(() => {
      list[i].classList.remove("block-transition");
      indicator.classList.remove("block-transition");
    }, 300);
  }

  // and adding active class for first list element first
    setTimeout(() => {
      list[0].classList.add("active");
    }, 300);
});

// adding toggle active state to each list in list menu
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    const isActive = this.classList.contains("active");
    if (!isActive) {
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove("active");
        this.classList.add("active");
      }
    }
  });
}
