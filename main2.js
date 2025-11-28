const myArray = ['a','b','c']
const yourArray = ['d','e','f']
const myArray1 = []
const newMyArray = Array.from(myArray)
const myArray2 = [
    'a',
    24,{
        apel: function() {
            console.log('ini apel')
        }
    },
    ['makan','makanan']]
const gabungArray = myArray.concat(yourArray)
newMyArray[0] = '0'

myArray1['F'] = 'f'
myArray1['G'] = 'g'

const datas = [
{
    nama: 'afif',
    stack: 'html',
    umur: 26,
},
{
    nama: 'fifa',
    stack: 'css',
    umur: 26,
},
{
    nama: 'naufal',
    stack: 'js',
    umur: 21,
},
{
    nama: 'genm',
    stack: 'c++',
    umur: 30,
},  
]

datas.sort((a,b) => b.umur - a.umur).map((values) => console.log(values))


// const D = myArray.includes('d')

// console.log(myArray1)
// if(D){
//    const dPos = myArray.indexOf('d')
//    const indexSebelum = dPos - 1
//    const indexSetelah = dPos + 1
//    const sebelum = myArray[indexSebelum]
//    const setelah = myArray[indexSetelah]
//    console.log(`The letter before d is ${sebelum}`)
//    console.log(`The letter after d is ${setelah}`)
//    const earlyLetter = myArray.shift()
//    console.log(`Early letter is ${earlyLetter}`)
//    const lateLetter = myArray.pop()
//    console.log(`Late letter is ${lateLetter}`)
// }else{
//     console.log('Position unknown')
// }
// console.log({myArray})
// console.log([newMyArray])
myArray2[2].apel()