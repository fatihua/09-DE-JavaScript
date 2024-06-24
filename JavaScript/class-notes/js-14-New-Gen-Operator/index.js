console.log("*** NEW GEN OPERATORS ******");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
    id:"12345",
    brand : "Apple",
    type : "smart phone",
    price: 3000
}
const product1 = { // sonra ekledik, konu anlatımı gereği
    id:"123456",
    brand : "Samsung",
    type : "Mobile phone",
    price: 5000
}

//? . notasyonu ile erişim mümkün:

console.log(product.id); //12345
console.log(product.type); //smart phone
let proPrice = product.price
console.log(proPrice);//3000
proPrice += 100
console.log(proPrice);//3100
console.log(product.price);//3000
// product.price = proPrice
// console.log(product.price);//3100

//? square brackets

console.log(product["brand"]);

//? Destructuring yöntemi:
//? değişken isimleri key'ler ile aynı olmalıdır.
//! ************ ilginç bir kullanım, bilgine....  *************************/

let {id, price, brand, Type} = product // farklı bir değişkene atanıyor yine, let proPrice gibi...
console.log("ID", id); //ID 12345
console.log("brand", brand); // brand Apple
console.log("type", Type);//type undefined - çünkü büyük harf kullandık, aynısı olmalı
console.log("price", price);//3000
price+=500
console.log(price);//3500 - farklı bir değişkene atadığı için orijinal price değişmiyor, tıpkı yukarıdaki let proPrice'a atanan price gibi.
console.log(product.price);//3000
product.price = price // = içerideki orijinal price'a atama yaptık.
console.log(price);//3500

//? key'lerin isim değişiklikleri " : " ile yapılır;
const {id:pro1Id, price:pro1Price, brand:pro1Brand, type:pro1Type} = product1

console.log(pro1Id, pro1Price, pro1Brand, pro1Type);

//? NESTED DESTR
const insanlar = {
    kisi1: {
      kimlikNo: "1234567890",
      adi: "Ahmet",
      soyadi: "Can",
      meslek: "Mimar",
      maas: 30000,
    },
    kisi2: {
      kimlikNo: "44234567890",
      adi: "Canan",
      soyadi: "Can",
      meslek: "Sosyal Gelişim Uzmanı",
      maas: 25000,
    },
  }

  console.log(insanlar.kisi2.meslek);
  console.log(insanlar["kisi2"]["meslek"]);

//   //? level1 destructuring
  // const {kisi1, kisi2} = insanlar
  // console.log(kisi1); // {kimlikNo: '1234567890', adi: 'Ahmet', soyadi: 'Can', meslek: 'Mimar', maas: 30000}

//   //?level2 destructuring
//   const {adi, kimlikNo, soyadi, meslek, maas} = kisi1 
//   console.log(adi, kimlikNo, soyadi, meslek, maas); //Ahmet 1234567890 Can Mimar 30000

//? iki seviyeli destructuring
// const {kisi1:{adi, soyadi}, kisi2:{adi:kisi2Ad, soyadi:kisi2Soyad}} = insanlar
// console.log(kisi2Ad); // Canan

//* Example
let team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ]
console.log("***************************");

//? destructuring methods = 3 tane var, alt alta her biri için örnekler ;

team.forEach((person)=>{
    console.log("Name", person.name);
    console.log("Surname", person.surname);
    console.log("job", person.job);
    console.log("age", person.age);
    console.log("***************************************");
})

team.forEach((person)=>{
    let {name, surname, age, job} = person; // object'İN adını otomatik olarak person yaptık...
    console.log("Name2", person.name);
    console.log("Surname2", person.surname);
    console.log("job2", person.job);
    console.log("age2", person.age);
    console.log("***************************************");
})

console.log("******************");
team.forEach(({ name, age, surname, job }) => {
  console.log("Name3", name);
  console.log("Surname3", surname);
  console.log("Job3", job);
  console.log("Age3", age);
  console.log("******************");
});



//!  FUNCTIONLARDA DESTRUCTURING KULLANIMI

const objGoster = function(){
    return {
        name : "Hazel",
        surname : "Nut",
        job : "tema lead",
        age : 40
    }
}
let {name, surname, job, age} = objGoster()
console.log(name);
console.log("Age", ++age);


//? Fonksiyon parametresi

