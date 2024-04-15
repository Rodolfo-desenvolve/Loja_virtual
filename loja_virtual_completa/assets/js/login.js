var menu = document.getElementById('MenuItens')

menu.style.maxHeight = '0px'

function menucelular(){
    if(menu.style.maxHeight == '0px'){
        menu.style.maxHeight = '200px';
    }else{
        menu.style.maxHeight = '0px';
    }
}

var EntrarPainel = document.getElementById('EntrarPainel')
var CadastroSite = document.getElementById('CadastroSite')
var Indicador = document.getElementById('Indicador')


function Entrar(){
    CadastroSite.style.transform = 'translateX(300px)';
    EntrarPainel.style.transform = 'translateX(300px)';
    Indicador.style.transform = 'translateX(0px)';
}

function Cadastro(){    
    CadastroSite.style.transform = 'translateX(0px)';
    EntrarPainel.style.transform = 'translateX(0px)';
    Indicador.style.transform = 'translateX(100px)';
}
