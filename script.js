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

// ===== AI TOOLS SEARCH FILTER =====
document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("toolSearch");
  const toolCards = document.querySelectorAll(".tool-card");

  if (!searchInput) {
    console.error("Search input not found");
    return;
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    toolCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });

});



  

