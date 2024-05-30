//dizi metotları
//? pop(): dizinin son elemanını siler
//? shift():dizinin başındaki elemanını siler
//? push() : dizinin sonuna eleman ekler
//? unshift() : dizinin başına eleman ekler
//? reverse() : diziyi tersine çevirir
//? splice() : (başlangıç indexi, kaç eleman alınacak(silinecek), eklenecek eleman(item1, item2 ...))
//? sort() : sıralama yapar(stringlerde ifadelerde ascii kodlara göre alfabetik sıralama)
//? sort((a,b)=>a-b)
//? includes(değer): içeriyor mu(true - false)
//? indexOf(değer): değerin kaçıncı indexte olduğu
//? join(" ") : bir dizideki elemanları birleştirerek stringe çevirir.
//? slice(): diziden bir parçayı almamızı sağlar
//? concat() : iki diziyi birleştirir
//? every() : dizi içindeki her eleman için bir callback fonksiyon çalıştırır ve call fonksiyondaki şartı true değer çevirir.
// const numbers = [45,16,34,23]
// numbers.every((num)=>num > 18) //false

//? some: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır. ve  fonksiyondaki en az bir şartı sağlıyosa true değer çevirir

//const numbers = [45,16,34,23]
// numbers.some((num)=>num > 18) //true

/*-----------------------------------------*/

//? map: bir dizi için bir callback fonksiton çalıştırır. vd her eleman için o fonksiyondan çıkan sonucu bir diziye aktarır.
//? forEach: bir dizi için bir callback fonksiton çalıştırır. Geriye bir değer döndürmez
//? filter: bir dizi için bir callback fonksiton çalıştırır. Verilen koşulu sağlayan bir değer döndürür
//? reduce: dizidekii elemanları toplayarak tek bir değere döndürür

/*-----------------------------------------*/

//! 1. bir sdizideki elemanları ortalamasını bulan fonssiyon;

// const numbers=[34,56,56,87,90]

// const newNum = numbers.reduce((acc, curr)=> acc + curr)
// const result = newNum / numbers.length
// console.log(result);

// // 1. yol;

// let toplam = 0

// const ortalama = () => {
//     for (let i=0; i<numbers.length; i++){
//         toplam += numbers[i]
//     }
//     return toplam
// }
// console.log(ortalama()/numbers.length);

//! 2- Girilen bir cümledeki kelime sayısını bulan fonksiyon

//1.yol
// sentence ="Merhaba Cohort DE-09"

// const newSentence = sentence.split(" ")
// console.log(newSentence.length);

// //2. yol
// sentence="Merhaba     Cohort DE-09"

// function contWords(newSentence) {
//     // const sumOftheWordsCount = newSentence.split(" ").length
//     //Birden fazla boşluk içeriyosa

//     const sumLetter = newSentence.split(/\s+/).length // fazla boşluk bırakılmışsa bile doğru sonucu veriyor...
//     return sumLetter
// }

// console.log(contWords(sentence))

//!Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

// test: "I like Clarusway"  // Output : I found at Clarusway at 3!
// test : "I like bootcamps " // Output  I can't find Clarusway:(

//1.yol
// function findClarusway (sentence){
//     if(sentence.includes("Clarusway")){
//         return `I found Clarusway at ${sentence.split(" ").indexOf("Clarusway")+1}`
//     }else{
//         return `I can't find Clarusway :(`
//     }
// }
// const sentence1 = "I like Clarusway"
// console.log(findClarusway(sentence1));

// //2.yol - umut
// const findClarusway1 = function (x) {
//     const arr = x.split(" ");
//     return x.includes("Clarusway")
//       ? `I found Clarusway at ${arr.indexOf("Clarusway")+1}`
//       : `I can't find Clarusway`;
//   };

//   console.log(findClarusway1(sentence1));

//! Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program

// let array = ["ahmet", "ayşe", "fatma", "ibrahim", "metin", "ahmet", "colombo", "fatma", "selim", "salim", "metin", "eray"]

// function newArr (content) {
//   let newArray = []

//   for(let i=0; i < content.length; i++){ // for(let i of content)
//     // console.log(newArr);
//     if(!newArray.includes(content[i])){    // if(!newArray.includes(i))
//       newArray.push(content[i])             // newArray.push(i)
//     }
//   }
// return newArray
// }

// console.log(newArr(array));

// // 2. yol

// const arr = ["elma", "armut", "kayisi", "elma", "fener", "umut", "alex"];
// const newArr2 = [];

