const namalengkap = function tambahNama(namadepan, namabelakang) {
    console.log('Nama lengkap: ',namadepan, namabelakang)
}

namalengkap('M Naufal', 'Afif')

//cara 1
const jum = new Function('x','y','console.log(x+y)')
//cara2
function jum2(x,y){
    console.log(x+y)
}

//cara 3
const jum3 = (x,y) =>{
    console.log(x+y)
}

function rng() {
const nomorAcak = ~~(Math.random * 1000)
if(nomorAcak > 200) {
    console.log('wih, lebih dari 200', nomorAcak)
}else{
    console.log(nomorAcak)
}
}

jum(1,2)
jum2(2,4)
jum3(3,6)
rng()