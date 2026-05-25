document.querySelectorAll("[data-footer-date]").forEach((el) => {
  const year = new Date().getFullYear();
  el.dateTime = String(year);
  el.textContent = year;
});
