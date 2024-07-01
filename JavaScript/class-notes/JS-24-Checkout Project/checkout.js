//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ===================================================
//!table da kullanılacak değişkenler
const shipping = 15.0;
const tax = 0.18;

let sepettekiler = [];

fetch("./sepettekiler.json")
  .then((a) => a.json())
  .then((a) => {
    sepettekiler = a;

    showScreen();
  });

//* then'ler asyncron yapıyor zaten, bu önemli.

function showScreen() {
  sepettekiler.forEach(({ name, price, piece, img }) => {
    document.querySelector("#product-rowlari").innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">

            <div class="row ">

        <div class="col-md-5 ">
            <img src="${img}" class=" w-100 rounded-start" alt="...">
        </div>

        <div class="col-md-7 ">

        <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(price*0.7).toFixed(2)}</span>
                      <span class="h5 text-dark text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-product">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="product-total">${(price*0.7*piece).toFixed(2)}</span>
                  </div>
      </div>
    </div>
  </div>
</div>
        `;
  });
  calculateTotal()
  removeUrun()
  pieceUrun()
}








function removeUrun(){
    //!ekrandan sildik
    document.querySelectorAll(".remove-product").forEach((buton)=>{
        buton.onclick=()=>{
            buton.closest(".card").remove()

    //! diziden sildik

            sepettekiler=sepettekiler.filter(
                (ürün)=>
                    ürün.name!=buton.closest(".card").querySelector("h5").textContent);
                // console.log(sepettekiler);   
                calculateTotal()
        }
    })
}

//! adet değiştirme fonksiyonu

function pieceUrun(){
    document.querySelectorAll(".adet-controller").forEach((kutu)=>{
        const minus = kutu.firstElementChild
        const plus = kutu.lastElementChild
        const adet = kutu.children[1]
        // const adet = plus.previousElementSibling

        plus.onclick=()=>{
            adet.textContent = Number(adet.textContent) + 1

            //! ürünToplam'ın ekranda güncellenmesi

            plus.closest(".card-body").querySelector(".product-total").textContent = plus.closest(".card-body").querySelector(".indirim-price").textContent*adet.textContent;


            calculateTotal()


            //! sepettekiler dizisinde de adeti güncelle

            sepettekiler.map((ürün)=>{
                if(ürün.name==plus.closest(".card-body").querySelector("h5").textContent){
                    // ürün.piece +=1; 
                    ürün.piece = adet.textContent
                }
            })

           
        }
        minus.onclick = () => {
            //!adeti ekranda güncelledik
            adet.textContent = Number(adet.textContent) - 1;
      
            //!ürünToplamın ekranda güncellenmesi
            minus.closest(".card-body").querySelector(".product-total").textContent =
              minus.closest(".card-body").querySelector(".indirim-price")
                .textContent * adet.textContent;
      
            calculateTotal();
      
            //! sepettekiler dizisinde de adeti güncelle
      
            sepettekiler.map((ürün) => {
              // console.log(plus.closest(".card-body").querySelector("h5").textContent);
              if (
                ürün.name ==
                minus.closest(".card-body").querySelector("h5").textContent
              ) {
                ürün.piece = Number(adet.textContent);
              }
            });
      
            //!eğer adet 1 iken tekrar eksi ye basılırsa ürün silinsin
      
            if (adet.textContent < 1) {
              alert("ürünü sileyim mi?");
              minus.closest(".card").remove();
            }
          };
        });
      }
      




















function calculateTotal(){
    //? productsToplam= en alttaki tüm ürünler için vergi ve kargo hariç sepettekilerin indirimli fiyat toplamı
    //?Reduce tam olarak Array istiyor, nodelist yeterli değil
    const ürünToplam = Array.from(
      document.querySelectorAll(".product-total")
    ).reduce((acc, item) => acc + Number(item.textContent), 0);
  
    console.log(ürünToplam);
  
    document.querySelector(".productstoplam").textContent = ürünToplam;
  
    document.querySelector(".kargo").textContent = shipping;
  
     document.querySelector(".vergi").textContent = ürünToplam*tax
  
   document.querySelector(".toplam").textContent = (shipping + ürünToplam + ürünToplam * tax).toFixed(2);
}


