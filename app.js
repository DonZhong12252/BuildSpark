const STORAGE_KEYS = {
  favorites: "codexIdeaFavorites",
  custom: "codexCustomIdeas"
};

const baseProjects = [
  {
    id: "local-crm",
    title: "Mini CRM for Local Services",
    category: "Business",
    difficulty: "Intermediate",
    time: "2-3 days",
    buildMode: "Portfolio project",
    collection: "Business apps",
    stack: "React, localStorage",
    outcome: "Track leads, follow-ups, notes, and simple revenue forecasts for a small service business.",
    tags: ["dashboard", "forms", "pipeline"],
    skills: ["forms", "localStorage", "dashboards", "state management"],
    features: ["Kanban lead pipeline", "Customer profile drawer", "Follow-up reminders", "Revenue summary cards"],
    steps: ["Create seed data for leads and stages", "Build filters and status changes", "Add lead detail editing", "Persist changes in localStorage"],
    upgrade: "Add authentication and a real database so teams can share one pipeline.",
    prompt: "Build a polished mini CRM web app for local service businesses. Users should manage leads across New, Contacted, Quoted, Won, and Lost stages, edit customer details, add notes, set follow-up dates, and see revenue forecast cards. Use localStorage for persistence, responsive layout, accessible controls, realistic seed data, and verify the main workflow in the browser."
  },
  {
    id: "meal-planner",
    title: "Family Meal Planner",
    category: "Lifestyle",
    difficulty: "Beginner",
    time: "1 day",
    buildMode: "Can build in 1 hour",
    collection: "Beginner websites",
    stack: "HTML, CSS, JS",
    outcome: "Plan meals for the week and auto-build a grocery list grouped by aisle.",
    tags: ["planner", "lists", "household"],
    skills: ["forms", "arrays", "print styles", "localStorage"],
    features: ["Weekly meal grid", "Recipe cards", "Grouped grocery list", "Printable shopping mode"],
    steps: ["Model recipes with ingredients", "Let users assign recipes to days", "Generate the grocery list", "Add print-friendly CSS"],
    upgrade: "Add dietary filters, budget estimates, and import from pasted recipe text.",
    prompt: "Create a family meal planner website. It should have a weekly calendar, recipe cards, drag or click assignment to days, and a grocery list that groups ingredients by aisle. Include realistic sample recipes, a print-friendly shopping view, local state persistence, and a clean responsive design."
  },
  {
    id: "study-sprint",
    title: "Study Sprint Coach",
    category: "Education",
    difficulty: "Beginner",
    time: "1-2 days",
    buildMode: "Weekend project",
    collection: "Beginner websites",
    stack: "React, timers",
    outcome: "Help students break a subject into timed focus sprints with review checkpoints.",
    tags: ["timer", "education", "habits"],
    skills: ["timers", "state machines", "forms", "progress UI"],
    features: ["Sprint timer", "Topic queue", "Review checklist", "Session recap"],
    steps: ["Build the topic intake form", "Create focus and break timer states", "Track completed topics", "Render a recap with next actions"],
    upgrade: "Add spaced repetition scheduling and exportable study logs.",
    prompt: "Build a study sprint coach app for students. Users enter topics, choose sprint length, run focus and break timers, mark understanding levels, and receive a session recap with suggested next steps. Make it responsive, keyboard friendly, and persist the current session locally."
  },
  {
    id: "creator-command",
    title: "Creator Content Command Center",
    category: "Creator",
    difficulty: "Intermediate",
    time: "2 days",
    buildMode: "Portfolio project",
    collection: "Dashboards",
    stack: "React, charts",
    outcome: "Organize content ideas, publishing status, channel fit, and performance notes.",
    tags: ["content", "calendar", "analytics"],
    skills: ["calendar UI", "filters", "charts", "content modeling"],
    features: ["Idea backlog", "Editorial calendar", "Channel tags", "Performance notes"],
    steps: ["Design content status data", "Build backlog and calendar views", "Add idea detail panel", "Create simple analytics summaries"],
    upgrade: "Connect to a social scheduler API or add AI-assisted title variants.",
    prompt: "Create a creator content command center. It should let users capture content ideas, tag them by channel, move them through Draft, Scheduled, Published, and Repurpose stages, view a weekly calendar, and record performance notes. Include realistic creator data, useful filters, copy-ready content briefs, and local persistence."
  },
  {
    id: "habit-market",
    title: "Habit Market Game",
    category: "Games",
    difficulty: "Advanced",
    time: "3-5 days",
    buildMode: "Portfolio project",
    collection: "Games",
    stack: "Canvas, JS",
    outcome: "Turn daily habits into a simple market simulation where consistent habits grow assets.",
    tags: ["game", "habits", "simulation"],
    skills: ["game loop", "simulation", "charts", "localStorage"],
    features: ["Habit assets", "Daily check-ins", "Market events", "Portfolio growth"],
    steps: ["Define habit asset rules", "Build check-in interactions", "Simulate market events", "Visualize portfolio changes"],
    upgrade: "Add streak protection, achievements, and animated market events.",
    prompt: "Build a habit market game where each habit behaves like an asset. Users create habits, check them off daily, and see a portfolio value rise or fall based on consistency and random market events. Include a dashboard, event feed, simple charts, local persistence, and a clear game loop."
  },
  {
    id: "job-tracker",
    title: "Job Hunt Tracker",
    category: "Career",
    difficulty: "Beginner",
    time: "1 day",
    buildMode: "Can build in 1 hour",
    collection: "Beginner websites",
    stack: "HTML, CSS, JS",
    outcome: "Track job applications, contacts, deadlines, interview stages, and follow-up tasks.",
    tags: ["career", "tracker", "tasks"],
    skills: ["tables", "filters", "forms", "localStorage"],
    features: ["Application table", "Stage filters", "Contact notes", "Follow-up queue"],
    steps: ["Create application seed data", "Build sortable table columns", "Add detail editing", "Surface overdue follow-ups"],
    upgrade: "Add resume version tracking and email template generation.",
    prompt: "Build a job hunt tracker. Users should add applications, company contacts, stage, deadline, salary range, notes, and follow-up tasks. Include filters for stage and overdue follow-ups, a clean application detail panel, localStorage persistence, and a responsive mobile layout."
  },
  {
    id: "inventory-lite",
    title: "Home Inventory Lite",
    category: "Productivity",
    difficulty: "Intermediate",
    time: "2 days",
    buildMode: "Weekend project",
    collection: "Dashboards",
    stack: "React, IndexedDB",
    outcome: "Catalog household items, warranties, receipts, and maintenance reminders.",
    tags: ["inventory", "documents", "reminders"],
    skills: ["IndexedDB", "CSV export", "search", "alerts"],
    features: ["Room-based inventory", "Warranty dates", "Receipt metadata", "Maintenance schedule"],
    steps: ["Model rooms and items", "Build item creation flow", "Add warranty warnings", "Create CSV export"],
    upgrade: "Add image uploads and cloud backup.",
    prompt: "Create a home inventory dashboard. Users should organize items by room, store purchase date, value, warranty expiration, maintenance notes, and receipt metadata. Include search, filters, summary value cards, upcoming warranty alerts, CSV export, and local persistence."
  },
  {
    id: "micro-saas-lab",
    title: "Micro-SaaS Idea Validator",
    category: "Business",
    difficulty: "Advanced",
    time: "3 days",
    buildMode: "Startup idea",
    collection: "Business apps",
    stack: "React, forms, scoring",
    outcome: "Score startup ideas by audience pain, willingness to pay, build complexity, and acquisition path.",
    tags: ["startup", "scoring", "strategy"],
    skills: ["scoring", "forms", "comparison views", "strategy tools"],
    features: ["Idea intake", "Scoring rubric", "Competitor notes", "Validation roadmap"],
    steps: ["Build rubric sliders", "Calculate weighted score", "Render risk flags", "Generate next experiment checklist"],
    upgrade: "Add collaborative scoring and AI-generated landing page tests.",
    prompt: "Build a micro-SaaS idea validator. Users enter an idea, target customer, pain level, current alternatives, pricing hypothesis, acquisition channel, and build complexity. The app should score the idea, show risk flags, compare saved ideas, and produce a validation roadmap with experiments."
  },
  {
    id: "ai-inbox-triage",
    title: "AI Inbox Triage Mockup",
    category: "AI Tools",
    difficulty: "Advanced",
    time: "3-4 days",
    buildMode: "Startup idea",
    collection: "AI tools",
    stack: "React, mock AI responses",
    outcome: "Prioritize messages, draft replies, and turn email into tasks without needing a real email integration.",
    tags: ["ai", "email", "automation"],
    skills: ["AI UX", "queues", "approval flows", "task creation"],
    features: ["Priority inbox", "Draft reply panel", "Task extraction", "Approval queue"],
    steps: ["Seed realistic messages", "Create priority scoring states", "Build draft and task panels", "Add approve, edit, and archive actions"],
    upgrade: "Connect to Gmail, Outlook, or an AI model once the workflow feels right.",
    prompt: "Build an AI inbox triage dashboard using realistic mock email data. Users should see prioritized messages, inspect why each item is urgent, edit suggested reply drafts, convert emails into tasks, and approve or archive suggestions. Use simulated AI output, clear trust indicators, local persistence, and responsive dashboard design."
  },
  {
    id: "api-status-board",
    title: "API Status Board",
    category: "Developer",
    difficulty: "Intermediate",
    time: "Weekend",
    buildMode: "Weekend project",
    collection: "Developer tools",
    stack: "React, charts",
    outcome: "Monitor mock services, uptime, incidents, latency, and deployment notes in one status dashboard.",
    tags: ["developer", "monitoring", "charts"],
    skills: ["charts", "tables", "status modeling", "incident UX"],
    features: ["Service status grid", "Latency spark lines", "Incident timeline", "Maintenance notes"],
    steps: ["Create mock service telemetry", "Build status cards", "Render incident timeline", "Add filters for service health"],
    upgrade: "Fetch live checks from an API and send webhook alerts.",
    prompt: "Create an API status board for a small engineering team. Include service health cards, latency history, uptime percentages, an incident timeline, maintenance notes, and filters by status. Use realistic mock data, accessible charts or sparklines, responsive layout, and local state for incident updates."
  },
  {
    id: "freelance-proposal-studio",
    title: "Freelance Proposal Studio",
    category: "Business",
    difficulty: "Intermediate",
    time: "2 days",
    buildMode: "Startup idea",
    collection: "Business apps",
    stack: "React, templates",
    outcome: "Help freelancers turn client notes into scoped proposals, pricing options, timelines, and reusable templates.",
    tags: ["freelance", "pricing", "templates"],
    skills: ["forms", "template editing", "pricing logic", "export UX"],
    features: ["Client brief intake", "Package builder", "Scope checklist", "Proposal preview"],
    steps: ["Create intake fields", "Build pricing package cards", "Generate proposal copy", "Add editable preview and copy buttons"],
    upgrade: "Add PDF export, client signatures, and payment links.",
    prompt: "Build a freelance proposal studio. Users enter client goals, deliverables, timeline, budget range, and risks, then the app creates editable proposal sections, package options, a scope checklist, and a copy-ready final proposal. Include realistic templates, local persistence, and responsive design."
  },
  {
    id: "landing-page-roaster",
    title: "Landing Page Roast Lab",
    category: "AI Tools",
    difficulty: "Intermediate",
    time: "Weekend",
    buildMode: "Portfolio project",
    collection: "AI tools",
    stack: "React, simulated AI",
    outcome: "Paste landing page copy and get conversion-focused feedback, rewrite ideas, and test hypotheses.",
    tags: ["ai", "marketing", "copywriting"],
    skills: ["text analysis UX", "scoring", "tabs", "copy tools"],
    features: ["Copy paste input", "Conversion score", "Rewrite suggestions", "Experiment checklist"],
    steps: ["Build the input and scoring panel", "Create feedback categories", "Render rewrite variants", "Add copy and save actions"],
    upgrade: "Connect to a model API and add screenshot analysis.",
    prompt: "Create a landing page roast lab using simulated AI analysis. Users paste headline, subcopy, CTA, audience, and offer details. The app returns a conversion score, message clarity notes, objection handling gaps, rewrite variants, and A/B test ideas. Make the interface polished, actionable, and locally persistent."
  },
  {
    id: "personal-finance-radar",
    title: "Personal Finance Radar",
    category: "Productivity",
    difficulty: "Advanced",
    time: "3 days",
    buildMode: "Portfolio project",
    collection: "Dashboards",
    stack: "React, charts",
    outcome: "Reveal spending patterns, subscriptions, savings goals, and upcoming bill risk from sample data.",
    tags: ["finance", "dashboard", "charts"],
    skills: ["charts", "tables", "data grouping", "alerts"],
    features: ["Spending categories", "Subscription tracker", "Goal progress", "Bill risk alerts"],
    steps: ["Model transactions", "Group spend by category", "Build goal and bill panels", "Add filters and insights"],
    upgrade: "Import CSV bank exports and add recurring transaction detection.",
    prompt: "Build a personal finance radar dashboard with realistic sample transactions. Show spending categories, recurring subscriptions, savings goal progress, upcoming bills, and risk alerts. Include filters by month and category, chart summaries, local persistence, and clear privacy-friendly copy."
  },
  {
    id: "habit-coach-chat",
    title: "Habit Coach Chat Simulator",
    category: "AI Tools",
    difficulty: "Beginner",
    time: "1 day",
    buildMode: "Can build in 1 hour",
    collection: "AI tools",
    stack: "HTML, CSS, JS",
    outcome: "Practice building an AI-style coaching interface with goal setting, check-ins, and suggested next actions.",
    tags: ["ai", "chat", "habits"],
    skills: ["chat UI", "local state", "forms", "empty states"],
    features: ["Goal setup", "Chat transcript", "Check-in buttons", "Action plan summary"],
    steps: ["Create goal intake", "Build chat message state", "Add canned coach responses", "Summarize next steps"],
    upgrade: "Connect to a real model and add long-term memory.",
    prompt: "Build a habit coach chat simulator. Users set a goal, answer check-in questions, receive supportive suggested next actions, and see a summary action plan. Use simulated coach responses, clean chat UI, local persistence, and accessible controls."
  },
  {
    id: "community-event-planner",
    title: "Community Event Planner",
    category: "Lifestyle",
    difficulty: "Intermediate",
    time: "2 days",
    buildMode: "Weekend project",
    collection: "Beginner websites",
    stack: "React, localStorage",
    outcome: "Plan a meetup with tasks, budget, volunteers, venue options, and public schedule.",
    tags: ["events", "planning", "community"],
    skills: ["task boards", "budget tables", "forms", "responsive layout"],
    features: ["Event overview", "Volunteer roles", "Budget tracker", "Public agenda"],
    steps: ["Create event data model", "Build task and role lists", "Add budget entries", "Render shareable agenda view"],
    upgrade: "Add RSVP forms and calendar export.",
    prompt: "Create a community event planner for small meetups. Users manage event details, tasks, volunteers, venue options, budget items, and a public agenda. Include realistic sample event data, local persistence, status filters, and responsive layouts."
  },
  {
    id: "creator-sponsor-kit",
    title: "Creator Sponsor Kit",
    category: "Creator",
    difficulty: "Intermediate",
    time: "2 days",
    buildMode: "Startup idea",
    collection: "Business apps",
    stack: "React, forms",
    outcome: "Help creators package audience data, sponsorship offers, deliverables, and outreach copy.",
    tags: ["creator", "sponsors", "media kit"],
    skills: ["forms", "preview panels", "pricing", "copy generation"],
    features: ["Audience profile", "Offer packages", "Deliverables checklist", "Outreach email drafts"],
    steps: ["Build profile inputs", "Create package builder", "Render media kit preview", "Add copy-ready outreach messages"],
    upgrade: "Add PDF export and sponsor CRM tracking.",
    prompt: "Build a creator sponsor kit generator. Users enter audience stats, niche, channels, past brand examples, deliverables, and pricing. The app generates sponsorship packages, a media kit preview, and outreach email drafts. Include local persistence, editable sections, and a polished creator-focused design."
  },
  {
    id: "bug-bounty-tracker",
    title: "Bug Bounty Tracker",
    category: "Developer",
    difficulty: "Advanced",
    time: "3 days",
    buildMode: "Portfolio project",
    collection: "Developer tools",
    stack: "React, tables",
    outcome: "Track programs, findings, severity, reproduction steps, disclosure status, and payout estimates.",
    tags: ["security", "developer", "tracker"],
    skills: ["tables", "status workflows", "markdown notes", "filters"],
    features: ["Program list", "Finding details", "Severity labels", "Disclosure timeline"],
    steps: ["Model programs and reports", "Build table filters", "Create finding detail editor", "Add payout and status summaries"],
    upgrade: "Add encrypted local storage and report export.",
    prompt: "Build a bug bounty tracker for security learners. Users track programs, findings, severity, reproduction steps, evidence notes, disclosure status, and payout estimates. Include filters, markdown-like notes, realistic sample reports, local persistence, and a careful professional UI."
  },
  {
    id: "portfolio-case-study-builder",
    title: "Portfolio Case Study Builder",
    category: "Career",
    difficulty: "Beginner",
    time: "1 day",
    buildMode: "Portfolio project",
    collection: "Beginner websites",
    stack: "HTML, CSS, JS",
    outcome: "Turn a project into a polished case study with problem, process, screenshots, metrics, and lessons.",
    tags: ["portfolio", "career", "writing"],
    skills: ["forms", "content preview", "copy tools", "responsive design"],
    features: ["Case study form", "Live preview", "Section prompts", "Copy/export buttons"],
    steps: ["Create guided fields", "Build live preview", "Add section quality checklist", "Copy formatted case study"],
    upgrade: "Add themes, hosted pages, and image upload support.",
    prompt: "Build a portfolio case study builder. Users answer guided prompts about a project problem, role, constraints, process, result, metrics, and lessons. The app renders a polished case study preview with copy/export actions, quality checklist, local persistence, and responsive design."
  }
];

