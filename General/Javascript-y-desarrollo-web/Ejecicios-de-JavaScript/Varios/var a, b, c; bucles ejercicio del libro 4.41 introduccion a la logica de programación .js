var a, b, c;

a = 1;
b = 3;

while( a < 5 ) {
    
    do {
        for( c = 1; c <= b; c++) {
            console.log(a, b, c)
        };

        b = b - 2;
    } while( b >= 1);
    
    b = 2;
    a = a + b;
};