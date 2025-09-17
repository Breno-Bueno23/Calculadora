var tela = document.getElementById("i_tela");

function add_num(num) {
    tela.value += num;
}

function limpar_tela() {
    tela.value = "";
}

function apagar_ultimo() {
    tela.value = tela.value.slice(0, -1);
}

function add_operador(op) {
    tela.value += ' ' + op + ' ';
}

function add_ponto() {
    if(!tela.value.includes('.')) {
        tela.value += '.';
    }
}

function calcular() {
    try {
        let expressao = tela.value.replace(/ /g, '');
        let resultado = eval(expressao);
        tela.value = resultado;
    } catch (e) {
        tela.value = "Erro";
    }
}