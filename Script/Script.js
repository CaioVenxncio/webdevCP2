



function cupom() {
    var cupom = document.getElementById('cupom').value;
    if (cupom === 'FIAP2024') {
        alert('Cupom Valido!\nVocê conseguiu 10% de desconto!');
    } else {
        alert('Cupom Invalido!');
    }
};
var vinhos = [];


function adicionarVinhoteca() {
    var quantidadeChateu = parseInt(document.getElementById('quantidadeChateu').value);
    vinhos.push(quantidadeChateu);
}

function mostrarSomaElementosUnicos() {
    var uniqueVinhos = [...new Set(vinhos)];
    var soma = uniqueVinhos.reduce((acc, val) => acc + val, 0);

    var vinhotecaDiv = document.getElementById('vinhoteca');
    var paragrafo = document.createElement('p');
    paragrafo.textContent = 'Soma dos elementos únicos: ' + soma;
    
    // Limpa o conteúdo anterior antes de adicionar o novo parágrafo
    vinhotecaDiv.innerHTML = ''; 
    vinhotecaDiv.appendChild(paragrafo);
}

    /*
    var somaChateu = parseInt(document.getElementById('somaChateu'));
    var somaSauvignon = parseInt(document.getElementById('somaSauvignon'));
    var somaBolani = parseInt(document.getElementById('somaBolani'));
    var somaPerignon = parseInt(document.getElementById('somaPerignon'));
    var somaMazzeo = parseInt(document.getElementById('somaMazzeo'));
    var somaAlion = parseInt(document.getElementById('somaAlion'));

    var valorTotal = parseInt(document.getElementById('valorTotal')); 
    var quantidadeChateu = 0;
    var quantidadeSauvignon = 0;
    var quantidadeBolani = 0;
    var quantidadePerignon = 0;
    var quantidadeMazzeo = 0;
    var quantidadeAlion = 0;
    var quantidade = parseInt(document.getElementById(id));
    if (id === quantidadeChateu) {
        quantidadeChateu += quantidade.value;
    } else if (id === 'quantidadeSauvignon') {
        quantidadeSauvignon += quantidade.value;
    } else if (id === 'quantidadeBolani') {
        quantidadeBolani += quantidade.value;
    } else if (id === 'quantidadePerignon') {
        quantidadePerignon += quantidade.value;
    } else if (id === 'quantidadeMazzeo') {
        quantidadeMazzeo += quantidade.value;
    } else if (id === 'quantidadeAlion') {
        quantidadeAlion += quantidade.value;
    }
    
    somaChateu.innerHTML = quantidadeChateu;
    
    valorTotal.innerHTML =  valorTotal + (quantidadeAlion*1400) + (quantidadeBolani*150) + (quantidadeChateu*180) + (quantidadeMazzeo*280) + (quantidadePerignon*1900) + (quantidadeSauvignon*320) 
    alert('Vinho adicionado com sucesso');  
    console.log(valorTotal, quantidadeChateu) */

     



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