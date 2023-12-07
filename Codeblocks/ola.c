#include <stdio.h>


// Función para ingresar la matriz por teclado
void ingresarMatriz(int matriz[5][4]) {
    printf("Ingrese los elementos de la matriz 5x4:\n");
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 4; j++) {
            printf("Elemento [%d][%d]: ", i+1, j+1);
            scanf("%d", &matriz[i][j]);
        }
    }
}

// Función para imprimir la matriz
void imprimirMatriz(int matriz[5][4]) {
    printf("\nMatriz ingresada:\n");
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%d\t", matriz[i][j]);
        }
        printf("\n");
    }
}

// Función para generar el vector de suma por fila
void sumaPorFila(int matriz[5][4], int vectorSumaFila[5]) {
    for (int i = 0; i < 5; i++) {
        vectorSumaFila[i] = 0;
        for (int j = 0; j < 4; j++) {
            vectorSumaFila[i] += matriz[i][j];
        }
    }
}

// Función para generar el vector de suma por columna
void sumaPorColumna(int matriz[5][4], int vectorSumaColumna[4]) {
    for (int j = 0; j < 4; j++) {
        vectorSumaColumna[j] = 0;
        for (int i = 0; i < 5; i++) {
            vectorSumaColumna[j] += matriz[i][j];
        }
    }
}

int main() {
    int matriz[5][4];
    int vectorSumaFila[5];
    int vectorSumaColumna[4];

    ingresarMatriz(matriz);
    imprimirMatriz(matriz);

    sumaPorFila(matriz, vectorSumaFila);
    sumaPorColumna(matriz, vectorSumaColumna);

    // Imprimir el vector de suma por fila
    printf("\nVector de suma por fila:\n");
    for (int i = 0; i < 5; i++) {
        printf("%d ", vectorSumaFila[i]);
    }

    // Imprimir el vector de suma por columna
    printf("\nVector de suma por columna:\n");
    for (int j = 0; j < 4; j++) {
        printf("%d ", vectorSumaColumna[j]);
    }

    return 0;
}
