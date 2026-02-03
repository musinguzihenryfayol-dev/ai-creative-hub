document.addEventListener("DOMContentLoaded", () => {
  // 1. DATA: Add or remove tools here. No need to touch HTML!
 const aiTools = [
    {
      name: "ChatGPT",
      category: "writing",
      purpose: "AI Assistant",
      rating: 5,
      desc: "I use ChatGPT for brainstorming ideas, solving math problems, and learning faster.",
      link: "https://chat.openai.com",
      isAffiliate: false
    },
    {
      name: "Canva AI",
      category: "design",
      purpose: "Design & Graphics",
      rating: 4,
      desc: "I create posters, thumbnails, and social media designs using AI-powered tools.",
      link: "https://www.canva.com",
      isAffiliate: false
    },
    {
      name: "CapCut AI",
      category: "video",
      purpose: "Video Editing",
      rating: 5,
      desc: "I edit cinematic videos, apply captions, and enhance TikTok content.",
      link: "https://www.capcut.com",
      isAffiliate: true
    },
    {
      name: "Suno AI",
      category: "music", // Matches your new filter button!
      purpose: "Music & Audio Generation",
      rating: 5,
      desc: "I use Suno to create full songs, melodies, and background music from simple text prompts.",
      link: "https://suno.com",
      isAffiliate: false
    },
    {
      name: "Notion AI",
      category: "writing",
      purpose: "Productivity",
      rating: 4,
      desc: "I organize school work, plan projects, and summarize notes efficiently.",
      link: "https://www.notion.so/product/ai",
      isAffiliate: false
    }
  ];
 // 2. SELECTORS
  const toolsGrid = document.querySelector(".tools-grid");
  const searchInput = document.getElementById("toolSearch");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const noResults = document.getElementById("noResults");

  let activeFilter = "all";

  // 3. RENDER FUNCTION
  // This turns your JavaScript objects into HTML cards
  function displayTools(toolsToRender) {
    // Clear the grid first
    toolsGrid.innerHTML = "";

    // Map through data and create HTML
    toolsGrid.innerHTML = toolsToRender.map(tool => `
      <div class="tool-card reveal active" data-category="${tool.category}">
        <h3>${tool.name}</h3>
        <p class="purpose">${tool.purpose}</p>
        
        <div class="rating">
          ${"⭐".repeat(tool.rating)}${"☆".repeat(5 - tool.rating)}
          <span>(${tool.rating}/5)</span>
        </div>
        
        <p class="desc">${tool.desc}</p>
        
        <a href="${tool.link}" 
           target="_blank" 
           rel="${tool.isAffiliate ? 'nofollow sponsored' : 'noopener noreferrer'}">
           ${tool.isAffiliate ? 'Try ' + tool.name : 'Open Tool'}
        </a>
      </div>
    `).join('');

    // Handle "No Results" message
    if (noResults) {
      noResults.style.display = toolsToRender.length === 0 ? "block" : "none";
    }
  }

  // 4. COMBINED FILTER & SEARCH LOGIC
  function filterTools() {
    const query = searchInput.value.toLowerCase().trim();

    const filteredResults = aiTools.filter(tool => {
      // Check if search query matches name, description, or purpose
      const matchesSearch = 
        tool.name.toLowerCase().includes(query) || 
        tool.desc.toLowerCase().includes(query) ||
        tool.purpose.toLowerCase().includes(query);
      
      // Check if category matches filter button
      const matchesFilter = 
        activeFilter === "all" || tool.category === activeFilter;

      return matchesSearch && matchesFilter;
    });

    displayTools(filteredResults);
  }

  // 5. EVENT LISTENERS
  searchInput.addEventListener("input", filterTools);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle CSS classes for buttons
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Update active filter and run logic
      activeFilter = btn.dataset.filter;
      filterTools();
    });
  });

  // 6. INITIAL LOAD
  displayTools(aiTools);
});

