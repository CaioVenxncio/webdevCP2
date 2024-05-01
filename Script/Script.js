

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
var valor = document.getElementById('valorTotal');
var valorTotal = 0;
a = 0;
b = 0;
c = 0;
d = 0;
e = 0;
f = 0;
function adicionar1() {
    var qtdvinho1 = parseInt(document.getElementById('vinho1').value);

    if (qtdvinho1  === '' || qtdvinho1 <= 0) {
        alert('Digite uma quantidade')

    } else {
        a += qtdvinho1*180;
        resultado1.innerHTML = ` R$${qtdvinho1*180+a},00`; 
        valorTotal += (qtdvinho1*180);
        valor.innerHTML = ` R$${valorTotal+a},00`;
    }

}
function adicionar2() {
    var qtdvinho2 = parseInt(document.getElementById('vinho2').value);
    if (qtdvinho2 === '' || qtdvinho2 <= 0) {
        alert('Digite uma quantidade')
    } else {
        b += qtdvinho2*320;
        resultado2.innerHTML = `R${qtdvinho2*320+b},00`;
        valorTotal += (qtdvinho2*320);
        valor.innerHTML = `R$${(valorTotal+b+a)},00`;
    }

}
function adicionar3() {
    var qtdvinho3 = parseInt(document.getElementById('vinho3').value);
    if (qtdvinho3===''||qtdvinho3<=0) {
        alert('Digite uma quantidade')
    } else {
        c += qtdvinho3*150;
        resultado3.innerHTML = `R$${qtdvinho3*150+c},00`;
        valorTotal += (qtdvinho3*150);
        valor.innerHTML = `R$${valorTotal+c+b+a},00`;
    }

}
function adicionar4() {
    var qtdvinho4 = parseInt(document.getElementById('vinho4').value);
    if (qtdvinho4===''||qtdvinho4<=0) {
        alert('Digite uma quantidade')
    } else {
        d += qtdvinho4*180;
        resultado4.innerHTML = `R$${qtdvinho4*180+d},00`;
        valorTotal += (qtdvinho4*180);
        valor.innerHTML = `R$${valorTotal+d+a+b+c},00`;

    }
}

function adicionar5() {
    var qtdvinho5 = parseInt(document.getElementById('vinho5').value);
    if (qtdvinho5===''||qtdvinho5<=0) {
        alert('Digite uma quantidade')
        resultado5.innerHTML = ''
        valor.innerHTML = ''
    } else {
        resultado5.innerHTML = `R$${qtdvinho5*280+e},00`;
        valorTotal += (qtdvinho5*280);
        valor.innerHTML = `R$${valorTotal+e+d+c+b+a},00`;

    }
}
function adicionar6() {
    var qtdvinho6 = parseInt(document.getElementById('vinho6').value);
    if (qtdvinho6===''||qtdvinho6<=0) {
        alert('Digite uma quantidade')
    } else {
        f += qtdvinho6*1400;
        resultado6.innerHTML = `R$${qtdvinho6*1400+f},00`;
        valorTotal += (qtdvinho6*1400);
        valor.innerHTML = `R$${valorTotal+f+e+d+c+b+a},00`;

    }
}

function adicionarCarrinho() {
    alert('Vinho adicionado ao carrinho!');
}/*
function adicionar() {
    var qtdvinho1 = parseInt(document.getElementById('vinho1').value);
    var qtdvinho2 = parseInt(document.getElementById('vinho2').value);
    var qtdvinho3 = parseInt(document.getElementById('vinho3').value);
    var qtdvinho3 = parseInt(document.getElementById('vinho3').value);
    var qtdvinho4 = parseInt(document.getElementById('vinho4').value);
    var qtdvinho5 = parseInt(document.getElementById('vinho5').value);
    var qtdvinho6 = parseInt(document.getElementById('vinho6').value);
    
    if (qtdvinho1!=='' || qtdvinho1!==0 ) {
        if (qtdvinho1=='') {
            resultado1.innerHTML = 0; 
        } else {
            resultado1.innerHTML = ` R$${qtdvinho1*180},00`; 
            valorTotal += (qtdvinho1*180);
            valor.innerHTML = `R$${valorTotal},00`;
        }

    }
    if (qtdvinho2!=='' || qtdvinho2!==0) {
        if (qtdvinho2 =='') {
            resultado2.innerHTML = 0; 
        } else {
            resultado2.innerHTML = `R$${qtdvinho2*320},00`;
            valorTotal += (qtdvinho2*320);
            valor.innerHTML = `R$${valorTotal},00`;
        }

    }
     if (qtdvinho3!==''|| qtdvinho3!==0) {
        if (qtdvinho3 =='') {
            resultado3.innerHTML = 0; 
        } else {
                resultado3.innerHTML = `R$${qtdvinho3*150},00`;
                valorTotal += (qtdvinho3*150);
            valor.innerHTML = `R$${valorTotal},00`;
        }
    }
    if (qtdvinho4!==''||qtdvinho4!==0) {
        if (qtdvinho4 =='') {
            resultado4.innerHTML = 0; 
        } else {
            resultado4.innerHTML = `R$${qtdvinho4*180},00`;
            valorTotal += (qtdvinho4*180);
            valor.innerHTML = `R$${valorTotal},00`;
        }

    }
    if (qtdvinho5!==''||qtdvinho5!==0) {
        if (qtdvinho5 =='') {
            resultado5.innerHTML = 0; 
        } else {
            resultado5.innerHTML = `R$${qtdvinho5*280},00`;
            valorTotal += (qtdvinho5*280);
            valor.innerHTML = `R$${valorTotal},00`;
        }


    }
    if (qtdvinho6!==''||qtdvinho6!==0) {
        resultado6.innerHTML = `R$${qtdvinho6*1400},00`;
        valorTotal += (qtdvinho6*1400);
        valor.innerHTML = `R$${valorTotal},00`;
    } else {
        resultado6.innerHTML = '0';
    }
    

};*/
function cadastro() {
    var nomeCadastro = document.getElementById('nome').value;
    var emailCadastro = document.getElementById('email').value;
    var senhaCadastro = document.getElementById('senha').value;
    var senha2Cadastro = document.getElementById('senha2').value;
    if (nomeCadastro === '' || emailCadastro ===  '' || senhaCadastro === ''|| senha2Cadastro ==='') {
        alert('Cadastro Inválido\nEspaço(s) vazios');
    } else {
        alert('Cadastro realizado com sucesso!');

    }
    
   
}