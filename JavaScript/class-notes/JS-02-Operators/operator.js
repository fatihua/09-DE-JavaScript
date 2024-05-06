// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const kola=50;
const cips=30;
const dondurma=20;

console.log(kola+cips+dondurma);

let toplam=kola + cips + dondurma;

console.log(toplam);

//! bir arttır

toplam++ 
// => toplam=toplam+1

console.log(toplam);

//! 10 arttır

toplam=toplam+10
toplam+=10

console.log(toplam);

//? + operatörü string concatination işlemi de yapar


const sayi1="3"
const sayi2=8

console.log(sayi1+sayi2);
console.log(sayi1-sayi2);


// Backticks (Template Literals)
const ad="erkan";
const soyad="sevim";
console.log(ad + soyad); //erkansevim => bitişik
console.log("adım soyadım" + " " + ad + ' ' + soyad);
console.log(ad + " " + soyad);
//``
console.log(`adım soyadım ${ad} ${soyad}`);


const dogumTarihi=1979
let year=2024
const adı = "Erkan"
const soyadı = "Sevim"
console.log(`${adı} ${soyadı} ${year - dogumTarihi} yaşındadır.`);



//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rastogele sayı üretir.









