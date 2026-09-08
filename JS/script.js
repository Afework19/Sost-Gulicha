document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => chip.classList.toggle("active"));
});
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