const icons = {
  Business: '<path d="M4 18V8l8-4 8 4v10M8 18v-6h8v6" />',
  Lifestyle: '<path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" />',
  Education: '<path d="m3 8 9-4 9 4-9 4-9-4ZM7 10.5V16c2.8 2 7.2 2 10 0v-5.5" />',
  Creator: '<path d="M5 5h14v10H8l-3 3V5ZM9 9h6M9 12h4" />',
  Games: '<path d="M8 14H6m1-1v2m9-1h.01M18 12h.01M7 18h10a4 4 0 0 0 3.8-5.2l-1-3A4 4 0 0 0 16 7H8a4 4 0 0 0-3.8 2.8l-1 3A4 4 0 0 0 7 18Z" />',
  Career: '<path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M4 8h16v11H4zM4 12h16" />',
  Productivity: '<path d="M9 11 12 14 22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />',
  Developer: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 4l-4 16" />',
  "AI Tools": '<path d="M12 3v3M12 18v3M4.6 5.6l2.1 2.1M17.3 16.3l2.1 2.1M3 12h3M18 12h3M4.6 18.4l2.1-2.1M17.3 7.7l2.1-2.1M9 9h6v6H9z" />'
};

const state = {
  search: "",
  category: "all",
  difficulty: "all",
  collection: "all",
  buildMode: "all",
  view: "all",
  selectedId: baseProjects[0].id,
  promptLevel: "detailed",
  favorites: new Set(readJson(STORAGE_KEYS.favorites, [])),
  customProjects: readJson(STORAGE_KEYS.custom, [])
};

