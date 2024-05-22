//* taban & yükseklik alınıp alan hesaplama;

// const alan = function (a,b){
//     a = +prompt("taban değerini giriniz")
//     b = +prompt("yükseklik değerini giriniz")
//     let sonuc = (a*b) / 2

//     return sonuc
// }
// console.log(alan(10, 20));

//* kareAl, küpAl üsAl;

// let a = +prompt("bir sayı giriniz - a.")
// const kareAl = function (a) {
//     a = +prompt("bir sayı giriniz - a.")

//     return a ** 2
// }
// console.log(kareAl(a));

// let  b = +prompt("bir sayı giriniz - b.")
// const küpAl = function (b) {
//     b = +prompt("bir sayı giriniz - b.")

//     return b ** 3
// }
// console.log(küpAl(b));

// const üsAl = function (a,b) {
//     a = +prompt("bir sayı giriniz - a.")
//     b = +prompt("bir sayı giriniz - b.")

//     return a ** b
// }
// console.log(üsAl(a, b));

//* artık yıl;
// let year = +prompt("Yıl giriniz!")

// let leapYear = function (year) {
//     if(year % 4 ==0 && year % 100 != 0 || year % 400 == 0){
//         console.log(`${year} artık yıldır.`);
//     }else {
//         console.log(`${year} artık yıl değildir.`);
//     }
// }
// leapYear(year);

//* Q veya q girilene kadar tüm notları alan ve bu değer girildiğinde girilen tüm notların ortalamasını veren kod;

// let not = prompt("lütfen bir not giriniz!");

// let toplam = 0;
// let sayac = 0;
// let input = "Q"

// while(not != input && not != input.toLowerCase()){
//     sayac ++
//     console.log(sayac);

//     toplam = toplam + Number(not)

//     not = prompt("Lütfen devam ediniz!")
// }
// console.log(toplam/sayac);

//* derste yazılan oyun tahmini

//!!! GUESS NUMBER
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır. 

//* oyun kendini tekrar eder haline getirildi do-while döngüsü içine alınarak, sonda da globalden görünebilsin diye var değişkeni kullanıldı.

// do {
//   const rastgele = Math.ceil(Math.random() * 20);
//   console.log(rastgele);

//   let hak = 5;
//   const gamePlay = function () {
//     while (hak > 0) {
//       const guess = +prompt("sayı tahmin edinizz");

//       if (rastgele == guess) {
//         console.log("tebrikler doğru tahmin ettiniz 👯‍♂️");
//         break;
//       } else if (rastgele > guess) {
//         console.log("ARTTIR 📈");
//         hak--;
//       } else {
//         console.log("AZALT 📉");
//         hak--;
//       }
//     }
//   };
//   gamePlay();

//   if (hak == 0) {
//     console.log("5 hakkında da doğru tahmin edemedin");
//   }

//   var tekrar = prompt("Tekrar oynamak ister misiniz, E/H?");
// } while (tekrar == "E" || tekrar == "e");

// console.log("Teşekkürler!");

