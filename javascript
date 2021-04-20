function calcular()
{
// Capturarando os campos
var txtVeiculo = document.getElementById('txtVeiculo');
var txtPreco = document.getElementById('txtPreco');
var outVeiculo = document.getElementById('outVeiculo');
var outEntrada = document.getElementById('outParcelas')
var outPracela = document.getElementById('outParcelas')

//Calculos
 var preco = Number(txtPreço.value);
 var entrada = preco / 2
 var parcelas = entrada / 12

 // Formatando em Reais
 entrada = entrada.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
 parcela = parcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

 // Exibir Resultado
 outVeiculo.textContent = txtVeiculo.value;
 outEntrada.textContent = 'Entrada de ${entrada}';
 outPracela.textContent = '+ 12 de ${parcelas}'
}

var btnPromocao = document.getElementById('btnPromocao')
btnPromocao.addEventListener('click', calcular)
