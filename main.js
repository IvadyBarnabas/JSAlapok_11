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
const listaElemek = document.querySelectorAll(".lista-elem")
/* 7. feladat */
console.log(listaElemek[0].textContent)
/* 8. feladat */
listaElemek[1].textContent="Szerver állapot: Online";
/* 9. feladat */
const nevInput = document.querySelector("#jatekos-nev-input")
/* 10. feladat */
const inditoGomb = document.querySelector("#indito-gomb")
/* 11. feladat */
const eredmenyDiv = document.getElementById("eredmeny")
/* 12-13-14-15-16. feladat */
inditoGomb.addEventListener("click", function() {
  const gombSzoveg = inditoGomb.textContent  
  const jatekosNev = document.getElementById("jatekos-nev-input").value
  eredmenyDiv.textContent = "Üdvözlünk " + jatekosNev + "! " + "Végrehajtott akció: " + gombSzoveg
})