let string = `000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 10000000 00000000 00000000 00000000 00000111 10000000 00000000 00000000 00000000 00000000 01000000 01100000 00000000 00000000 00001000 00000001 11100000 00000000 00000000 00000100 00000001 10000000 00000001 00000001 00110001 00000000 00111100 00000000 00000001 00000000 00000000 01111111 00000000 00000001 00000100 00110111 11111111 10100000 00000000 00000000 00000111 11111110 11100000 00000000 00000000 01000111 11111100 01110000 00000000 01100000 00001111 11110000 10010001 00000000 01110000 00011111 11100000 10011100 00000010 01000000 00011101 11000000 01011100 01000110 01100100 00111101 11000000 00000000 00000000 00000100 00011001 10000000 00000011 00110000 00000000 01011001 10100000 00000111 10000000 00100000 00011001 00100000 00000011 00000000 10000110 00000000 00000000 00000000 00000100 10000000 11100000 00000000 00000000 00000100 10000000 11000010 00000000 00000000 00000000 00011000 00000011 00000000 00000000 00111000 00011000 00000000 11000000 01000000 00101000 00011000 00001000 00001000 00000000 00111000 00000001 10000000 00001000 00001000 00000011 00000000 00000001 00011110 00000000 00000010 00000000 10000001 10111100 00000000 00000000 00000000 00000001 00111111 10000000 00000000 01000000 00000000 01011111 01000000 00000000 00000000 00000000 00111110 00000000 00000000 00000000 00000000 11111111 00000000 00000000 00000000 00011111 11111111 11111100 00000000 00000000 00011111 11111111 11111100 01000000 00000000 01000000 00111100 00000001 11000000 00000000 11000000 01111110 00000001 11100000
00000000 00000000 11111111 10000000 01100000 00000000 00001111 11111111 11111100 00000000 00000000  0000000 00000000 00000000 00000000 00000000 00000111 11111111 11111000 00000000`;
let array = string.split(" ");

let new_array = "";
for (let i = 0; i < array.length; i++) {
    new_array += array[i][array[i].length - 1];
}

console.log(new_array);

let bitString = new_array;
let octets = [];

for (let i = 0; i < bitString.length; i += 8) {
    octets.push(bitString.substring(i, i + 8));
}

console.log(octets);
