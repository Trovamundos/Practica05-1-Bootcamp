const carrito = [ 
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    }, {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    }, {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    }, {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];


//---------------- MOSTRAR CARRITO DE LA COMPRA ---------------------------

// var imprimir = producto => {
//     console.log(`   --------------`);
//     for (datos in producto) {
//         console.log(`${datos.toUpperCase()}: ${producto[datos]}`);
//     }
// }

// for (producto of carrito) {
//     imprimir(producto);
// }


//------------------- ELIMINAR PRODUCTO -----------------------------------

// let productDelete;

// for (i = 0; i < carrito.length; i++) {
//     if (carrito[i].id == 54657){
//         productDelete = i;
//     }
// }

// carrito.splice(productDelete, 1);

// var imprimir = producto => {
//     console.log(`   --------------`);
//     for (datos in producto) {
//         console.log(`${datos.toUpperCase()}: ${producto[datos]}`);
//     }
// }

// for (producto of carrito) {
//     imprimir(producto);
// }


//----------------------------------- TOTAL --------------------------------------

// let total = 0;

// var totalFunction = producto => {
//     for (datos in producto) {
//         total = total + (producto.price * producto.count);
//     }
// }

// for (producto of carrito) {
//     totalFunction(producto);
// }

// console.log(`El precio total de los productos es de ${total.toFixed(2)}€`);


//------------------------------- PREMIUM------------------------------

// var premiumFunction = producto => {

// console.log(`   --------------`);
//     for (datos in producto) {
//         if (producto.premium ==true) {
//             console.log(`${datos.toUpperCase()}: ${producto[datos]}`);
//         }
//     }
// }

// for (producto of carrito) {
//     premiumFunction(producto);
// }


//--------------------- OPCIONAL -----------------------------------
//------------ PEDIDO SIN GASTOS DE ENVIO ----------------------------

// let premiumShipping = false;

// var shippingCostFunction = () => {
//     premiumShipping = premiumShipping + producto.premium;
// }

// for (producto of carrito) {
//     premiumShipping = premiumShipping + producto.premium;
//     shippingCostFunction(producto);
// }

// if (premiumShipping == carrito.length) {
//     console.log (`Pedido sin gastos de envio`);
// } else {
//     console.log (`Este pedido tiene gastos de envio`);
// }


//--------------------- MOSTRAR CARRITO EN HTML ----------

// var printProducts = (producto) => {
//     document.write (`Product ${carrito.indexOf(producto) + 1}`);
//     for (datos in producto) {
//         document.write (`<li> ${datos.toUpperCase()}: ${producto[datos]} </li>`);
//     }
//     document.write (`Price: ${producto.price}€`);
//     document.write (`<br> <br>`);
// }

// for (producto of carrito) {
//     printProducts (producto);
// }


//------------------------- DESCUENTO --------------------------

// let total = 0;

// var totalFunction = producto => {
//     for (datos in producto) {
//         total = total + (producto.price * producto.count);
//     }
// }

// for (producto of carrito) {
//     totalFunction(producto);
// }

// if (total => 100) {
//     total = total - (total * 0.05);
// }

// console.log(`El precio total de los productos es de ${total.toFixed(2)}€`);