const projectGrid = document.querySelector("#projectGrid");
const detailPanel = document.querySelector("#detailPanel");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const difficultyFilter = document.querySelector("#difficultyFilter");
const collectionFilter = document.querySelector("#collectionFilter");
const buildModeFilter = document.querySelector("#buildModeFilter");
const visibleCount = document.querySelector("#visibleCount");
const savedCount = document.querySelector("#savedCount");
const customCount = document.querySelector("#customCount");
const toast = document.querySelector("#toast");
const ideaDialog = document.querySelector("#ideaDialog");
const ideaForm = document.querySelector("#ideaForm");
const challengeScore = document.querySelector("#challengeScore");
const dailyChallengeTitle = document.querySelector("#dailyChallengeTitle");
const dailyChallengeText = document.querySelector("#dailyChallengeText");
const matchGoal = document.querySelector("#matchGoal");
const matchLevel = document.querySelector("#matchLevel");

function init() {
  populateFilters();
  bindEvents();
  render();
}

function getProjects() {
  return [...baseProjects, ...state.customProjects].map(normalizeProject);
}

function normalizeProject(project) {
  const prompt = project.prompt || `Build ${project.title}. ${project.outcome}`;
  return {
    ...project,
    id: project.id || `custom-${Date.now()}`,
    category: project.category || "Custom",
    difficulty: project.difficulty || "Beginner",
    time: project.time || project.buildMode || "Custom scope",
    buildMode: project.buildMode || "Weekend project",
    collection: project.collection || "My ideas",
    stack: project.stack || "HTML, CSS, JS",
    tags: project.tags?.length ? project.tags : ["custom"],
    skills: project.skills?.length ? project.skills : ["planning", "UI", "local state"],
    features: project.features?.length ? project.features : ["Core workflow", "Responsive UI", "Local persistence"],
    steps: project.steps?.length ? project.steps : ["Plan the data", "Build the main view", "Verify the workflow"],
    upgrade: project.upgrade || "Add real accounts, a database, and deployment when the prototype works.",
    prompt,
    prompts: buildPromptLevels(project, prompt)
  };
}

