#!/usr/bin/env node
// Inlines src/*.js data into src/quiz.html and writes the standalone ccna1_quiz.html.
// Usage: node build.js
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const read = f => fs.readFileSync(path.join(SRC, f), 'utf8');

let html = read('quiz.html');

const inline = (file) => {
  const code = read(file);
  const tag = `<script src="${file}"></script>`;
  if (!html.includes(tag)) {
    console.error(`WARNING: tag for ${file} not found in quiz.html`);
    return;
  }
  html = html.replace(tag, '<script>\n' + code + '\n</script>');
};

// order matters: i18n first (UI strings), then data banks
inline('i18n.js');
inline('questions.js');
inline('matches.js');
inline('images.js');

const out = path.join(__dirname, 'ccna1_quiz.html');
fs.writeFileSync(out, html);

// quick sanity check
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
try {
  new Function('document', 'window', 'requestAnimationFrame', 'setInterval', 'clearInterval',
    scripts.join('\n')
      .replace(/const QUESTION_BANK/, 'var QUESTION_BANK')
      .replace(/const MATCH_BANK/, 'var MATCH_BANK')
      .replace(/const IMG_DATA/, 'var IMG_DATA')
      .replace(/const IMAGE_BANK/, 'var IMAGE_BANK')
      .replace(/const UI /, 'var UI ')
      .replace(/const TOPIC_FR/, 'var TOPIC_FR')
      .replace(/const QUESTION_FR/, 'var QUESTION_FR'));
  console.log('Build OK ->', out, '(' + Math.round(fs.statSync(out).size / 1024) + ' KB)');
} catch (e) {
  console.error('BUILD PRODUCED INVALID JS:', e.message);
  process.exit(1);
}
