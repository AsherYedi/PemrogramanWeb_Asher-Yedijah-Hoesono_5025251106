if(Auth.aktif())location.replace('daftar-anggota.html');
const f=document.getElementById('formLogin'),err=document.getElementById('loginError');
f.addEventListener('submit',e=>{
  e.preventDefault();
  if(Auth.masuk(f.user.value.trim(),f.pass.value)){location.href='daftar-anggota.html'}
  else{err.textContent='Nama pengguna atau kata sandi salah. Periksa lagi petunjuk di bawah formulir.';err.classList.remove('d-none');f.pass.value='';f.pass.focus()}
});
