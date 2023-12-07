#include <stdio.h>
main()
{
  int dni,alumnos, contAlumnos;
 int notaPromedio,notaMayor;

  printf("\n Cantidad de alumnos:");
  scanf("%i",&alumnos);

  contAlumnos = 0;

  while (contAlumnos < alumnos)
  {
    printf("\n Ingrese dni:");
    scanf("%i",&dni);
    printf("\n Ingrese nota promedio:");
    scanf("%i",&notaPromedio);

    if (notaPromedio > notaMayor)
    {
       notaMayor=notaPromedio;

    }
   };
    contAlumnos = contAlumnos + 1;


     printf("\n El dni del alumno ocn mayor nota promedio es : %i %f ",dni,notaMayor);




}
