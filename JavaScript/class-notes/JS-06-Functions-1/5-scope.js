
// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 5- SCOPE *************");

//! global scope (gökteki yıldızlar gibi herkes görebilir)

// let first = 5;
// let second = 12;
// let third = 456;

// console.log(first, second, third);

// const scopeFunction = () => {
//     first = 8;
//     // console.log(first);


//     // let sayesinde yeni bir değişken oluşturuldu ve dışarıdan erişilemez.
//     let second = 1234; //! function scope
//     console.log(second);

//     let fourth=second + first //1234 + 8
//     return fourth
// }
// // scopeFunction();
// console.log(scopeFunction());
// console.log(first);
// console.log(second);



//! global değişken

let number = 11;

const fonk =()=> {
    let number = 44;//! function scope

    number++
    // console.log(number);
    return number
}
fonk();
console.log(fonk());//45
console.log(number);//11


//zorlamayla içerideki number'ı fonk return'ü sayesinde, globaldeki number değişkenine assign ettik.
number = fonk(); // global scope'teki number'ı function scope'taki numbera eşitledik.

console.log(number);

//************** */
// const number = 7 //!  Identifier 'number' has already been declared 

// if yada for gibi süslüler için block-scope
{
    number++

    let x =5;
    let y= x+15;
    console.log(y); //! block-scope
}
// console.log(y); // hata verir
console.log(number); //46


//? var değişkeni

number2 = 100;

var number2; //! hoisted (number2'ye sonradan type atadık ve hep var varmış gibi oldu)

var result = "Hallo";

if (number2 == 1009){
    let result = "Hi!" //! block-scope'ta kalır.
    console.log(result);
}else{
    result = "Salut" //! global-scope'a ulaşır.
    console.log(result);

}
console.log(result);

// var result="naber"//? if ve for süslüleri için var güvensizdir, heryerden erişilebilir



