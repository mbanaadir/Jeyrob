(function () {
  'use strict';

  var SUBJECTS = window.SUBJECTS || [];
  var CURRICULUM = window.CURRICULUM || {};

  var STU_KEY = 'cc-students-v1';
  var PROG_KEY = 'cc-progress-v1';
  var CUR_KEY = 'cc-current-v1';

  var students = loadJSON(STU_KEY, []);
  var progress = loadJSON(PROG_KEY, {});
  var currentId = localStorage.getItem(CUR_KEY) || null;
  var view = { name: 'home' };

  var app = document.getElementById('app');
  var studentSelect = document.getElementById('studentSelect');
  var modal = document.getElementById('modal');
  var toastEl = document.getElementById('toast');

  function loadJSON(k, fb) { try { return JSON.parse(localStorage.getItem(k)) || fb; } catch (e) { return fb; } }
  function saveJSON(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function currentStudent() { return students.find(function (s) { return s.id === currentId; }) || null; }
  function subjectById(id) { return SUBJECTS.find(function (s) { return s.id === id; }); }
  function topicsFor(student, subjectId) {
    var g = CURRICULUM[student.grade];
    if (!g) return [];
    return g[subjectId] || [];
  }
  function tkey(studentId, subjectId, idx) { return studentId + '|' + subjectId + '|' + idx; }
  function isDone(studentId, subjectId, idx) {
    return !!(progress[studentId] && progress[studentId].completed && progress[studentId].completed[tkey(studentId, subjectId, idx)]);
  }
  function markDone(studentId, subjectId, idx, score) {
    if (!progress[studentId]) progress[studentId] = { completed: {}, scores: {} };
    progress[studentId].completed[tkey(studentId, subjectId, idx)] = true;
    if (score != null) progress[studentId].scores[tkey(studentId, subjectId, idx)] = score;
    saveJSON(PROG_KEY, progress);
  }
  function subjectProgress(student, subjectId) {
    var list = topicsFor(student, subjectId);
    if (!list.length) return 0;
    var done = 0;
    list.forEach(function (t, i) { if (isDone(student.id, subjectId, i)) done++; });
    return Math.round(done / list.length * 100);
  }
  function overallProgress(student) {
    var total = 0, done = 0;
    SUBJECTS.forEach(function (sub) {
      var list = topicsFor(student, sub.id);
      total += list.length;
      list.forEach(function (t, i) { if (isDone(student.id, sub.id, i)) done++; });
    });
    return total ? Math.round(done / total * 100) : 0;
  }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove('hidden');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.classList.add('hidden'); }, 2200);
  }

  function refreshStudentSelect() {
    studentSelect.innerHTML = '';
    if (!students.length) {
      var o = document.createElement('option');
      o.textContent = 'No child added yet';
      o.value = '';
      studentSelect.appendChild(o);
      return;
    }
    students.forEach(function (s) {
      var opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = s.name + ' — Grade ' + s.grade;
      if (s.id === currentId) opt.selected = true;
      studentSelect.appendChild(opt);
    });
  }

  // ---- modal ----
  function openAddStudent() {
    document.getElementById('modalTitle').textContent = 'Add a child';
    document.getElementById('studentForm').reset();
    document.getElementById('studentGrade').value = '1';
    modal.classList.remove('hidden');
    document.getElementById('studentName').focus();
  }
  function closeModal() { modal.classList.add('hidden'); }

  document.getElementById('addStudentBtn').addEventListener('click', openAddStudent);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('studentName').value.trim();
    var grade = parseInt(document.getElementById('studentGrade').value, 10);
    if (!name) return;
    students.push({ id: 'st' + Date.now(), name: name, grade: grade });
    saveJSON(STU_KEY, students);
    currentId = students[students.length - 1].id;
    localStorage.setItem(CUR_KEY, currentId);
    closeModal();
    view = { name: 'home' };
    toast('Added ' + name + ' (Grade ' + grade + ') 🎉');
    render();
  });

  studentSelect.addEventListener('change', function () {
    currentId = this.value || null;
    if (currentId) localStorage.setItem(CUR_KEY, currentId);
    view = { name: 'home' };
    render();
  });

  // ---- render ----
  function render() {
    var s = currentStudent();
    refreshStudentSelect();
    if (!s) { renderEmpty(); return; }
    if (view.name === 'topics') renderTopics(s);
    else if (view.name === 'topic') renderTopic(s);
    else if (view.name === 'quiz') renderQuiz(s);
    else if (view.name === 'students') renderStudents();
    else renderHome(s);
    window.scrollTo(0, 0);
  }

  function renderEmpty() {
    app.innerHTML =
      '<div class="hero"><div class="pill" style="background:rgba(255,255,255,.2);color:#fff">Grades 1–12</div>' +
      '<h1>Welcome! 👋</h1><p>Your family\'s own Canadian curriculum learning hub — Math, English, Science & Social Studies.</p></div>' +
      '<div class="panel" style="text-align:center"><p class="muted">Add your first child to begin learning.</p>' +
      '<button class="btn btn-accent" id="emptyAdd">+ Add Child</button></div>';
    document.getElementById('emptyAdd').onclick = openAddStudent;
  }

  function renderHome(s) {
    var pct = overallProgress(s);
    var cards = SUBJECTS.map(function (sub) {
      var sp = subjectProgress(s, sub.id);
      var n = topicsFor(s, sub.id).length;
      return '<div class="card" data-subject="' + sub.id + '">' +
        '<span class="emoji">' + sub.emoji + '</span>' +
        '<h3>' + sub.name + '</h3>' +
        '<div class="pct">' + n + ' topics · ' + sp + '% done</div>' +
        '<div class="mini-bar"><span style="width:' + sp + '%;background:' + sub.color + '"></span></div>' +
        '</div>';
    }).join('');

    app.innerHTML =
      '<div class="hero"><div class="pill" style="background:rgba(255,255,255,.2);color:#fff">Grade ' + s.grade + '</div>' +
      '<h1>Assalaamu alaykum, ' + esc(s.name) + '! 📚</h1>' +
      '<p>Keep going — you\'re doing great.</p>' +
      '<div class="progress-wrap"><div class="progress-label"><span>Overall progress</span><span>' + pct + '%</span></div>' +
      '<div class="bar"><span style="width:' + pct + '%"></span></div></div></div>' +
      '<h2 class="section-title">Choose a subject</h2>' +
      '<div class="grid">' + cards + '</div>' +
      '<p style="text-align:center;margin-top:22px"><button class="btn btn-ghost" id="viewStudents">👨‍👩‍👧‍👦 View all children</button></p>';

    app.querySelectorAll('.card').forEach(function (c) {
      c.onclick = function () { view = { name: 'topics', subjectId: c.dataset.subject }; render(); };
    });
    document.getElementById('viewStudents').onclick = function () { view = { name: 'students' }; render(); };
  }

  function renderTopics(s) {
    var sub = subjectById(view.subjectId);
    var list = topicsFor(s, sub.id);
    var rows = list.map(function (t, i) {
      var done = isDone(s.id, sub.id, i);
      return '<div class="row" data-idx="' + i + '">' +
        '<div class="check ' + (done ? 'done' : '') + '">' + (done ? '✓' : '') + '</div>' +
        '<div class="row-body"><h4>' + (i + 1) + '. ' + esc(t.title) + '</h4><p>' + esc(t.summary) + '</p></div>' +
        '</div>';
    }).join('');

    app.innerHTML =
      '<button class="back" id="back">← Subjects</button>' +
      '<h2 class="section-title">' + sub.emoji + ' ' + sub.name + ' — Grade ' + s.grade + '</h2>' +
      '<p class="muted" style="margin-top:-8px">' + list.length + ' topics. Tap one to learn and take a quiz.</p>' +
      '<div class="list">' + rows + '</div>';

    document.getElementById('back').onclick = function () { view = { name: 'home' }; render(); };
    app.querySelectorAll('.row').forEach(function (r) {
      r.onclick = function () { view = { name: 'topic', subjectId: sub.id, topicIndex: parseInt(r.dataset.idx, 10) }; render(); };
    });
  }

  function renderLessonBlocks(lesson) {
    return (lesson || []).map(function (b) {
      if (b.t === 'h') return '<h3 class="lesson-h">' + esc(b.text) + '</h3>';
      if (b.t === 'key') return '<div class="lesson-key"><strong>🔑 Key idea:</strong> ' + esc(b.text) + '</div>';
      if (b.t === 'example') return '<div class="lesson-example"><strong>✏️ ' + esc(b.title || 'Worked example') + '</strong><div class="lesson-example-body">' + esc(b.text) + '</div></div>';
      return '<p class="lesson-p">' + esc(b.text) + '</p>';
    }).join('');
  }

  function renderTopic(s) {
    var sub = subjectById(view.subjectId);
    var t = topicsFor(s, sub.id)[view.topicIndex];
    var done = isDone(s.id, sub.id, view.topicIndex);
    var hasLesson = t.lesson && t.lesson.length;

    var bodyHtml;
    if (hasLesson) {
      bodyHtml =
        '<div class="panel">' +
        '<div class="pill" style="background:#e8f0fe;color:#1f56c4">' + (done ? '✓ Completed' : 'Lesson ' + (view.topicIndex + 1)) + '</div>' +
        '<h2>' + sub.emoji + ' ' + esc(t.title) + '</h2>' +
        '<p class="muted lesson-lead">' + esc(t.summary) + '</p>' +
        renderLessonBlocks(t.lesson) +
        '</div>';
    } else {
      var resources = (t.resources && t.resources.length ? t.resources : sub.resources)
        .map(function (r) {
          return '<a class="resource-link" href="' + esc(r.url) + '" target="_blank" rel="noopener">' +
            '<span class="r-emoji">' + (r.emoji || '🔗') + '</span>' +
            '<span><span class="r-label">' + esc(r.label) + '</span><br><span class="r-url">' + esc(r.url) + '</span></span></a>';
        }).join('');
      bodyHtml =
        '<div class="panel">' +
        '<div class="pill" style="background:#e8f0fe;color:#1f56c4">' + (done ? '✓ Completed' : 'Topic ' + (view.topicIndex + 1)) + '</div>' +
        '<h2>' + sub.emoji + ' ' + esc(t.title) + '</h2>' +
        '<p class="lesson">' + esc(t.summary) + '</p>' +
        '</div>' +
        '<div class="panel"><h3 style="margin-top:0">📖 What to learn</h3>' +
        (t.learn ? '<ul>' + t.learn.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '<p class="muted">Read the summary above, then use the free links below.</p>') +
        '</div>' +
        '<div class="panel"><h3 style="margin-top:0">🔗 Free learning links</h3>' + resources + '</div>';
    }

    app.innerHTML =
      '<button class="back" id="back">← ' + sub.name + '</button>' +
      bodyHtml +
      '<button class="btn btn-green" id="startQuiz" style="width:100%;font-size:1.1rem;padding:15px">📝 ' + (done ? 'Take the quiz again' : 'Take the quiz') + '</button>';

    document.getElementById('back').onclick = function () { view = { name: 'topics', subjectId: sub.id }; render(); };
    document.getElementById('startQuiz').onclick = function () {
      view = { name: 'quiz', subjectId: sub.id, topicIndex: view.topicIndex, qIndex: 0, score: 0, answered: false, selected: null };
      render();
    };
  }

  function renderQuiz(s) {
    var sub = subjectById(view.subjectId);
    var t = topicsFor(s, sub.id)[view.topicIndex];
    var quiz = t.quiz || [];
    var total = quiz.length;

    if (!total) {
      app.innerHTML = '<button class="back" id="back">← Back</button><div class="panel"><p class="muted">No quiz for this topic yet — it\'s being added. Mark it as learned?</p>' +
        '<button class="btn btn-accent" id="markLearned">Mark as done ✓</button></div>';
      document.getElementById('back').onclick = function () { view = { name: 'topic', subjectId: sub.id, topicIndex: view.topicIndex }; render(); };
      document.getElementById('markLearned').onclick = function () {
        markDone(s.id, sub.id, view.topicIndex, null);
        toast('Marked as done!');
        view = { name: 'topic', subjectId: sub.id, topicIndex: view.topicIndex };
        render();
      };
      return;
    }

    // finished
    if (view.qIndex >= total) {
      var pct = Math.round(view.score / total * 100);
      var passed = pct >= 70;
      if (passed) markDone(s.id, sub.id, view.topicIndex, pct);
      app.innerHTML =
        '<div class="panel result-card">' +
        '<div class="emoji" style="font-size:3rem">' + (passed ? '🎉' : '💪') + '</div>' +
        '<div class="big">' + pct + '%</div>' +
        '<p class="muted">You got ' + view.score + ' out of ' + total + ' correct.</p>' +
        '<p>' + (passed ? 'Well done! This topic is marked complete.' : 'Almost there! Review and try again.') + '</p>' +
        '<button class="btn btn-accent" id="quizAgain">Try again</button> ' +
        '<button class="btn btn-ghost" id="quizDone">Done</button></div>';
      document.getElementById('quizAgain').onclick = function () {
        view = { name: 'quiz', subjectId: sub.id, topicIndex: view.topicIndex, qIndex: 0, score: 0, answered: false, selected: null };
        render();
      };
      document.getElementById('quizDone').onclick = function () { view = { name: 'topic', subjectId: sub.id, topicIndex: view.topicIndex }; render(); };
      return;
    }

    var q = quiz[view.qIndex];
    var options = q.options.map(function (opt, oi) {
      var cls = 'option';
      if (view.answered) {
        if (oi === q.a) cls += ' correct';
        else if (oi === view.selected) cls += ' wrong';
      }
      return '<button class="' + cls + '" data-oi="' + oi + '" ' + (view.answered ? 'disabled' : '') + '>' + esc(opt) + '</button>';
    }).join('');

    var feedback = '';
    if (view.answered) {
      feedback = '<p class="quiz-feedback" style="color:' + (view.selected === q.a ? 'var(--green)' : 'var(--red)') + '">' +
        (view.selected === q.a ? '✅ Correct!' : '❌ Not quite.') + '</p>';
    }

    app.innerHTML =
      '<button class="back" id="quizBack">← Leave quiz</button>' +
      '<div class="panel">' +
      '<div class="muted" style="margin-bottom:8px">Question ' + (view.qIndex + 1) + ' of ' + total + '</div>' +
      '<p class="quiz-q">' + esc(q.q) + '</p>' +
      options + feedback +
      (view.answered ? '<button class="btn btn-accent" id="quizNext" style="width:100%;margin-top:10px">' + (view.qIndex + 1 >= total ? 'See results' : 'Next question') + '</button>' : '') +
      '</div>';

    document.getElementById('quizBack').onclick = function () { view = { name: 'topic', subjectId: sub.id, topicIndex: view.topicIndex }; render(); };
    if (view.answered) {
      document.getElementById('quizNext').onclick = function () {
        view.qIndex++;
        view.answered = false; view.selected = null;
        render();
      };
    } else {
      app.querySelectorAll('.option').forEach(function (b) {
        b.onclick = function () {
          var oi = parseInt(b.dataset.oi, 10);
          view.selected = oi;
          if (oi === q.a) view.score++;
          view.answered = true;
          render();
        };
      });
    }
  }

  function renderStudents() {
    var rows = students.map(function (s) {
      var pct = overallProgress(s);
      return '<tr><td>' + esc(s.name) + '</td><td>Grade ' + s.grade + '</td>' +
        '<td><div class="mini-bar"><span style="width:' + pct + '%;background:var(--green)"></span></div></td>' +
        '<td><strong>' + pct + '%</strong></td>' +
        '<td><button class="btn btn-ghost" data-open="' + s.id + '" style="padding:6px 12px">Open</button> ' +
        '<button class="btn btn-ghost" data-del="' + s.id + '" style="padding:6px 12px;color:var(--red)">Remove</button></td></tr>';
    }).join('');

    app.innerHTML =
      '<button class="back" id="back">← Home</button>' +
      '<h2 class="section-title">👨‍👩‍👧‍👦 My children</h2>' +
      (students.length
        ? '<table class="students"><thead><tr><th>Name</th><th>Grade</th><th>Progress</th><th></th><th></th></tr></thead><tbody>' + rows + '</tbody></table>'
        : '<div class="panel"><p class="muted">No children yet.</p></div>');

    document.getElementById('back').onclick = function () { view = { name: 'home' }; render(); };
    app.querySelectorAll('[data-open]').forEach(function (b) {
      b.onclick = function () { currentId = b.dataset.open; localStorage.setItem(CUR_KEY, currentId); view = { name: 'home' }; render(); };
    });
    app.querySelectorAll('[data-del]').forEach(function (b) {
      b.onclick = function () {
        var id = b.dataset.del;
        var name = (students.find(function (x) { return x.id === id; }) || {}).name || '';
        if (confirm('Remove ' + name + ' and their progress?')) {
          students = students.filter(function (x) { return x.id !== id; });
          saveJSON(STU_KEY, students);
          delete progress[id];
          saveJSON(PROG_KEY, progress);
          if (currentId === id) { currentId = students.length ? students[0].id : null; localStorage.setItem(CUR_KEY, currentId || ''); }
          toast('Removed ' + name);
          render();
        }
      };
    });
  }

  render();
})();
