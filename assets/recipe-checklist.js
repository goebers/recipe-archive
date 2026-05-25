document.querySelectorAll(".post-content ol > li, .post-content ul > li").forEach((item) => {
  item.classList.add("recipe-checklist-item");
  item.setAttribute("role", "button");
  item.setAttribute("tabindex", "0");
  item.setAttribute("aria-pressed", "false");

  const toggle = () => {
    const done = item.classList.toggle("is-done");
    item.setAttribute("aria-pressed", String(done));
  };

  item.addEventListener("click", toggle);
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
});
