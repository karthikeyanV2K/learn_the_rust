/**
 * RustLab - Main Application
 * Handles UI interactions, problem loading, and state management
 */

// ===== State Management =====
const AppState = {
    currentLevel: 'beginner',
    currentProblem: null,
    editor: null,
    userProgress: {},

    init() {
        this.loadProgress();
    },

    loadProgress() {
        try {
            const saved = localStorage.getItem('rustlab_progress');
            this.userProgress = saved ? JSON.parse(saved) : {};
        } catch {
            this.userProgress = {};
        }
    },

    saveProgress() {
        try {
            localStorage.setItem('rustlab_progress', JSON.stringify(this.userProgress));
        } catch (e) {
            console.warn('Could not save progress:', e);
        }
    },

    markCompleted(problemId) {
        this.userProgress[problemId] = {
            completed: true,
            timestamp: Date.now()
        };
        this.saveProgress();
        this.updateUI();
    },

    isCompleted(problemId) {
        return this.userProgress[problemId]?.completed || false;
    },

    getCompletedCount(level) {
        const levelData = PROBLEMS.levels.find(l => l.id === level);
        if (!levelData) return 0;

        return levelData.problems.filter(p => this.isCompleted(p.id)).length;
    },

    getTotalCompleted() {
        return Object.values(this.userProgress).filter(p => p.completed).length;
    },

    resetProgress() {
        this.userProgress = {};
        this.saveProgress();
        this.updateUI();
    },

    updateUI() {
        updateProgressDisplay();
        renderProblems();
    }
};

// ===== DOM Elements =====
const DOM = {
    // Levels
    levelCards: () => document.querySelectorAll('.level-card'),
    levelTitle: () => document.getElementById('levelTitle'),
    problemCount: () => document.getElementById('problemCount'),
    problemsGrid: () => document.getElementById('problemsGrid'),

    // Modal
    modal: () => document.getElementById('editorModal'),
    closeModal: () => document.getElementById('closeModal'),
    problemBadge: () => document.getElementById('problemBadge'),
    problemTitle: () => document.getElementById('problemTitle'),
    problemDifficulty: () => document.getElementById('problemDifficulty'),
    problemConcepts: () => document.getElementById('problemConcepts'),
    keyLearnings: () => document.getElementById('keyLearnings'),

    // Editor
    monacoContainer: () => document.getElementById('monacoEditor'),
    runCode: () => document.getElementById('runCode'),
    resetCode: () => document.getElementById('resetCode'),
    showSolution: () => document.getElementById('showSolution'),
    rustChannel: () => document.getElementById('rustChannel'),

    // Output
    outputContent: () => document.getElementById('outputContent'),
    runtimeValue: () => document.getElementById('runtimeValue'),

    // Progress
    completedCount: () => document.getElementById('completedCount'),
    progressRing: () => document.getElementById('progressRing'),
    progressPercent: () => document.getElementById('progressPercent'),
    beginnerProgress: () => document.getElementById('beginnerProgress'),
    intermediateProgress: () => document.getElementById('intermediateProgress'),
    advancedProgress: () => document.getElementById('advancedProgress'),
    expertProgress: () => document.getElementById('expertProgress'),
    resetProgress: () => document.getElementById('resetProgress'),

    // Theme
    themeToggle: () => document.getElementById('themeToggle'),
    themeIcon: () => document.querySelector('.theme-icon')
};

// ===== Monaco Editor Setup =====
function initMonacoEditor() {
    require.config({
        paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }
    });

    require(['vs/editor/editor.main'], function () {
        // Define Rust theme colors
        monaco.editor.defineTheme('rustlab-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'keyword', foreground: 'c678dd' },
                { token: 'string', foreground: '98c379' },
                { token: 'number', foreground: 'd19a66' },
                { token: 'comment', foreground: '5c6370', fontStyle: 'italic' },
                { token: 'type', foreground: 'e5c07b' },
                { token: 'function', foreground: '61afef' },
            ],
            colors: {
                'editor.background': '#1a1a25',
                'editor.foreground': '#abb2bf',
                'editor.lineHighlightBackground': '#2c2c3a',
                'editorCursor.foreground': '#f74c00',
                'editor.selectionBackground': '#3e4451',
            }
        });

        monaco.editor.defineTheme('rustlab-light', {
            base: 'vs',
            inherit: true,
            rules: [
                { token: 'keyword', foreground: '7c3aed' },
                { token: 'string', foreground: '059669' },
                { token: 'number', foreground: 'ea580c' },
                { token: 'comment', foreground: '6b7280', fontStyle: 'italic' },
                { token: 'type', foreground: 'ca8a04' },
                { token: 'function', foreground: '2563eb' },
            ],
            colors: {
                'editor.background': '#ffffff',
                'editor.foreground': '#1a1a2e',
            }
        });

        // Create editor
        AppState.editor = monaco.editor.create(DOM.monacoContainer(), {
            value: '// Select a problem to start coding!\nfn main() {\n    println!("Hello, Rust!");\n}',
            language: 'rust',
            theme: document.documentElement.dataset.theme === 'light' ? 'rustlab-light' : 'rustlab-dark',
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            lineNumbers: 'on',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 }
        });

        // Ctrl+Enter to run code
        AppState.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            runCurrentCode();
        });
    });
}

