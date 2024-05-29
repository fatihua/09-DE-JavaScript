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



//* ashley hoca ödevler;
//*1.  Rastgele karakterlerden oluşan bir dize kimliği (belirtilen uzunlukta) üreten bir javascript işlevi yazın.

//*char_list = "ABCDEFGHIJKLMNOÖPQRSTUÜVWXYZabcdefghijklmnoöpqqrstuvwxzy0123456789"

// function code (num){
    
//     let char_list = "ABCDEFGHIJKLMNOÖPQRSTUÜVWXYZabcdefghijklmnoöpqqrstuvwxzy0123456789"

//     let pass = ""

//     for (let i=0; i<num; i++){
//         let newChar= Math.floor(Math.random() * char_list.length)

//         // console.log(newChar);

//         pass += char_list[newChar]
//         // console.log("ne geliyor", char_list[6]);
//     }
//     return pass
// }
// console.log(code(8));

//* 2. write a function to find the area and the perimeter of a circle */
// let number;
// function area_perim (){
//     let wünsch = prompt("Geben Sie A/P/Q ein")
//     if(wünsch.toLowerCase() === "q"){
//        return;
//     }else {
//         number = +prompt("Geben Sie eine Nummer ein!")
//         if(number < 0){
//             console.log("Ungültig!");
//         }else if (wünsch.toLowerCase() === "a"){
//             console.log((number*number * Math.PI).toFixed(2))
//         }else if(wünsch.toLowerCase() === "p"){
//             console.log((Math.PI*2*number).toFixed(2))
//         }else{
//             console.log("Ungültig!");
//         }
//     }
// }
// area_perim(number);


//* 3. soru;
//* bir stringdeki belirli bir harfin sayısını bulan function yazınız;
//* ("connect", c) = //2 

// let string1 = "ahmetovaeeee"

// function findLetter (input){
//     let sayac =""
//     let letter = "a".split("")
//     // console.log(letter);
//     let newInput=input.split("")
//     // console.log(newInput);

//     for (let i=0; i < newInput.length; i++){

//         if (letter[0] == newInput[i]){
//             sayac++
//         }
//     }
//     return sayac
// }
// console.log(findLetter(string1));


//* 4. soru: bir stringden belirli bir sayıda karakteri ayırma function'ını yazınız.

//* example = input = func("Clarusway", 6) => output = "Clarus"

// let str2 = "Clarusway"
// let number2 = 6

// function extract (input){
//     let newStr2 = input.slice(0, number2)
//     return newStr2
// }
// console.log(extract(str2));


//* 5. 0-100 arası rastgele üretilen bir sayıyı kullanıcının 5 hakta bilmesi gereken bir oyun yapılacak, her haktan sonra user tarafından girilen sayı ile üretilen sayı karşılaştırılarak artırması veya azaltılması söylenecek, 5 hak içinde bulursa kullanıcıya kaçıncı hakkında bulduğu bildirilecek, yoksa üretilen numara gösterilecek.

// const winningNumber = Math.round(Math.random()*100)
// console.log(winningNumber);
// let sayac = 0
// let userNum;

// const number1 = function(number) { 
//     while (sayac < 5) {
//         userNum = +prompt("Lütfen 0-100 arası bir sayı giriniz!")
//         if(userNum == winningNumber){
//             sayac++
//             alert(`${sayac}. hakkınızda bildiniz, tebrikler.`)
//             break;
//         }else if(userNum < winningNumber){
//             alert("Lütfen daha büyük bir sayı girerek tekrar deneyiniz!")
//             sayac++
//         }else if(userNum > winningNumber){
//             alert("Lütfen daha küçük bir sayı girerek tekrar deneyiniz!")
//             sayac++
//         }
//     }
// }
// number1(userNum);

// if(sayac === 5){
//     alert(`Hakkınız kalmamıştır, sayınız ${winningNumber} olarak belirlenmişti.`)
// }
//? fonksiyondan sonra if(sayac === 5) yazmazsak iki defa bu alert çıkıyor!!!

//* derste...*/

// const rastgele = Math.ceil(Math.random() * 20);
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





//! birinci çözüm with if/else and while

// function countDigits (num){

//     let count = 0

//     if (num == 0){
//         return 1
//     }else {
//         while(num != 0){

//         num = Math.floor(num / 10)

//         count ++
//         }
//     }
    
//     return count
    
// }
// // countDigits(100)
// console.log(countDigits(0));

//! ikinci çözüm with for;

// function countDigits (num){

//     let newNum = num.toString()

//     let count = 0

//     for(let i = 1; i <=newNum.length; i++){
//         count++
//     }
//     return count
// }
// console.log(countDigits(123456));


//! üçüncü çözüm recursive;

