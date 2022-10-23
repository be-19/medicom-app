let dataNik = document.getElementById(`inputNIK`);
let dataNama = document.getElementById(`inputNama`);
let dataJk = document.getElementById(`inputJenisKelamin`);
let dataTgl = document.getElementById(`inputTanggalLahir`);
let dataAlamat = document.getElementById(`inputAlamat`);
let dataTelp = document.getElementById(`inputNoTelp`);
let cancel = document.getElementById(`buttonCancel`);

let save = document.getElementById(`buttonSave`);
let patientForm = document.querySelector(`#form-patient`);

let arr = []; // data global
ambilData();

// API
async function kirimDataApi(r) {
    let apiUrl = await fetch(
        `https://634fe28278563c1d82b28ff3.mockapi.io/pasien`,
        {
            method: `POST`,
            body: JSON.stringify(r),
            headers: {
                "Content-Type": `application/json`,
            },
        }
    );
}

async function ambilData() {
    let ambilUrl = await fetch(
        `https://634fe28278563c1d82b28ff3.mockapi.io/pasien`
    );
    let resp = await ambilUrl.json();
    // console.log(resp);
    arr = [...resp];
    setTimeout(() => ambilData(ambilUrl), 10000); //  fungsi pembaruan setiap 10 detik terakhir

}

// SUBMIT
save.addEventListener(`click`, (e) => {
    e.preventDefault();
    let i = false;

    let regPatient = {
        name: dataNama.value,
        nik: dataNik.value,
        jenis_kelamin: dataJk.value,
        tanggal_lahir: dataTgl.value,
        alamat: dataAlamat.value,
        no_telp: dataTelp.value,
    };
    console.log(arr);

    arr.forEach((item) => {

        if (dataNik.value === item.nik) {
            i = true;

        }
    })
    if (i) {
        alert(`sudah TERDAFTAR dan pastikan NIK anda benar`);
    } else {
        alert(`registrasi`);
        kirimDataApi(regPatient);
        clear();
    }
});


// RESET
function resetFungsi() {
    let resetForm = document.getElementById(`buttonReset`);
    resetForm.addEventListener(`click`, () => {
        clear();
    });
}

function clear() {
    patientForm.reset();
}