function buildPromptLevels(project, prompt) {
  return {
    quick: `Build ${project.title}. ${project.outcome} Include the core workflow, responsive UI, realistic sample data, and local persistence.`,
    detailed: prompt,
    production: `${prompt}\n\nMake it production-ready: use a clean component structure, accessible controls, empty/loading/error states, responsive desktop and mobile layouts, realistic seed data, local persistence, input validation, and browser verification for the main user workflow.`
  };
}

function populateFilters() {
  const projects = getProjects();
  populateSelect(categoryFilter, [...new Set(projects.map((project) => project.category))].sort());
  populateSelect(collectionFilter, [...new Set(projects.map((project) => project.collection))].sort());
}

function populateSelect(select, values) {
  const first = select.querySelector("option")?.outerHTML || "";
  select.innerHTML = first + values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
}

function bindEvents() {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    render();
  });

  categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    render();
  });

  difficultyFilter.addEventListener("change", (event) => {
    state.difficulty = event.target.value;
    render();
  });

  collectionFilter.addEventListener("change", (event) => {
    state.collection = event.target.value;
    render();
  });

  buildModeFilter.addEventListener("change", (event) => {
    state.buildMode = event.target.value;
    render();
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.view = button.dataset.view;
      render();
    });
  });

  document.querySelector("#randomIdea").addEventListener("click", () => {
    pickRandomBuild();
  });

  document.querySelector("#openIdeaForm").addEventListener("click", () => ideaDialog.showModal());
  document.querySelector("#openIdeaFormHero").addEventListener("click", () => ideaDialog.showModal());
  document.querySelector("#openIdeaFormBottom").addEventListener("click", () => ideaDialog.showModal());
  document.querySelector("#heroRandom").addEventListener("click", pickRandomBuild);
  document.querySelector("#openDailyChallenge").addEventListener("click", openDailyChallenge);
  document.querySelector("#runMatchmaker").addEventListener("click", runMatchmaker);
  document.querySelectorAll(".path-card").forEach((button) => {
    button.addEventListener("click", () => applyPath(button.dataset.path));
  });
  document.querySelector("#closeIdeaForm").addEventListener("click", () => ideaDialog.close());
  document.querySelector("#resetIdeas").addEventListener("click", resetCustomIdeas);
  ideaForm.addEventListener("submit", saveCustomIdea);
}

