//alert('Yo!')
let nama = 'Afif'
let usia = 26
let tinggiBadan = 167.5
let beratBadan
let istri  = null
let namaRider = ['Kuuga','Decade','OOO']
namaRider.push('Ryuki','W')
const namaRider1 = ['Kuuga','Agito','Ryuki','Faiz']

beratBadan = 65

if(istri == null){
    istri = 'belum punya'
} else {
    istri = 'sudah punya'
}

let saldoAwal = 100000
let saldoTambahan = 120000
const hutang = 50000
let saldoAkhir = saldoAwal + saldoTambahan - hutang
let hari = new Date().getDay()

console.log(`hari ini hari ${hari}`)
for(let i = 0; i<=namaRider1.length; i++){
    console.log(namaRider1[i])
}
console.log(namaRider1.length)

let j = 0
do{
    j++
    console.log('henshin')
} while(j < 10)
// switch(istri){
//     case 1:
//         istri = "punya 1"
//     break
//     case 2:
//         istri = "punya 2"
//     break
//     default:
//         istri = "belum punya istri"
//     break
// }

//let usia = prompt('Usia kamu?')
const x = 1 //nilai gak bisa berubah
let y = 2 //nilai bisa berubah(mirip var)
//console.log('Usiamu ' + usia,'tahun')
//alert('Usia kamu ' + usia,'tahun')

const a = 3
const b = 5
const c = a / b

alert(namaRider)
alert(`nilai ${a} dibagikan nilai ${b} sama dengan nilai ${c}`)
alert(`namaku ${nama} usiaku ${usia} tinggi badanku ${tinggiBadan}cm 
berat badanku ${beratBadan}kg dan istriku ${istri}`)
alert(`Saldo awalku sebesar Rp.${saldoAwal} 
saldo tambahan yang kumiliki sebesar Rp.${saldoTambahan}
aku berhutang sebesar Rp.${hutang}
jadi total saldoku sebesar Rp.${saldoAkhir}`)