// function satu(){
//     console.log("satu")
// }
// function dua(){
//     console.log('function 2 mau dieksekusi...')
//     setTimeout(() => {
//         console.log("dua")
//     }, 3000)
        
// }
// function tiga(){
//     console.log("tiga")
// }

// satu()
// dua()
// tiga()

const token = ~~[Math.random()* 12345678]
const gambar = ["1.jpg","2.jpg","3.jpg"]

function login(username){
    console.log('Memproses token user sekarang...')
    return new Promise((sukses, gagal) => {
        setTimeout(() => {
           if(username != "m_naufal_afif")
            gagal("Maaf, datanya salah")
            sukses({token})
        }, 200)
    })
    
}
       
function dapatUser(token){
    console.log('memproses apikey sekarang...')
    return new Promise((sukses, gagal) => {
        if(!token)
            gagal("Maaf, gak ada token! Gak bisa akses")
            setTimeout(() => {
                sukses ({apiKey: "xkey1"})
        }, 500)
    })
}

function dapatGambar(apiKey){
    console.log('Memproses gambar sekarang...')
    return new Promise((sukses, gagal) =>{
        if(!apiKey) gagal("Tidak ada apikey, tidak bisa akses!")
            setTimeout(() =>{
                success({gam: gambar})
            }, 1500)
    })
    
}

async function DisplayUser(){
    const {token} = await login("m_naufal_afif")
    const {apiKey} = await dapatUser(token)
    const {gam} = await dapatGambar(apiKey)

    console.log(
        `token kamu: ${token}
        apikey kamu: ${apiKey}
        request gambar kamu: ${gam}
        `
    )
}

DisplayUser()

// const user = login("m_naufal_afif")
// user.then(function(respon) {
//     const {token} = respon
//     dapatUser(token).then(function(){
//         const {apiKey} = respon
//         console.log(apiKey)
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err))

// login("m_naufal_afif", function(respon){
//     const {token} = respon
//     dapatUser(token, function(respon){
//         const {apiKey} = respon
//         dapatGambar(apiKey, function(respon){
//             const {gam} = respon
//             console.log(gam)
//         })
//     })
// })


