/**
 * 1- Criar um tipo para representar um objeto que contenha as suas informações de nome, profissão, idade e uma 
 * lista de assuntos de seu interesse.
*/

console.log("estou aqui")

 interface Pessoa {
    name: string;
    profession: string;
    age: number;
    interest: string[];
}

/**
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações
*/


const student: Pessoa = {
    name: "Fabio",
    profession: "Administrador",
    age: 49 ,
    interest: ["Esporte, programação, teologia, música"]
}

/**
 * 3 - faça uma função que receba como argumento um objeto do tipo do exercício 1,
 * e retorne somente a lista de assuntos do objeto
*/


function studentInterest(student: Pessoa) {
    return student.interest;
}

/**
 * 4 - coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela
 */

type studentInterest = (User: object) => string[];

/**
 * 5 - crie um enum para representar as matériasdo curso (angula, typescript e git)
 */

 enum Subjects {
    ANGULAR = "Angular",
    TYPESCRIPT = "Typescript",
    GIT = "Git",
}

/**
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista de materias de cada um.
 */

 interface Teacher {
    name: string;
    classes: Subjects[];
}

/**
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 */

const alan: Teacher= {
    name: "Alan",
    classes: [Subjects.ANGULAR, Subjects.TYPESCRIPT, Subjects.GIT]
}

console.log(alan)

const nathan: Teacher= {
    name: "Nathan",
    classes: [Subjects.ANGULAR, Subjects.GIT]
}

/**
 * 8 - Declare e popule um array com os objetos do exercício 7.
 */

const teachersArray: Teacher[] = [alan, nathan];

/**
 * 9 - Faça uma função que receba um arqumento de array de Professor e 
 * retorne um novo array de strings contendo somente os nomes dos professores.
 */

function retornNameTeachers(teachersArray: Teacher[])  {
    return console.log(teachersArray.map(teacher => teacher.name));
}


/**
 * 10 - Faça uma função que receba um arqumento de array de Professor e 
 * retorne um array de materiais.
*/

function retornArraySubjects(teachersArray: Teacher[]): Subjects[] {
    return teachersArray.reduce((subject, teachersArray) => {
        return subject.concat(teachersArray.classes);
    }, [] as Subjects[]);
}


/**
 * 11 - Faça uma função que receba um arqumento de array de Professores e retorne o primeiro 
 * professor encontrado que dê aula de Typescript
*/

function firstTeacherTypescript(teacher: Teacher[]): Teacher | undefined {
    return teacher.find(teacher => teacher.classes.includes(Subjects.TYPESCRIPT));
}

