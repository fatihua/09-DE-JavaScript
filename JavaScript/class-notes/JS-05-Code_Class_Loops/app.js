// //* ^ And operatörü

// //*  & Truthy value with &&
// console.log(2 && 5) //5

// console.log(Boolean(2 && 5));

// //* & Falsy value with &&

// console.log(0&&7); //* 0
// console.log('0'&&7); //* 7
// console.log(Boolean(0)); //* false

// //* & object / Array  with &&

// console.log({} && "Hello"); //* Hello
// console.log([] && "Hello"); //* Hello

// console.log(Boolean([])) //* true
// console.log(Boolean({})) //* true 

// //* & Falsy string with &&

// console.log('' && 'World') // ilk değer boş string döner
// console.log("" && 'World') // hiçlik
// console.log(`` && 'World') // hiçlik

// //* & Falsy null with &&

// console.log(null && 'Hello World') // null   
// console.log(NaN && 'Hello World') // Nan
// console.log(null && NaN) //null 


// //*  ^ OR operatörü ||

// //*& Truthy value with ||

// console.log(2 || 5) //2

// //*& Falsy value with ||

// console.log(0 || 7) //7

// console.log(0 || '') //boş string döner

// //*& object / Array  with ||
// console.log({} || "Hello"); // {}
// console.log([] || "Hello"); // []

// //*& Falsy null with ||

// console.log(null || 1) //1
// console.log(null || NaN) //NaN 

//  //* Soru 1 : 18 yaşından büyüklerin sigara kullanabileceği 18 yaşından küçüklerin sigara kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız.

// const age = 10;

// if(age>=18){
//     console.log("Yaşınız uygundur");
// }else {
//     console.log("Yaşınız uygun değildir");
// }

// let age1 = 10

// age1 = age1 >= 18 ? console.log("Yaşınız uygundur") : console.log("Yaşınız uygun değildir");

// //! farklı =>
// let age2 = 20;

// let response = (age2 >= 18) ? "sigara alabilir" : "sigara alamaz";
// console.log(response);


// //* isNaN()

// let x= +prompt ("bir sayı giriniz :")
// console.log(isNaN(x));


//* kullanıcının sayı girene kadar tekrar giriş yapmasını sağlayan while yapısını yazın.

//* isNaN(sayi) = girilen sayı değil değil mi? 

// let num= +prompt("bir sayı giriniz");

// while(isNaN(num)){
//     num = +prompt("tekrar bir sayı giriniz");
// }
// console.log("girilen sayı " + num);

//* yukarıdaki soru do-while ile yapılan cevap

// let num;

// do{
//     num = +prompt("bir sayı giriniz")
// }while(isNaN(num));
// console.log("girilen sayı " + num);

// let num;
// do {
//   num = prompt("Lütfen bir sayı girin:");
// } while (isNaN(num));
// console.log("Girilen sayı:", num);



//*örnek3 Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın

// const user = "fatih";
// const pass = 1234;
// let hak = 3;

// while (hak > 0) {
//   let username = prompt("Kullanıcı adınızı girin:");
//   let password = +prompt("Parolanızı girin:");

//   if (username === user && password === pass) {
//     alert(`Hoş geldiniz, ${username}!`);
//     break;
//   } else {

//     hak--;
//     alert("kalan hak : " + hak);

//     if (hak > 0) {
//       alert("Kullanıcı adı veya parola yanlış. Lütfen tekrar deneyin.");
//     } else {
//       alert("3 kez yanlış girdiniz.");
//     }
//   }
// }


// let size= 5;

// for(let i = 0; i<size; i++){
//     let output ="";
//     let row=""
//     for(let s=0; s<size-i-1; s++){
//         row=row + " "
//     }
//     for(let j= 1; j<=2*i+1; j++){
//         output=output+"#"
//     }
//     console.log(row+output);
//     // output="";
// }

//* yukarıdakinin farklı çözümü
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let row = '';
//     for (let b = 1; b <= rows - i; b++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '#';
//     }
//     console.log(row);
// }


//**soru-- */
//     * 
//     *  *  
//     *  *  * 
//     *  *  *  *  
//     *  *  *  *  *

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let row = '';

//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '* ';
//     }
//     console.log(row);
// }

//*örnek5 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

// let number = 5;
// let sum = 0;

// for (let i=1; i<=number; i++){
//     let userNum =+prompt("sayı giriniz")
//     sum+=userNum;
// }
// console.log(`ortalama : ${sum/number}` )


//*örnek6 1000 ile 2000 arasındaki hem 3 hem 5 e bölünebilen sayıların adedini konsola yazdıran çözüm

// let result=0;

// for(let i=1000; i<=2000; i++){
//     if(i % 15 === 0){
//         result++;
//     }
//     // console.log(result);
// }
// console.log(result);

// //while

// let sayi = 1000
// let sayacc=0
// while (sayi <= 2000) {
//     if(sayi % 3 == 0 && sayi % 5 == 0) {
//         // console.log(sayi);
//     sayacc++;

//     }
//     sayi++
// } 

// console.log(sayacc);

//* Armstrong number while solution

//! bir sayının basamak adedince bütün basamakların üssü alınıp toplandığında kendisi ediyorsa bu sayı Armstrong sayıdır.
//? 153= 1**3 + 5**3 + 3**3

//? 9474 = 9**4 + 4**4 + 7**4 + 4**4

//!  verilen sayının tüm basamaklarının sayı değerlerinin basamak adedi kadar kuvvetinin toplamı kendisine eşitse bu bir armstrong sayıdır
//* ayşe hocanın çözümü...

// let a=+prompt("Lütfen bir sayi giriniz?");
// let sum=0;
// let t=a.toString().length;
// console.log(t);
// for( i=0 ; i< t ; i++){
//     placeValue=parseInt(a/ (10**i)) % 10;
//     sum = sum + (placeValue)**t;
// }
// if( sum == a){
//     console.log("This is an Armstrong Number.");
// }else{
//     console.log("This is not an Armstrong Number.");
// }

// //* İpek hocanın yaptığı çözüm

// let num = +prompt("Enter a number:");
// let originalNumber = num;
// let sayac = 0;
// let sum = 0;



// while (originalNumber != 0) {
//   originalNumber = Math.floor(originalNumber / 10);
//   console.log(originalNumber);
//   sayac++;
// }

// originalNumber = num;

// while (originalNumber > 0) {
//   let sayi = originalNumber % 10;
//   sum += sayi ** sayac;
//   originalNumber = Math.floor(originalNumber / 10);
// }

// sum == num
//   ? console.log(num + " is an Armstrong number.")
//   : console.log(num + " is not an Armstrong number.");
