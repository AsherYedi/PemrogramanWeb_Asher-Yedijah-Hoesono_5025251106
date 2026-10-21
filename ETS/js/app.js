/* LibraryReg - data, auth, form, dan komponen bersama */
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const Store={
  key:'libraryreg.anggota',
  all(){try{return JSON.parse(localStorage.getItem(this.key))||[]}catch(e){return[]}},
  save(l){localStorage.setItem(this.key,JSON.stringify(l))},
  find(id){return this.all().find(a=>a.id===id)},
  nimUsed(nim,skipId){const n=nim.trim().toLowerCase();return this.all().find(a=>a.nim.toLowerCase()===n&&a.id!==skipId)},
  add(d){const l=this.all();const n=Math.max(0,...l.map(a=>+a.id.slice(-4)))+1;
    d.id='LR-'+new Date().getFullYear()+'-'+String(n).padStart(4,'0');l.push(d);this.save(l);return d},
  update(id,d){this.save(this.all().map(a=>a.id===id?{...a,...d}:a))},
  remove(id){this.save(this.all().filter(a=>a.id!==id))}
};
const Auth={
  petugas:'petugas',sandi:'perpus123',
  masuk(u,p){if(u===this.petugas&&p===this.sandi){sessionStorage.setItem('lr.petugas','1');return true}return false},
  aktif(){return sessionStorage.getItem('lr.petugas')==='1'},
  keluar(){sessionStorage.removeItem('lr.petugas')}
};
const toast=(icon,title)=>Swal.fire({toast:true,position:'top-end',icon,title,timer:3000,timerProgressBar:true,showConfirmButton:false});

/* navbar: ubah tautan login jadi keluar bila petugas sedang masuk */
document.addEventListener('DOMContentLoaded',()=>{
  const l=document.getElementById('navLogin');
  if(l&&Auth.aktif()){l.textContent='Keluar';l.href='#';l.addEventListener('click',e=>{e.preventDefault();Auth.keluar();location.href='login.html'})}
});

/* formulir anggota */
const FIELDS=[['nama','Nama lengkap','text'],['nim','NIM/NIP','text'],['prodi','Program studi','text'],['alamat','Alamat lengkap','textarea'],['telepon','Nomor telepon','tel'],['email','Email','email'],['jenis','Jenis keanggotaan','select']];
const JENIS=['Mahasiswa','Dosen','Tenaga Kependidikan'];
function buildForm(form,p){
  form.noValidate=true;
  form.innerHTML=FIELDS.map(([n,t,type])=>{
    const id=p+n;
    const c=type==='textarea'?`<textarea class="form-control" rows="2" id="${id}" name="${n}"></textarea>`
      :type==='select'?`<select class="form-select" id="${id}" name="${n}"><option value="">Pilih jenis keanggotaan</option>${JENIS.map(j=>`<option>${j}</option>`).join('')}</select>`
      :`<input class="form-control" type="${type}" id="${id}" name="${n}" autocomplete="off">`;
    return `<div class="mb-3"><label class="form-label" for="${id}">${t}</label>${c}<div class="invalid-feedback"></div></div>`}).join('');
}
function validate(form,skipId){
  const d={};let ok=true;
  FIELDS.forEach(([n,t])=>{
    const el=form.elements[n];const v=el.value.trim();d[n]=v;let msg='';
    if(!v)msg=`${t} wajib diisi.`;
    else if(n==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))msg='Format email belum benar, contoh: nama@kampus.ac.id.';
    else if(n==='telepon'&&!/^[0-9+\-\s]{8,16}$/.test(v))msg='Nomor telepon hanya berisi angka, 8-16 karakter.';
    else if(n==='nim'){const u=Store.nimUsed(v,skipId);if(u)msg=`NIM/NIP ini sudah terdaftar atas nama ${u.nama}.`}
    el.classList.toggle('is-invalid',!!msg);
    el.nextElementSibling&&el.parentElement.querySelector('.invalid-feedback')&&(el.parentElement.querySelector('.invalid-feedback').textContent=msg);
    if(msg)ok=false;
  });
  if(!ok){const f=form.querySelector('.is-invalid');f&&f.focus()}
  return ok?d:null;
}

/* kartu anggota + barcode dari NIM/NIP */
function barcode(s){
  let x=0,r='';
  for(const ch of (s||'0000000').padEnd(12,'0')){const c=ch.charCodeAt(0);
    const w=1+c%3;r+=`<rect x="${x}" y="0" width="${w}" height="40"/>`;x+=w+1+(c>>2)%2}
  return `<svg viewBox="0 0 ${x} 40" preserveAspectRatio="none" aria-hidden="true" fill="#16201D">${r}</svg>`;
}
function kartu(el,d){
  const kosong=!d.nama;
  el.className='kartu'+(kosong?' kosong':'');
  el.innerHTML=`<div class="kop"><b>LibraryReg</b><small>${esc(d.id||'LR-0000-0000')}</small></div>
  <div class="nama">${esc(d.nama||'Nama lengkap')}</div>
  <div class="info">${esc(d.jenis||'Jenis keanggotaan')} &middot; ${esc(d.prodi||'Program studi')}</div>
  ${barcode(d.nim)}<div class="nim">${esc(d.nim||'NIM/NIP')}</div>`;
}
