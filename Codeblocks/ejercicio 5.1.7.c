
#include <stdio.h>
main()
{
  int alumnos_A ,nota, alumnos_a, contNota, legajo;
  int notaDef;



  printf("\n Ingrese la cantidad de notas dadas:");
  scanf("%i",&nota);

  contNota = 0;
  alumnos_a = 0;
  alumnos_A = 0;

  while (contNota < nota)
  {   printf("\n Ingrese nota definitiva:");
      scanf("%i",&notaDef);

                printf("\n Ingrese el legajo del alumno: ");
                scanf("%i", &legajo);


      if (notaDef > 7)
      {


          printf("\n El alumno con legajo %i",legajo); printf(" ha promocionado.");
          printf("\nLegajo: %i", legajo);

          alumnos_a = alumnos_a + 1 ;




          }
    else
      {
          alumnos_A = alumnos_A + 1 ;

      };
      contNota = contNota + 1;
  };
  printf("\n La cantidad de alumnos aplazados son : %i",alumnos_A);
  printf("\n La cantidad de alumnos aprobados son : %i",alumnos_a);



}
