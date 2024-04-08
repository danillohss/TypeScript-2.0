"use strict";
// REST E SPREADs
function fsoma(...n) {
    let s = 0;
    n.forEach((en) => {
        s += en;
    });
    return s;
}
console.log(fsoma(10, 20, 1, 1, 1, 1, 1, 1, 1, 2));
