window.onload = function() {
    document.getElementById("angka1").focus();
};

function tambah(){
    let tiff = document.querySelectorAll('input');
    let angka1 = parseInt(tiff[0].value);
    let angka2 = parseInt(tiff[1].value);
    tiff[2].value = angka1+angka2;
    document.getElementById('opss').innerText = " + ";
}
function kali(){
    let angka1 = parseInt(document.getElementById('angka1').value);
    let angka2 = parseInt(document.getElementById('angka2').value);
    document.getElementById('hasil').value = angka1*angka2;
    document.getElementById('opss').innerText = " * ";
}
function kurang(){
    let angka1 = parseInt(document.getElementById('angka1').value);
    let angka2 = parseInt(document.getElementById('angka2').value);
    document.getElementById('hasil').value = angka1-angka2;
    document.getElementById('opss').innerText = " - ";
}
function bagi(){
    let angka1 = parseInt(document.getElementById('angka1').value);
    let angka2 = parseInt(document.getElementById('angka2').value);
    document.getElementById('hasil').value = angka1/angka2;
    document.getElementById('opss').innerText = " / ";
}
function clear(){
   
    document.getElementById('angka1').value = null;
    document.getElementById('angka2').value = null;
    document.getElementById('hasil').value = null;
    document.getElementById("angka1").focus();
    document.getElementById('opss').innerText = "  ";

}
let tombolTambah = document.getElementById('tambah').addEventListener('click', tambah); 
let tombolKali = document.getElementById('kali').addEventListener('click', kali); 
let tombolKurang = document.getElementById('kurang').addEventListener('click', kurang); 
let tombolBagi = document.getElementById('bagi').addEventListener('click', bagi);     
let tombolClear = document.getElementById('clear').addEventListener('click', clear);   