// app.js — Class 11 JEE PYQ Engine
// Cookie-based progress persistence, filtering, KaTeX rendering, stopwatch

'use strict';

/* ═══════════════════════════════════════════════════════════════════
   COOKIE STORE MODULE
   ═══════════════════════════════════════════════════════════════════ */
const CookieStore = (() => {
  const COOKIE_PREFIX = 'jee11_prog_';
  const CHUNK_SIZE    = 3700; // bytes per cookie chunk (safe under 4KB limit)
  const MAX_AGE       = 31536000; // 1 year

  function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
  }

  function save(data) {
    const json   = JSON.stringify(data);
    const chunks = [];
    for (let i = 0; i < json.length; i += CHUNK_SIZE) {
      chunks.push(json.slice(i, i + CHUNK_SIZE));
    }

    // Clear old chunks beyond current count
    let i = 0;
    while (getCookie(`${COOKIE_PREFIX}${i}`) !== null) {
      if (i >= chunks.length) deleteCookie(`${COOKIE_PREFIX}${i}`);
      i++;
    }

    // Write new chunks
    chunks.forEach((chunk, idx) => {
      setCookie(`${COOKIE_PREFIX}${idx}`, chunk);
    });
    // Write total chunk count as meta
    setCookie(`${COOKIE_PREFIX}meta`, String(chunks.length));
  }

  function load() {
    const countStr = getCookie(`${COOKIE_PREFIX}meta`);
    if (!countStr) return null;
    const count = parseInt(countStr, 10);
    let json = '';
    for (let i = 0; i < count; i++) {
      const chunk = getCookie(`${COOKIE_PREFIX}${i}`);
      if (chunk === null) return null;
      json += chunk;
    }
    try { return JSON.parse(json); } catch { return null; }
  }

  function clear() {
    const countStr = getCookie(`${COOKIE_PREFIX}meta`);
    const count    = countStr ? parseInt(countStr, 10) : 0;
    for (let i = 0; i < count + 5; i++) deleteCookie(`${COOKIE_PREFIX}${i}`);
    deleteCookie(`${COOKIE_PREFIX}meta`);
  }

  function sizeKB() {
    let total = 0;
    document.cookie.split(';').forEach(c => {
      if (c.trim().startsWith(COOKIE_PREFIX)) total += c.length;
    });
    return (total / 1024).toFixed(1);
  }

  return { save, load, clear, sizeKB };
})();

/* ═══════════════════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════════════════ */
const State = {
  // progress: { [questionId]: { status: 1|2|3|0, timeMs: number, selectedOption: number|null, numAnswer: string } }
  progress: {},
  activeSubject:  'All',
  activeChapter:  'All',
  activeFilter:   'all',  // 'all' | 'unattempted' | 'solved' | 'blank' | 'bookmarked'
  activeQuestionId: null,
  drawerOpen: false,
  drawerSubject: 'Physics',

  // For stopwatch
  stopwatchInterval: null,
  stopwatchStart: null,
  stopwatchElapsed: 0,  // ms accumulated before last pause

  // Hint visibility
  hintSetupVisible: false,
  hintFullVisible: false,

  // MCQ selection
  mcqSelected: null,
  submitted: false,
};

const STATUS_LABELS = { 0: 'Unattempted', 1: 'Solved', 2: 'Needs Review', 3: 'Bookmarked' };
const STATUS_CSS    = { 0: 'unattempted', 1: 'solved', 2: 'blank', 3: 'bookmarked' };
const STATUS_BADGE  = { 0: 'badge-unattempted', 1: 'badge-solved', 2: 'badge-blank', 3: 'badge-bookmarked' };

/* ═══════════════════════════════════════════════════════════════════
   PROGRESS HELPERS
   ═══════════════════════════════════════════════════════════════════ */
function getProgress(id) {
  return State.progress[id] || { status: 0, timeMs: 0, selectedOption: null, numAnswer: '' };
}

function setProgress(id, patch) {
  const existing  = getProgress(id);
  State.progress[id] = { ...existing, ...patch };
  persistProgress();
}

