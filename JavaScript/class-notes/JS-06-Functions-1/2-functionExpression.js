// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//! önce fonksiyon oluşturmak farz!!

//* örnek1

// const isEvenOdd = function(sayi) {
//     return sayi % 2 == 0 ? "çifttir" : "tektir.";
// }

// // const sonuc = 
// // console.log(sonuc);

// console.log(isEvenOdd(5) );


//* örnek2 verilen 3 sayıdan en büyüğünü bul

// const buyukBul =function(a,b,c){
//     let enBuyuk;
//       if(a>b && a>c) {enBuyuk=a}
//       else if(b>a && b>c) {enBuyuk=b}
//       else enBuyuk=c
    
//     // console.log(enBuyuk);
    
//     return enBuyuk
    
//     }
//     //   alert(  buyukBul(3,4,5))
//     //   alert(  buyukBul(13,4,7))


// //* örnek3 arguments keywordü ile soru çözümü

// const enBul = function() {
//     let biggest = arguments[0];
//     let smallest=arguments[0];

//     for (let i=1; i<arguments.length; i++){
//         if(arguments[i] > biggest){
//             biggest = arguments[i];
//         }

//         if(arguments[i] < smallest){
//             smallest = arguments[i]
//         }
//     }
//     console.log(biggest);
//     console.log(smallest);
    // return biggest;
    // return smallest; bu şekilde yazılmıyor, backtick içinde yazılınca oluyor.

    // return`${biggest} ${smallest}`

// }
// alert(enBul(34,111,777,678,56,2,5678,34,6))


//* örnek4 bir fonksiyonun içerisinden başka bir fonksiyon çağırılabilir

// const usAl=function(a,b) {
//     return a**b;
// };

// const cevreBul = function (a,b) {
//     return (a+b) * 2;
// };

// const alanBul = function (a,b) {
//     return a*b;
// };


// const hesapla=function (secim, s1, s2) {
//     if(secim=="usAlırmısın"){
//        console.log(usAl(s1, s2)); 
//     }else if(secim=="cevreBulurmusun"){
//         console.log(cevreBul(s1,s2)); 
//     }else if(secim=="alanBulurmusun"){
//         console.log(alanBul(s1,s2))
//     }
// }
// hesapla("usAlırmısın", 3,5);
// hesapla("cevreBulurmusun", 13,15);
// hesapla("alanBulurmusun", 2,4);

//* ilk önce en altta yazılan sayılar bir üstteki s1 ve s2'ye gidiyor, sonra bunlar daha üstteki diğer fonksiyona yani a ve b'ye gidiyor.



//*ornek5:-------------------------------------------------------------------------- 
//*Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre, doğum yılı girilen kişinin yaşını hesaplattıran yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program 
//*0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar" 
//* 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. " yazsın.

//*---------------------------------------------------------*/

// const calculate = function(birth){
//     const ortOmur = 95;
//     const kalanOmur=ortOmur-(2024-birth);

//     if (kalanOmur > 0 && kalanOmur<=10){
//         return "Sen bu değerleri önemseme hayatın tadını çıkar"
//     }else if(kalanOmur>10 && kalanOmur<=20){
//         return "Gezmek görmek istediğin yerler varsa yola çıkma zamanı.."
//     }else {
//         return `${kalanOmur} yılın var, sen daha çalış, ileride gezersin.`
//     }
// }
// console.log(calculate(prompt("lütfen doğum yılınızı giriniz")));