"use strict";
/**
 * 1- Criar um tipo para representar um objeto que contenha as suas informações de nome, profissão, idade e uma
 * lista de assuntos de seu interesse.
*/
/**
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações
*/
var student = {
    name: "Fabio",
    profession: "Administrador",
    age: 49,
    interest: ["Esporte, programação, teologia, música"]
};
/**
 * 3 - faça uma função que receba como argumento um objeto do tipo do exercício 1,
 * e retorne somente a lista de assuntos do objeto
*/
function studentInterest(student) {
    return student.interest;
}
/**
 * 5 - crie um enum para representar as matériasdo curso (angula, typescript e git)
 */
var Subjects;
(function (Subjects) {
    Subjects["ANGULAR"] = "Angular";
    Subjects["TYPESCRIPT"] = "Typescript";
    Subjects["GIT"] = "Git";
})(Subjects || (Subjects = {}));
/**
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 */
var alan = {
    name: "Alan",
    classes: [Subjects.ANGULAR, Subjects.TYPESCRIPT, Subjects.GIT]
};
var nathan = {
    name: "Nathan",
    classes: [Subjects.ANGULAR, Subjects.GIT]
};
/**
 * 8 - Declare e popule um array com os objetos do exercício 7.
 */
var teachersArray = [alan, nathan];
/**
 * 9 - Faça uma função que receba um arqumento de array de Professor e
 * retorne um novo array de strings contendo somente os nomes dos professores.
 */
function retornNameTeachers(teachersArray) {
    return teachersArray.map(function (teacher) { return teacher.name; });
}
/**
 * 10 - Faça uma função que receba um arqumento de array de Professor e
 * retorne um array de materiais.
*/
/**
 * 11 - Faça uma função que receba um arqumento de array de Professores e reotrne o primeiro
 * professor encontrado que dê aula de Typescript
*/
