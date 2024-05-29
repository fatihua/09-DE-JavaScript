// let isimler = ["harvey", "ashley", "tolga", "fatih", "gokce"]
// let bos = []

// console.log(typeof(isimler[0]));
// console.log(isimler.length);
// console.log(Boolean(bos.length));

// bos.length ? console.log("veri geliyor") : console.log("veri gelmiyor");

// for, while, do while, forEach

//** */
// for(let i= 0; i< isimler.length; i++){
//     console.log(isimler[i]);
// }

//** */
// let sayac= 0

// while(sayac < isimler.length){
//     console.log(isimler[sayac]);
//     sayac++
// }

// //** */
// isimler.forEach((i)=>{console.log(i);})


//! 1- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?


// let hello = "hello world"

// function findVowels (str){

//     let vowels = "aeıioöuü";

//     let newStr=""

//     for(let i= 0; i < str.length; i++){
//         if(vowels.includes(str[i])){ //vowels içinde str[i] var ? true : false şeklinde okunuyor bu kod...
//             newStr +=str[i]
//         }
//     } 
//     return newStr
// }
// console.log(findVowels(hello));


//! 2- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.

// let arr = [1,2,30,80,5,4,0]

// let maxsayi = (sayilar)=>{
//     let max = sayilar[0]

//     for (let i = 0; i<sayilar.length; i++){
//         if(sayilar[i] > max){
//             max = sayilar[i]
//         }
//     }
//     return max
// }

// console.log(maxsayi(arr));


//* 23.çözüm;

// let sayis = [1,5,9,70,7,15]
// sayis.sort((a,b)=>a-b)
// console.log(sayis[sayis.length-1]); //??????????


//! 3- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.

// let dizi1 =[1,2,3,4,5,6,7,8,9]

// let toplam = (sayi) => {
//     let topla = 0

//     for (let i=0; i < dizi1.length; i++){
//         topla += sayi[i]
//     }
//     return topla
// }
// console.log(toplam(dizi1));


//! 4- bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?


// let numbers = [1,2,3,4,5]

// let ortalama = (arr) => {
//     let topla = 0

//     for (let i=0; i < numbers.length; i++){
//         topla += arr[i]
//     }
//     return topla / numbers.length
// }
// console.log(ortalama(numbers));

//! 5-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// let str = "merhaba nasılsın"

// let newStr = str.split(" ")

// console.log(newStr.length);

// //* 2. yol;

// let cumle = "Hasret rüzgarları çok erken esti."

// function countWords(sentence) {
//     const words = sentence.split(" ")
//     return words.length
// }
// console.log(countWords(cumle));

//! 6- Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

// let cumle = "Javascript harika bir dil"

// function newCumle (sentence) {
//     const neu = sentence.split(" ")
//     return neu.reverse().join(" ").toString()
// }
// console.log(newCumle(cumle));


//! 7- Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.


// const names = []

// while(true){
//     // let name = prompt("Lütfen bir isim giriniz")

//     if(name === "q") {
//         names.pop()
//         break;
//     }else{
//         names.push(name)
//     }
// }
// console.log(names);


//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız


// let names = prompt("isim giriniz")
// let date = +prompt("doğum tarihi giriniz")

//* decleration
// function deger (isim, birth){
    
//     let newDate = new Date().getFullYear() - birth

//     return `${isim} isimli ve ${newDate} yaşındaki vatandaş`
// }

// console.log(deger(names, date));

//* arrow 

// const deger = (isim, birth) => {
//     let newDate = new Date().getFullYear() - birth

//     return `${isim} isimli ve ${newDate} yaşındaki vatandaş`
// }
// console.log(deger(names, date));


//! 9- isimler1 dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.

// const isimler1 = [
//     'Ahmet',
//     'mehmet',
//     'ismet',
//     'SAFFET',
//     'Can',
//     'Canan',
//     'Cavidan',
//   ];

//   const newa = []

