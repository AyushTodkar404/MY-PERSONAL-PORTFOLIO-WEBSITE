const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.body.classList.add("light-mode");
function updateThemeButton() {
  const isLight = document.body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  themeToggle.title = themeToggle.getAttribute("aria-label");
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
  updateThemeButton();
});
updateThemeButton();
