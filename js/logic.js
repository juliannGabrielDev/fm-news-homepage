const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const windowFilter = document.getElementById("window-filter");

menuBtn.addEventListener("click", () => {
    menu.classList.add("show");
    windowFilter.style.display = "block";
});
menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("show");
    windowFilter.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === windowFilter) {
        menu.classList.remove("show");
        windowFilter.style.display = "none";
    }
});