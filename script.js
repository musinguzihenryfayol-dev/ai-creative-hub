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
  const noResults = document.getElementById("noResults");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    toolCards.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // show / hide "no results"
    noResults.style.display = visibleCount === 0 ? "block" : "none";
  });
});


const filterButtons = document.querySelectorAll(".filter-btn");
const toolCards = document.querySelectorAll(".tool-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // active button style
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    toolCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});



  



