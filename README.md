# 🤖 One Prompt, Four AI Models — Portfolio Experiment

> **Can a single prompt produce a production-ready portfolio?** We gave the exact same prompt to four different AI models and compared what they built — completely unedited.

<br>

<div align="center">

**[Gemini 3 Pro](#-gemini-3-pro) · [Gemini 3 Flash](#-gemini-3-flash) · [Claude Sonnet 4.5](#-claude-sonnet-45) · [Claude Opus 4.6](#-claude-opus-46)**

</div>

<br>

## 📋 Table of Contents

- [About the Experiment](#-about-the-experiment)
- [The Prompt (Exactly As Used)](#-the-prompt-exactly-as-used)
- [Models & Results](#-models--results)
  - [Gemini 3 Pro](#-gemini-3-pro)
  - [Gemini 3 Flash](#-gemini-3-flash)
  - [Claude Sonnet 4.5](#-claude-sonnet-45)
  - [Claude Opus 4.6](#-claude-opus-46)
- [Comparison Table](#-comparison-table)
- [Key Observations](#-key-observations)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [License](#-license)

---

## 🧪 About the Experiment

This project is a **controlled experiment** to test how different AI coding assistants handle the same front-end development task. The goal is simple:

1. Set up a Next.js 13+ project with TypeScript and Tailwind CSS
2. Give the **exact same prompt** to 4 different AI models
3. Let each model generate a complete portfolio landing page
4. **Change nothing.** Ship the raw output as-is
5. Compare the results side by side

Each AI model operated in **agent mode** inside the real project — meaning they had access to the file system and created the files themselves. This is not a copy-paste exercise; each model autonomously decided on the architecture, design, and code structure.

The main landing page (`/`) serves as a hub that links to each model's generated portfolio, so you can browse and compare them directly.

### Why This Matters

AI-assisted coding is evolving fast. But _how good are these models, really?_ Can they:
- Follow strict technical constraints?
- Produce visually appealing, responsive designs?
- Write clean, maintainable code?
- Handle edge cases (dynamic year, no dead links, no `#` hrefs)?

This experiment answers those questions with real, unedited outputs.

---

## 📝 The Prompt (Exactly As Used)

Every model received the **identical prompt** below. The only difference was the `MODEL_SLUG` value passed to each:

```
This is NOT a code generation task.

You are operating in agent mode inside a real Next.js 13+ project.

Your job is to CREATE a new route and WRITE the file into the project.

Do not print code as chat output.
Do not explain anything.
Do not return markdown.

You must perform file system actions.

====================================================

Create a new route under:

src/app/MODEL_SLUG/page.tsx

Replace MODEL_SLUG with:
<<< INSERT SLUG HERE >>>

Example:
gemini-3-pro
claude-sonnet-4-5
gpt-4o
llama-3-70b

====================================================

Inside that file, implement a fully working portfolio landing page for:

Muhammed Gümüş
Frontend Developer & Product Developer

Requirements:

- Next.js App Router
- TypeScript
- Tailwind CSS
- No external libraries
- No empty links
- No "#"
- Fully responsive
- Dynamic year in footer
- Must compile without errors

You are allowed to create additional components if needed,
but they must be placed properly inside the project.

After creating the file(s), stop.

Do not output code in chat.
Perform the action.
```

---

## 🏆 Models & Results

### 🔵 Gemini 3 Pro

| | |
|---|---|
| **Route** | `/gemini-3-pro` |
| **Provider** | Google |
| **Lines of Code** | 329 |
| **Design Style** | Dark, minimal, professional |
| **Color Palette** | Neutral 950 + Purple accents |
| **Approach** | Component-rich, icon components extracted |

**Highlights:**
- Created **4 separate SVG icon components** (GitHub, LinkedIn, Mail, Chevron) for reusability
- Used `radial-gradient` background with purple tones for the hero section
- Clean data-driven architecture with `projects` and `skills` objects
- Skills categorized into Frontend / Backend / Tools with grid layout
- Fixed navigation bar with `backdrop-blur-md`
- "Available for hire" badge in the hero section
- Rounded CTA buttons (pill-style)

**Design Philosophy:** Professional and restrained. A dark-mode portfolio that feels like it was designed by a senior developer — clean lines, minimal color, maximum readability.

---

### ⚡ Gemini 3 Flash

| | |
|---|---|
| **Route** | `/gemini-3-flash` |
| **Provider** | Google |
| **Lines of Code** | 247 |
| **Design Style** | Light, modern, corporate |
| **Color Palette** | Slate 50 (light) + Indigo accents |
| **Approach** | Compact, single-file, efficient |

**Highlights:**
- The **only model** to choose a light color scheme
- Creative skills section: dark `slate-900` rounded card with colored category dots (indigo, violet, emerald)
- Uses gradient text for the logo (`MG.`)
- Compact project cards with hover lift animation (`hover:-translate-y-1`)
- Shadow-based depth effects (`shadow-lg shadow-indigo-200`)
- Location indicator ("Istanbul, TR") in the footer
- No icon components — used text abbreviations ("LI", "GH") for social links

**Design Philosophy:** Speed-oriented and clean. Feels like a modern SaaS landing page. The light theme sets it apart from every other model — a bold (or lazy?) choice.

---

### 🟠 Claude Sonnet 4.5

| | |
|---|---|
| **Route** | `/claude-sonnet-4-5` |
| **Provider** | Anthropic |
| **Lines of Code** | 292 |
| **Design Style** | Dark, gradient-heavy, dramatic |
| **Color Palette** | Slate 950 gradient + Cyan accents |
| **Approach** | Single-file, inline everything |

**Highlights:**
- Used `'use client'` directive — the only model to do so
- Heavy use of `backdrop-blur-sm` for glassmorphism effects
- Dramatic hover animations: `hover:-translate-y-2` + `hover:shadow-2xl hover:shadow-cyan-500/10`
- Gradient background: `from-slate-950 via-slate-900 to-slate-950`
- Project cards have border glow on hover (`hover:border-cyan-500/50`)
- Contact section features **inline SVG icons** for email, LinkedIn, and GitHub
- No navigation bar — relies on scroll-based discovery
- Scale animation on CTA buttons (`hover:scale-105`)

**Design Philosophy:** Dramatic and immersive. Feels like a developer portfolio from a design-forward agency. The cyan-on-dark scheme creates strong contrast, and the heavy use of transitions gives a polished feel.

---

### 🟡 Claude Opus 4.6

| | |
|---|---|
| **Route** | `/claude-opus-4-6` |
| **Provider** | Anthropic |
| **Lines of Code** | 459 |
| **Design Style** | Dark, warm, sophisticated |
| **Color Palette** | Neutral 950 + Amber/Orange/Emerald |
| **Approach** | Detailed, comprehensive, premium |

**Highlights:**
- **Most code generated** — nearly 2× the output of Gemini Flash
- Warm amber/orange accent palette — unique among all models
- Animated pulse dot on "Open to opportunities" badge (`animate-pulse`)
- Section dividers using small amber bars (`w-12 h-1 bg-amber-500`)
- Project cards use numbered indices (`01`, `02`, `03`) with monospace font
- Background ambient glow: `w-[700px] h-[700px] bg-amber-500/5 blur-[160px]`
- Skills section features **icon boxes** with different colors per category (amber, orange, emerald)
- Inline SVG icons with proper stroke attributes
- Multi-color skill categories with matching colored dots
- 5:3 grid split in About section for visual weight distribution
- Location in footer: "Istanbul, Türkiye"

**Design Philosophy:** The most "designed" output. Warm tones, meticulous spacing, and thoughtful visual hierarchy. If this were a real portfolio, it would feel the most intentionally crafted.

---

## 📊 Comparison Table

| Criteria | Gemini 3 Pro | Gemini 3 Flash | Claude Sonnet 4.5 | Claude Opus 4.6 |
|---|---|---|---|---|
| **Lines of Code** | 329 | 247 | 292 | 459 |
| **Theme** | Dark | Light ☀️ | Dark | Dark |
| **Accent Color** | Purple | Indigo | Cyan | Amber |
| **Navigation** | ✅ Fixed | ✅ Fixed | ❌ None | ✅ Fixed |
| **Icon Components** | Custom SVG components | Text abbreviations | Inline SVGs | Inline SVGs |
| **Animations** | Minimal | Hover lift | Scale + Translate | Pulse + Glow |
| **`'use client'`** | No | No | Yes | No |
| **Data-Driven** | ✅ Objects | ✅ Objects | ❌ Hardcoded | ✅ Objects |
| **Footer Year** | ✅ Dynamic | ✅ Dynamic | ✅ Dynamic | ✅ Dynamic |
| **Location Info** | No | ✅ Istanbul, TR | No | ✅ Istanbul, Türkiye |
| **Background Effects** | Radial gradient | None | Multi-stop gradient | Ambient blur glow |

---

## 🔍 Key Observations

### 1. All Models Followed the Constraints
Every model successfully created a working portfolio that compiles without errors, uses dynamic year rendering, includes real links (no `#`), and is fully responsive.

### 2. Dark Mode is the Default
Three out of four models chose a dark theme. Only **Gemini 3 Flash** went with a light design — whether this was intentional or a default behavior is debatable.

### 3. Code Volume ≠ Quality
**Claude Opus 4.6** generated nearly **2× the code** of Gemini Flash, but that doesn't automatically make it better. The extra lines went toward more detailed styling, more SVG icons, and finer visual touches. Gemini Flash proved you can build something clean and functional in ~250 lines.

### 4. Design Personality Emerged
Even with identical prompts, each model developed a distinct "design voice":
- **Gemini Pro** → Minimalist professional
- **Gemini Flash** → Clean and corporate
- **Claude Sonnet** → Dramatic and immersive
- **Claude Opus** → Warm and sophisticated

### 5. Structural Decisions Varied
- **Gemini Pro** was the only model to extract reusable SVG icon components
- **Claude Sonnet** was the only model to use `'use client'`
- **Claude Sonnet** was the only model to skip the navigation bar entirely
- **Claude Opus** was the only model to add numbered project indices

### 6. No Model Created Additional Files
Despite the prompt allowing additional components, **every model kept everything in a single `page.tsx` file**. This is interesting — it suggests the models optimize for simplicity and self-containment when given a single-shot task.

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.1.6 | React framework with App Router |
| **React** | 19.2.3 | UI library |
| **TypeScript** | ^5 | Type safety |
| **Tailwind CSS** | ^4 | Utility-first styling |
| **ESLint** | ^9 | Code quality |

---

## 📁 Project Structure

```
one-prompt-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Main landing page (experiment hub)
│   │   ├── layout.tsx                  # Root layout with Inter font
│   │   ├── globals.css                 # Global styles
│   │   ├── favicon.ico
│   │   ├── gemini-3-pro/
│   │   │   └── page.tsx                # 🔵 Gemini 3 Pro output (329 lines)
│   │   ├── gemini-3-flash/
│   │   │   └── page.tsx                # ⚡ Gemini 3 Flash output (247 lines)
│   │   ├── claude-sonnet-4-5/
│   │   │   └── page.tsx                # 🟠 Claude Sonnet 4.5 output (292 lines)
│   │   └── claude-opus-4-6/
│   │       └── page.tsx                # 🟡 Claude Opus 4.6 output (459 lines)
│   └── components/
│       ├── Hero.tsx                     # Landing page hero section
│       ├── ModelsSection.tsx            # Model cards grid
│       ├── ModelCard.tsx                # Individual model card component
│       └── Footer.tsx                   # Landing page footer
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/muhammedgumus/one-prompt-portfolio.git

# Navigate into the project
cd one-prompt-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

### Routes

| Route | Description |
|---|---|
| `/` | Experiment landing page |
| `/gemini-3-pro` | Gemini 3 Pro generated portfolio |
| `/gemini-3-flash` | Gemini 3 Flash generated portfolio |
| `/claude-sonnet-4-5` | Claude Sonnet 4.5 generated portfolio |
| `/claude-opus-4-6` | Claude Opus 4.6 generated portfolio |

---

## 🤝 Contributing

This is an experimental snapshot — the AI-generated pages are intentionally left **unedited**. If you'd like to run a similar experiment with different models (GPT-4o, Llama, Mistral, etc.), feel free to fork and add your own routes!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with curiosity by [Muhammed Gümüş](https://github.com/muhammedgumus)**

*One prompt. Four models. Zero edits. Pure AI.*

</div>
