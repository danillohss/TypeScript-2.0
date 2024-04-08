// Type assertion - TypeCast

let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
nvalor = 10;
svalor = '15';

//convertendo number para String
svalor = nvalor.toString();

//convertendo string para number
nvalor = Number.parseInt(svalor);

console.log(typeof nvalor);
console.log(nvalor)