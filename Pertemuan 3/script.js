document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    if (!nama || !email || !pesan) {
      return;
    }

    const msg = document.getElementById('success-msg');
    msg.textContent = 'Terima kasih, ' + nama + '! Pesan Anda telah berhasil terkirim. Kami akan menghubungi Anda melalui ' + email + ' dalam 1–2 hari kerja.';
    msg.classList.add('show');
    form.reset();

    msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    setTimeout(function () {
      msg.classList.remove('show');
    }, 7000);
  });
});
