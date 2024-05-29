//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız


// const dizi1 = [-5,15,-78,-45,34,27,4,-9,7]

// const negatifler1=[]
// const pozitifler1=[]

// const dizilereAyir1=()=>{
//     for(let i=0; i<dizi1.length; i++){

//         if(dizi1[i] < 0){
//             negatifler1.push[dizi1[i]]
//         }else {
//             pozitifler1.push[dizi1[i]]
//         }
//     }
//     console.log(pozitifler1);
//     console.log(negatifler1);
// }
// dizilereAyir1();

// //! yukarıyı kontrol aşağıdaki kodla karşılaştır nerede hata var, aynı olması lazım

// const dizi1 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

// const negatifler1 = [];
// const pozitifler1 = [];

// const dizilereAyir1 = () => {
//   for (let i = 0; i < dizi1.length; i++) {
//     if (dizi1[i] < 0) {
//       negatifler1.push(dizi1[i]);
//     } else {
//       pozitifler1.push(dizi1[i]);
//     }
//   }

//   console.log(pozitifler1);
//   console.log(negatifler1);
// };



//******** FOR IN */

// const dizi2 =  [-5, 15, -78, -45, 34, 27, 4, -9, 7]

// const negatifler2=[]
// const pozitifler2=[]

// const dizilereAyir2 =()=>{

//     for (let i in dizi2){    //! for in diziyi sırayla döndürüyor, dizideki i'yi almak için dizi2[i] yazmak durumundayız
//         // console.log(i);
//         if (dizi2[i]<0){
//             negatifler2.push(dizi2[i])
//         }else{
//             pozitifler2.push(dizi2[i])
//         }
//     }
//     console.log(pozitifler2);
//     console.log(negatifler2);
// }
// // dizilereAyir2();


// //*   FOR OF */

// const dizilereAyir3 = () =>{
//     for (let i of dizi2){         //! for of direk içerideki i neyse onu getiriyor
//         // console.log(i);
//         if(i <0){
//             negatifler2.push(i)
//         }else{
//             pozitifler2.push(i)
//         }
//     }
//     console.log(pozitifler2);
//     console.log(negatifler2);
// }
// dizilereAyir3();


//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------

// const animal = [
//     "fil",
//     "aslan",
//     "deve",
//     "fil",
//     "kaplan",
//     "fil",
//     "deve",
//     "aslan",
//     "aslan",
//     "aslan",
//   ];

// userAnimal = "aslan"

//   const findAnimal = () => {
//     let sayac = 0

//     for (let i in animal){
//         if(animal[i] == userAnimal)
//         sayac++
//     }
//     return `${userAnimal} hayvanından ${sayac} adet bulunmaktadır`
//   }
//   console.log(findAnimal());


//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* ORNEK: alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

// const arabalar = ["bmw", "mercedes", "audi", "volvo"];

// //! 1. yol
// console.log(arabalar.join(""));

// //!2. yol (for of)

// let araba = ""
// for(let i of arabalar){
//     araba += i
// }
// console.log(araba);




//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.
