"use strict";
function userRewiew(review) {
    if (typeof review === "number") {
        if (review === 5) {
            return "Usuário Nota 5";
        }
        else if (review === 4) {
            return "Usuário Nota 4";
        }
        else if (review === 3) {
            return "Usuário Nota 3";
        }
        else if (review === 2) {
            return "Usuário Nota 2";
        }
        else if (review === 1) {
            return "Usuário Nota 1";
        }
    }
    else {
        return "Sem nota para esse usuário!";
    }
}
console.log(userRewiew(1));
console.log(userRewiew(false));
