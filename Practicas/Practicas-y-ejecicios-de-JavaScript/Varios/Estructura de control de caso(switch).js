var departamento = "blenn";

switch (departamento) {
    case ("Quindio"):
        capital = "Armenia";
        break;

    case ("Caldas"):
        capital = "Manizales";
        break;

    case ("Risaralda"):
        capital = "Pereira";
        break;

    default:
        capital = "Ninguno";
        break;
}

if (capital !== "Ninguno") {
    console.log("La capital del departemento " + departamento + " es " + capital)
} else {
    console.log(departamento + " no es un departamento cafetero")
}