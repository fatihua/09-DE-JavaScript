// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//? ornek1 ekrana 10 kere merhaba yazdırın

// for(let index=1; index<=10; index++){
//     console.log("Merhaba");
//     console.error("yanlış");
// }

//? ornek2 1'den N'e kadar olan sayıların toplamı
//? normalde i kullanılıyor, ama başka variable name'leri de kullanılabilir

// const N = +prompt("lütfen bir sayı giriniz")
// let toplam =0;
// for (let number = 1; number <=N; number++) {
//     toplam = toplam + number;
// }
// console.log(toplam);

//? ornek3 Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.
// let num=59;
// let primeNumber=true;
// for(let i=2; i<num; i++){
//     if (num % i == 0) {
//         primeNumber = false;
//     }
// }
// console.log(primeNumber ? "asaldır":"asal değildir");


//? 0-100 Arasinda 7 adet rastgele tam sayi üreten kodu for döngüsü ile yaziniz.

// for(let i=1; i <= 7; i++){
//     let rastgele = Math.round(Math.random()*100)
//     console.log(rastgele);
// }

//****************** WHİLE **************/
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

// const num = prompt("Lütfen '1 ile 100' arasında bir sayı giriniz");

// while (num<1 || num>100) {

//     console.error("Number 1 ile 100 arasında olmalı");
//     number=prompt("Lütfen '1 ile 100' arasında olan bir sayı giriniz");
// }

// console.log("Tebrikler! Sayı 1-100 arasındadır.");

//****************** */ DO-WHİLE*************
//*ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz

// let number1;

// do{
//     number1 = prompt("lütfen 1-100 arasında bir sayı giriniz");
// }while (number1 < 1 || number1 > 100) // true döndüğü için kod bloğundan çıkamıyoruz, tekrar do'ya çıkıyor, false olduğunda bloktan çıkıp console.log'a ulaşabiliyor.

// console.log("Tebrikler!");


//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not isteyecek ve islemleri tekrar edecektir.


// let devamMı;

// do{
//     let vize = +prompt("vize notunuzu giriniz");
//     let final = +prompt("final notunuzu giriniz");

//     let gecmeNotu = vize*0.4 + final*0.6;

//     console.log(gecmeNotu > 50 ? "tebrikler":"kaldınız");

//     devamMı=prompt("devam etmek istiyorsanız 'e' tuşuna bas");

// }while (devamMı.toLowerCase()=="e");


//? ORNEK3: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.

// let sayi1;
// do{
//     sayi1=prompt("Lütfen bir tuşa basınız")

// }while (sayi1 != "q")

// console.log("çıktık");


//!!! GUESS NUMBER
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

const rastgele=Math.ceil(Math.random()*20)

console.log(rastgele);

let hak=5;

while(hak>0) {

 const guess = +prompt("sayı tahmin edinizz");
 
 if (rastgele == guess) {
   console.log("tebrikler doğru tahmin ettiniz 👯‍♂️");
   break;
 } else if (rastgele > guess) {
   console.log("ARTTIR 📈");
   hak--
 } else {
   console.log("AZALT 📉");
   hak--
 }
}

if(hak==0){
    console.log("5 hakkında da doğru tahmin edemedin");
}
//************************** */



// let number = 10;
// do{
//   console.log(number);
//   number--;
// } while(number>=1);

