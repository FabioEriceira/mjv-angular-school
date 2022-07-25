/**
 * ts possui suporte a uniões de tipos podendo gerar um tipo que pode englobar dois ou mais tipos
 * podemos gerar a união de tipos com uma | entre os tipos a serem unidos 
 */

export type StringOrBoolean = string | boolean;

let strOrBool: StringOrBoolean = boolean; // aqui podemos atribuir tanto um tipo string como um booleano para a variavel


// aqui definimos dois outros tipos User e Classroom, notem que ambos tem uma propriedade em comum chamada id, uma é do tipo string
// e a outra do tipo number

export interface User {
    id: string;
    name: string;
}

export interface Classroom {
    id: number;
    subject: string;
}

// e aqui embaixo geramos uma união de tipos contendo os dois tipos 

export type UserOrClassroom = User | Classroom;


// aqui criamos uma função de check que recebe como argumento um objeto do tipo UserOrClassroom e quando colocamos o . depois de UserOrClassroom
// só conseguimos captar a propriedade em comum, e esta está como união de tipos

export function check(UserOrClassroom: UserOrClassroom) {
    return UserOrClassroom.id;
}
