document.addEventListener('DOMContentLoaded', function() {
    var vinhos = JSON.parse(sessionStorage.getItem('vinhos'));

    if (vinhos) {
        var vinhotecaDiv = document.getElementById('vinhoteca');

        vinhos.forEach(function(quantidade) {
            var paragrafo = document.createElement('p');
            paragrafo.textContent = 'Quantidade: ' + quantidade;
            vinhotecaDiv.appendChild(paragrafo);
        });
    } else {
        var vinhotecaDiv = document.getElementById('vinhoteca');
        vinhotecaDiv.textContent = 'Nenhum vinho adicionado.';
    }
});