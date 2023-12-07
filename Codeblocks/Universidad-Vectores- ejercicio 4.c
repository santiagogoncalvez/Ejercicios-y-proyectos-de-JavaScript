#include <stdio.h>

int vectoresIgualTamanio (int vector1[], int vector2[], int tamanio)
{
    int resultado = 1;

    for (int i = 0; i < tamanio; i++) {
        if (vector1[i] != vector2[i]) {
            resultado = 0;
        };
    };

    return resultado;
}

main()
{


    int vector1[2] = {1,0}, vector2[2]= {1,0};

    printf("Retorno de funcion: %i", vectoresIgualTamanio(vector1, vector2,2));
}
