let eksi = document.querySelectorAll(".fa-minus")
let arti = document.querySelectorAll(".fa-plus")
let adet = document.querySelectorAll(".numberSelected")
let price = document.querySelectorAll("#price")
console.log(price[0].textContent);
let mainPrice = document.querySelectorAll(".mainPrice")

let productBasket = document.querySelectorAll("#selectionDelete .fa-trash-can")

let productMain = document.querySelectorAll(".product")

let productGeneral = document.querySelector(".text .fa-trash-can")
let generalCard = document.querySelector(".generalCard")

let totalPrice = document.getElementById("totalPrice")

//! ürün adedini belirleme

arti.forEach((button, i) => {
    button.onclick = () => {
        adet[i].textContent = +adet[i].textContent + 1;
        updatePrice(i)
        totalPriceUpdate()
    }
});

eksi.forEach((button, i) => {
    button.onclick = () => {
        if (adet[i].textContent == 1) {
            return;
        } else if (adet[i].textContent >= 1) {
            adet[i].textContent = +adet[i].textContent - 1;
            updatePrice(i)
            totalPriceUpdate()
        }
    }
});

function updatePrice(i) {
    price[i].textContent = (+adet[i].textContent * +mainPrice[i].textContent) + " TL";
}

productBasket.forEach((button, i)=>{
    button.onclick=()=>{
        productMain[i - 1].remove()
    }
})

productGeneral.onclick=()=>{
        generalCard.remove()
}

function totalPriceUpdate(){
    
    let result = price.forEach((i)=>{
        price[i].textContent
        console.log(result);
    })
    totalPrice.textContent = result.reduce((acc, sum)=>{
        return acc + sum 
    })
}