function persistProgress() {
  CookieStore.save(State.progress);
  updateCookieBadge();
}

function updateCookieBadge() {
  const kb = CookieStore.sizeKB();
  const el = document.getElementById('cookie-badge-text');
  if (el) el.textContent = `Cookies Active • ${kb} KB`;
}

/* ═══════════════════════════════════════════════════════════════════
   FILTERING
   ═══════════════════════════════════════════════════════════════════ */
function getFilteredQuestions() {
  return PYQ_DATA.filter(q => {
    const subjectMatch  = State.activeSubject === 'All' || q.subject === State.activeSubject;
    const chapterMatch  = State.activeChapter === 'All' || q.chapter === State.activeChapter;
    const prog          = getProgress(q.id);
    let statusMatch     = true;
    if (State.activeFilter === 'unattempted') statusMatch = prog.status === 0;
    else if (State.activeFilter === 'solved')      statusMatch = prog.status === 1;
    else if (State.activeFilter === 'blank')        statusMatch = prog.status === 2;
    else if (State.activeFilter === 'bookmarked')   statusMatch = prog.status === 3;
    return subjectMatch && chapterMatch && statusMatch;
  });
}

/* ═══════════════════════════════════════════════════════════════════
   KATEX RENDERING
   ═══════════════════════════════════════════════════════════════════ */
function renderMath(el) {
  if (!el) return;
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(el, {
      delimiters: [
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true  },
        { left: '$$', right: '$$',   display: true  },
        { left: '$',  right: '$',    display: false },
      ],
      throwOnError: false,
      strict: false,
    });
  }
}

/* ═══════════════════════════════════════════════════════════════════
   STOPWATCH
   ═══════════════════════════════════════════════════════════════════ */
function stopwatchStart() {
  if (State.stopwatchInterval) return;
  State.stopwatchStart = Date.now() - State.stopwatchElapsed;
  State.stopwatchInterval = setInterval(tickStopwatch, 200);
}

function stopwatchStop() {
  if (!State.stopwatchInterval) return;
  clearInterval(State.stopwatchInterval);
  State.stopwatchInterval = null;
  State.stopwatchElapsed = Date.now() - (State.stopwatchStart || Date.now());
}

function stopwatchReset() {
  stopwatchStop();
  State.stopwatchElapsed = 0;
  State.stopwatchStart = null;
  renderStopwatch(0);
}

function tickStopwatch() {
  const elapsed = Date.now() - (State.stopwatchStart || Date.now());
  renderStopwatch(elapsed);
}

function renderStopwatch(ms) {
  const totalSec = Math.floor(ms / 1000);
  const min      = Math.floor(totalSec / 60);
  const sec      = totalSec % 60;
  const display  = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  const timeEl   = document.getElementById('sw-time');
  const paceEl   = document.getElementById('sw-pace');
  if (timeEl) timeEl.textContent = display;
  if (paceEl) {
    if (totalSec < 120)      { paceEl.className = 'pace-badge pace-fast'; paceEl.textContent = 'FAST'; }
    else if (totalSec < 180) { paceEl.className = 'pace-badge pace-ok';   paceEl.textContent = 'ON PACE'; }
    else                      { paceEl.className = 'pace-badge pace-slow'; paceEl.textContent = 'SLOW'; }
  }
}

/* ═══════════════════════════════════════════════════════════════════
   MASTERY STATS
   ═══════════════════════════════════════════════════════════════════ */
function getStats() {
  const stats = {
    total:   PYQ_DATA.length,
    solved:  0, blank: 0, bookmarked: 0, unattempted: 0,
    bySubject: {},
    byChapter: {},
  };

  SUBJECTS.forEach(s => {
    const qs = PYQ_DATA.filter(q => q.subject === s);
    const sv = qs.filter(q => getProgress(q.id).status === 1).length;
    stats.bySubject[s] = { total: qs.length, solved: sv };
  });

  PYQ_DATA.forEach(q => {
    const p = getProgress(q.id);
    if (p.status === 1) stats.solved++;
    else if (p.status === 2) stats.blank++;
    else if (p.status === 3) stats.bookmarked++;
    else stats.unattempted++;

    if (!stats.byChapter[q.chapter]) stats.byChapter[q.chapter] = { total: 0, solved: 0 };
    stats.byChapter[q.chapter].total++;
    if (p.status === 1) stats.byChapter[q.chapter].solved++;
  });

  return stats;
}

