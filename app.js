const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar-links");
  navbar.classList.toggle("active");
});
