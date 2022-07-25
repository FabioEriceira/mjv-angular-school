"use strict";
/**
 * O ts adiciona suporte a enuns no js
*/
var TipoPessoa;
(function (TipoPessoa) {
    TipoPessoa[TipoPessoa["ALUNO"] = 0] = "ALUNO";
    TipoPessoa[TipoPessoa["PROFESSOR"] = 1] = "PROFESSOR";
})(TipoPessoa || (TipoPessoa = {}));
// pode ser tmb string e não precisa ser igual à constante
var TipoPessoa2;
(function (TipoPessoa2) {
    TipoPessoa2["ALUNO"] = "Aluno";
    TipoPessoa2["PROFESSOR"] = "Professor";
})(TipoPessoa2 || (TipoPessoa2 = {}));
var tipoAluno = TipoPessoa.ALUNO;
var tipoProfessor = TipoPessoa.PROFESSOR;
var pessoaDevSchool = {
    tipo: TipoPessoa.ALUNO
};
