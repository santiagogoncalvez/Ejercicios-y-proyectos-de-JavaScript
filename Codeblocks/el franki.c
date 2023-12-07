 #include <stdio.h>

// Función para comparar dos vectores
int son_iguales(int vector1[], int vector2[], int longitud) {
    for (int i = 0; i < longitud; i++) {
        if (vector1[i] != vector2[i]) {
            return 0; // No son iguales si algún elemento es diferente
        }
    }
    return 1; // Son iguales si no se encontraron diferencias
}

int main() {
    // Ejemplo de uso
    int vector_a[] = {1, 2, 3, 4,5};
    int vector_b[] = {1, 2, 3, 4};
    int longitud = sizeof(vector_a) / sizeof(vector_a[0]);

    // Llamada a la función y resultado
    int resultado = son_iguales(vector_a, vector_b, longitud);

    if (resultado) {
        printf("Los vectores son iguales.\n");
    } else {
        printf("Los vectores no son iguales.\n");
    }

    return 0;
}


