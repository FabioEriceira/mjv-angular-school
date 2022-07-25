"use strict";
/**
 * Os tipos primitivos do ts são os mesmos das primitivas do js
 */
var str;
var numbr;
var bool;
var nul;
var undefind;
/**
 * Os tipos null e undefined só existem e são levados em consideração no sistema de tipos se a opção de strictNullChecks ou o "strict" no tsconfig.json
 * estiver habilitada. Caso contrário o null e o undefined passam a participar de todos os outros tipos
 *
 * let str: string = null;  --> dá uma mensagem "Type 'null' is not assignable to type 'string'.
 *
 * caso esteja false
 * "strictNullChecks": false,              /* Enable strict null checks.
 * Aí ele deixa atribuir um valor do tipo string, number para null ou  undefined
 *
 * Esta informação é só para saber que existe, não é recomendado
*/
var symbol;
var bigint;
// especiais
var any; // usada para desabilitar as checagem de tipos, deixando atribuir qualquer valor a variável e acessar qualquer pripriedade dela
var unknown;
unknown; // deixa atribuir qualquer valor à variável, mas que força o desenvolvedor a verificar o tipo dela antes de usar
if (unknown === true) {
    unknown;
}
var never; // representa um tipo que não deve existir, representa um erro
var object; // representa qualquer valor que não é primitivo, ou seja não é string, number, boolean ...
function noReturn() {
}
