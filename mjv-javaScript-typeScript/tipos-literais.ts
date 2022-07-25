/**
 * Além dos tipos primitivos o ts possue suporte a referenciar strings, numbers e booleans específicos e chamamos estes tipos
 * de tipos literais, geralmente encontramos quando declaramos valores primitivos utilizando const, pois o js sabe que estes
 * valores nunca serão alterados, então ele atribui o tipo literal ao invés do tipo primitivo
*/

const a = "a";  // a constante a é do tipo "a" e não do tipo string 

const positivo = true;

const negativo = false;

type bool = true | false;   // podemos considerar que o tipo boolean é a união de todos os tipos literais possiveis de boolean
                            // e podemos exemplificar isto fazendo a uniao do true e false, resultando no tipo equivalente a boolean


const um = 1

/* os tipos literais não são muito úteis sozinhos, mas são muito uteis quando utilizados em uniões, para restringirem os valores possíveis, 
 * similar ao enum, e tb habilitar a função de autocomplet, como no caso da funçao do checkConfirmation, neste caso após o input só podemos 
 * utilizar y ou n
*/

function checkConfirmation(input:"y"|"n"): boolean {
    return input ==="y";
}

/**
 * Objetos literais por padrão não recebem valores literais, mas podemos forcar isto acrescentando as palavras chaves as const
 * após a declaração do objeto, tornando as propriedades do objeto em readonly e utilizando os tipos literais ao inves dos tipos
 * primitivos
 */
const alan_ = {
    nome: "Alan",
    professor: true
} as const
