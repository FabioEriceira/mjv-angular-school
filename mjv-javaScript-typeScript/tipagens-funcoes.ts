/**
 * Assinaturas de funções também podem ser tipadas
 * 
 */

const sumar = (x: number, y:number) => x + y;

const multiplicar = (x: number, y: number) => x * y;

const dividir = (x: number, y : number) => x / y;

const subtrair = (x: number, y: number) => x - y;

// para evitar esta repetição podemos criar um tipo que representa esta assinatura para isto usamos a palavra chave type
// seguido do nome do tipo que queremos criar = e a tipagem da função

type AritmeticFunction = (x: number, y: number) => number;

const sum:AritmeticFunction = (x, y) => x + y;

const multiply:AritmeticFunction = (x, y) => x * y;

const division:AritmeticFunction = (x, y) => x / y;

const subtraction:AritmeticFunction = (x, y) => x - y;

// fazendo isto o ts já consegue colocar a tipagem correta de cada argumento