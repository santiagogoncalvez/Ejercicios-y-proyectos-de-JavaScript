#include <stdio.h>
main()
{
    int estudiantes, aprobaron, desaprobaron, contEst;
    float nota, notaDef, promGr, sumaDef;
    char codEst;

    printf("Ingrese la cantidad de estudiantes:");
    scanf("%i", &estudiantes);

    contEst = 0;
    aprobaron = 0;
    desaprobaron = 0;
    sumaDef = 0.0;

    while (contEst < estudiantes)
    {
        printf("\nIngrese codigo del estudiante: ");
        scanf(" %c", &codEst);
        printf("Ingrese la nota definitiva: ");
        scanf("%f", &notaDef);

        if (notaDef >= 3.0)
        {

            aprobaron = aprobaron + 1;
        }
        else
        {
            desaprobaron = desaprobaron + 1;
        };

        sumaDef = sumaDef + notaDef;
        contEst = contEst + 1;
    };

    promGr = sumaDef/estudiantes;

    printf("Cantidad de estudiantes que aprobaron: %i", aprobaron);
    printf("\nCantidad de estudiantes que desaprobaron: %i", desaprobaron);
    printf("\nEl promedio es: %f", promGr);


}
