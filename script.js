const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const toTop = document.getElementById("toTop");
if (toTop) {
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