function pickRandomBuild() {
  const filtered = getFilteredProjects();
  const pool = filtered.length ? filtered : getProjects();
  const next = pool[Math.floor(Math.random() * pool.length)];
  openProject(next.id);
}

function openProject(id) {
  state.selectedId = id;
  state.promptLevel = "detailed";
  render();
  document.querySelector("#explore").scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyPath(path) {
  state.view = "all";
  state.collection = path;
  collectionFilter.value = path;
  categoryFilter.value = "all";
  difficultyFilter.value = "all";
  buildModeFilter.value = "all";
  state.category = "all";
  state.difficulty = "all";
  state.buildMode = "all";
  setActiveNav("all");
  render();
  document.querySelector("#explore").scrollIntoView({ behavior: "smooth", block: "start" });
}

function runMatchmaker() {
  state.view = "all";
  state.buildMode = matchGoal.value;
  state.difficulty = matchLevel.value;
  state.category = "all";
  state.collection = "all";
  buildModeFilter.value = state.buildMode;
  difficultyFilter.value = state.difficulty;
  categoryFilter.value = "all";
  collectionFilter.value = "all";
  setActiveNav("all");
  render();
  const firstMatch = getFilteredProjects()[0];
  if (firstMatch) {
    openProject(firstMatch.id);
    showToast("Matched a build path");
  }
}

function getDailyChallenge() {
  const projects = getProjects();
  const dayIndex = Math.floor(Date.now() / 86400000) % projects.length;
  return projects[dayIndex];
}

function openDailyChallenge() {
  openProject(getDailyChallenge().id);
}

function getFilteredProjects() {
  return getProjects().filter((project) => {
    const searchable = [
      project.title,
      project.category,
      project.difficulty,
      project.time,
      project.stack,
      project.outcome,
      project.collection,
      project.buildMode,
      project.tags.join(" "),
      project.skills.join(" "),
      project.features.join(" "),
      project.prompt
    ].join(" ").toLowerCase();

    const matchesSearch = !state.search || searchable.includes(state.search);
    const matchesCategory = state.category === "all" || project.category === state.category;
    const matchesDifficulty = state.difficulty === "all" || project.difficulty === state.difficulty;
    const matchesCollection = state.collection === "all" || project.collection === state.collection;
    const matchesBuildMode = state.buildMode === "all" || project.buildMode === state.buildMode;
    const matchesView =
      state.view === "all" ||
      (state.view === "beginner" && project.difficulty === "Beginner") ||
      (state.view === "apps" && ["Productivity", "Lifestyle", "Education", "Career", "AI Tools", "Developer"].includes(project.category)) ||
      (state.view === "business" && project.category === "Business") ||
      (state.view === "saved" && state.favorites.has(project.id)) ||
      (state.view === "custom" && project.custom);

    return matchesSearch && matchesCategory && matchesDifficulty && matchesCollection && matchesBuildMode && matchesView;
  });
}

function render() {
  const filtered = getFilteredProjects();
  visibleCount.textContent = filtered.length;
  savedCount.textContent = state.favorites.size;
  customCount.textContent = state.customProjects.length;
  challengeScore.textContent = `${state.favorites.size} saved`;
  const daily = getDailyChallenge();
  dailyChallengeTitle.textContent = daily.title;
  dailyChallengeText.textContent = daily.outcome;

  if (!filtered.some((project) => project.id === state.selectedId) && filtered[0]) {
    state.selectedId = filtered[0].id;
    state.promptLevel = "detailed";
  }

  projectGrid.innerHTML = filtered.length
    ? filtered.map(renderCard).join("")
    : '<div class="empty">No ideas match those filters. Try a different search, category, or saved/custom view.</div>';

  projectGrid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedId = card.dataset.id;
      state.promptLevel = "detailed";
      render();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        state.selectedId = card.dataset.id;
        state.promptLevel = "detailed";
        render();
      }
    });
  });

  projectGrid.querySelectorAll(".favorite-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.id);
    });
  });

  const selected = getProjects().find((project) => project.id === state.selectedId) || filtered[0] || getProjects()[0];
  renderDetail(selected);
}

