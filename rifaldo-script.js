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
// console.log(arr)

console.log(patientForm);
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

// async function ambilData() {
//     let ambilUrl = await fetch(
//         `https://634fe28278563c1d82b28ff3.mockapi.io/pasien`
//     );
//     let resp = await ambilUrl.json();
//     let copData = [...resp];
//     arr.push(copData);
// console.log(resp);
// console.log(copData);

//     save.addEventListener(`click`, (z) => {
//         z.preventDefault();
//         arr.forEach((item) => {
//             let coba = item.includes([...arr, ...copData]);
//             console.log(item);
//             console.log(coba);
//         })
//     });
// }
// ambilData();
// console.log(arr);

// buat variabel array kosong
// fungsi fetch ambil data
// copy data yg di fetch ke variabel global
// ketika tombol submit di klik, looping data global tadi dan cocokan data yang diinput
// kalau data yg sudah ada maka muncul alert true data sudah ada / false register

// SUBMIT
save.addEventListener(`click`, (r) => {
    r.preventDefault();

    let regPatient = {
        name: dataNama.value,
        nik: dataNik.value,
        jenis_kelamin: dataJk.value,
        tanggal_lahir: dataTgl.value,
        alamat: dataAlamat.value,
        no_telp: dataTelp.value,
    };

    kirimDataApi(regPatient);
    patientForm.reset();
});

// RESET
function resetFungsi() {
    let resetForm = document.getElementById(`buttonReset`);
    resetForm.addEventListener(`click`, () => {
        patientForm.reset();
    });
}

// API
// async function getApi(){
//     let apiUrl = `https://634fe28278563c1d82b28ff3.mockapi.io/pasien`;
//     let res = await fetch(apiUrl);
//     console.log(res);
//     let result = await res.json();

//     console.log(result);
// }
// getApi();

