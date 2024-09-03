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