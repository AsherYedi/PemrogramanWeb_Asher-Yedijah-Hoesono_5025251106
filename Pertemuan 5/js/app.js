/* Student Management - HTML + CSS + JavaScript (CRUD, Search, Pagination)
   Data disimpan di localStorage browser. Tahap berikutnya: ganti dengan Fetch API. */
(() => {
    'use strict';

    const STORAGE_KEY = 'student-management:v1';
    const PAGE_SIZE = 5;

    const ICON_EDIT = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>';
    const ICON_DELETE = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>';

    /* ---------- Data awal ---------- */
    function seedData() {
        const base = [
            ['231001', 'Andi Pratama', 'Informatika', 'andi@mail.com'],
            ['231002', 'Siti Aisyah', 'Sistem Informasi', 'siti@mail.com'],
            ['231003', 'Budi Santoso', 'Teknik Komputer', 'budi@mail.com'],
            ['231004', 'Nina Marlina', 'Manajemen', 'nina@mail.com'],
            ['231005', 'Rizky Pratama', 'Informatika', 'rizky@mail.com']
        ];
        const first = ['Dewi', 'Fajar', 'Gita', 'Hendra', 'Intan', 'Joko', 'Kartika', 'Lukman', 'Maya', 'Naufal', 'Putri'];
        const last = ['Wijaya', 'Hidayat', 'Saputra', 'Lestari', 'Kusuma', 'Ramadhan', 'Nugroho', 'Permata', 'Setiawan'];
        const majors = ['Informatika', 'Sistem Informasi', 'Teknik Komputer', 'Manajemen'];
        for (let i = 6; i <= 50; i++) {
            const f = first[i % first.length];
            const l = last[(i * 3) % last.length];
            base.push([String(231000 + i), `${f} ${l}`, majors[i % majors.length], `${f}.${l}${i}@mail.com`.toLowerCase()]);
        }
        return base.map(([nim, nama, jurusan, email], i) => ({ id: i + 1, nim, nama, jurusan, email }));
    }

    function load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) { /* abaikan, pakai data awal */ }
        return seedData();
    }

    function save() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(students)); } catch (e) { /* storage tidak tersedia */ }
    }

    /* ---------- State ---------- */
    let students = load();
    let page = 1;
    let query = '';
    let editingId = null;

    /* ---------- Elemen ---------- */
    const $ = (sel) => document.querySelector(sel);
    const form = $('#student-form');
    const fields = { nim: $('#nim'), nama: $('#nama'), jurusan: $('#jurusan'), email: $('#email') };
    const messageEl = $('#form-message');
    const bodyEl = $('#student-body');
    const infoEl = $('#info');
    const pagerEl = $('#pagination');
    const titleEl = $('#form-title');

    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    /* ---------- Render tabel + pagination ---------- */
    function filtered() {
        const q = query.trim().toLowerCase();
        if (!q) return students;
        return students.filter((s) => [s.nim, s.nama, s.jurusan, s.email].some((v) => v.toLowerCase().includes(q)));
    }

    function render() {
        const list = filtered();
        const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
        page = Math.min(Math.max(1, page), totalPages);
        const start = (page - 1) * PAGE_SIZE;
        const rows = list.slice(start, start + PAGE_SIZE);

        bodyEl.innerHTML = rows.length
            ? rows.map((s, i) => `
                <tr>
                    <td>${start + i + 1}</td>
                    <td>${esc(s.nim)}</td>
                    <td>${esc(s.nama)}</td>
                    <td>${esc(s.jurusan)}</td>
                    <td>${esc(s.email)}</td>
                    <td>
                        <div class="actions">
                            <button class="action edit" data-act="edit" data-id="${s.id}" aria-label="Edit ${esc(s.nama)}" title="Edit">${ICON_EDIT}</button>
                            <button class="action delete" data-act="delete" data-id="${s.id}" aria-label="Hapus ${esc(s.nama)}" title="Hapus">${ICON_DELETE}</button>
                        </div>
                    </td>
                </tr>`).join('')
            : '<tr><td class="empty" colspan="6">Data tidak ditemukan.</td></tr>';

        infoEl.textContent = rows.length
            ? `Menampilkan ${start + 1} - ${start + rows.length} dari ${list.length} data`
            : 'Menampilkan 0 data';

        renderPager(totalPages);
    }

    function renderPager(totalPages) {
        const winStart = Math.max(1, Math.min(page - 1, totalPages - 2));
        const winEnd = Math.min(totalPages, winStart + 2);
        let html = `<button data-page="${page - 1}" aria-label="Sebelumnya" ${page === 1 ? 'disabled' : ''}>&laquo;</button>`;
        for (let p = winStart; p <= winEnd; p++) {
            html += `<button data-page="${p}" class="${p === page ? 'active' : ''}" ${p === page ? 'aria-current="page"' : ''}>${p}</button>`;
        }
        html += `<button data-page="${page + 1}" aria-label="Berikutnya" ${page === totalPages ? 'disabled' : ''}>&raquo;</button>`;
        pagerEl.innerHTML = html;
    }

    /* ---------- Form ---------- */
    function setError(name, text) {
        const small = document.querySelector(`.error[data-for="${name}"]`);
        small.textContent = text || '';
        fields[name].closest('.form-group').classList.toggle('invalid', Boolean(text));
    }

    function clearErrors() {
        Object.keys(fields).forEach((n) => setError(n, ''));
    }

    function say(text) { messageEl.textContent = text; }

    function validate() {
        const v = {
            nim: fields.nim.value.trim(),
            nama: fields.nama.value.trim(),
            jurusan: fields.jurusan.value,
            email: fields.email.value.trim()
        };
        const errors = {};
        if (!v.nim) errors.nim = 'NIM wajib diisi.';
        else if (!/^\d{4,15}$/.test(v.nim)) errors.nim = 'NIM hanya angka (4-15 digit).';
        else if (students.some((s) => s.nim === v.nim && s.id !== editingId)) errors.nim = 'NIM sudah terdaftar.';
        if (!v.nama) errors.nama = 'Nama lengkap wajib diisi.';
        if (!v.jurusan) errors.jurusan = 'Pilih salah satu jurusan.';
        if (!v.email) errors.email = 'Email wajib diisi.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = 'Format email tidak valid.';
        return { v, errors };
    }

    function fillForm(s) {
        fields.nim.value = s ? s.nim : '';
        fields.nama.value = s ? s.nama : '';
        fields.jurusan.value = s ? s.jurusan : '';
        fields.email.value = s ? s.email : '';
        clearErrors();
    }

    function leaveEditMode() {
        editingId = null;
        titleEl.textContent = 'Form Student';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const { v, errors } = validate();
        clearErrors();
        const names = Object.keys(errors);
        if (names.length) {
            names.forEach((n) => setError(n, errors[n]));
            fields[names[0]].focus();
            say('');
            return;
        }
        if (editingId !== null) {
            Object.assign(students.find((s) => s.id === editingId), v);
            say('Data mahasiswa berhasil diperbarui.');
        } else {
            const id = students.reduce((m, s) => Math.max(m, s.id), 0) + 1;
            students.push({ id, ...v });
            page = Math.ceil(filtered().length / PAGE_SIZE);
            say('Data mahasiswa berhasil ditambahkan.');
        }
        save();
        leaveEditMode();
        fillForm(null);
        render();
    });

    $('#btn-cancel').addEventListener('click', () => {
        leaveEditMode();
        fillForm(null);
        say('');
    });

    $('#btn-reset').addEventListener('click', () => {
        fillForm(editingId !== null ? students.find((s) => s.id === editingId) : null);
        say('');
    });

    /* ---------- Aksi tabel ---------- */
    bodyEl.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-act]');
        if (!btn) return;
        const id = Number(btn.dataset.id);
        const student = students.find((s) => s.id === id);
        if (!student) return;

        if (btn.dataset.act === 'edit') {
            editingId = id;
            titleEl.textContent = 'Edit Student';
            fillForm(student);
            fields.nama.focus();
            say(`Mengedit data ${student.nama}.`);
        } else if (window.confirm(`Hapus data ${student.nama}?`)) {
            students = students.filter((s) => s.id !== id);
            if (editingId === id) { leaveEditMode(); fillForm(null); }
            save();
            render();
            say('Data mahasiswa dihapus.');
        }
    });

    /* ---------- Search & pagination ---------- */
    $('#search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        query = $('#search').value;
        page = 1;
        render();
    });
    $('#search').addEventListener('input', (e) => {
        query = e.target.value;
        page = 1;
        render();
    });

    pagerEl.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-page]');
        if (!btn || btn.disabled) return;
        page = Number(btn.dataset.page);
        render();
    });

    render();
})();
