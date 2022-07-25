/**
 * Caso queira deixar uma propriedade de um objeto como opcional podemos adicionar o modificador opcioal depois do nome
 * da propriedade que é indicado pelo ? 
 * 
 * O id de um usuário provavelmente não deva ser alterado, então podemos marcar esta propriedade como readonly
 * assim não é possível alterar mais o id lá na linha 21, observe que está dando erro.  O ts avisa que é uma propriedade readonly.
 */

interface User{
    readonly id: number;
    name: string;
    email?: string;
}

const user: User = {
    id: 1,
    name: "Alan",
    email: ""
}

//user.id = 2;