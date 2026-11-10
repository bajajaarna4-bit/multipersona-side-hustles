# ⚡ Polymath Collective

> **The Anti-Niche Hub for Extroverts, Multi-Hyphenates & Intellectual Omnivores**  
> *"Too curious for one career. You're not indecisive — you're multi-talented."*

---

## 🌟 Overview

**Polymath Collective** is a single-page, heavily animated website designed specifically for curious minds who get bored doing just one thing. It blends high-energy aesthetics ("Duolingo meets Notion meets a music festival poster") with interactive physics, live algorithmic charts, 3D flip blueprints, drag-and-drop sticky notes, and pure Web Audio synthesizer feedback.

---

## 🚀 Quick Start (Instant Preview)

You can run this project in two ways:

### Option 1: Direct Browser Launch (Zero Install)
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox, or Safari). Everything is self-contained.

### Option 2: Local HTTP Server (Node.js)
```bash
# In the project directory:
node local-server.js
# or:
npm start
```
Then navigate to: `http://localhost:3000`

---

## 🎨 Core Features & Interactive Sections

1. **Hero & Floating Interest Collider (2D Canvas Physics)**:
   - 12+ interactive drifting bubbles (Coding, Cooking, Music, Finance, Writing, Fitness, Philosophy, Robotics, etc.).
   - Cursor repulsion & attraction fields, gentle elastic bubble-to-bubble collisions, boundary bounces at 60 FPS.
   - Interactive pop mechanic: Click any bubble to explode it into colorful particle sparks with synthesized pop audio.
   - Live stat ticker and respawn button.

2. **The Polymath Interest Mixer (The Standout Feature)**:
   - 16 interactive interest ingredient chips.
   - Select 3 to 5 obsessions to trigger real-time calculations.
   - **Dynamic SVG Radar Chart**: Plots 5 polymath dimensions (*Maker Energy*, *Social Spark*, *Hustle Velocity*, *Cognitive Depth*, *Artistic Flow*).
   - **Archetype Generator**: Calculates hybrid titles (e.g. *The Algorithmic Gastronomist*, *The Kinetic Audio Architect*, *The Stoic Wealth Athlete*).
   - **Tailored Side Hustle Formula**: Generates high-margin crossover ventures based on the exact selected tags.
   - Includes random shuffle "Surprise Me" mode.

3. **Side Hustle Explorer (3D Flip Blueprints)**:
   - 12 realistic, deeply creative cross-domain side hustles.
   - 3D card flip on hover/click revealing the **72-Hour Launch Playbook**, realistic monthly targets ($1,500 - $12,000/mo), and ideal co-founder archetypes.
   - Instant filter tags: *All*, *Solo Builder 🧑‍💻*, *Needs Crew 👥*, and *< 5 hrs/wk ⚡*.

4. **The Jam Lounge (Networking Floor)**:
   - 10 illustrated member cards showcasing diverse multi-hyphenates.
   - Status badges: *Seeking Co-Founder*, *Jam Partner Wanted*, *Accountability Buddy*.
   - Interactive "Wave 👋" button with animated emoji confetti showers and sound chimes.
   - Full profile modal with bio, active projects, and "Send Jam Request" action.

5. **Events & Meetups Timeline**:
   - 5 curated community events (e.g. *The 48-Hour Cross-Domain Idea Blitz*, *Skill Swap Roulette*, *Pitch Night: Demos Only*).
   - Live countdown clocks (DD:HH:MM:SS) updated every second.
   - Interactive RSVP toggle with attendee counters and instant confirmation toasts.

6. **The Sticky Jam Wall (Idea Corkboard)**:
   - Freeform drag-and-drop corkboard canvas.
   - Preloaded with 6 colorful, witty ideas with random tilt and realistic drop shadows.
   - Real pointer-event dragging: pick up any note and drag it anywhere on the board.
   - Like button with heart bounce animation.
   - "+ Post A Wild Idea" modal with sticky note color picker and celebratory confetti blast on submit.

7. **Success Stories (Hall of Polymaths)**:
   - Interactive carousel featuring 4 real-world multi-hyphenate journeys.
   - High-contrast pull quotes, monthly revenue stats ($14k - $42k/mo), and career milestones.

8. **Join CTA & VIP Member Badge**:
   - Email signup form with confetti explosion and fanfare synthesizer sound.
   - Instant transition into a personalized VIP Membership Pass (#14,281).

---

## 🛠️ Visual & Audio Details

- **Color Palette**:
  - `brand-coral`: `#FF5E5E`
  - `brand-violet`: `#7A5AF8`
  - `brand-yellow`: `#FFC837`
  - `brand-teal`: `#00D6B2`
  - `brand-pink`: `#FF4288`
  - Light mode: Warm sunlit cream (`#FAF7F0`) with neo-brutalist pop shadows.
  - Dark mode: Cosmic navy (`#0E1122` / `#161B30`) with neon accents.
- **Audio Synthesis Engine**:
  - Pure Web Audio API: 100% zero external sound files. Synthesizes pops, marimba chimes, wave greetings, and trumpet fanfare directly in browser code.
  - Header mute toggle preserves user preferences in `localStorage`.
- **Accessibility & Performance**:
  - Custom fluid cursor with trailing ring (auto-disabled on touch devices).
  - Full support for `prefers-reduced-motion` media queries.
  - 60 FPS lightweight Canvas 2D animation loop.
  - Responsive mobile drawer navigation.

