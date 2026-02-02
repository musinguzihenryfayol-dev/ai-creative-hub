const filterBtns = document.querySelectorAll(".filter-btn");
const toolCards = document.querySelectorAll(".tool-card");

// Show all tools on load
toolCards.forEach(card => {
  card.style.display = "block";
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    toolCards.forEach(card => {
      if (filter === "all" || card.dataset.category.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("toolSearch");
  const toolCards = document.querySelectorAll(".tool-card");

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase().trim();

    toolCards.forEach(card => {
      const text = card.textContent.toLowerCase();

      if (value === "" || text.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

