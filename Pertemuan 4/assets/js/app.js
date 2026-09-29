const searchIndex = [
  {title:'Beranda',desc:'Profil singkat, video profil, berita, agenda dan keunggulan sekolah',url:'index.html'},
  {title:'Profil Sekolah',desc:'Sejarah, visi misi, Carmel Values, kepala sekolah, identitas',url:'profil.html'},
  {title:'Akademik',desc:'Pendekatan pembelajaran, pengayaan, fasilitas akademik, kalender',url:'akademik.html'},
  {title:'Kesiswaan',desc:'OSIS, ekstrakurikuler, tim lomba, BK, prestasi siswa',url:'kesiswaan.html'},
  {title:'Berita & Pengumuman',desc:'Berita terbaru, kegiatan, pengumuman dan agenda',url:'berita.html'},
  {title:'Galeri',desc:'Dokumentasi fasilitas, aktivitas, prestasi dan kegiatan',url:'galeri.html'},
  {title:'SPMB 2027/2028',desc:'Jadwal Gelombang 1, alur, jalur masuk dan tautan pendaftaran resmi',url:'spmb.html'},
  {title:'Kontak',desc:'Alamat, telepon, email, WhatsApp, peta dan formulir kontak',url:'kontak.html'}
];

const remoteFallback = (img) => {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = '1';
  img.src = 'assets/images/campus.jpg';
};
document.querySelectorAll('img[data-fallback]').forEach(img => img.addEventListener('error',()=>remoteFallback(img)));

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if(menuToggle && mainNav){
  menuToggle.addEventListener('click',()=>{
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
}

const searchOverlay = document.querySelector('.search-overlay');
const searchInput = document.querySelector('#siteSearch');
const searchResults = document.querySelector('.search-results');
function renderSearch(q=''){
  if(!searchResults) return;
  const query=q.trim().toLowerCase();
  const items = query ? searchIndex.filter(x => `${x.title} ${x.desc}`.toLowerCase().includes(query)) : searchIndex.slice(0,6);
  searchResults.innerHTML = items.length ? items.map(x=>`<a class="search-result" href="${x.url}"><strong>${x.title}</strong><span>${x.desc}</span></a>`).join('') : '<div class="search-empty">Tidak ada hasil yang cocok.</div>';
}
document.querySelectorAll('[data-search-open]').forEach(btn=>btn.addEventListener('click',()=>{
  searchOverlay?.classList.add('open');document.body.classList.add('no-scroll');renderSearch();setTimeout(()=>searchInput?.focus(),50);
}));
document.querySelectorAll('[data-search-close]').forEach(btn=>btn.addEventListener('click',()=>{
  searchOverlay?.classList.remove('open');document.body.classList.remove('no-scroll');
}));
searchInput?.addEventListener('input',e=>renderSearch(e.target.value));
searchOverlay?.addEventListener('click',e=>{if(e.target===searchOverlay){searchOverlay.classList.remove('open');document.body.classList.remove('no-scroll')}});

document.querySelectorAll('.filterbar').forEach(bar=>{
  const target = bar.dataset.target;
  bar.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
    bar.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll(`[data-filter-group="${target}"]`).forEach(item=>{
      item.hidden = !(filter==='all' || item.dataset.category===filter);
    });
  }));
});

document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{
  const item=btn.closest('.faq-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));
}));

const lightbox=document.querySelector('.lightbox');
const lbImg=lightbox?.querySelector('img');const lbTitle=lightbox?.querySelector('[data-lb-title]');const lbMeta=lightbox?.querySelector('[data-lb-meta]');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{
  const img=item.querySelector('img');if(lbImg && img) lbImg.src=img.src;
  if(lbTitle) lbTitle.textContent=item.dataset.title || 'Galeri SMAK Santo Paulus';
  if(lbMeta) lbMeta.textContent=item.dataset.meta || '';
  lightbox?.classList.add('open');document.body.classList.add('no-scroll');
}));
function closeLightbox(){lightbox?.classList.remove('open');document.body.classList.remove('no-scroll')}
lightbox?.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(searchOverlay?.classList.contains('open')){searchOverlay.classList.remove('open');document.body.classList.remove('no-scroll')}
    closeLightbox();
  }
});

const toast=document.querySelector('.toast');
function showToast(msg){if(!toast)return;toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3500)}
const contactForm=document.querySelector('#contactForm');
contactForm?.addEventListener('submit',e=>{
  e.preventDefault();
  if(!contactForm.checkValidity()){contactForm.reportValidity();return}
  const data=new FormData(contactForm);
  const subject=encodeURIComponent(data.get('subject') || 'Pesan dari website');
  const body=encodeURIComponent(`Nama: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  showToast('Pesan siap dikirim melalui aplikasi email Anda.');
  setTimeout(()=>{window.location.href=`mailto:smak.st.paulus@gmail.com?subject=${subject}&body=${body}`},500);
});

const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
