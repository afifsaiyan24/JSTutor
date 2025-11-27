console.log(document.title)
document.title = 'tensai genm'
console.log(document.title)
const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

function tmblKlik(){
    btn1.style.background = 'aqua'
    const teksBaru = document.createElement('p')
    teksBaru.textContent = "Halooo!!"
    body.append(teksBaru)
}
// function gantiWarna(){
//     btn1.style.background = 'aqua'
// }
function ubahText(){
    btn1.textContent = 'Zehahaha!'
}
function oriText() {
    btn1.textContent = 'Klik 1!' 
}
body.append("Halo")

{/* <h1></h1> */}
const h1 = document.createElement('h1')
h1.textContent = 'Yo, ini H1!'

const namaKu = document.createElement('p')
namaKu.innerHTML = '<marquee>Tensai GenM</marquee>'

const namaMu  = document.createElement('b')
namaMu.innerText = 'Gozyu Wolf'
body.append(h1)
body.append(namaKu)
body.append(namaMu)