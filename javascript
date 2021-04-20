function VALOR(){
   
    //Capturar os campos
    var outVeiculo = document.getElementById('txtVeiculo');
    var outPreço = document.getElementById('txtPreço');
    var outVeiculo = document.getElementById('txtVeiculo');
    var outPreço = document.getElementById('txtPreço');
    
    //Capturar os valores
    var veiculos = txtVeiculo.value
    var preço = Number(txtPreço.value); // REAIS


    // calcular os valore
    var valorentrada = Math.floor(valor /12);
    var valorrestante = valor%50;
    
    //exibir resultados
    outVeiculo.textContent = "Veiculo:" +veiculos
    outPreço.textContent = $(valorEntrada) + $(valorRestante)}

    //Capturar o botao e adicionar o evento de click
    var btVALOR = document.getElementById('btnVALOR')
    btnVALOR.addEventListener('click',VALOR);