// ===== Problem Rendering =====
function renderProblems() {
    const grid = DOM.problemsGrid();
    const levelData = PROBLEMS.levels.find(l => l.id === AppState.currentLevel);

    if (!levelData) return;

    grid.innerHTML = levelData.problems.map(problem => `
        <div class="problem-card ${AppState.isCompleted(problem.id) ? 'completed' : ''}" 
             data-problem-id="${problem.id}">
            <span class="problem-number">#${problem.id}</span>
            <h3>${problem.title}</h3>
            <div class="problem-concepts">
                ${problem.concepts.map(c => `<span class="concept-tag">${c}</span>`).join('')}
            </div>
            <div class="problem-difficulty">${problem.difficulty}</div>
        </div>
    `).join('');

    // Add click handlers
    grid.querySelectorAll('.problem-card').forEach(card => {
        card.addEventListener('click', () => {
            const problemId = parseInt(card.dataset.problemId);
            openProblem(problemId);
        });
    });
}

function selectLevel(level) {
    AppState.currentLevel = level;

    // Update UI
    DOM.levelCards().forEach(card => {
        card.classList.toggle('active', card.dataset.level === level);
    });

    const levelData = PROBLEMS.levels.find(l => l.id === level);
    if (levelData) {
        DOM.levelTitle().textContent = `${levelData.name} Problems`;
        DOM.problemCount().textContent = `${levelData.problems.length} problems`;
    }

    renderProblems();
}

// ===== Modal & Problem Loading =====
function openProblem(problemId) {
    // Find problem
    let problem = null;
    for (const level of PROBLEMS.levels) {
        problem = level.problems.find(p => p.id === problemId);
        if (problem) break;
    }

    if (!problem) return;

    AppState.currentProblem = problem;

    // Update modal content
    DOM.problemBadge().textContent = `Problem ${problem.id}`;
    DOM.problemTitle().textContent = problem.title;
    DOM.problemDifficulty().textContent = problem.difficulty;
    DOM.problemConcepts().textContent = problem.concepts.join(', ');

    // Key learnings
    DOM.keyLearnings().innerHTML = problem.keyLearnings
        .map(l => `<li>${l}</li>`)
        .join('');

    // Load code into editor
    if (AppState.editor) {
        AppState.editor.setValue(problem.starterCode);
    }

    // Reset output
    DOM.outputContent().innerHTML = '<p class="output-placeholder">Click "Run Code" to see the output...</p>';
    DOM.runtimeValue().textContent = '--';

    // Show modal
    DOM.modal().classList.add('active');
    document.body.style.overflow = 'hidden';

    // Fix editor layout after modal transition
    if (AppState.editor) {
        setTimeout(() => {
            AppState.editor.layout();
        }, 100);
    }
}

function closeModal() {
    DOM.modal().classList.remove('active');
    document.body.style.overflow = '';
    AppState.currentProblem = null;
}

// ===== Code Execution =====
async function runCurrentCode() {
    if (!AppState.editor) return;

    const code = AppState.editor.getValue();
    const channel = DOM.rustChannel().value;

    // Show loading state
    const runBtn = DOM.runCode();
    const originalText = runBtn.innerHTML;
    runBtn.innerHTML = '<span class="spinner"></span> Running...';
    runBtn.disabled = true;

    DOM.outputContent().innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    try {
        const result = await RustPlayground.execute(code, { channel });
        const formatted = RustPlayground.formatOutput(result);

        // Display output
        const outputClass = formatted.type === 'success' ? 'output-success' : 'output-error';
        DOM.outputContent().innerHTML = `<pre class="${outputClass}">${escapeHtml(formatted.message)}</pre>`;

        // Display runtime
        DOM.runtimeValue().textContent = `${formatted.runtime}ms`;

        // Mark as completed on success
        if (formatted.type === 'success' && AppState.currentProblem) {
            AppState.markCompleted(AppState.currentProblem.id);
        }
    } catch (error) {
        DOM.outputContent().innerHTML = `<pre class="output-error">❌ Error: ${escapeHtml(error.message)}</pre>`;
    } finally {
        runBtn.innerHTML = originalText;
        runBtn.disabled = false;
    }
}

