"use strict";
/**
 * ts possui suporte a uniões de tipos podendo gerar um tipo que pode englobar dois ou mais tipos
 * podemos gerar a união de tipos com uma | entre os tipos a serem unidos
 */
Object.defineProperty(exports, "__esModule", { value: true });
var strOrBool = boolean; // aqui podemos atribuir tanto um tipo string como um booleano para a variavel
// aqui criamos uma função de check que recebe como argumento um objeto do tipo UserOrClassroom e quando colocamos o . depois de UserOrClassroom
// só conseguimos captar a propriedade em comum, e esta está como união de tipos
function check(UserOrClassroom) {
    return UserOrClassroom.id;
}
exports.check = check;
