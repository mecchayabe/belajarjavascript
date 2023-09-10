const form = document.querySelector('.form');
const inputs = document.getElementById('input');
const namaPertamaInput = document.getElementById('nama_pertama');
const namaTerakhirInput = document.getElementById('nama_terakhir');
const jenisKelaminSelect = document.getElementById('jenis_kelamin');

const resultParagraf = document.createElement('p');
form.appendChild(resultParagraf);

const submitBtn = document.getElementById('submit-btn');



submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const namaPertama = namaPertamaInput.val;
    const namaTerakhir = namaTerakhirInput.val;
    const jenisKelamin = jenisKelaminSelect.val;

    const hasil = `Nama: ${namaPertama} ${namaTerakhir}, Jenis Kelamin: ${jenisKelamin}`;

    resultParagraf.innerHTML = hasil;

});
