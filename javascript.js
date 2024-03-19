let modal = document.getElementById("modal");
modal.classList.add("transition");
function modalConteudo() {
    modal.style.display = "flex";
    setTimeout( function(){
        modal.style.opacity = "1";
    }, 10);
}

function btnClose() {
    modal.style.opacity = "0";
    setTimeout( function() {
    modal.style.display = "none";
    }, 1000);
}