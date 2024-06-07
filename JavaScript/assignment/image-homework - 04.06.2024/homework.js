const h1Baslik = document.getElementsByTagName("h1")
h1Baslik[0].style.color="red"
h1Baslik[0].style.textAlign="center"
h1Baslik[0].style.paddingTop="15px"

const kukre = document.querySelector("#kukreme")
const img = document.getElementsByTagName("img")
img[0].style.marginTop="-4rem"
img[0].onmouseover=()=>{
    img[0].src="./aslan1.jpeg"
    kukre.pause()
}
img[0].onmouseout=()=>{
    img[0].src="./aslan2.jpeg"
    kukre.play()
}

const button = document.querySelectorAll("button")
button[0].style.fontSize="20px"
button[1].style.fontSize="20px"
button[2].style.fontSize="20px"
button[0].style.border="2px solid yellow"
button[0].style.color="yellow"
button[1].style.border="2px solid blue"
button[1].style.color="blue"
button[2].style.border="2px solid red"
button[2].style.color="red"
button[1].style.fontSize="20px"
button[2].style.fontSize="20px"

const buton1 = document.querySelector(".btn1")
const audios = document.querySelector("#ses")
buton1.onclick=()=>{
    img[0].src="./img.gif"
    audios.play()
    kukre.pause()
}

const buton2 = document.querySelector(".btn2")
buton2.onclick=()=>{
    img[0].src = "./telbagla.gif"
    audios.pause()
    kukre.pause()
}

const buton3 = document.querySelector(".btn3")
buton3.onclick=()=>{
    img[0].src="./telfirlat.gif"
    kukre.pause()
}