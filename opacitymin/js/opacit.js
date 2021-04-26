const toggler = document.querySelector(".nav_toggler");
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".nav_bar");

toggler.addEventListener("click", () => {
    navigation.classList.toggle("active")
    toggler.classList.toggle("close");
});
window.onscroll = () => {
    this.scrollY > 70 ? header.classList.add("stickTop") : header.classList.remove("stickTop")
};