const data = {
    id:"123",
    desc:"This is top secret information",
    createdTime:"1980"
}

const printData = (data) =>{
    console.log(`${data.id} - ${data.desc} - ${data.createdTime}`);
}
//****

const printDataDestr = (data) =>{
    const {id, desc, createdTime} = data;
    console.log(`${id} - ${desc} - ${createdTime}`);
}

const printDataAir = ({id, desc, createdTime}) =>{
    console.log(`${id} - ${desc} - ${createdTime}`);
}

printData(data)
printDataDestr(data)
printDataAir(data)


//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Ali", "Veli", "Harvey", "Ashley"]

let ali = people[0]
console.log(ali);

const [kisi1, kisi2,, kisi4] = people
console.log(kisi1, kisi2, kisi4);
 
//* =============================================
//*  REST (...)
//* =============================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//?ARRAY

const araclar = ["Kamyon", "Tır", "Kamyonet", "Motorsiklet", "Minibüs", "Taxi"]

const [arac1, arac2, arac3, ...binekAraclar] = araclar // atlamak için ikinci bir virgül atıyoruz yukarıdaki gibi.
console.log(arac3);
console.log(binekAraclar);
console.log(araclar);




//? Object

const person = {
    ad : "Hazel",
    soyad : "Nut",
    is : "tema lead",
    yas : 40
}  


const {ad, yas, ...geriKalan} = person // array'daki gibi sıralamaya bağlı kalma zorunluluğu yok.
console.log(geriKalan);


//! 2 - bir fonksiyonun argümanlarını arraya çevirmek için kullanılabilir. (... kullanımı arraya çevirir.)

const topla = (a,b) => a+b
console.log(topla(1,5,7,9,3));

const toplam = (...sayılar)=>{
    return sayılar.reduce((a,b) => a+b)
}
console.log("TOPLAM", toplam(1,5,7,9,3)); // 25

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.
//* =============================================
//*  SPREAD (...)
//* =============================================

//? spread operatörü ise iterables olan bir elemanı bireysel değerler haline getirir.


const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAracları = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar, karaAracları]
console.log(tasitlar);

const flatTasitlar = [...ucanAraclar, ...karaAracları] // direk içindekini alıp birleştiriyor. // bu şekilde yapılan atamada atama yapılan value değişmiyor, üç nokta kullanılmadan atanırsa karşılıklı etkileşim oluyor, atanılan bilgi değişirse ilgili value da değişiyor.
console.log(flatTasitlar);


//? örnek

const cümle = "Uzun ince bir yoldayım"

const cümleDizisi = [...cümle] 
console.log(cümleDizisi); // ['U', 'z', 'u', 'n', ' ', 'i', 'n', 'c', 'e', ' ', 'b', 'i', 'r', ' ', 'y', 'o', 'l', 'd', 'a', 'y', 'ı', 'm']

//? örnek

const numbers = [1, 3, 4, 5]

console.log(Math.max(...numbers)); // ... nokta arraydan çıkarıp non-iterable hale getirerek ulaşılabilir hale getiriyoruz.


//? nested
const sahislar = {
    sahis1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  };

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.
//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

//! FOR IN 

// for (let s in objects){
//     //function
// }

// for (let s in sahislar){

//     console.log(s);
//     console.log(sahislar[s]);
//     console.log(sahislar[s].salary); // sahislar[s] yazarak hepsine ulaşabildik tek tek, yoksa hepsini ayrı konsolda ayrı ayrı tanımlamak zorundaydık
// }

//? Kullanışlı Object metotları
console.log(Object.keys(sahislar)) //? objenin key'leri array olarak doner
console.log(Object.values(sahislar)) //? objenin value'larını array olarak doner
console.log(Object.values(sahislar.sahis2)) //? objenin value'larını array olarak doner
console.log(Object.entries(sahislar)) //? objenin key-value ciftini array olarak doner
console.log(Object.entries(sahislar.sahis1)) //? objenin key-value ciftini array olarak doner


//! FOR OF

// for (let x of iterable){
//     //code block to be executed
// }

for (const key of Object.keys(sahislar)){
    console.log(sahislar[key].salary);
}


console.log("**************************************");

for(let v of Object.values(sahislar)){
    console.log(v);
    console.log(v.salary);
    console.log(v.name);
}


