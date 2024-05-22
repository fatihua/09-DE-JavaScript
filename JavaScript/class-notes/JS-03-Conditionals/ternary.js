//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik 

// condition ?  (şart olduğunda yapılacaklar)  : (şart doğru olmadığında yapılacaklar)

// const age = 12
// const gender = "erkek"
// const health = true

//  if(age >= 20 && gender == "erkek" && health == true){
//      console.log("askerlik yapabilir");
//  }else{
//      console.log("askerlik yapamaz");
//  }

// //* birinci yazım şekli
// const mesaj = (age >= 20 && gender == "erkek" && health == true) ? "askerlik yapabilir" : "askerlik yapamaz";

// console.log(mesaj);


// //* ikinci yazım şekli
// age >= 20 && gender == "erkek" && health == true
// ? console.log("ok") 
// : console.log("no");


//* örnek 2 */

//kullanıcıdan not isteyelim,  50 ve üzeri başarılı, altıysa başarısız olsun

// const grade = +prompt ("Lütfen notunuzu giriniz")

// grade >= 50 ? console.log("succeed") : console.log("failed");

// // //? tek durumlu koşullandırmada da mecburen else yapısı (: ve sonrası kullanılmak zorundadır).

// grade >= 50 ? console.log("succeed") : "";

// grade >= 50 && console.log("succeed");


// //? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, sadece 2 durum var ise
// //? Ternary kullanmak daha mantiklidir, daha çoklu sorgularda if-else kullanımı daha mantıklıdır.

const speed = 50;
speed > 120 
? console.log("speedy") 
: (speed >= 90 
    ? console.log("normal") 
    : console.log("slowly"));



//? aynı örneğin if-else'lisi

 if (speed > 120) {
   console.log("Speedy")
} else if (speed >= 90) {
   console.log("Normal")
} else {
   console.log("Low Speed")
}