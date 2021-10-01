//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDcto(precio, dcto) {
    const porcentajePrecioConDcto = 100 - dcto;
    const precioConDcto = (precio * porcentajePrecioConDcto) / 100;
    return precioConDcto;
}

//Solución #1: arrays y switch
// let coupons = [
//     "comboForYou15",
//     "comboForYou25",
//     "comboForYou35",
//     "comboForYou40"
// ]

//Solución #3: arrays y condicionales mucho más inteligentes
const coupons1 = [
    {
        name: "comboForYou15",
        discount: 15,
    },
    {
        name: "comboForYou25",
        discount: 25,
    },
    {
        name: "comboForYou35",
        discount: 35,
    },
    {
        name: "comboForYou40",
        discount: 40,
    }
]

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("inputPrice");
//     const inputDiscount = document.getElementById("inputDiscount");

//     const inputCoupons = document.getElementById("inputCoupons");

//     if (inputDiscount.value !== "" && inputCoupons.value == "") {
//         const priceValue = inputPrice.value;
//         const discountValue = inputDiscount.value;
        
//         const precioConDescuento = calcularPrecioConDcto(priceValue, discountValue);

//         const resultPrice = document.getElementById("resultPrice");
//         resultPrice.innerText = "El precio con descuento son $" + precioConDescuento;

//     } else if (inputCoupons.value !== "" && inputDiscount.value == "") {
//         //Solución #1: arrays y switch
//         const priceValue = inputPrice.value;
//         const couponsValue = inputCoupons.value;

//         let descuento;

//         switch(couponsValue) {
//             case coupons[0]://comboForYou15
//                 descuento = 15;
//             break;
//             case coupons[1]://comboForYou25
//                 descuento = 25;
//             break;
//             case coupons[2]://comboForYou35
//                 descuento = 35;
//             break;
//             case coupons[3]://comboForYou40
//                 descuento = 40;
//             break;
//         }//otra forma es no usar switch y cada caso podria ser una condicional else if {}
//         //ademas incluiria if (!coupons.includes(couponValue)) {
//         //                       alert("El cupón " + couponValue + "no es válido");
//         //                 } esta seria la primera validacion antes de los casos.
// }

//         const precioConCupon = calcularPrecioConDcto(priceValue, descuento);

//         const resultPrice = document.getElementById("resultPrice");
//         resultPrice.innerText = "El precio con descuento por cupón son $" + precioConCupon;

//     } else if (inputCoupons.value !== "" && inputDiscount.value !== "" && inputPrice.value !== "") {
//         const resultPrice = document.getElementById("resultPrice");
//         resultPrice.innerText = "Solo es posible aplicar un descuento a su producto";
//     }
// }
//innerText es una funcion que se comporta como un atributo

//console.log("El precio original es " + precioOriginal);
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDcto,
//     precioConDcto
// })


//Solución #2: legibilidad, error first y muerte al switch
//es la solucion planteada con los else if

//Solución #3: arrays y condicionales mucho más inteligentes
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputCoupons = document.getElementById("inputCoupons");

    const priceValue = inputPrice.value;
    const couponsValue = inputCoupons.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponsValue;
    }
    
    const userCoupon = coupons1.find(isCouponValueValid);
 
    if (!userCoupon) {
        alert("El cupón " + couponsValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDcto(priceValue, descuento);

        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}