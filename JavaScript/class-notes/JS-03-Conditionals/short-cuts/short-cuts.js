//* Short circuit, programlama terimleri içinde sıkça kullanılan bir kavramdır ve genellikle mantık operatörleri (AND, OR) ve koşullu ifadelerle ilişkilendirilir. Short circuit, bir koşulun değerlendirmesinin bir noktada durdurulması veya atlanması anlamına gelir. Bu, bazı durumları hızlı bir şekilde belirlemeye ve gereksiz işlemleri önlemeye yardımcı olabilir.

//* Short circuit özellikle `&&` (ve) ve `||` (veya) mantık operatörleri ile ilgilidir.

//* 1. `&&` (ve) Operatörü:
//*    - `&&` operatörü kullanıldığında, sol taraftaki ifade doğru (true) değilse, sağ taraftaki ifade değerlendirilmez ve sonuç hemen `false` olarak kabul edilir.

//* AND Yapısı
//* Yalnız bir tane 0 olması sonucu tamamanen 0 yapar

//* Short circuit







// const x = 5;
// const y = 8;

// if(x>0 && y>0){
//     console.log("her iki koşulda doğru");
// }else{
//     console.log("En az bir koşul yanlış");
// }

// AND mükemmeliyetçidir. Hepsi doğru olunca true değer döndürür. ilk false gördüğünde onu yazar,
// eğer hepsi true ise sonuncu olanı yazar.





// console.log("12" && 5 && "Merhaba"); //* hepsi True olduğunda sonuncuyu yazar

// console.log("12" && "0" && "Merhaba");
// console.log(" " && null && "Merhaba");

//* false üreten değerler:
//* 0, -0, false, null, undefined, ""  */



//* OR
// Mütevazidir: En az bir doğru yeterlidir. İlk gördüğü true değere sahip değeri yazar. 
// Hepsi false olduğunda false değer üretir. Bunlardan sonuncusu yazar

// console.log("" || undefined || 1 || 0);
// console.log("" || 0 || [1,2,5,9] || "fatih");

// let ad = "Sebastian";
// let statu = "admin";

// if (ad === "Sebastian" && statu === "admin"){
//     console.log("Hoşgeldinizzzz");
// }else{
//     console.log("Bu sisteme giremezsiniz!");
// }

// for(let i=1, i=<5, i++){
//     return i;
// }
// let toplam2 = 0;

// for (let i = 1; i <= 100; i++){
//     console.log(toplam2 += i); 
// }
// console.log(toplam2);

// let toplam = 0;
// for (let i = 1; i <= 100; i++) {
//     toplam += i;
// }
// console.log("1'den 100 e kadar olan sayıların toplamı" + toplam);

// let toplam3 = 0;

// for(let i= 1; i<=10; i++){
//     console.log(toplam = i*i);
// }


// let sayi = 6;
// let sonuc2 = 0;

// for(let i=1; i<=sayi; i++){
//     sonuc2 = sayi*=(i+1);
// }
// console.log(sonuc2);

// let n = 6;
// let sonuc;
// for (let i = n - 1; i >= 1; i--) {
//   sonuc = n *= i;
// }
// console.log(sonuc); //720

// let num = 5;
// let result = 0;

// for (let i= 1; i <= num; i++){
//     for(let j= 1; j <= i; i++){
//         result = "*"
//     }
//     console.log(result);
// }