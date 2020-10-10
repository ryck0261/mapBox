
function gerenciarTema(){
    console.log("funcao gerenciar tema");
    
    var corAtual, elementoBody,elementoPadrao,elementoPadrao2 ;

    // buscando elemento body da pagina
    // elemento na primeira posicao da lista (body so tem um)
    elementoBody = document.getElementsByTagName("body")[0]; // 1° posicao
   
    corAtual = elementoBody.style.backgroundColor;     // obtem cor atual    
    console.log("cor atual: " + corAtual);
    
    if(corAtual == "black"){ // esta com fundo primary, ou seja, tema azul
        $("body").css("background-color", "blue");
        $("body").css("color", "red");
        
        $(".cor-padrao").css("background-color", "red");
        $(".cor-padrao").css("color", "blue");
        $(".cor-padrao").css("border", "0");
       
        $(".cor-padrao-2").css("background-color", "#002d5f");
        $(".cor-padrao-2").css("color", "red");
        
        
    }else if(corAtual == "blue"){ // esta com fundo primary, ou seja, tema azul
        
        
        $("body").css("background-color", "white");
        $("body").css("color", "black");
        
        $(".cor-padrao").css("background-color", "#007bff");
        $(".cor-padrao").css("color", "white");
        $(".cor-padrao").css("border", "0");
       
        $(".cor-padrao-2").css("background-color", "#228cff");
        $(".cor-padrao-2").css("color", "white");
    

    } else {
        $("body").css("background-color", "black");
        $("body").css("color", "white");
        
        $(".cor-padrao").css("background-color", "#670000");
        $(".cor-padrao").css("color", "white");

        $(".cor-padrao-2").css("border", "1px");
        $(".cor-padrao-2").css("border-color", "red");
        $(".cor-padrao-2").css("background-color", "#0a0a0a");
        $(".cor-padrao-2").css("color", "white");
    

    }
    
    
}


// documento carregado <-> void main(){ .....
/* window.onload garante que a pagina sera carregada
   no browser do cliente, e apos o carregamento, pode-se
   definir os scripts que serao executados  */
window.onload = function(){
    console.log("Entrou no window onload..funcionou o JS");
    //alert("Funcionou o javascript");

    
    // vincular, associar (bind, trigger, listener)
    document.getElementById("opTema").addEventListener("click", gerenciarTema);

}









