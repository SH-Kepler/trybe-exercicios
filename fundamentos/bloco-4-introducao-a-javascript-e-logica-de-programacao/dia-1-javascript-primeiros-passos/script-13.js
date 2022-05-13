const valorCusto = 100;
const valorCustoTotal = valorCusto * 1.2;
const valorVenda = 175;
const lucro = valorVenda - valorCustoTotal;

if(valorCusto < 0 || valorVenda < 0){
    console.log("ERRO")
}
else{
    console.log("Seu lucro é igual a:", lucro)
}