const karakterNev = document.getElementsByClassName("char-name")
const karakterHP = document.getElementsByClassName("char-hp")
const kivalasztasGomb = document.getElementsByTagName("button")
const kiIras = document.getElementsByClassName("placeholder-text")

console.log(kiIras)
kivalasztasGomb[0].addEventListener("click", function() {
    const karakterNev = document.getElementsByClassName("char-name")[0].textContent
    const karakterHP = document.getElementsByClassName("char-hp")[0].textContent
    console.log(karakterNev)
    console.log(karakterHP)
    console.log(kiIras)
    kiIras[0].innerHTML = `<span class="kiIrasNev">${karakterNev}</span> <br> <span class="kiIrasHp">Életerő: ${karakterHP}HP</span> `
})
kivalasztasGomb[1].addEventListener("click", function() {
    const karakterNev = document.getElementsByClassName("char-name")[1].textContent
    const karakterHP = document.getElementsByClassName("char-hp")[1].textContent
    console.log(karakterNev)
    console.log(karakterHP)
    console.log(kiIras)
    kiIras[0].innerHTML = `<span class="kiIrasNev">${karakterNev}</span> <br> <span class="kiIrasHp">Életerő: ${karakterHP}HP</span> `
})
kivalasztasGomb[2].addEventListener("click", function() {
    const karakterNev = document.getElementsByClassName("char-name")[2].textContent
    const karakterHP = document.getElementsByClassName("char-hp")[2].textContent
    console.log(karakterNev)
    console.log(karakterHP)
    console.log(kiIras)
    kiIras[0].innerHTML = `<span class="kiIrasNev">${karakterNev}</span> <br> <span class="kiIrasHp">Életerő: ${karakterHP}HP</span> `
})