//   for (let i = 0; i < isimler1.length; i++) {
//     const element = isimler1[i].toLowerCase();
//     newa.push(element)
    
//   }
//   console.log(newa);


  //! 10- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.

//   //* 1. yol
//   let fact = 5

//   function factorial (num) {

//     let result = 1

//     for(let i = 1; i<=num; i++){
//          result *= i
//     }
//     return result
//     }
//   console.log(factorial(fact));


// //* 2. yol
//   function factorial2(n) {
//     if(n===0 || n===1){
//         return 1
//     }else{
//         return n * factorial2(n-1)
//     }
//   }
//   console.log(factorial2(6));



//! 11- kayıp sayıyı bulun?
// const sal = [5,2,6,1,3,7]



//* 2. yol

// const findNumber = (arr) => {
//     let total = (arr.length+1)*(arr.length+2) /2

//     let arrTotal = sal.reduce((acc, curr, i)=>{
        
//         console.log("acc", acc);
//         console.log("curr", curr);
//         console.log("index", i);
//         return acc + curr
//     })
//     return total - arrTotal
// }
// console.log("eksik sayı", findNumber(sal));

// //* acc = yapılacak işlemi üzerinde topluyor, 
// //* curr = sırayla değerleri döndürüyor, 




//! 12- let string="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program

let string1="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
let numArr = {
  "bir" : 1,
  "iki" : 2,
  "üç" : 3,
  "dört" : 4,
  "beş" : 5,
  "altı" : 6,
  "yedi" : 7,
  "sekiz" : 8,
  "dokuz" : 9,
  "sıfır" : 0
}

//! JavaScript'te anahtar-değer çiftlerini depolamak için bir nesne (object) kullanmalıyız, array değil.


let strToArr = string1.split(",")
  console.log(strToArr);

function convert (string){
  
  let newNum = []

  for(let i=0; i < string.length; i++){
    string[i] = numArr[strToArr[i]]
    newNum.push(string[i])
  }
  return newNum.join("")
}
console.log(convert(strToArr)); 

// //* chatGPT solving

// let string = "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz";

// // Kelime ve rakam eşleştirmelerini tanımlayalım
// const kelimeToRakam = {
//     "sıfır": 0,
//     "bir": 1,
//     "iki": 2,
//     "üç": 3,
//     "dört": 4,
//     "beş": 5,
//     "altı": 6,
//     "yedi": 7,
//     "sekiz": 8,
//     "dokuz": 9
// };

// // Stringi virgüllerle ayırarak kelimeleri bir diziye çevirelim
// let kelimeler = string.split(',');
// // console.log(kelimeler);

// // Boş bir string oluşturalım
// let rakamString = '';

// // Her bir kelimeyi rakama çevirip stringe ekleyelim
// for (let i = 0; i < kelimeler.length; i++) {
//     rakamString += kelimeToRakam[kelimeler[i]];
//     // console.log([kelimeler[i]]);
// }

// console.log(rakamString);  // Output: 612453789


//! 13- Size bir dizi kelime verildi. "Nemo" kelimesini bulmanız ve şuna benzer bir dize döndürmeniz gerekir: 
//? "[Nemo'yu bulduğunuz kelimenin sırası] 'nda Nemo'yu buldum!"

//? Nemo'yu bulamıyorsanız, "I can't find Nemo :(" yazın.

//? findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

//? findNemo("Nemo is me") ➞ "I found Nemo at 1!"

//? findNemo("I Nemo am") ➞ "I found Nemo at 2!"






//! 14- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program

let array = ["ahmet", "ayşe", "fatma", "ibrahim", "metin", "ahmet", "colombo", "fatma", "selim", "salim", "metin", "eray"]

function newArr (content) {
  let newArray = []

  for(let i=0; i < content.length; i++){
    // console.log(newArr);
    if(!newArray.includes(content[i])){
      newArray.push(content[i])
    }
  }
return newArray
}

console.log(newArr(array));