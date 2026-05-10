let nome = prompt("Digite seu nome: ");
let renda = parseFloat(prompt("Digite sua renda mensal: "));
let despesas = prompt("Digite quantas despesas que sera informada: ");
renda = Number(renda);
let  total_despesas = 0;

if (despesas < 1){
    despesas = 1;
}
if (despesas > 5){
    despesas = 5;
}

for (let i = 0; i < despesas; i++) {
    let despesa = parseFloat(prompt("Digite o valor da despesa " + (i + 1) + ": "));
    total_despesas += despesa;
}

if (total_despesas > renda){
    console.log ("atencao: você gastou mais do que ganhou.");
}
else{
    if (renda >= total_despesas * 1.3 ){
        console.log("Ótimo: boa margem de sobra.");
    }
    else if (renda > total_despesas){
        console.log("ok: da pra melhorar a sobra.");
    }
}
alert("Olá " + nome + ", sua renda mensal é de R$ " + renda + " e suas despesas totais são de R$ " + total_despesas + ".");