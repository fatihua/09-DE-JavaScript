let tarih = document.getElementById("date");
let today = new Date();
let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2); // Ayı iki basamaklı yapmak için
let day = ('0' + today.getDate()).slice(-2); // Günü iki basamaklı yapmak için
let formattedDate = `${year}-${month}-${day}`;
    tarih.value = formattedDate;

let mainArea = document.querySelector(".mainArea")

let miktarInput = document.getElementById("harcama")

const harcamaSebep = document.getElementById("harcamaSebep")

let harcamaListesi=[]

mainArea.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log("test", e);
    const yeniHarcama = {
        tarih: tarih.value,
        miktar : miktarInput.value,
        alan : harcamaSebep.value,
        id: new Date().getTime()        
    }
   harcamaListesi.push(yeniHarcama)
   localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
   console.log(JSON.parse(localStorage.getItem("harcamalar")));
})


//*********** */
// localStorage.setItem("fatih", 10)
// console.log(localStorage.getItem("fatih"));
//******************* */


