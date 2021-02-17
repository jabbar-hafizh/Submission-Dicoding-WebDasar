function newContent(page) {
    document.getElementById('content').innerHTML = document.getElementById(page).innerHTML;
}

function regist() {
    let namaReg = document.getElementById('nama-reg').value;
    let emailReg = document.getElementById('email-reg').value;
    let passReg = document.getElementById('pass-reg').value;
    let ekskulReg = document.getElementById('ekskul-reg').value;
    
    if (namaReg === '' && emailReg === '' && passReg === '' && ekskulReg === '' 
    || namaReg.length === 0 && emailReg.length === 0 && passReg.length === 0 && ekskulReg.length === 0) {
        alert('Masih kosong')
    } else {
        if (typeof(Storage) === 'undefined') {
            alert('Browser gak punya local storage')
        } else {
            localStorage.setItem("nama-reg", namaReg);
            localStorage.setItem("email-reg", emailReg);
            localStorage.setItem("pass-reg", passReg);
            localStorage.setItem("ekskul-reg", ekskulReg);

            let w = localStorage.getItem("nama-reg");
            let x = localStorage.getItem("email-reg");
            let y = localStorage.getItem("pass-reg");
            let z = localStorage.getItem("ekskul-reg");

            if(w !== '' && x !== '' && y !== '' && z !=='') {
                alert('Pendaftaran Sukses')
            } else {
                alert('Terjadi Kesalahan')
            }
        }
    }
}

function login() {
    // stored data from the register-form
    let emailLama = localStorage.getItem('email-reg');
    let passLama = localStorage.getItem('pass-reg');

    // entered data from the login-form
    let emailBaru = document.getElementById('email-baru').value;
    let passBaru = document.getElementById('pass-baru').value;

    // Check Login
    if(emailBaru === emailLama && passBaru === passLama) {
        alert('Login Berhasil');
        newContent('login-detail');
    }
    else {
        alert('Login Gagal');
    }
}

let nm = localStorage.getItem('nama-reg');
let ekskul = localStorage.getItem('ekskul-reg')
document.getElementById('result-nama').innerHTML 
= 
"<a href='index.html'><button class='button-daftar toClick'>Kembali</button></a> <br>" +
"Selamat Datang <strong> " + nm + 
" </strong> di portal Ekstrakurikuler, anda mengikuti ekskul <strong> " + ekskul + " <strong>";