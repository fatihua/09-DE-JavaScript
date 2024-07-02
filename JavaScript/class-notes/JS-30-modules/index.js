console.log("index.js'ten selamlar");

//? import yaparken "as" aliası ile isim değiştirerek import edebiliriz
//? default exportlarda istediğimiz isimle import edebiliriz

import by, {   // default yöntemi ile direk isim değiştirilir.
    topla, 
    calismaSaati, 
    increase as inc, //* import edilen yerde isim değişikliği için */
    decrease as dec, 
    myName
} from "./myModules.js"
// import ugurla from "./myModules.js";

console.log(topla(2,3));
console.log(calismaSaati);
console.log(inc(5));
console.log(dec(5));
console.log(myName);
// ugurla()
by()