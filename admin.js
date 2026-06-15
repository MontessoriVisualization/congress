/* ============================================================
   Admin Dashboard — Messaging
   Static/demo: mock customers, client-side search, per-customer
   conversations persisted to localStorage. No backend.
   ============================================================ */
(() => {
  'use strict';

  const STORAGE_KEY = 'nc_admin_messages_v1';
  const READ_KEY = 'nc_admin_read_v1';

  /* ---- Mock customer data (realistic NC members) ---- */
  const CUSTOMERS = [
    { id: 1, name: 'Anjana Sharma', email: 'anjana.sharma@gmail.com', phone: '+977 9841 023145', location: 'Kathmandu', status: 'active', joined: '2023-04-12' },
    { id: 2, name: 'Bibek Adhikari', email: 'bibek.adhikari@outlook.com', phone: '+977 9802 117788', location: 'Pokhara', status: 'active', joined: '2022-11-02' },
    { id: 3, name: 'Chandra Bahadur Thapa', email: 'cb.thapa@yahoo.com', phone: '+977 9851 446620', location: 'Biratnagar', status: 'pending', joined: '2024-01-18' },
    { id: 4, name: 'Deepika Gurung', email: 'deepika.gurung@gmail.com', phone: '+977 9818 552031', location: 'Lalitpur', status: 'active', joined: '2021-07-30' },
    { id: 5, name: 'Eknath Bhattarai', email: 'eknath.b@hotmail.com', phone: '+977 9841 778812', location: 'Bharatpur', status: 'expired', joined: '2020-03-09' },
    { id: 6, name: 'Fulmaya Tamang', email: 'fulmaya.tamang@gmail.com', phone: '+977 9803 119045', location: 'Dharan', status: 'active', joined: '2023-09-21' },
    { id: 7, name: 'Gopal Shrestha', email: 'gopal.shrestha@gmail.com', phone: '+977 9851 220099', location: 'Kathmandu', status: 'active', joined: '2022-02-14' },
    { id: 8, name: 'Hari Prasad Koirala', email: 'hp.koirala@gmail.com', phone: '+977 9847 661230', location: 'Butwal', status: 'pending', joined: '2024-05-03' },
    { id: 9, name: 'Indira Rai', email: 'indira.rai@yahoo.com', phone: '+977 9812 004567', location: 'Itahari', status: 'active', joined: '2023-12-11' },
    { id: 10, name: 'Jeevan Karki', email: 'jeevan.karki@gmail.com', phone: '+977 9841 909011', location: 'Hetauda', status: 'active', joined: '2021-10-25' },
    { id: 11, name: 'Kamala Pandey', email: 'kamala.pandey@gmail.com', phone: '+977 9808 334521', location: 'Nepalgunj', status: 'expired', joined: '2019-06-17' },
    { id: 12, name: 'Laxman Bohara', email: 'laxman.bohara@gmail.com', phone: '+977 9858 771204', location: 'Dhangadhi', status: 'active', joined: '2022-08-08' },
    { id: 13, name: 'Manisha Joshi', email: 'manisha.joshi@outlook.com', phone: '+977 9841 556677', location: 'Lalitpur', status: 'active', joined: '2023-03-29' },
    { id: 14, name: 'Narayan Dahal', email: 'narayan.dahal@gmail.com', phone: '+977 9851 119900', location: 'Janakpur', status: 'pending', joined: '2024-02-20' },
    { id: 15, name: 'Om Prakash Yadav', email: 'op.yadav@gmail.com', phone: '+977 9804 223344', location: 'Birgunj', status: 'active', joined: '2021-04-04' },
    { id: 16, name: 'Pramila Magar', email: 'pramila.magar@gmail.com', phone: '+977 9847 880011', location: 'Tansen', status: 'active', joined: '2023-06-15' },
    { id: 17, name: 'Rajendra Khadka', email: 'rajendra.khadka@gmail.com', phone: '+977 9841 332211', location: 'Kathmandu', status: 'active', joined: '2020-12-01' },
    { id: 18, name: 'Sabina Shah', email: 'sabina.shah@yahoo.com', phone: '+977 9812 667788', location: 'Pokhara', status: 'expired', joined: '2019-09-22' },
    { id: 19, name: 'Tej Bahadur Limbu', email: 'tej.limbu@gmail.com', phone: '+977 9852 443322', location: 'Ilam', status: 'active', joined: '2022-05-19' },
    { id: 20, name: 'Usha Bhandari', email: 'usha.bhandari@gmail.com', phone: '+977 9841 998877', location: 'Gorkha', status: 'pending', joined: '2024-04-27' },
    { id: 21, name: 'Vikram Chaudhary', email: 'vikram.chaudhary@gmail.com', phone: '+977 9805 776655', location: 'Birgunj', status: 'active', joined: '2023-01-09' },
    { id: 22, name: 'Yogendra Acharya', email: 'yogendra.acharya@gmail.com', phone: '+977 9851 554433', location: 'Bhaktapur', status: 'active', joined: '2021-11-13' },
    { id: 23, name: 'Sunita Lama', email: 'sunita.lama@gmail.com', phone: '+977 9818 220011', location: 'Banepa', status: 'active', joined: '2023-08-02' },
    { id: 24, name: 'Krishna Poudel', email: 'krishna.poudel@gmail.com', phone: '+977 9841 110022', location: 'Damak', status: 'expired', joined: '2018-10-30' },
    { id: 25, name: 'Bishnu Maya Rana', email: 'bishnu.rana@gmail.com', phone: '+977 9847 665544', location: 'Surkhet', status: 'active', joined: '2022-12-18' },
    { id: 26, name: 'Dipendra Basnet', email: 'dipendra.basnet@gmail.com', phone: '+977 9851 778899', location: 'Dhankuta', status: 'pending', joined: '2024-03-14' },
    { id: 27, name: 'Sarita Khatri', email: 'sarita.khatri@gmail.com', phone: '+977 9812 334455', location: 'Kathmandu', status: 'active', joined: '2023-05-26' },
    { id: 28, name: 'Mohan Bahadur Karki', email: 'mohan.karki@gmail.com', phone: '+977 9841 446655', location: 'Palpa', status: 'active', joined: '2021-02-07' },
  ];

  /* Seed conversations so some threads aren't empty (demo inbound messages) */
  const SEED = {
    1: [
      { from: 'customer', text: 'Namaste! How do I renew my membership for this year?', ts: Date.now() - 1000 * 60 * 60 * 26 },
      { from: 'admin', text: 'Namaste Anjana ji! You can renew from your member portal under "Membership". I can also send you the link.', ts: Date.now() - 1000 * 60 * 60 * 25 },
    ],
    3: [
      { from: 'customer', text: 'I submitted my membership form last week but it still shows pending. Could you check?', ts: Date.now() - 1000 * 60 * 60 * 5 },
    ],
    9: [
      { from: 'customer', text: 'Will there be a youth program in Itahari this month?', ts: Date.now() - 1000 * 60 * 90 },
    ],
    14: [
      { from: 'customer', text: 'Please update my contact number on file.', ts: Date.now() - 1000 * 60 * 60 * 50 },
    ],
  };

  const AVATAR_COLORS = ['#087940', '#df151f', '#0e6e8c', '#9a6a00', '#6a4c93', '#1b7a5a', '#b5651d', '#3a6ea5'];

  /* ---- State ---- */
  let store = loadStore();
  let readMap = loadRead();
  let selectedId = null;
  let term = '';

  /* ---- DOM ---- */
  const listEl = document.getElementById('customerList');
  const searchEl = document.getElementById('customerSearch');
  const countEl = document.getElementById('customerCount');
  const emptyEl = document.getElementById('customerEmpty');
  const emptyTermEl = document.getElementById('emptyTerm');
  const navUnread = document.getElementById('navUnread');

  const convEmpty = document.getElementById('conversationEmpty');
  const conv = document.getElementById('conversation');
  const threadEl = document.getElementById('thread');
  const composer = document.getElementById('composer');
  const composerInput = document.getElementById('composerInput');
  const sendBtn = composer.querySelector('.send-btn');

  const peerAvatar = document.getElementById('peerAvatar');
  const peerName = document.getElementById('peerName');
  const peerEmail = document.getElementById('peerEmail');
  const peerPhone = document.getElementById('peerPhone');
  const peerLocation = document.getElementById('peerLocation');
  const peerStatus = document.getElementById('peerStatus');

  /* ---- Persistence ---- */
  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore corrupt data */ }
    return JSON.parse(JSON.stringify(SEED));
  }
  function saveStore() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch (e) {}
  }
  function loadRead() {
    try { return JSON.parse(localStorage.getItem(READ_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveRead() {
    try { localStorage.setItem(READ_KEY, JSON.stringify(readMap)); } catch (e) {}
  }

  /* ---- Helpers ---- */
  function initials(name) {
    return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }
  function colorFor(id) {
    return AVATAR_COLORS[id % AVATAR_COLORS.length];
  }
  function thread(id) {
    return store[id] || [];
  }
  function lastMsg(id) {
    const t = thread(id);
    return t.length ? t[t.length - 1] : null;
  }
  function unreadCount(id) {
    const t = thread(id);
    const lastRead = readMap[id] || 0;
    return t.filter(m => m.from === 'customer' && m.ts > lastRead).length;
  }
  function totalUnread() {
    return CUSTOMERS.reduce((sum, c) => sum + unreadCount(c.id), 0);
  }
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, ch => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
    ));
  }
  function fmtTime(ts) {
    const d = new Date(ts);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const diffDays = Math.round((now - d) / 86400000);
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return d.toLocaleDateString([], { weekday: 'short' });
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }
  function dayLabel(ts) {
    const d = new Date(ts);
    const now = new Date();
    if (d.toDateString() === now.toDateString()) return 'Today';
    const y = new Date(now); y.setDate(now.getDate() - 1);
    if (d.toDateString() === y.toDateString()) return 'Yesterday';
    return d.toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' });
  }

  /* ---- Customer list ---- */
  function filtered() {
    const q = term.trim().toLowerCase();
    let list = CUSTOMERS.slice();
    if (q) {
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q)
      );
    }
    // Most recent conversation first, then alphabetical
    list.sort((a, b) => {
      const la = lastMsg(a.id), lb = lastMsg(b.id);
      if (la && lb) return lb.ts - la.ts;
      if (la) return -1;
      if (lb) return 1;
      return a.name.localeCompare(b.name);
    });
    return list;
  }

  function renderList() {
    const list = filtered();
    countEl.textContent = list.length;
    navUnread.textContent = totalUnread();
    navUnread.hidden = totalUnread() === 0;

    listEl.innerHTML = '';
    if (!list.length) {
      emptyEl.hidden = false;
      emptyTermEl.textContent = term;
      return;
    }
    emptyEl.hidden = true;

    const frag = document.createDocumentFragment();
    list.forEach(c => {
      const last = lastMsg(c.id);
      const unread = unreadCount(c.id);
      const li = document.createElement('li');

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'customer-item' + (c.id === selectedId ? ' selected' : '');
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', String(c.id === selectedId));
      btn.dataset.id = c.id;

      const sub = last
        ? (last.from === 'admin' ? 'You: ' : '') + last.text
        : c.email;

      btn.innerHTML =
        '<span class="ci-avatar" style="background:' + colorFor(c.id) + '">' + initials(c.name) + '</span>' +
        '<span class="ci-body">' +
          '<span class="ci-top">' +
            '<span class="ci-name">' + escapeHtml(c.name) + '</span>' +
            (last ? '<span class="ci-time">' + fmtTime(last.ts) + '</span>' : '') +
          '</span>' +
          '<span class="ci-sub">' + escapeHtml(sub) + '</span>' +
        '</span>' +
        (unread ? '<span class="ci-unread" title="' + unread + ' unread"></span>' : '');

      btn.addEventListener('click', () => selectCustomer(c.id));
      li.appendChild(btn);
      frag.appendChild(li);
    });
    listEl.appendChild(frag);
  }

  /* ---- Conversation ---- */
  function selectCustomer(id) {
    selectedId = id;
    const c = CUSTOMERS.find(x => x.id === id);
    if (!c) return;

    // mark read
    readMap[id] = Date.now();
    saveRead();

    convEmpty.hidden = true;
    conv.hidden = false;

    peerAvatar.textContent = initials(c.name);
    peerAvatar.style.background = colorFor(c.id);
    peerName.textContent = c.name;
    peerEmail.textContent = c.email;
    peerPhone.textContent = c.phone;
    peerLocation.textContent = c.location;
    peerStatus.textContent = c.status.charAt(0).toUpperCase() + c.status.slice(1);
    peerStatus.className = 'status-badge ' + c.status;

    renderThread();
    renderList();
    composerInput.focus();
  }

  function renderThread() {
    const t = thread(selectedId);
    threadEl.innerHTML = '';
    let lastDay = '';
    t.forEach(m => {
      const dl = dayLabel(m.ts);
      if (dl !== lastDay) {
        lastDay = dl;
        const day = document.createElement('div');
        day.className = 'thread-day';
        day.textContent = dl;
        threadEl.appendChild(day);
      }
      const el = document.createElement('div');
      el.className = 'msg from-' + m.from;
      el.innerHTML = escapeHtml(m.text) +
        '<span class="msg-time">' +
        new Date(m.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) +
        '</span>';
      threadEl.appendChild(el);
    });
    threadEl.scrollTop = threadEl.scrollHeight;
  }

  function sendMessage(text) {
    if (!selectedId || !text.trim()) return;
    if (!store[selectedId]) store[selectedId] = [];
    store[selectedId].push({ from: 'admin', text: text.trim(), ts: Date.now() });
    saveStore();
    renderThread();
    renderList();
  }

  /* ---- Events ---- */
  searchEl.addEventListener('input', () => {
    term = searchEl.value;
    renderList();
  });

  composer.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage(composerInput.value);
    composerInput.value = '';
    autoGrow();
    composerInput.focus();
  });

  // Enter to send, Shift+Enter for newline
  composerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      composer.requestSubmit();
    }
  });

  function autoGrow() {
    composerInput.style.height = 'auto';
    composerInput.style.height = Math.min(composerInput.scrollHeight, 140) + 'px';
    sendBtn.disabled = !composerInput.value.trim();
  }
  composerInput.addEventListener('input', autoGrow);

  /* ---- Init ---- */
  sendBtn.disabled = true;
  renderList();
})();
