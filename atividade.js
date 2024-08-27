// Manipulação de Strings
function manipularStrings() {
    let texto = "Aprendendo JavaScript é divertido e recompensador!";
    console.log(texto.toUpperCase());
    console.log(texto.includes("divertido"));
    let palavras = texto.split(" ");
    console.log(palavras);
    console.log(palavras.join("-"));
}

// Operações com Números
function operacoesComNumeros() {
    let num1 = 200.456;
    let num2 = 150.789;
    console.log(Math.round(num1));
    console.log(Math.max(num1, num2));
    console.log(Math.min(num1, num2));
    console.log(Math.sqrt(num2));
    console.log(num1.toExponential());
}

// Lógica Booleana e Comparações
function logicaBooleanaEComparacoes() {
    let x = 8, y = 12, z = 8;
    console.log(x >= y);
    console.log(x != z);
    console.log(x !== z);
    console.log(x < y && z > x);
    console.log(x === z || y < z);
}

// Trabalhando com Null, Undefined, e NaN
function nullUndefinedENaN() {
    let nulo = null;
    console.log(nulo == undefined);
    console.log(nulo === undefined);
    let indefinido;
    console.log(isNaN(indefinido));
    let convertido = Number("123abc");
    console.log(isNaN(convertido));
}

// Manipulação de Arrays
function manipulacaoDeArrays() {
    let numeros = [10, 20, 30, 40, 50];
    numeros.push(60);
    console.log(numeros);
    console.log(numeros.pop());
    console.log(numeros);
    numeros.splice(2, 1);
    console.log(numeros);
    console.log(numeros.sort((a, b) => b - a));
}

// Manipulação de Objetos Avançada
function manipulacaoDeObjetos() {
    let pessoa = {
        nome: "João",
        idade: 30,
        profissao: "Desenvolvedor",
        endereco: { cidade: "Cidade B" },
        apresentacao() {
            return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
        }
    };
    console.log(pessoa.apresentacao());
    console.log(pessoa.endereco.cidade);
    pessoa.profissao = "Engenheiro";
    console.log(pessoa);
    pessoa.telefone = "123456789";
    console.log(pessoa);
}

// Funções e Escopo
function funcoesEScopo() {
    function soma(a, b) { return a + b; }
    function ehPar(num) { return num % 2 === 0; }
    function dobraValores(arr) { return arr.map(num => num * 2); }
    function contaCaracteres(str) { return str.length; }
    function fatorial(n) { return n === 0 ? 1 : n * fatorial(n - 1); }

    console.log(soma(5, 3));
    console.log(ehPar(4));
    console.log(dobraValores([1, 2, 3]));
    console.log(contaCaracteres("abc"));
    console.log(fatorial(5));
}

// Manipulação de Datas e Horas
function manipulacaoDeDatas() {
    let aniversario = new Date('2024-09-15');
    let hoje = new Date();
    let diferenca = Math.ceil((aniversario - hoje) / (1000 * 60 * 60 * 24));
    console.log(diferenca + ' dias');
    console.log(hoje.toISOString().split('T')[0]);
    hoje.setDate(hoje.getDate() + 30);
    console.log(hoje.toISOString().split('T')[0]);
}

// Trabalhando com Funções de Callback
function funcoesDeCallback() {
    function executaOperacao(a, b, operacao) { return operacao(a, b); }
    let soma = (a, b) => a + b;
    console.log(executaOperacao(5, 3, soma));
    let multiplicacao = (a, b) => a * b;
    console.log(executaOperacao(5, 3, multiplicacao));
    function repetirOperacao(num, operacao) { for (let i = 1; i <= num; i++) console.log(operacao(i)); }
    repetirOperacao(3, i => i * i);
    function contarOcorrencias(str, char) { console.log([...str].filter(c => c === char).length); }
    contarOcorrencias("abracadabra", "a");
}

manipularStrings();
operacoesComNumeros();
logicaBooleanaEComparacoes();
nullUndefinedENaN();
manipulacaoDeArrays();
manipulacaoDeObjetos();
funcoesEScopo();
manipulacaoDeDatas();
funcoesDeCallback();
