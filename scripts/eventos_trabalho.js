

function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = id;
    });

}


// documento carregado <-> void main(){ .....
/* window.onload garante que a pagina sera carregada
   no browser do cliente, e apos o carregamento, pode-se
   definir os scripts que serao executados  */
// window.onload = function () { // js nativo

$(function () { // jquery


    // exemplo de funcao definida inline (funcao anonima)
    $("#irParaPra-que-serve").on("click", function () {
        scrollPara("#pra-que-serve");
    });

    $("#irParaHome").on("click", function () {
        scrollPara("#home");
    });

    $("#irParaO-que-e").on("click", function () {
        scrollPara("#o-que-e");
    });

    $("#irParaUtilizacao").on("click", function () {
        scrollPara("#utilizacao");
    });

    $("#irParaReferencia").on("click", function () {
        scrollPara("#referencia");
    });

    $("#irParaContato").on("click", function () {
        scrollPara("#contato");
    });

    


});

