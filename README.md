# CCNA 1 (ITNv7) Exam Simulator

A free, single-file web app for practicing the **CCNA 1: Introduction to Networks (ITNv7)** final exam. Open it in any browser — no install, no server, no internet required after download. Everything (questions, images, logic) lives in one self-contained HTML file.

Built by **Farouk Nakkach** — questions, suggestions, or fixes welcome at **nakkach.farouk@esprit.tn** or via GitHub issues.

---

## Features

- **159 questions** across 15 topics: multiple-choice, exhibit (image) questions with embedded diagrams, and interactive click-to-connect matching questions.
- **Two modes:**
  - *Practice* — instant feedback; wrong picks turn red, keep going until the correct one turns green.
  - *Exam* — no feedback until you submit, simulating the real test.
- **Study by topic** — drill a single category (e.g. just *Subnetting & masks* or *Port numbers*) in a fixed order for memorization, or mix several topics.
- **Per-topic progress tracking** — a breakdown bar chart after each round shows your accuracy per topic (this session).
- **Optional timer** — Off / 30 / 60 minutes with auto-submit, to rehearse under pressure.
- **Adjustable round size** — pick 10/20/33/50/60/All, or type a custom number.
- **Bilingual UI (English / Français)** — full interface in both languages. *(French question translations are partial and community-contributed — see below.)*
- **Retry missed questions** with one click.
- Works fully offline; nothing is sent anywhere; no tracking.

## How to use

1. Download `ccna1_quiz.html`.
2. Double-click it to open in any modern browser (Chrome, Firefox, Edge, Safari).
3. Choose your mode, topics, count, and timer, then **Start Quiz**.

That's it. To host it online, drop the file into GitHub Pages or any static host.

## Topics covered

OSI / TCP-IP & framing · Subnetting & masks · Security & threats · IPv6 · Cabling & physical · Services & protocols · Routing & IP forwarding · Wireless, IoT & network design · Port numbers · Cisco CLI & config · TCP / UDP / transport · ARP · Switching & Ethernet access · DNS & name resolution · plus a general/mixed bucket.

## Repository layout

```
ccna1_quiz.html      # the built, ready-to-use app (open this)
src/
  quiz.html          # app shell: HTML, CSS, all logic (before inlining data)
  questions.js       # multiple-choice question bank
  matches.js         # matching-question bank
  images.js          # exhibit questions + base64-embedded images
  categorize.js      # keyword-based topic classifier
  i18n.js            # bilingual UI strings + French question translations
build.js             # inlines the src/*.js data into quiz.html -> ccna1_quiz.html
LICENSE              # MIT
```

To rebuild after editing any source file:

```bash
node build.js
```

## Contributing

The most useful contribution right now is **completing the French question translations**. The UI is fully bilingual, but only some questions have French text yet; the rest fall back to English. To add a translation, open `src/i18n.js` and add an entry to `QUESTION_FR`, keyed by the **exact English question text**, with the `options` array in the **same order** as the English version (so the correct-answer index stays valid). Then run `node build.js`.

Bug reports and answer corrections are also welcome — open an issue or email me.

## Disclaimer

This is an **independent, community study aid** created to help students prepare. It is **not affiliated with, endorsed by, or sponsored by Cisco Systems, Inc.** "CCNA", "ITN", and related marks are trademarks of Cisco Systems, Inc., used here only for identification and educational reference.

The questions and answer keys were assembled from **publicly circulated practice material** and have **not been officially verified against Cisco's curriculum**. They may contain errors or be out of date. Use this tool as practice alongside the official Cisco Networking Academy course — not as a substitute for it, and not as a source of real exam answers. If you spot a wrong answer, please report it.

## License

[MIT](LICENSE) © 2026 Farouk Nakkach
