#include <stdio.h>
main()
{ int matriz[3][3];
  int constante;

  //Ingresar matriz
 printf("\n ingrse elementios:");
 for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){int j;
       printf("\n Elemento [%i] [%i]:",i+1, j+1);
      scanf("%i",&matriz[i][j]);

    }
 }
 printf("\n Ingrese numero entero para la ocnstante:");
 scanf("%i",&constante);


 for(int i=0;i<3;i++){
    for(int j=0;j<3;j++){
        matriz[i][j]*= constante;

    }


 }
  // Mostrar la matriz resultante
    printf("\nMatriz resultante después de multiplicar por la constante:\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }

    return 0;
}









