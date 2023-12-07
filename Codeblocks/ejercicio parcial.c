#include <stdio.h>
main()
{
    //Articulo es el precio del producto
    float precioDesc, precioTotal;
    int codigo;
    float iva, articulo, totalVentas = 0, totalRecargos = 0, totalDescuentos = 0, totalIva = 0, totalRecaudado = 0;



    do
    {
        //Ingresar precio
        printf("\n\n\nIngrese valor del articulo: ");
        scanf("%f",&articulo);

        //ingresar codigo
        do
        {
            printf("\nCodigo: ");
            scanf("%i",&codigo);
        }
        while (codigo < 1000 || (codigo > 2500 && codigo < 9999)||(codigo > 9999));



        if (codigo >= 1000 && codigo <= 1499)
        {
            precioDesc= articulo * 0.05;
            iva = (articulo * 0.21);
            precioTotal= articulo + precioDesc + iva;
        }
        else
        {
            if (codigo >= 1500 && codigo <= 1999)
            {
                precioDesc= articulo * 0.2;
                iva = (articulo * 0.21);
                precioTotal= articulo - precioDesc + iva;
            }
            else
            {
                if (codigo >= 2000 || codigo <= 2500)
                {
                    precioDesc= articulo * 0.25;
                    iva = (articulo * 0.21);
                    precioTotal= articulo - precioDesc + iva;
                };
            };
        };

        //Sumatorias totales
        if (codigo != 9999)
        {
            totalVentas = totalVentas + articulo;
            if (codigo >= 1000 && codigo <= 1499)
            {
                totalRecargos = totalRecargos + precioDesc;
            };

            totalDescuentos += precioDesc;
            totalIva += iva;
        };



//Mostrar los datos por cada ingreso

        printf("\nPrecio del articulo: %f", articulo);
        printf("\nCodigo del articulo: %i", codigo);

        if (codigo >= 1000 && codigo <= 1499)
        {
            printf("\nRecargo: %f", precioDesc);
        }
        else
        {
            printf("\nDescuento: %f", precioDesc);
        };

        printf("\nIva: %f", iva);
        printf("\nPrecio total: %f", precioTotal);

    }
    while (codigo != 9999);

    totalRecaudado = totalRecaudado + totalVentas + totalRecargos - totalDescuentos + totalIva;

    printf("\n\nTotal ventas: %f", totalVentas);
    printf("\nTotal recargos: %f", totalRecargos);
    printf("\nTotal descuentos: %f", totalDescuentos);
    printf("\nTotal iva: %f", totalIva);
    printf("\nTotal recaudado: %f", totalRecaudado);

}

