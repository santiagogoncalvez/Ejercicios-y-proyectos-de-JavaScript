#include <stdio.h>
main()
{
    char tipoProducto;
    int cantidad, totalUsados = 0;
    float descuento = 0, precio, impFinal, totalVenNuevos = 0;

    do
    {

        do
        {
            printf("\n\nIngresar tipo de producto: ");
            scanf("%c", &tipoProducto);

        }while (tipoProducto != 'n' && tipoProducto != 'u' && tipoProducto != 'r' && tipoProducto != 'f');

       if ( tipoProducto != 'f') {


        do
        {
            printf("Ingresar precio de producto: ");
            scanf("%f", &precio);

        }
        while (precio < 0);

        do
        {
            printf("Ingresar cantidad de producto: ");
            scanf("%i", &cantidad);
            fflush(stdin);

        }
        while (cantidad < 0);

        switch (tipoProducto)
        {
        case 'n':

            if (cantidad > 10)
            {
                descuento = precio * cantidad * 0.1;
                totalVenNuevos += precio;
            };
            break;

        case 'u':

            if (cantidad > 3)
            {
                descuento = precio * cantidad * 0.15;
                totalUsados += 1;
            };

            break;

        case 'r':

            if (cantidad % 5 == 0)
            {
                descuento = precio * cantidad * 0.2;
            };
            break;
        };


        impFinal = (precio * cantidad) - descuento;

        // Mostrar resultados de cada iteracion
        if (descuento != 0)
        {
            printf("\nHubo descuento.");
            printf("\nDescuento: %f", descuento);
        }
        else
        {
            printf("\nNo hubo descuento.");
        };

        printf("\nImporte final: %f", impFinal);

    }
       }
    while (tipoProducto != 'f');

    printf("\nCantidad usados vendidos: %i", totalUsados);
    printf("\nTotal ventas nuevos: %f", totalVenNuevos);
}
