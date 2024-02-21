const input1 = document.getElementById('1');
const input2 = document.getElementById('2');
const input3 = document.getElementById('3');
const input4 = document.getElementById('4');
const input5 = document.getElementById('5');

const card1 = document.getElementById('tarjet1');
const card2 = document.getElementById('tarjet2');

const seleccionado = document.getElementById('seleccionado');
const boton = document.getElementById('boton');

card2.style.display = "none"

boton.addEventListener('click', function(){


    if(input1.checked){
        seleccionado.innerText = "seleccionaste 1";
        card2.style.display = "block"
        card1.style.display = "none"
    }else if(input2.checked){
        seleccionado.innerText = "seleccionaste 2";
        card2.style.display = "block"
        card1.style.display = "none"
    }else if(input3.checked){
        seleccionado.innerText = "seleccionaste 3";
        card2.style.display = "block"
        card1.style.display = "none"
    }else if(input4.checked){
        seleccionado.innerText = "seleccionaste 4";
        card2.style.display = "block"
        card1.style.display = "none"
    }else if(input5.checked){
        seleccionado.innerText = "seleccionaste 5";
        card2.style.display = "block"
        card1.style.display = "none"
    }
});

