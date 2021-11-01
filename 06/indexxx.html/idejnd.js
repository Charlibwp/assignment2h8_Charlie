// let urutan = 1
// for(i=1; i<20; i++){
//     console.log("hallo saya orang ke" + urutan)
//     urutan++
// }

function dom1UpdateText() {
    let namaEL = document.getElementById("nama")
    let inputNamaEL = document.getElementById("inputNama")
    namaEL.innerText = inputNamaEL.value
    let availEL = document.getElementById("avail")
    let inputAvailEL = document.getElementById("inputAvail")
    availEL.innerText = inputAvailEL.value
    let umurEL = document.getElementById("umur")
    let inputUmurEL = document.getElementById("inputUmur")
    umurEL.innerText = inputUmurEL.value
    let alamatEL = document.getElementById("alamat")
    let inputAlamatEL = document.getElementById("inputAlamat")
    alamatEL.innerText = inputAlamatEL.value
    let pengalamanEL = document.getElementById("pengalaman")
    let inputPengalamanEL = document.getElementById("inputPengalaman")
    pengalamanEL.innerText = inputPengalamanEL.value
    let emailEL = document.getElementById("email")
    let inputEmailEL = document.getElementById("inputEmail")
    emailEL.innerText = inputEmailEL.value
    let roleEL = document.getElementById("role")
    let inputRoleEL = document.getElementById("inputRole")
    roleEL.innerText = inputRoleEL.value
}
