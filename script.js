const portfolio = {
  name: "Kyle Peng",
  role: "AI and software engineer",
  email: "pengkxyz@gmail.com",
  linkedIn: "https://linkedin.com/in/kylepeng",
  resumeUrl: "assets/kyle-peng-resume.pdf",
  intro:
    "I build AI workflows, data pipelines, and interactive systems that turn ambiguous problems into reliable software.",
  location: "San Jose, CA",
  focus: "AI, data systems, full stack",
  availability: "M.Eng. CS @ Cornell",
  snapshot:
    "I am pursuing a Master of Engineering in Computer Science at Cornell after completing my B.S. in Computer Science at Rose-Hulman, magna cum laude.",
  stats: [
    { value: "93%", label: "fund-classification accuracy across 87 categories at Supernova Technology" },
    { value: "63%", label: "improvement in dental hardware identification accuracy at LumaDent" },
    { value: "3.86", label: "major GPA in computer science at Rose-Hulman" }
  ],
  caseStudies: [
    {
      type: "Innovation intern",
      title: "Agentic fund classification",
      summary:
        "Built agentic AI workflows and automated ingestion pipelines to classify thousands of funds from unstructured regulatory compliance files.",
      outcome: "Reached 93% accuracy across 87 distinct categories.",
      tags: ["LLMs", "Prompt engineering", "Data pipelines"]
    },
    {
      type: "AI intern",
      title: "Dental hardware segmentation",
      summary:
        "Deployed a semantic segmentation workflow to classify third-party dental hardware and instantly match compatible mounting systems.",
      outcome: "Improved identification accuracy by 63%.",
      tags: ["Computer vision", "Landing.ai", "Automation"]
    },
    {
      type: "Computer science intern",
      title: "Diagnostic image analysis",
      summary:
        "Developed OpenCV image-processing algorithms and Python neural networks for automated COVID-19 test kit analysis.",
      outcome: "Reduced false positives in diagnostic result classification.",
      tags: ["OpenCV", "Python", "Neural networks"]
    }
  ],
  projects: [
    {
      title: "Origami Research - Catapult Games",
      category: "AI games",
      summary: "Three original interactive social deduction and strategy games used as testbeds for benchmarking LLM capabilities.",
      tags: ["TypeScript", "React", "Catapult SDK"],
      href: "#contact",
      color: "#0f766e"
    },
    {
      title: "Phantom",
      category: "Security systems",
      summary: "A senior capstone system for ingesting, processing, and analyzing operational and security data for real-time monitoring.",
      tags: ["TypeScript", "Docker", "Distributed systems"],
      href: "#contact",
      color: "#c94c3f"
    },
    {
      title: "Personalized Music Recommender",
      category: "Machine learning",
      summary: "A content-based recommendation engine using cosine similarity and vector embeddings to solve cold-start initialization problems.",
      tags: ["Python", "scikit-learn", "Embeddings"],
      href: "#contact",
      color: "#594b9a"
    },
    {
      title: "Technical toolkit",
      category: "Engineering",
      summary: "Hands-on work across Java, Python, C/C++, TypeScript, React, Flask, FastAPI, Docker, AWS, OpenSearch, and Elastic Stack.",
      tags: ["Full stack", "Cloud", "Data"],
      href: "#contact",
      color: "#b98216"
    }
  ],
  skills: [
    {
      title: "AI and machine learning",
      items: ["LLM workflows", "Prompt strategy", "PyTorch", "Keras", "OpenCV", "scikit-learn"]
    },
    {
      title: "Product engineering",
      items: ["TypeScript", "JavaScript", "React", "HTML/CSS", "Tailwind CSS", "Playwright"]
    },
    {
      title: "Data and deployment",
      items: ["Python", "FastAPI", "Flask", "Docker", "AWS", "OpenSearch", "Elastic Stack"]
    },
    {
      title: "Systems fundamentals",
      items: ["Java", "C++/C", "MSSQL Server", "Git", "Data pipelines", "Distributed processing"]
    }
  ],
  aboutPrimary:
    "I work across AI, data, and product engineering, with experience building LLM workflows, computer vision systems, distributed data tooling, and interactive TypeScript applications.",
  aboutSecondary:
    "My strongest work happens where models, data pipelines, and user workflows meet: extracting signal from messy inputs and turning it into systems people can trust.",
  timeline: [
    {
      period: "2026-2027",
      title: "M.Eng. Computer Science, Cornell University",
      detail: "Graduate study in computer science with an expected completion date of May 2027."
    },
    {
      period: "2022-2026",
      title: "B.S. Computer Science, Rose-Hulman Institute of Technology",
      detail: "Minors in mathematics and data science, magna cum laude, 3.71 cumulative GPA and 3.86 major GPA."
    },
    {
      period: "2025-2026",
      title: "AI, security, and recommendation systems",
      detail: "Built agentic fund classification workflows, LLM benchmarking games, a threat-monitoring capstone, and a music recommender."
    }
  ],
  contactCopy: "Reach out for AI engineering, data systems, product engineering, or internship opportunities."
};

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

