
function suivant() { 
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    let text = document.querySelector('#code');
    text.innerText = "#" + randomColor;
  
}


let b = document.getElementById('button');
b.addEventListener ('click', suivant);




let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");


function affichage(){
  texte.value = nom +  " " + prenom;
  texte.innerHTML = texte.value;
}