function resetCode() {
    if (AppState.currentProblem && AppState.editor) {
        AppState.editor.setValue(AppState.currentProblem.starterCode);
        DOM.outputContent().innerHTML = '<p class="output-placeholder">Click "Run Code" to see the output...</p>';
        DOM.runtimeValue().textContent = '--';
    }
}

function showSolution() {
    if (AppState.currentProblem && AppState.editor) {
        // Set code
        AppState.editor.setValue(AppState.currentProblem.solution);

        // Show explanation
        const explanationContainer = document.getElementById('solutionExplanation');
        const explanationContent = document.getElementById('explanationContent');

        if (AppState.currentProblem.explanation) {
            explanationContent.innerHTML = AppState.currentProblem.explanation
                .map((item, index) => `
                    <div class="explanation-item">
                        <span class="explanation-line-num">${index + 1}</span>
                        <div class="explanation-text">${item}</div>
                    </div>
                `).join('');
            explanationContainer.style.display = 'block';
        } else {
            explanationContainer.style.display = 'none';
        }

        // Scroll layout fix
        setTimeout(() => AppState.editor.layout(), 50);
    }
}

// ===== Progress Display =====
function updateProgressDisplay() {
    const total = 40;
    const completed = AppState.getTotalCompleted();
    const percent = Math.round((completed / total) * 100);

    // Header count
    DOM.completedCount().textContent = completed;

    // Progress ring
    const ring = DOM.progressRing();
    const circumference = 339.292; // 2 * PI * 54
    const offset = circumference - (percent / 100) * circumference;
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = 'url(#progressGradient)';

    // Add gradient definition if not exists
    if (!document.getElementById('progressGradient')) {
        const svg = ring.closest('svg');
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#f74c00"/>
                <stop offset="100%" style="stop-color:#ff9a56"/>
            </linearGradient>
        `;
        svg.insertBefore(defs, svg.firstChild);
    }

    DOM.progressPercent().textContent = `${percent}%`;

    // Level progress
    DOM.beginnerProgress().textContent = `${AppState.getCompletedCount('beginner')}/10`;
    DOM.intermediateProgress().textContent = `${AppState.getCompletedCount('intermediate')}/10`;
    DOM.advancedProgress().textContent = `${AppState.getCompletedCount('advanced')}/10`;
    DOM.expertProgress().textContent = `${AppState.getCompletedCount('expert')}/10`;

    // Level card progress bars
    ['beginner', 'intermediate', 'advanced', 'expert'].forEach(level => {
        const bar = document.getElementById(`progress-${level}`);
        if (bar) {
            const count = AppState.getCompletedCount(level);
            bar.style.width = `${(count / 10) * 100}%`;
        }
    });
}

// ===== Theme Toggle =====
function initTheme() {
    const savedTheme = localStorage.getItem('rustlab_theme') || 'dark';
    document.documentElement.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = next;
    localStorage.setItem('rustlab_theme', next);
    updateThemeIcon(next);

    // Update Monaco theme
    if (AppState.editor) {
        monaco.editor.setTheme(next === 'light' ? 'rustlab-light' : 'rustlab-dark');
    }
}

function updateThemeIcon(theme) {
    const icon = DOM.themeIcon();
    if (icon) {
        icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
}

// ===== Utilities =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Event Listeners =====
function initEventListeners() {
    // Level selection
    DOM.levelCards().forEach(card => {
        card.addEventListener('click', () => {
            selectLevel(card.dataset.level);
        });
    });

    // Modal
    DOM.closeModal()?.addEventListener('click', closeModal);
    DOM.modal()?.addEventListener('click', (e) => {
        if (e.target === DOM.modal()) closeModal();
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Editor actions
    DOM.runCode()?.addEventListener('click', runCurrentCode);
    DOM.resetCode()?.addEventListener('click', resetCode);
    DOM.showSolution()?.addEventListener('click', showSolution);

    // Progress reset
    DOM.resetProgress()?.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            AppState.resetProgress();
        }
    });

    // Theme toggle
    DOM.themeToggle()?.addEventListener('click', toggleTheme);
}

// ===== Initialization =====
function init() {
    initTheme();
    AppState.init();
    initEventListeners();
    initMonacoEditor();
    selectLevel('beginner');
    updateProgressDisplay();
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
