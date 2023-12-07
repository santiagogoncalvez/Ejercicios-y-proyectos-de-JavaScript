#include <stdio.h>
main(){
int matriz[5][4];
int sumaVectorFila;
int sumaVectorColumna;

imprimirMatriz(matriz);
insertarMatriz(matriz);

sumaVectorColumna(matriz,vectorColumna);
sumaVectorFila(matriz,vectorFila);

printf("\n La suma de todas las filas:");
scanf("%i",&sumavectorFila[5]);


}
void imprimirMatriz(int matriz[5][4]){
printf("\n Ingrese los elementos de las matrices 5x4:");
for(int i=0;i<5;i++){
    for(int j=0;j<4;j++)
    {
        printf("\n Elemento [%i][%i]:",i+1,j+1);
    };
}
}
    void insertarMatriz(int matriz[5][4]){
    printf("\ Matriz Ingresada:\n");
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
           printf("%i\n",matriz[5][4]);

        }
        printf("\n");
    }


    }


    void sumaVectorColumna(int matriz[5][4],int vectorColumna){
    for(i=0;i<5;i++){
        for(j=0;j<4;j++){
            sumaVectorColumna[j]+= matriz[i][j];


        }

    }

    }
    void sumaVectorFila(int matriz[5][4],int sumaVectorFila){
    for(i=0;i<5;i++){
        for(j=0;j<4;j++){
         sumaVectorFila[i]+= matriz [i][j];
            }

    }
    }