function setText(selector, value) {
  const node = qs(selector);
  if (node) node.textContent = value;
}

function applyContent() {
  document.title = `${portfolio.name} | Portfolio`;

  setText("[data-name]", portfolio.name);
  setText("[data-role]", portfolio.role);
  setText("[data-intro]", portfolio.intro);
  setText("[data-location]", portfolio.location);
  setText("[data-focus]", portfolio.focus);
  setText("[data-availability]", portfolio.availability);
  setText("[data-snapshot]", portfolio.snapshot);
  setText("[data-about-primary]", portfolio.aboutPrimary);
  setText("[data-about-secondary]", portfolio.aboutSecondary);
  setText("[data-contact-copy]", portfolio.contactCopy);
  setText("[data-footer-name]", portfolio.name);

  qsa("[data-contact-link]").forEach((link) => {
    link.href = `mailto:${portfolio.email}`;
    link.textContent = link.classList.contains("nav-cta") ? "Email" : portfolio.email;
  });

  qsa("[data-linkedin-link]").forEach((link) => {
    link.href = portfolio.linkedIn;
    link.target = "_blank";
    link.rel = "noreferrer";
  });

  const resume = qs("[data-resume-link]");
  if (resume && portfolio.resumeUrl) {
    resume.href = portfolio.resumeUrl;
    resume.textContent = "Resume";
    resume.hidden = false;
  }

  renderStats();
  renderCaseStudies();
  renderSkills();
  renderProjects();
  renderTimeline();
}

