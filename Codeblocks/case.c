#include <stdio.h>
int main()
{
int a,b,op;
char opcion;
printf("Ingrese un valor:");
scanf("%i",&a);
printf("Ingrese otro valor:");
scanf("%i",&b);
printf("Ingrese la opción:");
scanf(" %c",&opcion);

switch(opcion)
{
case 'A': printf("La suma es: %i",a+b);
break;
case 'B':
case 'C':
case 'D': printf("La resta es: %i",a-b);
break;
case 'E':
case 'F': printf("La multiplicación es: %i",a*b);
break;
case 'G': if(b==0)
printf("No se puede dividir por cero");
 else
printf("La división es: %f",a/b);
break;
case 'H': printf("El resto de la división es: %i",a%b);
break;
default: printf("\n Error. Código inexistente.");
};
return 0;
}
