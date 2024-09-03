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

console.log(teste.valorTotal())