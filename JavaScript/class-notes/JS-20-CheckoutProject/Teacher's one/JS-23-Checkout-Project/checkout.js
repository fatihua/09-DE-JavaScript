//! Döngüler ile event listener tanımlanabilir. Az sayıda element var ise sorun 
//! olmaz ama çok fazla element var ise bu kaynak tüketimini arttırır.
// const minusbtn = document.querySelectorAll(".fa-minus")
// const plusbtn = document.querySelectorAll(".fa-plus")

// // console.log(minusbtn)

// minusbtn.forEach((minus)=>{
//     minus.addEventListener("click", ()=>{
//         console.log('-')
//     })
// })

// plusbtn.forEach((plus)=>{
//     plus.addEventListener("click", ()=>{
//         console.log('+')
//     })
// })


//? Selectors
const deleteAllBtn = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector("article.products")
// console.log(products)


// console.log(deleteAllBtn)

//? Event Listeners

deleteAllBtn.addEventListener("click", ()=>{

    products.textContent = "No Product";
    products.classList.add("no-product") //Elemente class ekler
    // console.log(products.classList)
    // document.querySelector(".delete-div").style.display = "none" //sadece gizler
    document.querySelector(".delete-div").remove() // gizler ve HTML den çıkarır.
})

products.addEventListener("click",(e)=>{
    // console.log(e.target.classList)

    // if (e.target.classList.contains("fa-trash-can")) {
    //     alert("Çöpe tıkladınız")
    // }else if(e.target.classList.contains("fa-plus")){
    //     alert("+ ya tıkladınız")
    // }else if(e.target.classList.contains("fa-minus")){
    //     alert("- ye tıkladınız")
    // }else{
    //     console.log("boşluğa tıkladınız")
    // }
    if(e.target.classList.contains("fa-plus")){
        alert("Çöpe Tıkladınız!")
    }      
})

