// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const kola=50;
const cips=30;
const dondurma=20;

console.log(kola+cips+dondurma);

let toplam=kola + cips + dondurma;

console.log(toplam);

//! bir arttır

toplam++
// => toplam=toplam+1

console.log(toplam);

//! 10 arttır

toplam=toplam+10
toplam+=10

console.log(toplam);

//? + operatörü string concatination işlemi de yapar


const sayi1="3"
const sayi2=8

console.log(sayi1+sayi2);
console.log(sayi1-sayi2);


// Backticks (Template Literals)
const ad="erkan";
const soyad="sevim";
console.log(ad + soyad); //erkansevim => bitişik
console.log("adım soyadım" + " " + ad + ' ' + soyad);
console.log(ad + " " + soyad);
//``
console.log(`adım soyadım ${ad} ${soyad}`);


const dogumTarihi=1979
let year=2024
const adı = "Erkan"
const soyadı = "Sevim"
console.log(`${adı} ${soyadı} ${year - dogumTarihi} yaşındadır.`);



//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rastogele sayı üretir.


//toFixed(x) : virgülden sonra x adet basamak bırak anlamına gelir
const ab=1.3
console.log(Math.trunc(ab))
console.log(Math.floor(ab))
console.log(Math.ceil(ab))
console.log(Math.round(ab))


const ba=-1.3
console.log(Math.trunc(ba))
console.log(Math.floor(ba))
console.log(Math.ceil(ba))
console.log(Math.round(ba))


document.write(Math.trunc(ba));

// RANDOM: rastgele
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir

console.log(Math.random()*20);
console.log(Math.ceil(Math.random()*20));

const randomSayi=Math.random()
console.log(randomSayi);
console.log(randomSayi.toFixed(2));
console.log(Math.random().toFixed(2));


//* ARTTIRMA AZALTMA

let a = 5;
console.log("ilk", a++); //5
console.log("ikinci", a); //6

let b=a++
console.log(b);//6
console.log(a);//7

let c=10;
console.log("ilk", ++c);//11
let d=++c
console.log(d);
console.log(c);

let e=33;
console.log(--e);//32
console.log(e--);//32
console.log(e);//31

//! e'yi 5 arttır

//e=e+5
console.log(e+=5);//

//! e'yi 5 ile çarp

console.log(e*=5);//180

//? Çarpma ve Üs alma

const PI = 3.14;
const r=5;

const alan=PI*r**2
console.log(alan);

//! Math pow (power) bir sayının kuvvetini almak için kullanılır

console.log(PI*Math.pow(r, 2));

//Math.sqrt : verilen değerin karekökünü verir

console.log(Math.sqrt(144));
console.log(144**(1/2));

// ******** MOD ALMA ******/

const number = 456;
console.log("birler", number%10);
console.log("onlar", Math.trunc(number/10)%10);
console.log("yüzler", Math.trunc(number/100));


// console.log(number = number +i2)
// console.log(number -= i2)
// console.log(number *= i2)
// console.log(number /= i2)
// console.log(number %= i2)



/* ---------------------------------- */
/*     KARŞILAŞTIRMA OPERATÖRLERİ     */
/* ---------------------------------- */

const sayi4=4;
console.log(sayi4==4);//eşit mi?
console.log(sayi4===4);//eşit mi?
console.log(sayi4=="4");//true
console.log(sayi4==="4");//false

console.log(sayi4!=5); // true    5 eşit değil mi?
console.log(sayi4 != "4");//false
console.log(sayi4>4);// büyük mü false
console.log(sayi4>=4);//true

/* ---------------------------------- */
/*        MANTIKSAL OPERATÖRLER       */
/* ---------------------------------- */

console.log("*****************");

//? TRUE

console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean([1, 2, 5]));

//? FALSY

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const v1 = false || 0 || 12.6 || false || null;
console.log(v1);
console.log(Boolean(v1));

const v2 = false || 0 || null || undefined || NaN;
console.log(v2); //NaN
console.log(Boolean(v2));//false

const v3 = 5 && true && 0 && "" ;
console.log("v3",v3);
console.log(Boolean(v3));

const v4 = 5 && 12.6 && -7;
console.log(v4);//-7
console.log(Boolean(v4));//true
console.log(Boolean(!v4));//false


/* ---------------------------------- */
/*           TİP DÖNÜŞÜMLERİ          */
/* ---------------------------------- */

const para = Number("1000") + Number("900");
console.log(para); //1900

let aa = 10
let bb = '5'

console.log('Toplama', aa + bb) //105
console.log('Çıkarma', aa - bb) // 5
console.log('Çarpma', aa * bb) // 50
console.log('Bölme', aa / bb) //2

console.log(aa+ Number(bb));//15

console.log(typeof bb);//string
console.log(bb**2);//25


//******* */
let ee = "123.65";

console.log(parseInt(ee)); // tam kısmı alır ve number'a çevirir - parseInt.
console.log(parseFloat(ee)); //string'i direk number'a çevirir olduğu gibi.

//******* */

//! .toString() metodu numberları stringe çevirir

let f=123.45

console.log(f.toString()); // bu satırla birlikte string'e çevirir


//* + ile de number'a çevirebiliriz

console.log(+ee); // sadece bu komutla number'a çevirir, daha sonra tekrar kullanacaksak yine string olarak kalacaktır.

let i=+ee
console.log(typeof i);
console.log(typeof ee);


//* .toFixed() noktadan sonra kaç basamak alacağımızı belirtir, sayıyı stringe çevirir

let z = 0.345675678;
console.log(typeof(z.toFixed(2)));
console.log(typeof(+z.toFixed(2)));

//*  prompt komutu da .toFixed gibi kullanılan sayıyı string yapar

// const age = prompt ("lütfen yaşınızı giriniz."); //string'dir
// console.log(typeof age);


// const age2 = +prompt ("lütfen yaşınızı giriniz.."); //number'dır.
// console.log(typeof age2);


//* Null Undefined NaN

console.log(typeof null);
let n=null;
console.log(Boolean(n));

console.log(null-5);

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(Number("asdf"));
console.log(Number("1234"));
console.log(null===null);



//! GENEL KÜLTÜR

console.log(Number("0x11"));// x=hexa 16 lık taban 17

console.log(Number("0b101"));// b=binary 2 lik taban 5

console.log(Number("0o11")); // o=octal 8 lik taban 9


console.log(Number ("0x11")); // x=hexa 16 lik taban, 0x 16lik taban oldugunu belirtiyor,  sonuc 1.16*0 + 1.16*1 = 17
console.log(Number ("0b101")); // b=binary 2 lik taban, 0b taban oldugunu belirtiyor,  sonuc 1.2*0 + 0.2*1 + 1.2*2 = 5
console.log(Number ("0o11")); // o=octal 8 lik taban, 0o taban oldugunu belirtiyor,  sonuc 1.8*0 + 1.8*1 = 9
