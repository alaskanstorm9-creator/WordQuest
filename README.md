# WordQuest

WordQuest is a pixel-fantasy word battler where every word powers a team of heroes against bosses.

## v0.1 playable core

This first build is a dependency-free browser prototype focused on the core loop:

- Story Chapter 1 with 15 progressively harder stages
- Word-length damage scaling
- Boss resistances, weaknesses, and disabled-letter mechanics
- Four-hero party with word-specialist abilities
- Story Energy
- Coins, Gems, and Hero XP
- Hero collection, duplicate copies, and Ascension
- Summons: 100 Gems for 1 / 1,000 Gems for 10
- Chapter completion reward: 250 Gems
- Local save data
- Early Codex and Bestiary tracking

## Run

Open `index.html` in a modern browser. No build step is required.

For a local server:

```bash
python -m http.server 8080
```

Then open localhost:8080.

## Design direction

The UI follows the approved WordQuest parchment-and-gold pixel-fantasy direction. Art in v0.1 uses CSS/emoji placeholders so gameplay can be developed independently from production art assets.

## Planned after the core loop

World Boss rotation, Daily Quests, PvP Arena, Friends/Chat, Store billing integration, rankings/titles, account backend, seasons, and server-authoritative validation.