function renderStats() {
  const container = qs("[data-stats]");
  container.innerHTML = portfolio.stats
    .map(
      (item) => `
        <div class="stat-item">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join("");
}

function renderCaseStudies() {
  const container = qs("[data-case-studies]");
  container.innerHTML = portfolio.caseStudies
    .map(
      (study) => `
        <article class="case-card">
          <div class="case-card-content">
            <div class="case-kicker">
              <span class="tag">${study.type}</span>
            </div>
            <h3>${study.title}</h3>
            <p>${study.summary}</p>
            <strong class="case-outcome">${study.outcome}</strong>
            <div class="project-tags">
              ${study.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="case-visual" aria-hidden="true"></div>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  const container = qs("[data-skills]");
  container.innerHTML = portfolio.skills
    .map(
      (group) => `
        <article class="skill-card">
          <h3>${group.title}</h3>
          <div class="skill-list">
            ${group.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects(activeCategory = "All") {
  const categories = ["All", ...new Set(portfolio.projects.map((project) => project.category))];
  const tabs = qs("[data-filter-tabs]");
  tabs.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-tab"
          type="button"
          role="tab"
          aria-selected="${category === activeCategory}"
          data-category="${category}"
        >
          ${category}
        </button>
      `
    )
    .join("");

  const visible =
    activeCategory === "All"
      ? portfolio.projects
      : portfolio.projects.filter((project) => project.category === activeCategory);

  const grid = qs("[data-projects]");
  grid.innerHTML = visible
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-swatch" style="--swatch: ${project.color}" aria-hidden="true"></div>
          <div class="project-card-body">
            <div class="project-tags">
              <span class="tag">${project.category}</span>
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <a class="project-link" href="${project.href}">
              ${project.href === "#contact" ? "Discuss project" : "Open project"}
            </a>
          </div>
        </article>
      `
    )
    .join("");

  tabs.addEventListener(
    "click",
    (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      renderProjects(button.dataset.category);
    },
    { once: true }
  );
}

function renderTimeline() {
  const container = qs("[data-timeline]");
  container.innerHTML = portfolio.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-meta">
            <span class="tag">${item.period}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
}

function setupHeader() {
  const header = qs("[data-header]");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupCopyEmail() {
  const button = qs("[data-copy-email]");
  const status = qs("[data-copy-status]");
  if (!button || !status) return;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      status.textContent = "Copied.";
    } catch {
      status.textContent = portfolio.email;
    }
  });
}

function setupHeroCanvas() {
  const canvas = qs("#hero-canvas");
  const ctx = canvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: 0.72, y: 0.42 };
  let width = 0;
  let height = 0;
  let deviceRatio = 1;
  let raf = 0;
  let tick = 0;

  const nodes = Array.from({ length: 58 }, (_, index) => ({
    x: ((index * 37) % 100) / 100,
    y: ((index * 61) % 100) / 100,
    r: 2 + (index % 4),
    vx: ((index % 5) - 2) * 0.00042,
    vy: (((index + 2) % 5) - 2) * 0.00036
  }));

  function resize() {
    const rect = canvas.getBoundingClientRect();
    deviceRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.floor(width * deviceRatio);
    canvas.height = Math.floor(height * deviceRatio);
    ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
  }

  function draw() {
    tick += 1;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#17120f";
    ctx.fillRect(0, 0, width, height);

    const bands = [
      ["#0f766e", 0.16, 0.18],
      ["#c94c3f", 0.68, 0.3],
      ["#b98216", 0.48, 0.78],
      ["#594b9a", 0.88, 0.68]
    ];

    bands.forEach(([color, x, y], index) => {
      const pulse = prefersReduced ? 0 : Math.sin((tick + index * 80) / 120) * 18;
      const gradient = ctx.createRadialGradient(
        width * x,
        height * y,
        0,
        width * x,
        height * y,
        Math.max(width, height) * 0.42 + pulse
      );
      gradient.addColorStop(0, `${color}77`);
      gradient.addColorStop(1, `${color}00`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    });

    nodes.forEach((node, index) => {
      if (!prefersReduced) {
        node.x += node.vx + (pointer.x - 0.5) * 0.00006;
        node.y += node.vy + (pointer.y - 0.5) * 0.00004;
        if (node.x < -0.04) node.x = 1.04;
        if (node.x > 1.04) node.x = -0.04;
        if (node.y < -0.04) node.y = 1.04;
        if (node.y > 1.04) node.y = -0.04;
      }

      const x = node.x * width;
      const y = node.y * height;
      ctx.beginPath();
      ctx.arc(x, y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = index % 3 === 0 ? "rgba(255,253,248,0.54)" : "rgba(255,253,248,0.28)";
      ctx.fill();
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const ax = nodes[i].x * width;
        const ay = nodes[i].y * height;
        const bx = nodes[j].x * width;
        const by = nodes[j].y * height;
        const distance = Math.hypot(ax - bx, ay - by);
        if (distance < 126) {
          ctx.strokeStyle = `rgba(255,253,248,${(1 - distance / 126) * 0.18})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
    }

    if (!prefersReduced) raf = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX / Math.max(1, window.innerWidth);
    pointer.y = event.clientY / Math.max(1, window.innerHeight);
  });

  return () => cancelAnimationFrame(raf);
}

applyContent();
setupHeader();
setupCopyEmail();
setupHeroCanvas();
