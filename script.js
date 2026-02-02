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
const searchInput = document.getElementById("toolSearch");
const toolCards = document.querySelectorAll(".tool-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  toolCards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});



  
