#include <stdio.h>

int vectorIntercalado (int vector1[5], int vector2[5])
{
    int vectorTotal[10] = {}, j = 0, k = 0;

    for (int i = 0; i < 10; i++)
    {


        if (i % 2 == 0)
        {
            vectorTotal[i] = vector1[j];
            j++;
        }
        else
        {
            vectorTotal[i] = vector2[k];
            k++;
        };

    };


    for (int i = 0; i < 10; i++)
        {
            printf("\nElemento ");
            printf("%i", i+1);
            printf(": %i", vectorTotal[i]);
        };

}

main()
{
    int vector1[5] = {1,2,3,4,5}, vector2[5] = {6,7,8,9,10};

    vectorIntercalado(vector1, vector2);

};
