let chateu = 180;
let sauvignon = 320;
let bolani = 150;
let perignon = 180;
let mazzeo = 280;
let alion = 1400;

let qtdchateu = 0;
let qtdsauvignon = 0;
let qtdbolani = 0;
let qtdperignon = 0;
let qtdmazzeo = 0;
let qtdalion = 0;




function cupom() {
    cupom = document.getElementById('cupom').value;
    if (cupom = 'FIAP2024') {
        alert('Cupom Valido!\nVocê conseguiu 10% de desconto!');
    }; 
};

function adicionar() {
    var vinhoBranco1 = document.getElementById('chateu').value;
    alert('Vinho adicionado com sucesso');    
};


function formulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    if (nome === '' || email === '' || mensagem === '') {
        alert('Espaços Vazios\nDigite seu nome, mensagem e email!')
    } else {
        alert('Mensagem enviada com sucesso!')
        nome.innerHTML = '';
        email.innerHTML = '';
        mensagem.innerHTML = '';
    
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