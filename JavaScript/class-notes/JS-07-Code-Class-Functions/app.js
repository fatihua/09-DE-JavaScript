//! decleration

// islem(10,13)

// function islem(par1, par2, par3){
//     console.log(par1);
//     console.log(par2);
//     // console.log(par3);

//     return par1+par2+par3
// }

// let add = islem(3,4,5)
// console.log(add);


// //! expression

// const topla1 = function(a,b) {
//     return a+b
// }
// console.log(topla1(3,5));


// //! arrow function

// const topla2 = (a, b) => a+b;

// console.log(topla2(3,5));

// let isim = "ashley miller"

// console.log(isim[5]);
// console.log(isim.length);
// sayılarda yapmaz, string'lerde gösteriyor


//! 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

// let f;
// const CtoF = function(a){
//     f = (a * 9/5) + 32

//     return f
// }
// CtoF();
// console.log(CtoF(50));



//! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

// let string = "hello world";

// function reverseString (str){
    
//     let newStr = "";

//     for (let i = str.length-1; i >=0; i--){
//         newStr += str[i]       
// }
//     return newStr
// }
// console.log(reverseString(string));


//! 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

// let statement = "ey edip adanada pide ye"

// function reverseString (str){
    
//     let newStr = "";

//     for (let i = str.length-1; i >=0; i--){
//         newStr += str[i]       
// }
//     return newStr
// }
// console.log(reverseString(statement));

// if(statement == reverseString(statement)){
//     console.log("palindromdur");
// }else{
//     console.log("palindrom değildir");
// }

//********* */

// let string1 = "ey edip adanada pide ye"

// function isPalindrome (str){
    
//     let ters = "";

//     for (let i = str.length-1; i >=0; i--){
//         ters += str[i]       
// }
//     return ters == str ? "palindromdur" : "palindrom değildir"
// }
// console.log(isPalindrome(string1));



//! 4- Bir sayıyı tersine çevirecek bir fonksiyon yazın?


// const ters = (num) => {

//     let numStr = num.toString()
//     let reverse=""

//     for (let i = numStr.length-1; i >=0; i--){
//         reverse += numStr[i]
//     }

//     return parseInt(reverse)
// }
// console.log(ters(456));

//* ****

//*2.yol

// const ters2=(num)=>{

//     let reverse=0

//     while(num!=0){

//         reverse=reverse*10
//         reverse+=num%10

// num=Math.trunc(num/10)

//     }

// return reverse
// }

// console.log(ters2(4567));


//! 4- Belirli bir sayının pozitif tam bölenlerinin toplamını bulan fonksiyonu yazınız?



// let sonuc = function(number){

//     let tamB = 0

//     for(let i = 1; i <= number; i++){

//         if(number % i == 0){
//             tamB += i
//         }
//     }
//     return tamB
// }
// console.log(sonuc(12));

// //************ */

// function sumOfDivisors(number){
    
//     let sum = 0
//     for(let i = 1; i <= number; i++){

//         if(number % i == 0){
//             sum += i
//         }
// }
// return sum
// }
// console.log(sumOfDivisors(12));

// //! 5- İlk 2 parametreyi çarpıp 3. parametre üssüne alan fonksiyonu yazınız?

// function islem (a,b,c){
//     return (a*b)**c
// }
// console.log(islem(2,3,4));

//! 6- 100-1000 e kadar olan sayılardan polindrom olanlarını belirten/yazan program

// const reverseNumber = (num) => {
//     let numStr = num.toString();

//     let reverse = "";

//     for (let i = numStr.length-1; i >=0; i--){
//         reverse += numStr[i]
//     }
//     return parseInt(reverse) == num ? `${num} sayısı polindromdur` : `${num} sayısı polindrom değildir`;
// };
// for (let i = 100; i < 1000; i++){
//     // console.log(reverseNumber(i));
// }

//! 7-Yarıçapı verilen bir dairenin alan ve çevresini bulan program?


// function alan (r) {
//     return `${2*Math.PI*r} çevre ${Math.PI * r*r} alan`
// }
// console.log(alan(3));


// function soru6(r){
//     return `${2*Math.PI*r} cevresidir ${Math.PI*r*r} alanidir`
// }

// console.log(soru6(3));


//? tellFortune adlı bir fonksiyon yazın:
  //? 4 farklı parametre : jobTitle, geoLocation, partner, numKids.
  //? falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"

//   function tellFortune (jobTitle, geoLocation, partner, numKids){
//     return `"Gelecekteki mesleğiniz ${jobTitle}'dir. ${geoLocation}'da yaşayacaksınız. ${partner} ile evlenecek ve ${numKids} çocuk sahibi olacaksınız"`

  
//   }

// console.log(tellFortune("yetkili", "Ankara", "Fatma", 5));



//! 9- Write a function to calculate compound interest based on the principle amount
  // Function `compoundInt()` returns a final amount based on the compound interest formula provided principal amount, rate of interest per year, time on a yearly basis, and n as the number of times that interest is compounded per unit time.


  //? halil hoca;
//   function compountInt(anaPara,faiz,sure,n){

//     let r = faiz / 100;

//     let a = anaPara ** ((1 + r) , (sure * n));

//     return a;
// }

// console.log(compountInt(10,5,2,4));


//? gökçe hoca
// const compoundInt = function (principalAmount, intRate,time,n) {
    
//     let result = principalAmount * Math.pow((1 + intRate / n), n * time); // anapara * (1 + faiz yüzdesi / bir yıl kaça bölünecekse) üzeri kaç adet periyotlara bölmek istiyorsun * kaç ay duracaksa
//     return result;
//   }

//   console.log(compoundInt(1000,0.2,1,4).toFixed(2));



//! mükemmel sayıyı bulan fonksiyonu yazınız

//? bölen sayılarının toplamı orijinal sayının 2 katına eşitse 
//? 6  = 1+2+3+6 = 6*2

function perfect (number){

    // let newStr2 = number.toString()

    let bölen = 0
    for (let i= 1; i <= number; i++){
        if (number % i == 0){
            bölen += i
        }
    }
    return bölen == number * 2 ? "perfect sayıdır": "perfect sayı değildir";
}

console.log(perfect(6));
