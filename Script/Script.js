



function cupom() {
    var cupom = document.getElementById('cupom').value;
    if (cupom === 'FIAP2024') {
        alert('Cupom Válido!\nVocê conseguiu 10% de desconto!');
    } else if (cupom !== 'FIAP2024' && cupom !== ''){
        alert('Cupom Inválido!\nTente outro!');
    } else {alert('Por favor, insira um cupom!');}
};



function formulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    if (nome === '' || email === '' || mensagem === '') {
        alert('Espaços Vazios\nDigite seu nome, mensagem e email!')
    } else {
        alert('Mensagem enviada com sucesso!')
        
        
    }
};
let login = '1234';
let loginSenha = '1234';
function entrar() {
    var entrarEmail = document.getElementById('entrarEmail').value;
    var entrarSenha = document.getElementById('entrarSenha').value;
    if (entrarEmail === '' || entrarSenha === '') {
        alert('Espaços Vazios\nDigite seu email e senha!')
    } else if (login === entrarEmail && loginSenha === entrarSenha) {
        alert('Login realizado com sucesso!')
        entrarEmail.innerHTML = '';
        entrarEmail.innerHTML = '';
    } else {
        alert('Login não foi realizado!')
        entrarEmail.innerHTML = '';
        entrarEmail.innerHTML = '';
        
    }
};
var resultado1 = document.getElementById('valorProdutos1');
var resultado2 = document.getElementById('valorProdutos2');
var resultado3 = document.getElementById('valorProdutos3');
var resultado4 = document.getElementById('valorProdutos4');
var resultado5 = document.getElementById('valorProdutos5');
var resultado6 = document.getElementById('valorProdutos6');
var valor = document.getElementById('valorTotal')
var valorTotal = 0
function adicionar1() {
    var qtdvinho1 = parseInt(document.getElementById('vinho1').value);
    resultado1.innerHTML = qtdvinho1*180;
    valorTotal += (qtdvinho1*180);
    valor.innerHTML = valorTotal;
}
function adicionar2() {
    var qtdvinho2 = parseInt(document.getElementById('vinho2').value);
    resultado2.innerHTML = qtdvinho2*320;
    valorTotal += (qtdvinho2*320);
    valor.innerHTML = valorTotal;
}
function adicionar3() {
    var qtdvinho3 = parseInt(document.getElementById('vinho3').value);
    resultado3.innerHTML = qtdvinho3*150;
    valorTotal += (qtdvinho3*150);
    valor.innerHTML = valorTotal;
}
function adicionar4() {
    var qtdvinho4 = parseInt(document.getElementById('vinho4').value);
    resultado4.innerHTML = qtdvinho4*180;
    valorTotal += (qtdvinho4*180);
    valor.innerHTML = valorTotal;
}

function adicionar5() {
    var qtdvinho5 = parseInt(document.getElementById('vinho5').value);
    resultado5.innerHTML = qtdvinho5*280;
    valorTotal += (qtdvinho5*280);
    valor.innerHTML = valorTotal;
}
function adicionar6() {
    var qtdvinho6 = parseInt(document.getElementById('vinho6').value);
    resultado6.innerHTML = qtdvinho6*1400;
    valorTotal += (qtdvinho6*1400);
    valor.innerHTML = valorTotal;
}

function adicionarCarrinho() {
    var quantidade = parseInt(document.getElementById('numeroInput').value);
    if (quantidade !== '' && quantidade > 0) {
        alert('Quantidade adicionada ao carrinho!');
    } else {alert('Adicione ao menos 1 unidade!');}
}