/* ═══════════════════════════════════════════════════════════════════
   TOAST
   ═══════════════════════════════════════════════════════════════════ */
function showToast(icon, message, duration = 2500) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 220);
  }, duration);
}

/* ═══════════════════════════════════════════════════════════════════
   RENDER: SIDEBAR
   ═══════════════════════════════════════════════════════════════════ */
function renderSidebar() {
  const stats = getStats();

  // KPI mini cards
  const kpiSolvedEl  = document.getElementById('kpi-solved');
  const kpiTotalEl   = document.getElementById('kpi-total');
  const kpiBlankEl   = document.getElementById('kpi-blank');
  const kpiBookEl    = document.getElementById('kpi-bookmarked');
  const kpiPctEl     = document.getElementById('kpi-pct');
  const kpiPctBarEl  = document.getElementById('kpi-pct-bar');

  if (kpiSolvedEl)  kpiSolvedEl.textContent  = stats.solved;
  if (kpiTotalEl)   kpiTotalEl.textContent    = stats.total;
  if (kpiBlankEl)   kpiBlankEl.textContent    = stats.blank;
  if (kpiBookEl)    kpiBookEl.textContent     = stats.bookmarked;
  const pct = Math.round((stats.solved / stats.total) * 100);
  if (kpiPctEl)     kpiPctEl.textContent      = `${pct}%`;
  if (kpiPctBarEl)  kpiPctBarEl.style.width   = `${pct}%`;

  // Subject tabs
  const subjectTabsEl = document.getElementById('subject-tabs');
  if (subjectTabsEl) {
    subjectTabsEl.innerHTML = `
      <button class="subject-tab ${State.activeSubject === 'All' ? 'active' : ''}" data-subject="All">
        <span class="subject-dot" style="background:var(--accent-primary)"></span>
        <span class="subject-tab-name">All Subjects</span>
        <span class="subject-tab-count">${PYQ_DATA.length}</span>
      </button>
      ${SUBJECTS.map(s => `
        <button class="subject-tab ${State.activeSubject === s ? 'active' : ''}" data-subject="${s}">
          <span class="subject-dot ${s.toLowerCase().replace('mathematics','mathematics').replace(' ','').toLowerCase().replace('mathematics','mathematics')} ${s === 'Physics' ? 'physics' : s === 'Chemistry' ? 'chemistry' : 'mathematics'}"></span>
          <span class="subject-tab-name">${s}</span>
          <span class="subject-tab-count">${stats.bySubject[s]?.total || 0}</span>
        </button>
      `).join('')}
    `;
    subjectTabsEl.querySelectorAll('.subject-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        State.activeSubject = btn.dataset.subject;
        State.activeChapter = 'All';
        renderSidebar();
        renderQuestionList();
      });
    });
  }

  // Chapter list
  const chapterListEl = document.getElementById('chapter-list');
  if (chapterListEl) {
    const relevantChapters = State.activeSubject === 'All'
      ? Object.values(CHAPTERS).flat()
      : CHAPTERS[State.activeSubject] || [];

    chapterListEl.innerHTML = `
      <button class="chapter-item ${State.activeChapter === 'All' ? 'active' : ''}" data-chapter="All">
        <span class="chapter-item-name">All Chapters</span>
        <span class="chapter-progress">${stats.bySubject[State.activeSubject]?.total ?? stats.total}</span>
      </button>
      ${relevantChapters.map(ch => {
        const chData = stats.byChapter[ch] || { total: 0, solved: 0 };
        return `
          <button class="chapter-item ${State.activeChapter === ch ? 'active' : ''}" data-chapter="${ch}">
            <span class="chapter-item-name">${ch}</span>
            <span class="chapter-progress">${chData.solved}/${chData.total}</span>
          </button>
        `;
      }).join('')}
    `;
    chapterListEl.querySelectorAll('.chapter-item').forEach(btn => {
      btn.addEventListener('click', () => {
        State.activeChapter = btn.dataset.chapter;
        renderSidebar();
        renderQuestionList();
      });
    });
  }

  // Status filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === State.activeFilter);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   RENDER: MASTERY MATRIX
   ═══════════════════════════════════════════════════════════════════ */
