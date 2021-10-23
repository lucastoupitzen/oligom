
function rodar() {
    document.getElementById("calcular").onclick = function () {
        var resina = document.getElementById("resina") //resina selecionada
        var endurecedor = document.getElementById("endurecedor"); //endurecedor selecionado
        // var resultado = document.getElementById("resultado");
        var dados_resina = {
            nomes: ["RK-100","RK-101","RK-102"],
            valores: [100,200,189],
        }
        var dados_endurecedor = {
            nomes: ["HB-225","HB-229","HB-221"],
            valores: [50,150,95],
        }
        var memoria_resina = 0;
        for (i in dados_resina.nomes) {
            if (dados_resina.nomes[i] == resina.value) {
            break
            }
            else memoria_resina ++
        }
        var teor_resina = dados_resina.valores[memoria_resina]
        var memoria_endurecedor = 0
        for (i in dados_endurecedor.nomes) {
            if (dados_endurecedor.nomes[i] == endurecedor.value) {
                break
            }
            else memoria_endurecedor ++
        }
        var teor_endurecedor = dados_endurecedor.valores[memoria_endurecedor]
        var operação = (teor_endurecedor/teor_resina)*100
        if (isNaN(operação) === false) {
            document.getElementById("resultado").innerHTML = `A proporção é de 100 partes de  ${resina.value}  para  ${Math.round(operação)}  partes do endurecedor  ${endurecedor.value}`;
        } 
        else document.getElementById("resultado").innerHTML = 'Selecione seus materiais'
    }
}