// const findSame = function (x) {
//   for (let item of arr) {
//     if (newArr2.includes(item)) continue;
//     newArr2.push(item);
//   }
//   console.log(newArr2);
// };

// findSame(arr);

//!Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon

//? 1. yol, kendim yazdım

// const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

// let newArr = []
// words.filter((a)=>{                  // ((a)=>a[0] === "A") return newArr
//     if(a.slice(0,1) == "A"){
//         newArr.push(a)
//     }
// })
// console.log(newArr);

//? 2. yol filterin kısası... halil hoca

// const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];
// let newWords = words.filter((a)=> a[0] === "A" )
// console.log(newWords);

//?3. yol, fonksiyonla yapma... ayşe hoca
// const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];
// const moveWithA=(a)=>{
//     arrayA=[]
//     for(const i in a){
//         if(a[i][0]=="A"){
//             arrayA.push(a[i])
//         }
//     }
//     return arrayA
// }
// console.log(moveWithA(words))

//? 4. yol - for of...

// const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];
// function ilkHarfA(arr) {
//     let result = [];
//     for (let word of arr) {
//         if (word[0] === 'A' || word[0] === 'a') {
//             result.push(word);
//         }
//     }
//     return result;
// }
// console.log(ilkHarfA(words));

// //? 5. yol - tek tek bastırma...
// const neu = words.filter((words)=>words.startsWith("A")).forEach((words)=>console.log(words))

//! bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
//! a- Kaç kişi zam olsa bile 20000 altında kalıyor

// let salaries = [18000, 13000, 17000, 24000, 18500, 21000, 19300];

// let newSal = salaries.map((a)=> a * 1.1).filter((a)=>a < 20000).length
// let newSal2 = salaries.map((a)=> a * 1.1).filter((a)=>a < 20000)

// //** veya

// let newNew = salaries.filter((a)=>a * 1.1 < 20000).length

// console.log(newSal);
// console.log(newSal2);
// console.log(newNew);

//! b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı

// let addBudget = salaries.map((salary)=>{
//     let increased = salary * 1.1
//     return increased < 20000 ? 20000 - increased : 0
//     console.log(increased)
// }).reduce((sum, payment)=> sum + payment)
// console.log(addBudget);

//* kendin tekrar yap...

// EXTRA QUESTIONS

//!1-Bu şekilde girilen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program

let numLetter = "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"

let convertNum = {
    "sıfır":0,
    "bir":1,
    "iki":2,
    "üç":3,
    "dört":4,
    "beş":5,
    "altı":6,
    "yedi":7,
    "sekiz":8,
    "dokuz":9
}

let numArray = numLetter.split(",")
// console.log(numArray);

function convert (a){

    let newNum = []

  for(let i of a){
   i = convertNum[i]
    newNum.push(i)
    }
    return newNum.join("")
}
console.log(convert(numArray));


//!2-Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const findAsal = (a) => {
//   if (a < 2) {
//     return false;
//   } else {
//     for (let i = 2; i < a; i++) {
//       if (a % i == 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// console.log(numbers1.filter((a) => findAsal(a)));

//? ilk önce bir asal sayı bulma fonksiyonu yazdık, sonra ilgili arrayi filtreleyerek indexleri tek tek bu fonksiyona sokup for döngüsüyle 2'den başlayarak kendinden bir önceki sayıya kadar tek tek böldürüp sonucu sıfır çıkanları yanlış kabul ettirdik ve geriye kalanları true kabul edip console.log'da gösterdik.

//* for (let i) ifadesi duruma göre index veya sayı sırası yerine kullanılabiliyor, mesela burada 2'den a'ya kadar bir sayı artarak giden bir sayı olarak kullanıldı, ama index olarak da işlev görebiliyor. */


//!3-Bir diziyi tersine çeviren bir map fonksiyonu oluşturun.
// const originalArray = [1, 2, 3, 4, 5];

// const result = originalArray.map((a, i, array)=>array[array.length-1-i])
// console.log(result);

//Diyelim ki elimizde [10, 20, 30, 40, 50] adında bir dizi var.
//İlk elemanı almak için: array[array.length - 1 - 0] (son elemanın indeksi - 0) → array[4] → 50
//İkinci elemanı almak için: array[array.length - 1 - 1] (son elemanın indeksi - 1) → array[3] → 40

//!4 -verilen sayıyı yazıya çeviren program


