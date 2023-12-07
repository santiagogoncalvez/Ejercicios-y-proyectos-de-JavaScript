#include <stdio.h>


int pedirDatos (int, int);
char pedirClaseArticulo (void);
int vectorVB (int [], int [], int);
int vectorVC (int [], int [], int [], int);
int vectorVD (int[], int[], int);





main()
{
    int cantidad = 300;
    int codigoArticulo[cantidad], numeroDeposito[cantidad], stock[cantidad], puntoReposicion[cantidad];
    char claseArticulo[cantidad];

    //Pedir datos
    for (int i = 0; i < cantidad; i++)
    {
        printf("Ingresar codigo del articulo entre [1, 500]:");
        codigoArticulo[i] = pedirDatos(1, 500);


        printf("Ingresar clase del articulo [A, B, C, D]:");
        claseArticulo[i] = pedirClaseArticulo();

        printf("Ingresar numero de deposito [1,100]:");
        numeroDeposito[i] = pedirDatos(1,100);

        printf("Ingresar stock [0,2000]:");
        stock[i] = pedirDatos(0, 2000);

        printf("Ingresar punto de reposicion [500, 1000]:");
        puntoReposicion[i] = pedirDatos(500, 1000);

        printf("\n");
    };

    printf("\nCodigos de articulos que hayan quedado con el saldo igual a cero:");
    vectorVB(codigoArticulo, stock, cantidad);

    printf("\nCodigos de articulos de que hayan quedado con stock por debajo del punto de reposición:");
    vectorVC(codigoArticulo, stock, puntoReposicion, cantidad);


    printf("\nCodigos de articulos que están en los depósitos entre el 15 y 50:");
    vectorVD(codigoArticulo, numeroDeposito, cantidad);


}




//Desarrollo de funciones

int pedirDatos (int minimo, int maximo)
{
    int dato;

    printf("\nIgresar dato: ");
    scanf("%i", &dato);

    while (dato < minimo || dato > maximo)
    {
        printf("Igresar dato:");
        scanf("%i", &dato);

    };

    return dato;
}


char pedirClaseArticulo (void)
{
    char letras[] = {'A', 'B', 'C', 'D'};
    char dato;

    printf("\nIgresar dato: ");
    scanf(" %c", &dato);


    if ( dato != letras[0] && dato && letras[1] && dato != letras[2] && dato != letras[2])
    {

        printf("Igresar dato:");
        scanf("%c", &dato);
    };

    return dato;
}



int vectorVB (int codigoArticulo[], int stock[], int tamanio)
{
    int cantidad = 0;

    for (int i = 0; i < tamanio; i++)
    {
        if (stock[i] == 0)
        {
            cantidad++;
        };
    };

    int vector[cantidad];
    int contador = 0;
    for (int i = 0; i < tamanio; i++)
    {
        if (stock[i] == 0)
        {
            vector[contador] = codigoArticulo[i];
            contador++;
        };
    };

    if (cantidad == 0)
    {
        printf("\nNinguno.");
    }
    else
    {
        mostrarVector(vector, cantidad );
    };
}


int vectorVC (int codigoArticulo[], int stock[], int puntoReposicion[], int tamanio)
{
    int cantidad = 0;

    for (int i = 0; i < tamanio; i++)
    {
        if (stock[i] < puntoReposicion[i])
        {
            cantidad++;
        };
    };

    int vector[cantidad];
    int contador = 0;
    for (int i = 0; i < tamanio; i++)
    {
        if (stock[i] < puntoReposicion[i])
        {
            vector[contador] = codigoArticulo[i];
            contador++;
        };
    };

    if (cantidad == 0)
    {
        printf("\nNinguno.");
    }
    else
    {
        mostrarVector(vector, cantidad );
    };
}


int vectorVD (int codigoArticulo[], int numeroDeposito[], int tamanio)
{

    int cantidad = 0;

    for (int i = 0; i < tamanio; i++)
    {
        if (numeroDeposito[i] > 15 && numeroDeposito[i] < 50)
        {
            cantidad++;
        };
    };

    int vector[cantidad];
    int contador = 0;
    for (int i = 0; i < tamanio; i++)
    {
        if (numeroDeposito[i] >= 15 && numeroDeposito[i] <= 50)
        {
            vector[contador] = codigoArticulo[i];
            contador++;
        };
    };

    if (cantidad == 0)
    {
        printf("\nNinguno.");
    }
    else
    {
        mostrarVector(vector, cantidad );
    };
}


mostrarVector(int vector [], int tamanio)
{

    printf("\nCodigos:");
    for (int i = 0; i < tamanio; i++)
    {
        printf("\n%i", vector[i]);
    };
    printf("\n");
}








