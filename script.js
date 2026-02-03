document.addEventListener("DOMContentLoaded", () => {
 // --- THEME TOGGLE LOGIC ---
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const currentTheme = localStorage.getItem("theme");

  // Check for saved theme
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeIcon.textContent = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeIcon.textContent = "☀️";
    }
  });
  // 1. DATA: Add or remove tools here. No need to touch HTML!
 const aiTools = [
    {
      name: "ChatGPT",
      category: "writing",
      purpose: "AI Assistant",
      rating: 5,
      review: "The gold standard for brainstorming. I use it daily to explain complex topics and draft project ideas.",
      desc: "An advanced AI that can chat, write code, and solve problems in seconds.",
      link: "https://chat.openai.com",
      isAffiliate: false
    },
    {
      name: "Perplexity AI",
      category: "writing",
      purpose: "AI Search Engine",
      rating: 5,
      review: "It's like Google but better because it cites its sources. Perfect for accurate research.",
      desc: "A search engine that uses AI to give direct answers with citations from the live web.",
      link: "https://www.perplexity.ai",
      isAffiliate: false
    },
    {
      name: "Midjourney",
      category: "design",
      purpose: "Art Generation",
      rating: 5,
      review: "The highest quality AI art I've ever seen. The detail in the textures is unmatched.",
      desc: "A powerful tool that turns text prompts into stunning, photorealistic artwork.",
      link: "https://www.midjourney.com",
      isAffiliate: false
    },
    {
      name: "Adobe Firefly",
      category: "design",
      purpose: "Creative Design",
      rating: 4,
      review: "Amazing for adding or removing objects in photos. It's built right into Photoshop.",
      desc: "Adobe's family of creative generative AI models for image effects and editing.",
      link: "https://www.adobe.com/firefly",
      isAffiliate: false
    },
    {
      name: "Luma Dream Machine",
      category: "video",
      purpose: "Video Generation",
      rating: 4,
      review: "It creates incredibly realistic 5-second videos. Great for cinematic b-roll.",
      desc: "An AI model that creates high-quality, realistic videos from text and images.",
      link: "https://lumalabs.ai/dream-machine",
      isAffiliate: false
    },
    {
      name: "Runway Gen-3",
      category: "video",
      purpose: "AI Film Tools",
      rating: 5,
      review: "Professional-grade video tools. Their 'Motion Brush' gives you total control over animations.",
      desc: "A creative suite for video generation, inpainting, and motion tracking.",
      link: "https://runwayml.com",
      isAffiliate: false
    },
    {
      name: "GitHub Copilot",
      category: "coding",
      purpose: "AI Pair Programmer",
      rating: 5,
      review: "It's like it knows what I'm going to type before I do. Essential for speeding up coding.",
      desc: "An AI assistant that suggests code and whole functions in real-time within your editor.",
      link: "https://github.com/features/copilot",
      isAffiliate: false
    },
    {
      name: "Cursor",
      category: "coding",
      purpose: "AI Code Editor",
      rating: 5,
      review: "I switched from VS Code to Cursor because the AI integration is so much deeper. It builds whole features.",
      desc: "A code editor built for AI programming that can see your entire codebase.",
      link: "https://cursor.com",
      isAffiliate: false
    },
    {
      name: "Replit Agent",
      category: "coding",
      purpose: "App Builder",
      rating: 4,
      review: "You can build and deploy a full-stack app just by talking to it. Great for rapid prototyping.",
      desc: "An AI agent that codes, builds, and deploys applications for you from scratch.",
      link: "https://replit.com",
      isAffiliate: false
    },
    {
      name: "Suno AI",
      category: "music",
      purpose: "Music Generation",
      rating: 5,
      review: "Unbelievable vocals. I use it to make custom background music for my YouTube videos.",
      desc: "Generate full songs including lyrics and vocals from a simple text description.",
      link: "https://suno.com",
      isAffiliate: false
    },
    {
      name: "CapCut AI",
      category: "video",
      purpose: "Smart Editing",
      rating: 5,
      review: "The auto-captioning feature alone saves me hours of work every week.",
      desc: "An easy-to-use video editor with powerful AI features for social media creators.",
      link: "https://www.capcut.com",
      isAffiliate: true
    },
    {
      name: "Canva AI",
      category: "design",
      purpose: "Fast Design",
      rating: 4,
      review: "Perfect for non-designers who need quick thumbnails or social media posts.",
      desc: "Simple design platform with AI-powered 'Magic Studio' for instant creations.",
      link: "https://www.canva.com",
      isAffiliate: false
    },
    {
      name: "Notion AI",
      category: "writing",
      purpose: "Smart Workspace",
      rating: 4,
      review: "I use it to summarize long study notes and organize my project tasks.",
      desc: "An AI assistant built into your workspace to help you write, edit, and summarize.",
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
function displayTools(toolsToRender) {
  toolsGrid.innerHTML = toolsToRender.map(tool => `
<div class="card-footer">
  <span class="category-badge">${tool.category}</span>
  <span class="status-tag">Free to Try</span>
</div>

    <div class="tool-card reveal active">
      <div class="card-header">
        <h3>${tool.name}</h3>
        <button class="share-btn" onclick="shareTool('${tool.name}', '${tool.link}')" title="Share Tool">
           🔗
        </button>
      </div>
      
      <p class="purpose">${tool.purpose}</p>
      
      <div class="rating">
        ${"⭐".repeat(tool.rating)}${"☆".repeat(5 - tool.rating)}
      </div>
      
      <p class="desc">${tool.desc}</p>

      ${tool.review ? `
        <div class="my-review">
          <h4>Henry's Take</h4>
          <p>"${tool.review}"</p>
        </div>
      ` : ''}
      
      <a href="${tool.link}" target="_blank" rel="${tool.isAffiliate ? 'nofollow sponsored' : 'noopener noreferrer'}">
         ${tool.isAffiliate ? 'Try ' + tool.name : 'Open Tool'}
      </a>
    </div>
  `).join('');

  noResults.style.display = toolsToRender.length === 0 ? "block" : "none";
}

// 3. Add the Share Functionality
window.shareTool = (name, link) => {
  if (navigator.share) {
    navigator.share({
      title: `Check out ${name} on AI Creative Hub`,
      url: link
    }).catch(console.error);
  } else {
    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  }
};

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