function renderMasteryMatrix() {
  const matrixEl = document.getElementById('mastery-matrix-body');
  if (!matrixEl) return;
  const stats = getStats();
  const pctAll = Math.round((stats.solved / stats.total) * 100);

  matrixEl.innerHTML = `
    <div class="matrix-row">
      <span class="matrix-label subject">Overall</span>
      <div class="matrix-bar-track"><div class="matrix-bar-fill overall" style="width:${pctAll}%"></div></div>
      <span class="matrix-pct">${pctAll}%</span>
      <div class="matrix-counts">
        <span class="matrix-count-item"><span class="matrix-count-dot" style="background:var(--solved-color)"></span>${stats.solved} solved</span>
        <span class="matrix-count-item"><span class="matrix-count-dot" style="background:var(--blank-color)"></span>${stats.blank} review</span>
      </div>
    </div>
    ${SUBJECTS.map(s => {
      const sd = stats.bySubject[s] || { total: 0, solved: 0 };
      const pct = sd.total ? Math.round((sd.solved / sd.total) * 100) : 0;
      const cls = s === 'Physics' ? 'physics' : s === 'Chemistry' ? 'chemistry' : 'mathematics';
      return `
        <div class="matrix-row">
          <span class="matrix-label">${s}</span>
          <div class="matrix-bar-track"><div class="matrix-bar-fill ${cls}" style="width:${pct}%"></div></div>
          <span class="matrix-pct">${pct}%</span>
          <div class="matrix-counts">
            <span class="matrix-count-item"><span class="matrix-count-dot" style="background:var(--text-muted)"></span>${sd.solved}/${sd.total}</span>
          </div>
        </div>
      `;
    }).join('')}
  `;
}

/* ═══════════════════════════════════════════════════════════════════
   RENDER: QUESTION LIST
   ═══════════════════════════════════════════════════════════════════ */
