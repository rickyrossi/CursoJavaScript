/* Verifica se o documento foi carregado (boa prática):
$(document).ready(function(){}) */

$(document).ready(function(){
    $('button').click(function(){ // verifica clique no botão
        $('h1').hide() // esconde div ou seletor, no caso o h1
    });
});