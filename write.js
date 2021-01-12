
function typeWrite(element){
    const textArray = element.innerHTML.split('')
    element.innerHTML = '';
    textArray.forEach((letra,i) => {
        setTimeout(() => element.innerHTML += letra, 75 * i );
    }); 
}


const title = document.getElementById('write');
typeWrite(title);


function appear(text){
    
    text.innerHTML = ('');
    setTimeout(() => text.innerHTML = "Matricule-se" ,3000);
  

    
}

const matriculation = document.getElementById('matriculation');

appear(matriculation);