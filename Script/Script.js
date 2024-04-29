



function cupom() {
    var cupom = document.getElementById('cupom').value;
    if (cupom === 'FIAP2024') {
        alert('Cupom Valido!\nVocê conseguiu 10% de desconto!');
    } else {
        alert('Cupom Invalido!');
    }
};
var vinhos = [];
var vinhoteca = document.getElementById('vinhoteca');

/*function adicionar() {
    var quantidadeChateu = parseInt(document.getElementById('quantidadeChateu').value);
    vinhos.push(quantidadeChateu);
    console.log(vinhos)
    
}*/
var numero = [];
function adicionar() {
    // Recupera o número do input com o id "numeroInput"
    var numero = parseInt(document.getElementById('numeroInput').value);
    
    // Verifica se o número é válido (não vazio)
    if (!isNaN(numero)) {
        // Recupera a array do localStorage ou cria uma nova array vazia se não existir
        var numeros = JSON.parse(localStorage.getItem('numeros')) || [];
        
        // Soma os números presentes na array
        var soma = numeros.reduce(function(acc, curr) {
            return acc + parseInt(curr);
        }, 0);
        
        // Adiciona o novo número à array
        numeros.push(numero);
        
        // Soma o novo número à soma anterior
        soma += numero;
        
        // Converte a array para JSON e armazena no localStorage
        localStorage.setItem('numeros', JSON.stringify(numeros));
        
        // Limpa o input para que o usuário possa inserir outro número
        document.getElementById('numeroInput').value = '';
        
        alert('Número adicionado com sucesso! Soma total: ' + soma);
    } else {
        alert('Por favor, insira um número válido.');
    }
}
/*function mostrarVinhos() {
    console.log(vinhos.slice)
    vinhoteca.innerHTML = vinhos
    
}
window.onload = mostrarVinhos*/ 
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