const remover = document.getElementsByClassName('remover')

for (var i = 0; i < remover.length; i++){
    remover[i].addEventListener('click', function(event){
        event.target.parentElement.remove()
    })
}