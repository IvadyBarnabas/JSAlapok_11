/* 1. feladat*/
const cimElem = document.getElementById("focim")
cimElem.textContent="Mátrix rendszer";
/* 2. feladat*/
const statuszElemek = document.getElementsByClassName("statusz-szoveg")
/* 3. feladat*/
const hossz = statuszElemek.length
console.log(hossz)
/* 4. feladat*/
statuszElemek[0].textContent="Rendszer ellenőrzése folyamatban...";
/* 5. feladat */
statuszElemek[1].textContent="Kapcsolódás a hálózathoz...";
/* 6. feladat */
const listaElemek = document.querySelectorAll("lista-elem")
/* 7. feladat */
