// let buton1 = document.getElementById("myButton")
// let sonuc = document.getElementById("result")

// console.log(buton1);
// console.log(sonuc);


//! Callback yazım çeşitleri

//? 1 .yol
// buton1.addEventListener("click", function konsol(){
//     console.log("buton1 clicked");
// })


//? 2.yo (fonksiyon ismi opsiyonel)
// buton1.addEventListener("click", function (){
//     console.log("buton1 clicked");
//     sonuc.innerText += "Button 1 clicked... " 
// })
// buton1.addEventListener("dblclick", function (){
//     console.log("buton1 double clicked");
//     sonuc.innerText += "Button 1 double clicked... " 
// })

//? 3.yol dışarıdan arrow / named fonksiyon çağırma

// const clicked2 = () => {sonuc.textContent = "Buton1 clicked"}

// buton1.addEventListener("click", clicked2) 
//1- çağırma parantezleri olmadan yazılacak (fonksiyon çağırma için kullandığımız parantezler)

//2-değişkeni daima addEventListener'dan önce yazmamız gerekiyor.

//? 4.yol dışarıdan fonksiyon çağırma

// function clicked (){
//     sonuc.textContent = "Button1 clicked function called from outside"
// }
// buton1.addEventListener("click", clicked)



//? mouseover - mouseout eventleri

// let myImg = document.getElementById("myImage")
// // console.log(myImg);

// myImg.addEventListener("mouseover", ()=>{
//     myImg.style.width = "300px"
//     console.log("imaj 300px oldu");
// })
// myImg.addEventListener("mouseout", ()=>{
//     // myImg.style.width = "100px"
//     myImg.style.display="none"
//     // console.log("imaj 100px oldu");
// })
// myImg.addEventListener("click", ()=>{  // olmadı
//     // myImg.style.width = "100px"
//     myImg.style.display="block"
//     // console.log("imaj 100px oldu");
// })


//? drop down menu  // tekrar bak iyiymiş...


// let secim = document.getElementById("colors")
// secim.addEventListener("change", ()=>{
//     // console.log("değişti");
//     let selectedColor = secim.value
//     // console.log(selectedColor);
//     document.getElementById("selectedColorP").textContent = `Seçilen Renk : ${selectedColor}`
//     document.body.style.backgroundColor = selectedColor
// })

 //? random background color // tekrar incele....

// //  random renk
//  function getRandomColor() {
//    const r = Math.floor(Math.random() * 256);
//    const g = Math.floor(Math.random() * 256);
//    const b = Math.floor(Math.random() * 256);
//    return `rgb(${r}, ${g}, ${b})`;
// }

//  const buton2 = document.getElementById("colorButton")

//  const colors =[];
//  const colorL = document.getElementById("colorList")


//  buton2.addEventListener("click", ()=>{
//     const renk = getRandomColor()
//     // console.log(renk);
//     const colorObject = {color : renk}
//     colors.push(colorObject)
//     console.log(colors);
//     document.body.style.backgroundColor = renk

//     //* yeni rengi ekrana listeleme

//     const listItem = document.createElement("li");
//     listItem.style.backgroundColor = renk
//     listItem.textContent = renk

//     listItem.addEventListener("click", ()=>{
//         document.body.style.backgroundColor = renk
//     })
//     // colorL.appendChild(listItem) // yeni üretilen en altta gözükür
//     colorL.prepend(listItem) // yeni üretilen en üstte çıkar, diğerleri alta kayar
//  })

// //? telefon örneği

// let resim = document.querySelector(".resim")
// let ses1 = document.querySelector(".ses1")
// let ses2 = document.querySelector(".ses2")

// let ara = document.querySelector(".ara")
// let baglat = document.querySelector(".baglat")
// let konus = document.querySelector(".konus")
// let kapat = document.querySelector(".kapat")

// //* Ara butonu

// ara.addEventListener("click", ()=>{
//     ses2.play()
//     ses2.volume = 0.1;
// })
// baglat.addEventListener("click", ()=>{
//     ses2.pause()
//     ses1.play()
//     ses1.volume = 0.1; // sesin yüksekliği 0-1 arasında bir değer
//     resim.src="./helpers/connect.jpg"
// })
// konus.addEventListener("click", ()=>{
//     ses1.pause()
//     resim.src="./helpers/call.jpg"
// })
// kapat.addEventListener("click", ()=>{
//     ses1.pause()
//     ses2.pause()
//     resim.src="./helpers/images.jpg"
// })


// //? input örneği

// let alan = document.getElementById("username")
// let buton3 = document.getElementById("login")
// let user = document.getElementById("displayUsername")

// // alan.addEventListener("input",()=>{
// //     let username = alan.value
// //     user.textContent = `Girdiğiniz kullanıcı adı : ${username}`
// // })


// let usr = "Mark"




// buton3.addEventListener("click", ()=>{
//     let username=alan.value

//     if(username == usr){
//         user.textContent = `Girdiğiniz kullanıcı adı : ${username}`
//         alan.value="" // tekrar yazıyı sıfırlamak için yazdık
//     }else{
//         user.textContent = `Girdiğiniz kullanıcı adı yanlış, lütfen tekrar deneyin`
//     }
// })

// const numbers = document.querySelectorAll(".number") // array benzeri nodelist döndürür
// // console.log(numbers);
// numbers.forEach((number, index)=>{
//     number.addEventListener("click", ()=>{
//         if(number.textContent === "X"){
//             number.textContent = index + 1
//         }else{
//             number.textContent = "X"
//         }
//     })
// })