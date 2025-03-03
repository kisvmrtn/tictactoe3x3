const nyertes = false;

let Xturn = true;
let mezok = document.querySelectorAll('.jatekmezo')
export const lerako = () => {
    for (let i = 0; i < mezok.length; i++) {
        mezok[i].addEventListener('click', () => {
            if (mezok[i].innerHTML.length > 0) {
                alert('Foglalt mező!')
            }else if (Xturn) {
                mezok[i].innerHTML += '<p>X</p>'
                Xturn = false
            } else {
                mezok[i].innerHTML += '<p>O</p>'
                Xturn = true
            }
        })
    }
}