// function countDigits (num){
//     // if(num === 0){
//     //     return 1
//     // }
//     if(num < 10) {
//         return 1
//     }else{
//         return 1 + countDigits(Math.floor(num/10))
//     }
// }
// console.log(countDigits(10));


//* neden en son return'e 1 ekleyip başlıyoruz?
//* çünkü recursive yapılarda da yukarıdan aşağıya kod okunurken uygun bir koşul sağlandığında kodun yürütmesi durur, aksi taktirde devam eder.

//* Bu durumda en sondaki return'e indiği takdirde kod en az iki basamaklı olacaktır ve bir üstteki kodu geçecektir.

//* sayı 1 basamaklı bir sayıya indiği duruma kadar alttaki recursive koda "basamak - 1" defa girecek, 1 basamaklı olduğu anda bir üstteki ifli ifadede duracaktır.

//* Eğer an alttaki return'e 1 ekleyip yazdırmazsak, kod bir üstteki ifli ifadede duracağından konsolda sadece 1 görünecektir.

//* return kodu sonlandırıp kendinden sonraki kodları okutmadığından bir üstteki ifli bloktaki sayıyı en alttaki return'e baştan ekleyerek kodu çalıştırmalıyız.

//* eğer ortadaki ifli bloğu yazmazsak; ilk ifli blokta kodumuz kalır ve sonuc 1 olarak gözükür, eğer ilk iflideki 1'i en alttaki return'e eklersek bu seferde sonucu 5 olarak alırız, çünkü 4 basamaklı bir kod o bloğa 4 defa girer ve toplam 5 olur.

//* 



// function countDigit (number){
//     // if(number === 0){
//     //     return 1
//     // }
//     console.log("ne geliyor", number);
//     if(number < 10){
//         return 1
//     }else{
//         return 1 + countDigit(Math.floor(number / 10))
//     }
// }
// console.log(countDigit(251));


// 2513

// 1+countDigit(251)
// 1+1+countDigit(25)
// 1+1+1+countDigit(2)
// 1+1+1+1



// let myStr = "Hello, FS Cohort 09!"

// let sayac=0
// for (let i = 1; i <=myStr.length; i++){
//     sayac++
// }
// console.log(sayac);

//**** */
// let str = "Once a day";
// let index = str.indexOf("a");
// console.log(index);
// let index2 = str.lastIndexOf("a");

// console.log(str.indexOf("a", index +1)===index2);



// console.log(str.indexOf("a", index + 1));// ilk "a" stringdeki ilk a'yı buluyor, sonraki index+1 = stringdeki bir sonraki a'nın konumunu gösteriyor.
// console.log(index2);
// console.log(str.indexOf("a"));
// console.log(index);

//*** */

// let str2 = "Hello FS Cohort 09";

// console.log(str2.slice(9));
// console.log(str2.substring(9,17));
// console.log(str2.slice(10,18));
// console.log(str2.split("C")); // ilgili karakteri kaldırıp ayırıyor



//**** */

// let myName = "Anthony Harold";

// myName = myName.slice(8);

// // myName = myName.toLowerCase()

// console.log(myName);

//*** */

// const myArr = [1,2,5,6,7,3,4]
// const newArr = myArr
// myArr.sort()
// const numArr = newArr.forEach((item, index)=>item)
// console.log(numArr);

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const oddArr = numbers.filter((item) => item % 2).map((item)=>item**2)
// console.log(oddArr);

//* ashley hoca - 28.05.2024

//* 1- fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT:ForEach() kullanılmalı ve orijinal dizi değiştirilmeli.

const fiyatlar = [100,250,50,89];

fiyatlar.map((a, i, arr)=>(arr[i] = a * 1.1)).forEach((a)=> console.log(Math.round(a)))

//? map(a, index, arr) yapısını kullandık.

//* 2- fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

//? 1.
const fiyatlar2 =[100,90,95,125,300,1000,85,70,50,93]

fiyatlar2.forEach((a)=>{
    if(a > 90){
        console.log(a);
    }
})

//? 2.
fiyatlar2.filter((a)=> a > 90).forEach((a)=>console.log(a))


//* 3- fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

const fiyatlar3 =[100,90,95,125,300,1000,85,70,50,93]

fiyatlar3.filter((a)=>a < 110).map((a)=>a * 1.1).forEach((a)=>console.log(Math.round(a)))



//* 4- maaşlar dizisinde 4000'den düşük olan maaslara %50 zam yapmak istiyoruz ve bunu ayrı dizi olarak saklamak istiyoruz.

const maaslar = [3000,5000,4000,6000,6500];

const yeniMaas = maaslar.filter((a)=>a < 4000).map((a)=>a*1.5)
console.log(yeniMaas);


//* 5- Maaşı 4000'den büyük olanlara %25 zam yaparak sonuçları konsolda yazdıralım.*/

maaslar.filter((a)=>a > 4000).map((a)=> a * 1.25).forEach((a)=>console.log(a))