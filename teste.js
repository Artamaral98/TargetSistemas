const fs = require('fs');

/*1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
RESPOSTA: O VALOR DE SOMÁ SERÁ 91
*/

const indice = 13 
let soma = 0 
let k = 0

while (k < indice) {
    k = k + 1;
    soma = soma + k
}

console.log(soma)

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence 
ou não a sequência.
*/

class Fibo {
    constructor (num) {
        this.num = num
    }

    fibonacci = (numero) => {
        if (numero <= 1) { 
            return numero
        }
        return this.fibonacci(numero - 1) + this.fibonacci(numero - 2)
    }

    quadrado = () => {
        const sub = 5 * this.num * this.num - 4
        const sum = 5 * this.num * this.num + 4
        const raizSub = parseInt(Math.sqrt(sub))
        const raizSum = parseInt(Math.sqrt(sum))
    
        return raizSub * raizSub === sub || raizSum * raizSum === sum
    }

    isFibo = () => {
        const fiboResult = this.fibonacci(this.num)
        const check = this.quadrado(this.num)

        if (!check) {
            return `${this.num} não pertence a sequência de Fibonacci: Valor final: ${fiboResult}`
        } else {
            return `${this.num} pertence a sequência de Fibonacci. Valor final: ${fiboResult}`
        }
    }
}

const x = new Fibo(0)

console.log(x.isFibo())




/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

/*4) 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

//CÓDIGO PARA RESOLÇ

class Faturamento {
    constructor(objFaturamentos, diretório){
        this.objFaturamentos = objFaturamentos
        this.diretório = diretório
        const fs = require('fs');
        const json = fs.readFileSync(this.diretório, 'utf8');
        const dados = JSON.parse(json)
        this.dados = dados
        
        
    }


    maxFat(){
        const valores = this.dados.map(obj => obj.valor)
        const maiorFaturamento = Math.max(...valores).toFixed(2)
        
        return `o maior faturamento diário foi de:R$${maiorFaturamento}`
    }

    minFat(){
        const valores = this.dados.map(obj => obj.valor)
        const menorFaturamento = Math.min(...valores).toFixed(2)

        return `o menor faturamento diário foi de:R$ ${menorFaturamento}`
    }

    mediaMensal() {
        const valores = this.dados.map(obj => obj.valor);
        const quantidade = valores.length
        const media = valores.reduce((anterior, atual ) => anterior + atual, 0) / quantidade
        return media.toFixed(2)

        
    }

    maiorQueMensal(){
        const media = this.mediaMensal()
        const filtro = this.dados.filter(obj => obj.valor > media)
        const numeroDias = filtro.length
        return `Neste mês foram encontrados ${numeroDias} dias em que o faturamento diário foi maior do que o faturamento mensal`
    }


    valorTotal() {
       return Object.values(this.objFaturamentos).reduce((anterior, atual) =>  anterior + atual, 0)
            
    }

    percentual(){
        const total = this.valorTotal()
        let porcentagem = {}
        Object.entries(this.objFaturamentos).forEach(([estado, fat]) => {
            porcentagem[estado] = ((fat / total) * 100).toFixed(2)
        });

        return porcentagem
    }
}

const objFaturamentos = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    OUTROS: 19849.53,
  };


const teste = new Faturamento(objFaturamentos, 'dados.json')

console.log(teste.maiorQueMensal())


/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const inverterString = (str) => {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}

console.log(inverterString('batata'))