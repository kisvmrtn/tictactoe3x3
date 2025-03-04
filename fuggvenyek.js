import { nyertesMezok, Xmezok, Omezok } from "./tomb.js";

let nyertes = false;
let Xturn = true;

let mezok = document.querySelectorAll('.jatekmezo')
let infoBox = document.getElementById('infobox')
// console.log(infoBox)
let Xnev = document.getElementById('nev1')
let Onev = document.getElementById('nev2')
let startGomb = document.getElementById('start')
let aktJatekos = document.getElementById('aktualisjatekos')

// console.log(nyertesMezok[0])

export const jatekIndito = () => {
    startGomb.addEventListener('click', () => {
        aktJatekos.innerHTML = `${Xnev.value} (X)`
        jatekMenet()
        startGomb.style.display = "none"
    })
}

const jatekMenet = () => {
    for (let i = 0; i < mezok.length; i++) {
        mezok[i].addEventListener('click', () => {
            if (nyertes === true) {
                return
            } else if (mezok[i].innerHTML.length > 0) {
                alert('Foglalt mező!')
            } else if (Xturn) {
                mezok[i].innerHTML += '<p>X</p>'
                Xmezok.push(i+1)
                Xturn = false
                aktJatekos.innerHTML = `${Onev.value} (O)`
                // console.log(Xmezok)
            } else {
                mezok[i].innerHTML += '<p>O</p>'
                Omezok.push(i+1)
                Xturn = true
                aktJatekos.innerHTML = `${Xnev.value} (X)`
                // console.log(Omezok)
            }
            gyoztesEllenorzo()
        })
    }
}
const gyoztesEllenorzo = () => {
    for (let n = 0; n < nyertesMezok.length; n++) {
        let combo = nyertesMezok[n]
        if (combo.every(nyertes => Xmezok.includes(nyertes))) {
            infoBox.innerHTML += `<p class="infoP">${Xnev.value} (X) nyert</p>`
            aktJatekos.innerHTML = ''
            nyertes = true
            break;
        } else if (combo.every(nyertes => Omezok.includes(nyertes))) {
            infoBox.innerHTML += `<p class="infoP">${Onev.value} (O) nyert</p>`
            aktJatekos.innerHTML = ''
            nyertes = true
            break;
        }
    }
    if (!nyertes && Xmezok.length === 5) {
        infoBox.innerHTML += '<p class="infoP">Döntetlen</p>'
        aktJatekos.innerHTML = ''
        nyertes = true
    }
}