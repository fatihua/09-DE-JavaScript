// function sayHi(userName) {
//     console.log(`Hello! ${userName}`);
// }
// sayHi('Mark');
// sayHi(); // what will be the output?

// function sayHi2(userName, company) {
//     console.log(`Hello! ${userName} of ${company}`);
//     company = 'Apple';
//     console.log(`Hello! ${userName} of ${company}`);  
// }
// let userName= 'Mark';
// let company = 'Clarusway';
// sayHi2(userName, company);
// console.log(company);
// sayHi2('Matthew'); // what will be the output?



// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

console.log("************ 1- FUNC DECLARATION *************");

//* örnek1

//? fonksiyonun tanımlanması

// function yazdir(){
//     console.log("ee daha daha nasılsınız?");
// }
// yazdir();// invoke ya da call işlemi(fonksiyonu çağırma işlemi)

// //* örnek2 parametreli fonksiyon

// function adYazdir(a,b,c) {
//     console.log(a,b,c);
// }
// adYazdir("ayse", "mustafa", "ayca");
// adYazdir("kemal", "fatih", "umut", "halil");

// //* örnek3 parametreli, return'lü kullanım:

// function yasHesapla(isim,tarih) {
//     console.log(`Benim adım ${isim} ve ben ${new Date().getFullYear()-tarih} yaşındayım.`);

//     return new Date().getFullYear()-tarih;
// }
// yasHesapla("erkan", 1989);
// console.log(yasHesapla("erkan", 1989));

// //* return'ün amacı, dışarıda console.log ile gösterebilmektir. return olmazsa consoledan ulaşılamaz.(console=alert)

// //* alert (yasHesapla("erkan", 1989))

// yasHesapla("gökce", 1988);
// yasHesapla("rengin", 2000);
// yasHesapla("mehmet", 1990);

// //? yaş ortalamasını alınız?

// const gökce=yasHesapla("gökce", 1988);
// const rengin=yasHesapla("rengin", 2000);
// const mehmet=yasHesapla("mehmet", 1990);

// alert((gökce+rengin+mehmet) / 3);


//* örnek4

//tek-çift sorgulama

// console.log (isEvenOdd(5));  //call invoke
// console.log (isEvenOdd(16));  //call invoke
// console.log (isEvenOdd(5210));  //call invoke

// function isEvenOdd(sayi) {
//     // const sonuc = sayi % 2 == 0 ? "çifttir" : "tektir"
//     // return sonuc

//     return sayi % 2 == 0 ? "çifttir" : "tektir"
// }

//* console.log yukarıda olmasına rağmen ulaşılabiliyor.


//* örnek5 arguments keywordü ile parametre karşılama

// function sumAll() {
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments.length);

//     let toplam= 0;
//     for(let i=0; i < arguments.length; i++){
//         toplam += arguments[i]
//     }
//     // console.log(toplam); // direk görmek için

//     return toplam // dışarıda console.log'a toplam değişkenini gönderip dışarıda console.log'u yazmak için kullandık, aslında aynı sonucu veriyor bir yukarıdaki console.log ile.
// }
// console.log(sumAll(24,34,56,35,12,89,23,45,78,98)); 
// // alert(sumAll(24,34,56,35,12,89,23,45,78,98)); 


