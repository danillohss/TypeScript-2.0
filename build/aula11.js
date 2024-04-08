"use strict";
// Type assertion - TypeCast
let nvalor;
let svalor;
let uvalor;
uvalor = 10;
nvalor = 10;
svalor = '15';
//convertendo number para String
svalor = nvalor.toString();
//convertendo string para number
nvalor = Number.parseInt(svalor);
console.log(typeof nvalor);
console.log(nvalor);
