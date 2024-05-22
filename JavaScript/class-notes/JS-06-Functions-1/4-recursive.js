// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

//!sayma sayılarının ilk 6 teriminin toplamını bulunuz

// const add = (n) =>{
//     let toplam = 0;

//     for(let i = 1; i<= n; i++){
//         toplam +=i;
//         console.log(toplam);
//     }
//     return toplam
// }
// console.log(add(6));


//* aynı soruyu recursive ile yapalım;

// const add2 = (n) => {
    
//     if(n < 1){
//         return n
//     }else {
//         return add2(n-1) + n 
//     }
// }
// console.log(add2(6)); 


//* örnek, fibonacci sayılarını recursive ile yazma;

const fibo = (n) => {

    if (n<=2){
        return 1
    }else{
        return fibo(n-1) + fibo(n-2)
    }
} 
console.log(fibo(6));