#include <stdio.h>
    int leerYValidar(int limInf, int limSup, int dif)
{

    int valor;
    printf("\nIngresar dato: ");
    scanf("%i", &valor);

    while (valor < limInf || valor > limSup && valor != dif)
    {
        printf("\nDato invalido.");
        printf("\nIngresar dato: ");
        scanf("%i", &valor);

    };

    return valor;

}


void mostrarResultados (int mesMatriz [12][11])
{

// Error que cometi: es declarar los ascumuladores afuera de los ciclos.
//Se declaran adentro de los ciclos asi se redeclaran con cada nueva iteracion.

    for (int i = 0; i < 12; i++)
    {
        printf("\n\nMes: %i", i + 1);
        printf("\nCodigo de producto:");
        printf("        Cantidad");
        for(int j = 0; j < 11; j++)
        {

            printf("\n%i", j + 1000);
            printf("                       %i", mesMatriz[i][j]);

        };
    };
}



main()
{
    int mesMatriz [12][11] = {}, mes, codigoProducto, cantidad;

    //Modificar usando la funcion validar dato
    printf("Ingresar mes de la venta: ");
    mes = leerYValidar(1, 12, 99);

    while (mes != 99)
    {
        printf("Ingresar codigo del producto: ");
        codigoProducto = leerYValidar(1000, 1010, 1000);

        printf("Ingresar cantidad de producto: ");
        cantidad = leerYValidar(1, 5000, 1);

        mesMatriz[mes-1][codigoProducto-1000] += cantidad;

        printf("Ingresar mes de la venta: ");
        mes = leerYValidar(1, 12, 99);
    };

    mostrarResultados(mesMatriz);

}
