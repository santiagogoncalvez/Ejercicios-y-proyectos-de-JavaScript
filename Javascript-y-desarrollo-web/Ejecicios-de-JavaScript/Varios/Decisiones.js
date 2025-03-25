// Decision simple
const x = 6;
if ((x > 3.5 && x <= 7.8) ||
    (x >= 9.3 && x < 4.5) ||
    (x >= 23.4 && x <= 45.3)) {
  console.log("Pertenece a uno de los conjuntos.")
} else {
  console.log("No pertenece a ningun conjunto.")
}



// Decisiones anidadas
var celu ="de marketplace";
if (celu === "android"){
    console.log("Tenés un celu android");
} else {
    if (celu === "iphone") {
        console.log("Tenes un iphone mochi");
    } else {
        console.log("Tenes un celu re trucho sin marca corte ree mochi");
    }
};