function renderQuestionList() {
  const listEl     = document.getElementById('question-list');
  const countEl    = document.getElementById('q-count');
  const questions  = getFilteredQuestions();

  if (countEl) countEl.textContent = `${questions.length} question${questions.length !== 1 ? 's' : ''}`;

  if (!listEl) return;

  if (questions.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <div class="empty-label">No questions match your filters</div>
        <div class="empty-sub">Try adjusting the subject, chapter, or status filter</div>
      </div>
    `;
    return;
  }

  listEl.innerHTML = `<div class="question-grid">${questions.map(q => renderQuestionCard(q)).join('')}</div>`;

  listEl.querySelectorAll('.q-card').forEach(card => {
    card.addEventListener('click', () => openQuestion(card.dataset.id));
  });

  renderMath(listEl);
}

function renderQuestionCard(q) {
  const prog    = getProgress(q.id);
  const statusCss = STATUS_CSS[prog.status];
  const subjectCss = q.subject === 'Physics' ? 'physics' : q.subject === 'Chemistry' ? 'chemistry' : 'mathematics';
  const isActive   = State.activeQuestionId === q.id;

  const preview = q.statement.replace(/\\\(.*?\\\)/g, '…').replace(/\\\[.*?\\\]/gs, '…').substring(0, 90) + '…';

  return `
    <div class="q-card status-${statusCss} ${isActive ? 'active' : ''}" data-id="${q.id}">
      <div class="q-card-header">
        <div class="q-card-badges">
          <span class="badge badge-${subjectCss}">${q.subject.substring(0,4).toUpperCase()}</span>
          <span class="badge badge-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
          <span class="badge badge-${q.type.toLowerCase().replace(' ','')}">${q.type}</span>
          <span class="badge ${STATUS_BADGE[prog.status]}">${STATUS_LABELS[prog.status]}</span>
        </div>
        <span class="q-card-id">${q.id}</span>
      </div>
      <div class="q-card-preview">${q.statement}</div>
      <div class="q-card-footer">
        <span class="q-chapter-tag">${q.chapter}</span>
        <span class="badge badge-year">${q.year}</span>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════════
   OPEN QUESTION (Workspace)
   ═══════════════════════════════════════════════════════════════════ */
function openQuestion(id) {
  const q = PYQ_DATA.find(q => q.id === id);
  if (!q) return;

  // Save time for previous question if stopwatch running
  if (State.activeQuestionId && State.stopwatchInterval) {
    const elapsed = Date.now() - (State.stopwatchStart || Date.now());
    setProgress(State.activeQuestionId, { timeMs: (getProgress(State.activeQuestionId).timeMs || 0) + elapsed });
  }

  State.activeQuestionId = id;
  State.hintSetupVisible = false;
  State.hintFullVisible  = false;
  State.mcqSelected      = null;
  State.submitted        = false;

  stopwatchReset();
  stopwatchStart();

  renderWorkspace(q);
  renderQuestionList(); // update active highlight

  // Scroll workspace into view on mobile
  document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderWorkspace(q) {
  const ws = document.getElementById('workspace');
  if (!ws) return;

  const prog   = getProgress(q.id);
  const subjectCss = q.subject === 'Physics' ? 'physics' : q.subject === 'Chemistry' ? 'chemistry' : 'mathematics';

  ws.innerHTML = `
    <!-- Header -->
    <div class="workspace-header">
      <div class="workspace-meta">
        <span class="badge badge-${subjectCss}">${q.subject}</span>
        <span class="badge badge-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
        <span class="badge badge-${q.type.toLowerCase().replace(' ','')}">${q.type}</span>
        <span class="badge badge-year">${q.year}</span>
        <span class="badge badge-year">${q.chapter}</span>
      </div>
      <div class="workspace-actions">
        <button class="btn-icon" id="btn-bookmark" title="Bookmark">
          ${prog.status === 3 ? '🔖' : '📌'}
        </button>
        <button class="btn-icon" id="btn-close-ws" title="Close">✕</button>
      </div>
    </div>

    <!-- Main Question Card -->
    <div class="q-workspace-card">
      <!-- Statement -->
      <div class="q-workspace-top">
        <div class="q-statement" id="q-statement">${q.statement}</div>
        <div class="q-type-row">
          <span class="badge badge-year" style="font-family:var(--font-mono);font-size:11px">${q.id}</span>
          <span class="badge badge-year" style="font-family:var(--font-mono);font-size:11px">${q.subtopic}</span>
        </div>
      </div>

      <!-- Options / Numerical Input -->
      ${q.type === 'MCQ' ? renderMCQOptions(q, prog) : renderNumerical(q, prog)}

      <!-- Action Bar -->
      <div class="action-bar">
        <div class="action-bar-left">
          <button class="btn btn-primary" id="btn-submit">Check Answer</button>
          <button class="btn btn-ghost" id="btn-hint-setup">① First-Line Setup</button>
          <button class="btn btn-ghost" id="btn-hint-full">② Trap + Full Solution</button>
        </div>
        <div class="action-bar-right">
          <div class="stopwatch">
            <span id="sw-time" class="stopwatch-time">00:00</span>
            <span id="sw-pace" class="pace-badge pace-fast">FAST</span>
          </div>
          <button class="btn-icon" id="btn-sw-toggle" title="Pause/Resume">⏸</button>
        </div>
      </div>

      <!-- Result Banner -->
      <div class="result-banner" id="result-banner">
        <span id="result-icon"></span>
        <span id="result-text"></span>
      </div>

      <!-- Hint: First-Line Setup -->
      <div class="hint-section" id="hint-setup">
        <div class="hint-block">
          <div class="hint-label hint-label-setup">
            <span class="hint-label-icon">①</span>
            First-Line Setup
          </div>
          <div class="hint-content" id="hint-setup-content">${q.firstLineSetup}</div>
        </div>
      </div>

      <!-- Hint: Trap + Full Solution -->
      <div class="hint-section" id="hint-full">
        <div class="hint-block">
          <div class="hint-label hint-label-trap">
            <span class="hint-label-icon">⚠</span>
            Trap Alert
          </div>
          <div class="trap-box hint-content" id="hint-trap-content">${q.trapAlert}</div>
        </div>
        <div class="hint-block">
          <div class="hint-label hint-label-solution">
            <span class="hint-label-icon">✓</span>
            Full Solution
          </div>
          <div class="solution-box hint-content" id="hint-solution-content">${q.fullSolution}</div>
        </div>
      </div>
    </div>
  `;

  ws.classList.add('active');
  renderMath(ws);

  // Wire up events
  document.getElementById('btn-submit')?.addEventListener('click', () => submitAnswer(q));
  document.getElementById('btn-hint-setup')?.addEventListener('click', () => revealSetup(q));
  document.getElementById('btn-hint-full')?.addEventListener('click', () => revealFull(q));
  document.getElementById('btn-bookmark')?.addEventListener('click', () => toggleBookmark(q));
  document.getElementById('btn-close-ws')?.addEventListener('click', closeWorkspace);
  document.getElementById('btn-sw-toggle')?.addEventListener('click', toggleStopwatch);

  // MCQ option clicks
  if (q.type === 'MCQ') {
    ws.querySelectorAll('.mcq-option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (State.submitted) return;
        State.mcqSelected = parseInt(opt.dataset.index, 10);
        ws.querySelectorAll('.mcq-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });
    });
  }
}

function renderMCQOptions(q, prog) {
  const letters = ['A', 'B', 'C', 'D'];
  return `
    <div class="mcq-options" id="mcq-options">
      ${q.options.map((opt, i) => `
        <div class="mcq-option ${prog.selectedOption === i ? 'selected' : ''}" data-index="${i}">
          <span class="option-letter">${letters[i]}</span>
          <span class="option-text">${opt}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderNumerical(q, prog) {
  return `
    <div class="numerical-area">
      <span class="numerical-label">Your Answer:</span>
      <input type="text" class="numerical-input" id="numerical-input"
        placeholder="Enter numerical value…"
        value="${prog.numAnswer || ''}"
        autocomplete="off" spellcheck="false" />
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════════
   SUBMIT ANSWER
   ═══════════════════════════════════════════════════════════════════ */
function submitAnswer(q) {
  if (State.submitted) return;

  let correct = false;

  if (q.type === 'MCQ') {
    if (State.mcqSelected === null) {
      showToast('⚠️', 'Please select an option first');
      return;
    }
    correct = State.mcqSelected === q.correctAnswer;

    // Style options
    document.querySelectorAll('.mcq-option').forEach((opt, i) => {
      if (i === q.correctAnswer) opt.classList.add('revealed-correct');
      else if (i === State.mcqSelected && !correct) opt.classList.add('wrong');
    });

    setProgress(q.id, { status: correct ? 1 : 2, selectedOption: State.mcqSelected });

  } else {
    // Numerical
    const input = document.getElementById('numerical-input');
    const val   = input?.value?.trim() || '';
    if (!val) { showToast('⚠️', 'Please enter a value'); return; }

    const userNum  = parseFloat(val);
    const correctNum = parseFloat(q.correctAnswer);
    // Flexible check: exact string match OR within 1% numeric tolerance
    correct = val === String(q.correctAnswer) ||
              (!isNaN(userNum) && !isNaN(correctNum) && Math.abs(userNum - correctNum) / (Math.abs(correctNum) || 1) < 0.015);

    if (input) input.classList.add(correct ? 'correct' : 'wrong');
    setProgress(q.id, { status: correct ? 1 : 2, numAnswer: val });
  }

  State.submitted = true;
  stopwatchStop();

  // Save elapsed time
  const elapsed = State.stopwatchElapsed;
  setProgress(q.id, { timeMs: (getProgress(q.id).timeMs || 0) + elapsed });

  // Result banner
  const banner  = document.getElementById('result-banner');
  const iconEl  = document.getElementById('result-icon');
  const textEl  = document.getElementById('result-text');
  if (banner && iconEl && textEl) {
    banner.classList.add('visible', correct ? 'correct' : 'wrong');
    iconEl.textContent = correct ? '✅' : '❌';
    textEl.textContent = correct
      ? 'Correct! Well done.'
      : `Incorrect. Correct answer: ${q.type === 'MCQ' ? ['A','B','C','D'][q.correctAnswer] : q.correctAnswer}`;
  }

  renderSidebar();
  renderMasteryMatrix();
  renderQuestionList();

  showToast(correct ? '🎉' : '📖', correct ? 'Marked as Solved!' : 'Marked for Review');
}

/* ═══════════════════════════════════════════════════════════════════
   HINTS
   ═══════════════════════════════════════════════════════════════════ */
function revealSetup(q) {
  State.hintSetupVisible = true;
  const hintEl = document.getElementById('hint-setup');
  if (hintEl) {
    hintEl.classList.add('visible');
    renderMath(hintEl);
  }
  // Mark as "blank" if still unattempted (engaged but not submitted)
  if (getProgress(q.id).status === 0) {
    setProgress(q.id, { status: 2 });
    renderSidebar();
  }
  showToast('💡', 'First-line setup revealed');
}

function revealFull(q) {
  revealSetup(q); // also show setup
  State.hintFullVisible = true;
  const hintEl = document.getElementById('hint-full');
  if (hintEl) {
    hintEl.classList.add('visible');
    renderMath(hintEl);
  }
  showToast('📖', 'Full solution revealed');
}

/* ═══════════════════════════════════════════════════════════════════
   BOOKMARK
   ═══════════════════════════════════════════════════════════════════ */
function toggleBookmark(q) {
  const prog = getProgress(q.id);
  const newStatus = prog.status === 3 ? 0 : 3;
  setProgress(q.id, { status: newStatus });
  const btn = document.getElementById('btn-bookmark');
  if (btn) btn.textContent = newStatus === 3 ? '🔖' : '📌';
  showToast(newStatus === 3 ? '🔖' : '📌', newStatus === 3 ? 'Bookmarked' : 'Bookmark removed');
  renderSidebar();
  renderQuestionList();
}

/* ═══════════════════════════════════════════════════════════════════
   STOPWATCH CONTROLS
   ═══════════════════════════════════════════════════════════════════ */
function toggleStopwatch() {
  const btn = document.getElementById('btn-sw-toggle');
  if (State.stopwatchInterval) {
    stopwatchStop();
    if (btn) btn.textContent = '▶';
  } else {
    stopwatchStart();
    if (btn) btn.textContent = '⏸';
  }
}

/* ═══════════════════════════════════════════════════════════════════
   CLOSE WORKSPACE
   ═══════════════════════════════════════════════════════════════════ */
function closeWorkspace() {
  if (State.activeQuestionId && State.stopwatchInterval) {
    const elapsed = Date.now() - (State.stopwatchStart || Date.now());
    setProgress(State.activeQuestionId, { timeMs: (getProgress(State.activeQuestionId).timeMs || 0) + elapsed });
  }
  stopwatchStop();
  State.activeQuestionId = null;
  const ws = document.getElementById('workspace');
  if (ws) { ws.classList.remove('active'); ws.innerHTML = ''; }
  renderQuestionList();
}

/* ═══════════════════════════════════════════════════════════════════
   FORMULA DRAWER
   ═══════════════════════════════════════════════════════════════════ */
function openDrawer() {
  State.drawerOpen = true;
  document.getElementById('drawer-overlay')?.classList.add('open');
  document.getElementById('formula-drawer')?.classList.add('open');
  renderDrawer();
}

function closeDrawer() {
  State.drawerOpen = false;
  document.getElementById('drawer-overlay')?.classList.remove('open');
  document.getElementById('formula-drawer')?.classList.remove('open');
}

function renderDrawer() {
  const bodyEl = document.getElementById('drawer-body');
  if (!bodyEl) return;

  const subject = State.drawerSubject;
  const groups  = FORMULA_SHEET[subject] || [];

  bodyEl.innerHTML = `
    <div class="drawer-subject-tabs">
      ${Object.keys(FORMULA_SHEET).map(s => `
        <button class="drawer-tab ${s === subject ? 'active' : ''}" data-subject="${s}">${s}</button>
      `).join('')}
    </div>
    ${groups.map(g => `
      <div class="formula-group">
        <div class="formula-group-title">${g.title}</div>
        <div class="formula-items">
          ${g.formulas.map(f => `
            <div class="formula-item">\\(${f}\\)</div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;

  bodyEl.querySelectorAll('.drawer-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      State.drawerSubject = btn.dataset.subject;
      renderDrawer();
    });
  });

  renderMath(bodyEl);
}

/* ═══════════════════════════════════════════════════════════════════
   PROGRESS MODAL (Export / Import / Reset)
   ═══════════════════════════════════════════════════════════════════ */
function openProgressModal() {
  document.getElementById('progress-modal')?.classList.add('open');
  updateExportText();
}

function closeProgressModal() {
  document.getElementById('progress-modal')?.classList.remove('open');
}

function updateExportText() {
  const el = document.getElementById('export-textarea');
  if (el) el.value = JSON.stringify(State.progress, null, 2);
}

function importProgress() {
  const el = document.getElementById('import-textarea');
  if (!el) return;
  try {
    const parsed = JSON.parse(el.value.trim());
    if (typeof parsed !== 'object') throw new Error();
    State.progress = parsed;
    persistProgress();
    closeProgressModal();
    renderSidebar();
    renderMasteryMatrix();
    renderQuestionList();
    showToast('✅', 'Progress imported successfully');
  } catch {
    showToast('❌', 'Invalid JSON — could not import');
  }
}

function resetProgress() {
  if (!confirm('Reset ALL progress? This cannot be undone.')) return;
  State.progress = {};
  CookieStore.clear();
  updateCookieBadge();
  closeProgressModal();
  renderSidebar();
  renderMasteryMatrix();
  renderQuestionList();
  closeWorkspace();
  showToast('🗑️', 'All progress reset');
}

/* ═══════════════════════════════════════════════════════════════════
   BOOTSTRAP
   ═══════════════════════════════════════════════════════════════════ */
function init() {
  // Load saved progress from cookies
  const saved = CookieStore.load();
  if (saved) State.progress = saved;

  // Wire up static button events
  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      State.activeFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === State.activeFilter));
      renderQuestionList();
    });
  });

  // Drawer
  document.getElementById('btn-formula-drawer')?.addEventListener('click', openDrawer);
  document.getElementById('drawer-overlay')?.addEventListener('click', closeDrawer);
  document.getElementById('btn-close-drawer')?.addEventListener('click', closeDrawer);

  // Progress modal
  document.getElementById('btn-progress-modal')?.addEventListener('click', openProgressModal);
  document.getElementById('btn-close-modal')?.addEventListener('click', closeProgressModal);
  document.getElementById('modal-overlay')?.addEventListener('click', e => { if (e.target.id === 'modal-overlay') closeProgressModal(); });
  document.getElementById('btn-reset')?.addEventListener('click', resetProgress);
  document.getElementById('btn-export')?.addEventListener('click', () => {
    const text = JSON.stringify(State.progress, null, 2);
    navigator.clipboard?.writeText(text).then(() => showToast('📋', 'Copied to clipboard')).catch(() => {});
    updateExportText();
  });
  document.getElementById('btn-import')?.addEventListener('click', importProgress);

  // Initial render
  renderSidebar();
  renderMasteryMatrix();
  renderQuestionList();
  updateCookieBadge();
}

// Wait for DOM + KaTeX to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