function renderCard(project) {
  const saved = state.favorites.has(project.id);
  return `
    <article class="project-card ${project.id === state.selectedId ? "selected" : ""}" data-id="${project.id}" tabindex="0" role="button">
      <div class="card-top">
        <span class="icon-tile" aria-hidden="true"><svg viewBox="0 0 24 24">${icons[project.category] || icons.Productivity}</svg></span>
        <button class="favorite-button ${saved ? "saved" : ""}" data-id="${project.id}" type="button" aria-label="${saved ? "Remove from saved" : "Save idea"}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
        </button>
      </div>
      ${renderPreview(project)}
      <div>
        <div class="title-row">
          <h3>${escapeHtml(project.title)}</h3>
          <span class="difficulty ${project.difficulty}">${escapeHtml(project.difficulty)}</span>
        </div>
        <p>${escapeHtml(project.outcome)}</p>
      </div>
      <div class="meta-row">
        <span>${escapeHtml(project.category)}</span>
        <span>${escapeHtml(project.buildMode)}</span>
        <span>${escapeHtml(project.stack)}</span>
      </div>
      <div class="tag-row">
        ${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderPreview(project) {
  const bars = project.features.slice(0, 4).map((feature, index) => `<span style="--w:${92 - index * 13}%">${escapeHtml(feature)}</span>`).join("");
  return `
    <div class="preview ${slug(project.category)}" aria-hidden="true">
      <div class="preview-nav"></div>
      <div class="preview-body">
        <div class="preview-chart">${bars}</div>
        <div class="preview-side"></div>
      </div>
    </div>
  `;
}

function renderDetail(project) {
  const currentPrompt = project.prompts[state.promptLevel] || project.prompts.detailed;
  const brief = createStarterBrief(project);
  detailPanel.innerHTML = `
    <div class="detail-top">
      <div class="meta-row">
        <span>${escapeHtml(project.collection)}</span>
        <span>${escapeHtml(project.difficulty)}</span>
        <span>${escapeHtml(project.buildMode)}</span>
      </div>
      <button class="favorite-button ${state.favorites.has(project.id) ? "saved" : ""}" id="detailFavorite" type="button" aria-label="Save idea">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>
      </button>
    </div>
    <h2>${escapeHtml(project.title)}</h2>
    <p class="lead">${escapeHtml(project.outcome)}</p>

    <div class="detail-block">
      <h3>Skills This Teaches</h3>
      <div class="skill-grid">
        ${project.skills.map((skill) => `<span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>${escapeHtml(skill)}</span>`).join("")}
      </div>
    </div>

    <div class="detail-block">
      <h3>What Codex Should Build</h3>
      <ul class="detail-list">
        ${project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}
      </ul>
    </div>

    <div class="detail-block">
      <h3>How To Do It</h3>
      <ul class="detail-list">
        ${project.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
      </ul>
    </div>

    <div class="detail-block">
      <h3>Prompt Quality</h3>
      <div class="prompt-tabs" role="tablist" aria-label="Prompt levels">
        ${["quick", "detailed", "production"].map((level) => `
          <button class="${state.promptLevel === level ? "active" : ""}" data-level="${level}" type="button">${level === "production" ? "Production-ready" : titleCase(level)}</button>
        `).join("")}
      </div>
      <div class="prompt-box">${escapeHtml(currentPrompt)}</div>
      <div class="copy-row">
        <button class="copy-button" id="copyPrompt" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8h11v11H8zM5 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1" /></svg>
          Copy prompt
        </button>
        <button class="ghost-button" id="copyBrief" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>
          Copy starter brief
        </button>
      </div>
    </div>

    <div class="detail-block">
      <h3>One-Click Starter Brief</h3>
      <div class="prompt-box brief-box">${escapeHtml(brief)}</div>
    </div>

    <div class="detail-block">
      <h3>Upgrade Path</h3>
      <p class="lead">${escapeHtml(project.upgrade)}</p>
    </div>
  `;

  document.querySelector("#detailFavorite").addEventListener("click", () => toggleFavorite(project.id));
  document.querySelectorAll(".prompt-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      state.promptLevel = button.dataset.level;
      renderDetail(project);
    });
  });
  document.querySelector("#copyPrompt").addEventListener("click", () => copyText(currentPrompt, "Prompt copied"));
  document.querySelector("#copyBrief").addEventListener("click", () => copyText(brief, "Starter brief copied"));
}

function createStarterBrief(project) {
  return `${project.title}

Goal:
${project.outcome}

Build mode:
${project.buildMode}

Suggested stack:
${project.stack}

Core features:
- ${project.features.join("\n- ")}

Implementation steps:
- ${project.steps.join("\n- ")}

Skills covered:
- ${project.skills.join("\n- ")}

Acceptance criteria:
- The main workflow can be completed from the first screen.
- Filters, forms, and selected states visibly update the UI.
- Data persists locally when relevant.
- Empty states and mobile layout are handled.

Verification:
- Run the app locally.
- Test the main workflow on desktop and mobile widths.
- Confirm there are no console errors.
- Verify copy, filters, saved state, and generated output behave as expected.

Codex prompt:
${project.prompts.production}`;
}

function saveCustomIdea(event) {
  event.preventDefault();
  const data = new FormData(ideaForm);
  const customProject = normalizeProject({
    id: `custom-${Date.now()}`,
    custom: true,
    title: data.get("title").trim(),
    category: data.get("category").trim(),
    difficulty: data.get("difficulty"),
    buildMode: data.get("buildMode"),
    collection: data.get("collection").trim() || "My ideas",
    time: data.get("buildMode"),
    stack: data.get("stack").trim() || "HTML, CSS, JS",
    outcome: data.get("outcome").trim(),
    tags: splitComma(data.get("tags")),
    skills: splitComma(data.get("skills")),
    features: splitLines(data.get("features")),
    steps: splitLines(data.get("steps")),
    prompt: data.get("prompt").trim()
  });

  state.customProjects.unshift(customProject);
  state.selectedId = customProject.id;
  state.view = "custom";
  writeJson(STORAGE_KEYS.custom, state.customProjects);
  ideaForm.reset();
  ideaDialog.close();
  populateFilters();
  setActiveNav("custom");
  render();
  showToast("Idea saved");
}

function resetCustomIdeas() {
  state.customProjects = [];
  localStorage.removeItem(STORAGE_KEYS.custom);
  populateFilters();
  render();
  showToast("Custom ideas reset");
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast("Removed from saved");
  } else {
    state.favorites.add(id);
    showToast("Idea saved");
  }
  writeJson(STORAGE_KEYS.favorites, [...state.favorites]);
  render();
}

async function copyText(text, message = "Copied") {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
  showToast(message);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1600);
}

function setActiveNav(view) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
}

function splitComma(value) {
  return String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
}

function splitLines(value) {
  return String(value || "").split("\n").map((item) => item.trim()).filter(Boolean);
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

init();
