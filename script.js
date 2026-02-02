document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("toolSearch");
  const toolCards = document.querySelectorAll(".tool-card");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const noResults = document.getElementById("noResults");

  let activeFilter = "all";

  // ===== FILTER FUNCTION =====
  function filterTools() {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    toolCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      const category = card.dataset.category || "";

      const matchesSearch = text.includes(query);
      const matchesFilter =
        activeFilter === "all" || category.includes(activeFilter);

      if (matchesSearch && matchesFilter) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Show / hide "No results"
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  // ===== SEARCH =====
  searchInput.addEventListener("input", filterTools);

  // ===== FILTER BUTTONS =====
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      activeFilter = btn.dataset.filter;
      filterTools();
    });
  });
});
