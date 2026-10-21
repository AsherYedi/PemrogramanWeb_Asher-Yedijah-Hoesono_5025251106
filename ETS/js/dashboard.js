if(!Auth.aktif())location.replace('login.html');
const tb=document.getElementById('tbody'),q=document.getElementById('cari'),jml=document.getElementById('jumlah');
const eForm=document.getElementById('formEdit');buildForm(eForm,'e-');
const mEdit=new bootstrap.Modal('#modalEdit'),mLihat=new bootstrap.Modal('#modalLihat');
let editId=null;
const CONTOH=[
 {nama:'Ayu Pramesti',nim:'5025231001',prodi:'Teknik Informatika',alamat:'Jl. Kenanga No. 12, Surabaya',telepon:'081234560001',email:'ayu@kampus.ac.id',jenis:'Mahasiswa'},
 {nama:'Dr. Bambang Wijaya',nim:'198203122008011004',prodi:'Sistem Informasi',alamat:'Perumahan Dosen Blok C-4',telepon:'081234560002',email:'bambang@kampus.ac.id',jenis:'Dosen'},
 {nama:'Citra Lestari',nim:'197911052005012002',prodi:'Administrasi Fakultas',alamat:'Jl. Melati No. 7',telepon:'081234560003',email:'citra@kampus.ac.id',jenis:'Tenaga Kependidikan'}];
function render(){
  const k=q.value.trim().toLowerCase(),all=Store.all();
  const l=all.filter(a=>a.nama.toLowerCase().includes(k)||a.nim.toLowerCase().includes(k));
  jml.textContent=`${l.length} dari ${all.length} anggota`;
  tb.innerHTML=l.length?l.map(a=>`<tr><td>${esc(a.id)}</td><td>${esc(a.nama)}</td><td>${esc(a.nim)}</td><td>${esc(a.jenis)}</td>
   <td class="text-end text-nowrap"><button class="btn btn-sm btn-outline-secondary" data-act="lihat" data-id="${a.id}">Detail</button>
   <button class="btn btn-sm btn-green" data-act="edit" data-id="${a.id}">Edit</button>
   <button class="btn btn-sm btn-outline-danger" data-act="hapus" data-id="${a.id}">Hapus</button></td></tr>`).join('')
  :`<tr><td colspan="5" class="text-center py-5">${all.length?`Tidak ada anggota dengan kata kunci "${esc(q.value)}".`:
   `Belum ada anggota. <a href="pendaftaran.html">Daftarkan anggota pertama</a> atau <button class="btn btn-link p-0 align-baseline" data-act="contoh">isi dengan data contoh</button>.`}</td></tr>`;
}
tb.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  const id=b.dataset.id,a=id&&Store.find(id);
  if(b.dataset.act==='contoh'){CONTOH.forEach(c=>Store.add({...c}));render();toast('success','3 data contoh ditambahkan.')}
  if(b.dataset.act==='lihat'){kartu(document.getElementById('kartuDetail'),a);
    document.getElementById('detailList').innerHTML=[['Program studi',a.prodi],['Alamat',a.alamat],['Telepon',a.telepon],['Email',a.email]].map(([k,v])=>`<dt class="col-4">${k}</dt><dd class="col-8">${esc(v)}</dd>`).join('');mLihat.show()}
  if(b.dataset.act==='edit'){editId=id;FIELDS.forEach(([n])=>{eForm.elements[n].value=a[n];eForm.elements[n].classList.remove('is-invalid')});mEdit.show()}
  if(b.dataset.act==='hapus')Swal.fire({title:'Hapus anggota ini?',text:`${a.nama} (${a.nim}) akan dihapus permanen dari data lokal.`,icon:'warning',showCancelButton:true,confirmButtonText:'Hapus anggota',cancelButtonText:'Batal',confirmButtonColor:'#A2392B'})
    .then(r=>{if(r.isConfirmed){Store.remove(id);render();toast('success','Anggota dihapus.')}});
});
document.getElementById('btnSimpan').addEventListener('click',()=>{
  const d=validate(eForm,editId);
  if(!d){toast('error','Perubahan belum disimpan. Periksa kolom yang ditandai.');return}
  Store.update(editId,d);mEdit.hide();render();toast('success','Perubahan disimpan.');
});
q.addEventListener('input',render);render();
