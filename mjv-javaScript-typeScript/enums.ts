/**
 * O ts adiciona suporte a enuns no js 
*/

enum TipoPessoa {
    ALUNO = 0,
    PROFESSOR = 1
}

// pode ser tmb string e não precisa ser igual à constante

enum TipoPessoa2 {
    ALUNO = "Aluno",
    PROFESSOR = "Professor"
}




const tipoAluno = TipoPessoa.ALUNO;

const tipoProfessor = TipoPessoa.PROFESSOR;

interface PessoaDevSchool {
    tipo: TipoPessoa
}

const pessoaDevSchool: PessoaDevSchool = {
    tipo: TipoPessoa.ALUNO
}