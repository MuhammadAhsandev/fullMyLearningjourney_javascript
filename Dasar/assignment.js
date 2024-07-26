// Operator in javascript
/*
    += : x + y
    -= : x - y
    *= : x * y
    /= : x / y
    %= : x % y
    **= : x ** y
    Shift Assignment Operator

    <<= : x << y
    >>= : x >> y
    >>>= : x >>> y

    Bitwise assingment Operator
    &= : x & y
    |= : x | y
    ^= : x ^ y
    
    Logical assignment operator
    &&= : 	x = x && (x = y)
    ||= : 	x = x || (x = y)
    ??= : x = x ?? (x = y)
    
*/
// Example

// Javascript Assignment Operator
let number1 = 10;
number1 *= 20;
console.log(number1); // 200

let number2 = 20;
number2 /= 2;
console.log(number2);

let plus1 = 30;
plus1 += 10;
console.log(plus1); // 40

let decrement1 = 86;
decrement1 -= 23;
console.log(decrement1); 

let percentage1 = 45;
percentage1 %= 10;
console.log(percentage1);

let multiple1 = 56;
multiple1 **= 2;
console.log(multiple1);

// Bitwise Assignmetn Operator
let number3 = 10;
number3 &= 7;
console.log(number3); 

let bitwise1 = 23;
bitwise1 |= 5;
console.log(bitwise1);

let xorAssignment = 72;
xorAssignment ^= 9;
console.log(xorAssignment);

// Shift Assignment Operator
let more = 87;
more <<= 2;
console.log(more);

let little = 74;
little >>= 2;
console.log(little);

let moremore = 98;
moremore >>>= 2;
console.log(moremore);

// Logical Assignment Operator
let andValue = 30;
andValue &&= 10;
console.log(andValue);

let orValue = 81;
orValue ||= 6;
console.log(orValue);

let nullish;
nullish ??= 4;

