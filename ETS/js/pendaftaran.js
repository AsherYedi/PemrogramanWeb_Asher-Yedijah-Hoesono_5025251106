const form=document.getElementById('formDaftar');
buildForm(form,'d-');
const pratinjau=document.getElementById('pratinjau');
const segarkan=()=>kartu(pratinjau,Object.fromEntries(FIELDS.map(([n])=>[n,form.elements[n].value.trim()])));
segarkan();
form.addEventListener('input',e=>{e.target.classList.remove('is-invalid');segarkan()});
document.getElementById('btnDaftar').addEventListener('click',()=>{
  const d=validate(form);
  if(!d){toast('error','Data belum lengkap. Periksa kolom yang ditandai merah.');return}
  const a=Store.add(d);
  form.reset();segarkan();
  Swal.fire({icon:'success',title:'Pendaftaran berhasil',html:`Nomor anggota <b>${esc(a.id)}</b> atas nama ${esc(a.nama)}.`,confirmButtonText:'Selesai',confirmButtonColor:'#1D3B34'});
});
