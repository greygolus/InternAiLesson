export type ResourceSource = {
  label: string;
  href: string;
};

export type ResourceSection = {
  eyebrow: string;
  title: string;
  intro?: string;
  bullets?: string[];
  cards?: Array<{
    title: string;
    body: string;
    tag?: string;
  }>;
  steps?: Array<{
    title: string;
    body: string;
  }>;
  table?: {
    headers: string[];
    rows: string[][];
  };
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export type ResourceGuide = {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  takeaway: string;
  sections: ResourceSection[];
  sources: ResourceSource[];
};

export const resourceGuides: ResourceGuide[] = [
  {
    slug: "models",
    code: "01",
    title: "AI models",
    subtitle: "Choose the engine without chasing the leaderboard",
    description: "Understand what a model is, what changes between model tiers, and how to choose enough capability for the job without wasting time or money.",
    takeaway: "Match the model to the job, not the hype. Start with the default, then change only when speed, cost, privacy, or quality gives you a reason.",
    sections: [
      {
        eyebrow: "City map",
        title: "The model is the building",
        intro: "A company owns a plot in the AI city. It builds a family of models on that plot. The app or harness you use is the storefront where you enter and work.",
        cards: [
          { title: "Company", body: "The organization building and operating the model family.", tag: "Plot" },
          { title: "Model", body: "The underlying intelligence that interprets inputs and generates outputs.", tag: "Building" },
          { title: "Harness", body: "The chat, agent, coding tool, or app that gives you access to a model.", tag: "Storefront" },
        ],
      },
      {
        eyebrow: "Model jobs",
        title: "Most choices fall into four lanes",
        cards: [
          { title: "Capability-first", body: "Use for difficult reasoning, ambiguous planning, complex synthesis, or work where a weak answer creates real cost.", tag: "Deep work" },
          { title: "Balanced default", body: "The best starting point for normal writing, analysis, file work, and everyday agent tasks.", tag: "Start here" },
          { title: "Fast and efficient", body: "Use for simple transformations, classification, extraction, and high-volume repeat work.", tag: "Speed" },
          { title: "Specialized or local", body: "Use when the job needs a specific medium, tool, privacy boundary, or self-hosted model.", tag: "Control" },
        ],
      },
      {
        eyebrow: "Five dials",
        title: "Compare trade-offs that survive model-name changes",
        table: {
          headers: ["Dial", "Question to ask", "When it matters"],
          rows: [
            ["Capability", "Can it reliably handle this level of reasoning and ambiguity?", "Complex or high-consequence work"],
            ["Speed", "How quickly does it respond or finish an agent task?", "Interactive and repeated work"],
            ["Cost / usage", "Is the quality gain worth the extra usage?", "Large files, long sessions, automation"],
            ["Context", "Can it use all the files and instructions needed at once?", "Research, codebases, long histories"],
            ["Privacy / control", "Where is data processed and what can the system retain or access?", "Personal, school, or restricted information"],
          ],
        },
      },
      {
        eyebrow: "Quick choice",
        title: "A three-step model decision",
        steps: [
          { title: "Start with the recommended default", body: "The provider usually chooses a balanced model for normal use. Do not optimize before you have a problem." },
          { title: "Run one representative task", body: "Use a real example, a clear definition of done, and the same prompt when comparing alternatives." },
          { title: "Change one dial", body: "Move up for quality, down for speed or usage, or local for control. Keep the rest of the workflow unchanged." },
        ],
        bullets: [
          "Do not use the largest model for every small task.",
          "Do not treat benchmark rank as proof that a model fits your workflow.",
          "Do not confuse the model with the app, plan, connector, or agent using it.",
        ],
      },
    ],
    sources: [
      { label: "Anthropic - Models overview", href: "https://platform.claude.com/docs/en/about-claude/models/overview" },
      { label: "OpenAI - Models", href: "https://platform.openai.com/docs/models" },
      { label: "Google - Gemini models", href: "https://ai.google.dev/gemini-api/docs/models" },
    ],
  },
  {
    slug: "harnesses",
    code: "02",
    title: "Choosing a harness",
    subtitle: "Pick the place where the work should happen",
    description: "Chat, Cowork, Claude Code, and Codex are different working environments. Choose based on the actions, files, and supervision your task needs.",
    takeaway: "Harness and model are separate choices. Choose the working environment first; choose extra model horsepower only when the task needs it.",
    sections: [
      {
        eyebrow: "Three doors",
        title: "Conversation, delegated work, or building",
        cards: [
          { title: "Chat", body: "Best for questions, learning, brainstorming, drafting, and short back-and-forth work where you stay in the loop.", tag: "Talk" },
          { title: "Cowork", body: "Best for multi-step knowledge work that needs selected folders, files, connectors, skills, or scheduled tasks.", tag: "Delegate" },
          { title: "Code / Codex", body: "Best for building software, editing repositories, running tests, and working inside technical project environments.", tag: "Build" },
        ],
      },
      {
        eyebrow: "Decision table",
        title: "Use the lightest harness that can finish the job",
        table: {
          headers: ["If you need...", "Start with", "Move up when..."],
          rows: [
            ["An answer, explanation, or draft", "Chat", "The task needs files, tools, or several steps"],
            ["A finished document or organized set of files", "Cowork", "The work becomes software or needs a developer loop"],
            ["A website, app, script, or repository change", "Code / Codex", "The task stops being technical"],
            ["A repeatable action on a schedule", "Cowork", "The automation needs a custom application or service"],
          ],
        },
      },
      {
        eyebrow: "Two dials",
        title: "Choose harness and model independently",
        cards: [
          { title: "Harness dial", body: "Controls the workspace: chat, files, tools, terminal, connectors, permissions, and how much the agent can do." },
          { title: "Model dial", body: "Controls the engine: capability, speed, usage, context, and specialized strengths." },
        ],
        bullets: [
          "A powerful model in the wrong harness still cannot access the files or actions the task needs.",
          "A well-configured harness with good context can outperform a stronger model working blind.",
          "Keep one source of truth for context so changing harnesses does not reset your work.",
        ],
      },
      {
        eyebrow: "Safety",
        title: "More agency means more review",
        steps: [
          { title: "Scope access", body: "Give the harness only the folders, apps, and accounts needed for the current result." },
          { title: "Review the plan", body: "Check what it intends to read, change, send, publish, or delete before letting a long task run." },
          { title: "Verify the output", body: "Treat completion as a claim. Open the files, test the result, and inspect what changed." },
        ],
      },
    ],
    sources: [
      { label: "Claude - Get started with Cowork", href: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork" },
      { label: "Anthropic - Claude Code", href: "https://docs.anthropic.com/en/docs/claude-code/getting-started" },
      { label: "OpenAI - Codex", href: "https://developers.openai.com/codex/" },
    ],
  },
  {
    slug: "anatomy",
    code: "03",
    title: "Anatomy of a harness",
    subtitle: "See the layers that turn a model into a working system",
    description: "Context, tools, connectors, MCPs, APIs, skills, computer use, and automations are related, but they are not interchangeable.",
    takeaway: "The model provides intelligence. The harness becomes useful by adding the right context, access, actions, and reusable instructions around it.",
    sections: [
      {
        eyebrow: "Core parts",
        title: "The plain-language map",
        cards: [
          { title: "Context", body: "The facts, files, examples, preferences, and history the AI should use for this task.", tag: "What it knows" },
          { title: "Tool", body: "A specific action the AI can take, such as web search, file editing, code execution, or calculation.", tag: "What it can do" },
          { title: "Connector", body: "A packaged connection to an outside service or account, such as Gmail, Drive, Calendar, or Slack.", tag: "What it can reach" },
          { title: "Plugin", body: "A bundle that can add instructions, connectors, commands, tools, or specialized behavior to a harness.", tag: "Capability pack" },
          { title: "MCP", body: "An open standard that lets AI applications connect to external data, tools, and workflows through a common pattern.", tag: "Common adapter" },
          { title: "API", body: "A defined software interface that lets one program request data or actions from another service.", tag: "Program doorway" },
          { title: "Skill", body: "Saved reusable instructions for how a repeated task should be completed and checked.", tag: "Playbook" },
          { title: "Automation", body: "A workflow triggered by a schedule or event instead of being rebuilt manually each time.", tag: "Standing order" },
        ],
      },
      {
        eyebrow: "Access order",
        title: "Prefer the most precise path",
        table: {
          headers: ["Method", "Best when", "Main caution"],
          rows: [
            ["Local files", "The work already lives in a selected folder", "Scope the folder carefully"],
            ["Connector", "A supported service has structured data or actions", "Confirm the account and permissions"],
            ["MCP", "A harness needs a reusable standard connection", "Trust and review the server"],
            ["Computer use", "No direct connector or tool exists", "Slower and easier to mis-click"],
            ["API", "You are building software or a custom automation", "Credentials, cost, and error handling"],
          ],
        },
      },
      {
        eyebrow: "Build the stack",
        title: "Add capability in this order",
        steps: [
          { title: "Define the outcome", body: "Name what done looks like before adding tools or access." },
          { title: "Add durable context", body: "Give it the smallest trustworthy set of files, examples, and preferences." },
          { title: "Connect only what is needed", body: "Add the exact service or tool the workflow requires." },
          { title: "Save the procedure as a skill", body: "Capture the repeatable steps, output format, and verification rules." },
          { title: "Automate only after it works", body: "Run it manually, inspect failures, then schedule or trigger it." },
        ],
      },
      {
        eyebrow: "Permission rule",
        title: "Access is not permission",
        bullets: [
          "Being able to read a file does not mean the AI should share it.",
          "Being able to open a website does not mean the AI should submit or publish.",
          "Being able to edit a folder does not mean the AI should delete or overwrite important work.",
          "Use the narrowest access that can complete the task, then verify the result.",
        ],
      },
    ],
    sources: [
      { label: "Model Context Protocol - What is MCP?", href: "https://modelcontextprotocol.io/docs/getting-started/intro" },
      { label: "Claude - Get started with Cowork", href: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork" },
      { label: "Claude - Computer use in Cowork", href: "https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork" },
    ],
  },
  {
    slug: "future-proof",
    code: "04",
    title: "Keep up without drowning",
    subtitle: "Own the durable parts and let the tools compete",
    description: "AI changes quickly. Your system should absorb useful changes without forcing you to rebuild your identity, notes, prompts, and workflows every month.",
    takeaway: "Own your context. Rent the model. Keep your knowledge and procedures portable, then swap tools when a real improvement reaches your workflow.",
    sections: [
      {
        eyebrow: "Durable core",
        title: "Keep what outlasts the product cycle",
        cards: [
          { title: "Goals", body: "What outcome matters and how you decide whether it is good." },
          { title: "Context", body: "Your knowledge, projects, examples, preferences, and history in formats you control." },
          { title: "Skills", body: "Reusable procedures, constraints, output formats, and verification rules." },
          { title: "Files", body: "Plain, exportable documents such as Markdown, CSV, images, and standard office formats." },
        ],
      },
      {
        eyebrow: "Weekly signal",
        title: "A twenty-minute update routine",
        steps: [
          { title: "Check official release notes", body: "Follow the two or three products you actually use instead of every AI account online." },
          { title: "Ask one question", body: "Did anything change that improves, breaks, or simplifies one of my real workflows?" },
          { title: "Test one representative task", body: "Use the same input and definition of done so the comparison means something." },
          { title: "Update the system, not your memory", body: "Change the relevant skill, guide, or project note and add an as-of date." },
        ],
      },
      {
        eyebrow: "Lock-in check",
        title: "Make switching boring",
        table: {
          headers: ["Keep portable", "Avoid depending on", "Better pattern"],
          rows: [
            ["Identity and preferences", "One product's private memory", "A local `Me.md` you can move"],
            ["Project knowledge", "Chat history as the only record", "Files in an organized vault or repository"],
            ["Repeat procedures", "A prompt buried in an old thread", "Versioned skills and templates"],
            ["Integrations", "A closed one-off connection", "Open standards and exportable data"],
            ["Decisions", "Remembering why something changed", "Dated notes and short change logs"],
          ],
        },
      },
      {
        eyebrow: "Do not upgrade by reflex",
        title: "Change tools only when the workflow wins",
        bullets: [
          "A new model name is not automatically a reason to move.",
          "A benchmark gain is not useful until it improves your representative task.",
          "New access should be judged by the risk it adds, not only the capability it unlocks.",
          "Keep an as-of date on volatile instructions and review them before an important class or deployment.",
        ],
      },
    ],
    sources: [
      { label: "Anthropic - Release notes", href: "https://support.claude.com/en/articles/12138966-release-notes" },
      { label: "OpenAI - News", href: "https://openai.com/news/" },
      { label: "Google - AI updates", href: "https://blog.google/technology/ai/" },
      { label: "Model Context Protocol", href: "https://modelcontextprotocol.io/docs/getting-started/intro" },
    ],
  },
  {
    slug: "obsidian",
    code: "05",
    title: "Obsidian basics",
    subtitle: "Give your AI a workspace you still own",
    description: "Obsidian is a local folder of Markdown files with a powerful interface on top. Learn the few concepts needed to use the starter vault confidently.",
    takeaway: "You do not need to master Obsidian before using it. Know where files live, link related notes, capture quickly, and let your system grow from real work.",
    sections: [
      {
        eyebrow: "First principle",
        title: "A vault is a folder",
        intro: "Obsidian stores notes in a folder on your computer. That makes the content readable outside Obsidian and gives Cowork a clear folder to access.",
        cards: [
          { title: "Note", body: "A Markdown file. It remains readable as plain text and can be opened by many tools.", tag: ".md" },
          { title: "Vault", body: "The top-level folder Obsidian opens and treats as one workspace.", tag: "Folder" },
          { title: "Link", body: "A connection between notes using `[[Note name]]`, which creates useful navigation and context.", tag: "Relationship" },
          { title: "Property", body: "Structured information at the top of a note, such as date, status, project, or tags.", tag: "Metadata" },
        ],
      },
      {
        eyebrow: "Starter map",
        title: "What each folder is for",
        table: {
          headers: ["Folder", "Use it for", "Example"],
          rows: [
            ["Atlas", "Knowledge worth keeping", "A concept, reference, or lesson learned"],
            ["Calendar", "Anything tied to a date", "Morning Brief, daily note, meeting notes"],
            ["Efforts", "Active projects and outcomes", "A class project or personal workflow"],
            ["Rough Notes", "Fast capture before organizing", "An idea dump or unfinished thought"],
            ["AIOS", "AI-facing context and procedures", "Me.md, maps, skills, saved conversations"],
            ["Templates", "Reusable note starting points", "Rough note or meeting template"],
          ],
        },
      },
      {
        eyebrow: "Three habits",
        title: "Enough Obsidian to be dangerous",
        steps: [
          { title: "Capture before organizing", body: "Put unfinished thoughts in Rough Notes so the filing decision does not interrupt the idea." },
          { title: "Link when the relationship matters", body: "Type `[[` and choose a note. Link projects to context, decisions, and useful source notes." },
          { title: "Use templates for repeated shapes", body: "A template removes blank-page friction and gives AI a predictable structure to work with." },
        ],
      },
      {
        eyebrow: "AI boundary",
        title: "Give Cowork a useful scope",
        bullets: [
          "Connect the vault folder, not your entire computer.",
          "Keep root instructions short and point them to deeper maps and skills.",
          "Mark the current working note so an AI does not act on stale plans.",
          "Keep personal context local and review it before sharing or publishing anything.",
        ],
      },
    ],
    sources: [
      { label: "Obsidian - Create a vault", href: "https://obsidian.md/help/vault" },
      { label: "Obsidian - Internal links", href: "https://obsidian.md/help/links" },
      { label: "Obsidian - Properties", href: "https://obsidian.md/help/properties" },
      { label: "Obsidian - Templates", href: "https://obsidian.md/help/plugins/templates" },
    ],
  },
  {
    slug: "github-vercel",
    code: "06",
    title: "GitHub + Vercel",
    subtitle: "Turn a project folder into a real public website",
    description: "GitHub stores the project and its revision history. Vercel builds and publishes it. Together they create a simple path from local work to a live URL.",
    takeaway: "GitHub is the source of truth; Vercel is the delivery system. Keep secrets out of the repository, preview changes, then publish intentionally.",
    sections: [
      {
        eyebrow: "The pipeline",
        title: "From idea to public URL",
        steps: [
          { title: "Project folder", body: "The files on your computer where the website or application is built and tested." },
          { title: "GitHub repository", body: "The online copy with revision history, a README, visibility settings, and collaboration tools." },
          { title: "Vercel project", body: "A deployment configuration connected to the repository." },
          { title: "Preview deployment", body: "A temporary live version used to inspect changes before they reach the main site." },
          { title: "Production deployment", body: "The approved version connected to the public domain." },
        ],
      },
      {
        eyebrow: "Minimum vocabulary",
        title: "Six words that remove most confusion",
        cards: [
          { title: "Repository", body: "A project and its revision history stored on GitHub." },
          { title: "Commit", body: "A named snapshot of a set of changes." },
          { title: "Branch", body: "A parallel line of work that does not have to change production yet." },
          { title: "Push", body: "Send local commits to the remote repository." },
          { title: "Deployment", body: "A built, hosted version of the project with its own URL." },
          { title: "Domain", body: "The human-friendly address that points to the production deployment." },
        ],
      },
      {
        eyebrow: "Beginner path",
        title: "A safe first deployment",
        steps: [
          { title: "Create the repository", body: "Choose public or private deliberately, add a short README, and keep the project name clear." },
          { title: "Check before pushing", body: "Remove passwords, API keys, personal files, and anything that should not become part of repository history." },
          { title: "Import the repository into Vercel", body: "Choose the repository, confirm the project settings, and deploy." },
          { title: "Open the generated URL", body: "Test the page, links, forms, mobile layout, and browser console before adding a custom domain." },
          { title: "Connect the domain last", body: "Point the domain only after the deployment works at its Vercel URL." },
        ],
      },
      {
        eyebrow: "Public means public",
        title: "Pre-publish checklist",
        bullets: [
          "Confirm repository visibility before the first push.",
          "Never commit `.env` files, API keys, passwords, tokens, or private source material.",
          "Read the generated site as a stranger: names, emails, notes, metadata, downloads, and source files all count.",
          "Use preview deployments for review and keep `main` as the production branch unless you have a reason to change it.",
          "Write a README that explains what the project is and how to run it.",
        ],
      },
    ],
    sources: [
      { label: "GitHub - About repositories", href: "https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories" },
      { label: "GitHub - Repository quickstart", href: "https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories" },
      { label: "GitHub - Repository best practices", href: "https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories" },
      { label: "Vercel - Deploying Git repositories", href: "https://vercel.com/docs/git" },
    ],
  },
  {
    slug: "ai-city",
    code: "07",
    title: "AI is like a city",
    subtitle: "One map for models, harnesses, context, access, and automation",
    description: "Use the city analogy to understand how the major AI pieces relate without memorizing their technical implementation.",
    takeaway: "You work through a storefront powered by a model, connected to data and services, using instructions and permissions you control.",
    sections: [
      {
        eyebrow: "The map",
        title: "Walk through the AI city",
        image: {
          src: "/ai-city.svg",
          alt: "AI city diagram showing companies as plots, models as buildings, harnesses as storefronts, and data connections underground",
          caption: "The original city visual is a memory aid, not a technical architecture diagram.",
        },
      },
      {
        eyebrow: "Translation",
        title: "What each part means",
        table: {
          headers: ["AI concept", "City analogy", "What to remember"],
          rows: [
            ["Company", "Plot owner", "Different companies build and operate different model families"],
            ["Model", "Building", "The underlying engine provides the intelligence"],
            ["Harness", "Storefront or workplace", "The interface determines how you interact and what actions are available"],
            ["Context", "Office records and filing system", "Organized information makes the work more relevant and consistent"],
            ["Prompt", "Work order", "Clear instructions define the result, boundaries, inputs, and format"],
            ["Skill", "Employee playbook", "Reusable instructions stop you from re-explaining repeat work"],
            ["Connector", "Road or utility connection", "A packaged link gives access to an outside service"],
            ["API", "Defined service doorway", "Software uses a known contract to request data or actions"],
            ["MCP", "Common adapter shape", "AI apps can connect to many systems through a shared standard"],
            ["Automation", "Standing order", "A workflow runs on a schedule or trigger"],
          ],
        },
      },
      {
        eyebrow: "Important limits",
        title: "Where the analogy can mislead you",
        bullets: [
          "A bigger building does not automatically mean a better result for every job.",
          "The same storefront can change the model working behind it.",
          "A connector is not the same thing as the data or service it reaches.",
          "Having a key does not create permission to share what is inside.",
          "Real systems overlap: one product may combine a model, harness, tools, and workflow engine.",
        ],
      },
      {
        eyebrow: "Use the map",
        title: "Diagnose a weak workflow",
        steps: [
          { title: "Wrong building?", body: "The model may be too weak, too slow, too expensive, or poorly matched to the task." },
          { title: "Wrong storefront?", body: "The harness may not have the files, tools, or working style the task needs." },
          { title: "Missing records?", body: "The context may be incomplete, stale, contradictory, or unorganized." },
          { title: "Missing connection?", body: "The workflow may need a connector, tool, MCP, API, or manual input." },
          { title: "Weak work order?", body: "The prompt or skill may not define done, constraints, or verification clearly enough." },
        ],
      },
    ],
    sources: [
      { label: "Download the AI City SVG", href: "/ai-city.svg" },
      { label: "Model Context Protocol - What is MCP?", href: "https://modelcontextprotocol.io/docs/getting-started/intro" },
    ],
  },
];

export function getResourceGuide(slug: string) {
  return resourceGuides.find((guide) => guide.slug === slug);
}

