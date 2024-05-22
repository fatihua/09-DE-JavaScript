// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dört İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız

// const sayi1 = +prompt("1. sayıyı giriniz")
// const islem = prompt("+,-,*,/ işlemlerinden birini giriniz")
// const sayi2 = +prompt("2. sayıyı giriniz")

let sonuc;
//* sonunda eşittir koyulması zorunlu değil, noktalı virgül de olur, boş da olur, eşittir sonrasında sıfır dahil farketmeksizin bir değer de atanabilir.*/


// if (islem == "+"){
//     sonuc = sayi1 + sayi2
// }else if (islem == "-"){
//     sonuc = sayi1 - sayi2
// }else if (islem == "*"){
//     sonuc = sayi1 * sayi2
// }else if (islem == "/"){
//     if(sayi2 != 0){
//         sonuc = sayi1 / sayi2
//     }else{
//         alert("payda 0 olamaz")
//     }
// }else{
//     alert ("Yanlış işlem girdiniz")
// }
// console.log(sonuc);


//**************** */

// if(sonuc != 0){
//     console.log("tebrikler bir değer elde ettiniz"); // sonuç 0 dışında herhangi bir değişken
// }

// //? kısa yol // sonuç true olarak dönecekse şayet yukarıdaki kodu fazladan yazmaya gerek yok!!

// if(sonuc){
//     console.log("tebrikler bir değer elde ettiniz");
// }

// //? kısa yol 2 (short curcuit)
// sonuc && console.log("komik olma kuzen Larry");


//* örnek */

const age = 12
const gender = "erkek"
const health = true

if(age >= 20 && gender == "erkek" && health == true){
    console.log("askerlik yapabilir");
}else{
    console.log("askerlik yapamaz");
}
