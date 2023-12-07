#include <stdio.h>
main()
{
    char tipoProducto;
    int cantidad, totalUsados = 0;
    float descuento, precio, impFinal, totalVenNuevos = 0;

    do
    {

        do
        {
            printf("Ingresar tipo de producto: ");
            scanf("%c", &tipoProducto);

        } while (tipoProducto != "n" || tipoProducto != "u" || tipoProducto != "r" || tipoProducto != "f");

        do
        {
            printf("Ingresar precio de producto: ");
            scanf("%f", &precio);

        } while (precio < 0);

        do
        {
            printf("Ingresar cantidad de producto: ");
            scanf("%f", &cantidad);

        } while (cantidad < 0);

        switch (tipo)
        {
        case "n":
        {
            if (cantidad > 10)
            {
                descuento = precio * 0.1;
                totalVenNuevos += precio;
            };
        };
        break;

        case "u":
        {
            if (cantidad > 3)
            {
                descuento = precio * 0.15;
                totalUsados += 1;
            };
        };
        break;

        case "r":
        {
            if (cantidad % 5 == 0)
            {
                descuento = precio * 0.2;
            };
        };
        };

        impFinal = precio - descuento;

        // Mostrar resultados de cada iteracion
        if (descuento != 0)
        {
            printf("Hubo descuento.");
            printf("Descuento: %f", descuento);
        }
        else
        {
            printf("No hubo descuento.");
        };

        printf("Importe final: %f", impFinal);

    } while (tipoProducto != "F");

    printf("Cantidad usados vendidos: %i", totalUsados);
    printf("Total ventas nuevos: %f", totalVenNuevos);
}