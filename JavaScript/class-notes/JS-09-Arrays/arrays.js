// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1. yöntem (Array Literal) tercih edilen yöntem

// const yaslar =[30,29,45,27,12]
// console.log(yaslar);

// // yaslar = [1,2,3]//const ile tanımlandığı için hata verdi



// //! 2. yöntem (Array constructor)

// const cars = new Array ("BMW", "Mercedes", "Volvo")
// console.log(cars);


// const birth = 1979 

// const isimler = ["erkan", "ayça", "mustafa", 2024-birth, "kemal", true, yaslar]

// console.log(isimler);

// console.log(isimler[2]);//mustafa
// console.log(isimler[6][1]);//!array içinde array bu şekilde yazılır. //29

// console.log(--isimler[6][1]); //! array içindeki array içinde olan değeri değiştirdik, azalttık.


// isimler[5] = false // yeni atamayla kalıcı olarak değiştirdik
// console.log(isimler[5]);



// // ?=========================================================
// // ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// // ?=========================================================

// //*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

// const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

// meyveler.pop()//kivi silindi

// console.log(meyveler);//Elma", "Erik", "Armut", "Muz"

// console.log(meyveler.pop());//muz

// //*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

// console.log(meyveler.shift());
// console.log(meyveler);//['Erik', 'Armut']

// //*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

//  console.log( meyveler.push("çilek","Kavun", "karpuz"))

// console.log(meyveler);

// //*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

// meyveler.unshift("Ayva")

// console.log(meyveler);

// //*reverse() dizinin tamamını ters çevirir (dizilerde çalışır)

// meyveler.reverse()

// console.log(meyveler);

// console.log(meyveler[3].split("").reverse());//["t", "u", "m", "r", "A"];

// //*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
// //*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
// //*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

// meyveler.splice(2,1,"Ananas")// 1 yazarsam değiştirmiş oluyor
// console.log(meyveler);

// meyveler.splice(3,0,"çilek")//0yazarsam belirtilen index e eleman ekler

// console.log(meyveler);

// meyveler.splice(4,1)// 4 index li elemanı sildi
// console.log(meyveler);

// //*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
// //* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

// meyveler.sort()
// console.log(meyveler);

// const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

// number.sort((a,b)=>a-b)

// console.log(number);

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

//***** includues */

// console.log(sayilar1.includes(5));//true
// console.log(sayilar1.includes("5"));//false

// //* indexOf(), lastIndexOf() */

// console.log(sayilar1.indexOf("uc")); //4
// console.log(sayilar1.indexOf(5)); //1
// console.log(sayilar1.lastIndexOf(5)); //7
// console.log(sayilar1.indexOf(5,2)); //7 //! (5, 2. indexten sonra ara.)

//******** Örnek */

//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür
//* const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

// const sayiString=prompt("lütfen bir sayı giriniz")

// const sayiNumber=Number(sayiString)


// if(sayilar1.includes(sayiString)){
//     console.log("aradığınız sayının string hali dizide var", sayilar1.indexOf(sayiString));

// }else{
//     console.log("aradığınız sayının string hali yok");
// }


// if (sayilar1.includes(sayiNumber)) {
//   console.log(
//     "aradığınız sayının number hali dizide var",
//     sayilar1.indexOf(sayiNumber)
//   );
// } else {
//   console.log("aradığınız sayının number hali yok");
// }


//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];
console.log(meyveler[3].split("").reverse().join(""));

//* toString()
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar. // virgülleri kaldırmaz.

console.log(sayilar1.toString());


//* slice()

const arabalar = ["bmw", "mercedes", "audi", "ferrari", "lamborgini"]
console.log(arabalar.slice(3));
console.log(arabalar.slice(1,3));

//* concat()

const kisiler=["özlem","esra", "nihal", "fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6]
console.log(kisiler.concat(rakamlar));

const birleşik = kisiler.concat(rakamlar, true, "ayşe", "gökçe", ["fatih", "kemal"], 3, [["ayca", "mustafa"]]);
console.log(birleşik); //? hepsini bir diziye döküyor farketmeksizin.

// console.log(kisiler+rakamlar); // arrayin dışına çıkarıyor ve string döndürüyor

//* every();

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore test gerceklestirir.Tum elemanlar icin test basarili ise true aksi takdirde false deger dondurur.

const yas = [18,23,34,45,56,89,15]

console.log(yas.every((a)=>a>=18));//false
console.log(yas.every((a)=>a<90));//true

//!1 tane bile şarta uymayan varsa false döndürür, hepsi şarta uyarsa true döndürür


//* ****** some();

//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir. En az bir eleman icin bile test basarili ise true aksi takdirde false deger dondurur.

console.log(yas.some((b)=>b>70)); //true
console.log(yas.some((b)=>b>90)); //false


