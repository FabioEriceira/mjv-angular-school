/**
 * Classes são basicamente templetes para criação de objetos  eles encapsulam dados e código para trbalhar com estes
 * dados e são baseados em prototypes
 */

class UserDevSchooll {
    
    id: string;
    nome: string;

    constructor(id:string, nome:string) {
        this.id = id;
        this.nome = nome;
    }

    getUppercaseName() {
        return this.nome.toUpperCase();
    }

}

/***
 * Este código fica repetitivo, mas podemos simplificar da seguinte forma
 * usando os modificadores de acesso public no construtor. Automaticamente o ts vai setar estas propriedades quando forem inicializar
 * a classe do construtor
*/

 class UserDevSchool {
    
    constructor(protected id:string, public nome:string) {
    }

/**
 * Aqui tb temos um método que está publico, podemos modificar o acesso a este método ou as propriedades do construtor utilizando 
 * private somente a classe em si pode acessar este método
 * protected permite o acesso a estes métodos ou propriedades pelas classes filhas 
 * public ou sem nada é o mesmo que public
*/


    getUppercaseName() {
        return this.nome.toUpperCase();
    }

}

interface TemMateriais {
    materiais: string[];
}

class Professor extends UserDevSchool implements TemMateriais{
    materiais: string[];

    constructor(id: string, nome:string, materiais:string[]){
        super(id, nome);
        this.materiais = materiais;
    }
}

/**
 * Para instanciar uma chasse é parecido com o ao java 
 */

const professor = new Professor("123","Alan", ["typescript"]);

function test(user: UserDevSchool){
    user.nome
}
