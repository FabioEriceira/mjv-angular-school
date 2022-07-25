"use strict";
/**
 * Assinaturas de funções também podem ser tipadas
 *
 */
var sumar = function (x, y) { return x + y; };
var multiplicar = function (x, y) { return x * y; };
var dividir = function (x, y) { return x / y; };
var subtrair = function (x, y) { return x - y; };
var sum = function (x, y) { return x + y; };
var multiply = function (x, y) { return x * y; };
var division = function (x, y) { return x / y; };
var subtraction = function (x, y) { return x - y; };
// fazendo isto o ts já consegue colocar a tipagem correta de cada argumento
