let userNumber = document.getElementById("user")
let kalanHak = document.getElementById("kalan")
let sonuc = document.getElementById("result")
let girilenNum = document.getElementById("girilenler")
let buton = document.getElementById("buton")



function playGame (){
    let comNumber = Math.ceil(Math.random() * 100)
    let comparedNumber;

    buton.addEventListener("click", ()=>{
        comparedNumber = userNumber
    })

    let hak = 0

    while (hak < 5){
        hak++
      
        if(userNumber === comNumber){
            sonuc.textContent = `Tebrikler, sayımız ${comNumber}!`
            break;
        }else if(userNumber > comNumber) {
            sonuc.textContent = `Maalesef yanıldınız, lütfen sayıyı küçülterek tekrar deneyiniz, kalan hakkınızın ${hak} olduğunu unutmayınız!`
            kalanHak = hak
        }else if(userNumber < comNumber){
            sonuc.textContent = `Maalesef yanıldınız, lütfen sayıyı büyüterek tekrar deneyiniz, kalan hakkınızın ${hak} olduğunu unutmayınız!`
            kalanHak = hak
        }
    }
    if(hak==5){
        sonuc.textContent = `Hakkınız kalmadı, sayı ${comNumber}'dı/di.`
    }
    girilenNum.textContent += userNumber
}

