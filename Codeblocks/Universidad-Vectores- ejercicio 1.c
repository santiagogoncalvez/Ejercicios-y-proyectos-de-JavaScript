#include <stdio.h>

int pedirVector (int vector1[5], int vector2[5])
{
    int vectorTotal[10] = {};

    for (int i = 0; i < 5; i++)
    {
        vectorTotal[i] = vector1[i];
    };

int j = 0;
    for (int i = 5; i < 10; i++)
    {
        vectorTotal[i] = vector2[j];
        j++;
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

    pedirVector(vector1, vector2);

};
