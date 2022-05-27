function W3docs()                                    
{ 
    var what =  document.forms["RegForm"]["Sujet"];   

 

    if (what.selectedIndex < 1)                  
    { 
        alert("Mettez votre cours."); 
        what.focus(); 
        return false; 
    } 
    return true; 
}










var q1= 0;
var q2= 0;
var q3= 0;
var q4= 0;
var q5= 0;
var q6= 0;

//calcul du score
function calcul() {
    score=q1+q2+q3+q4+q5+q6;
}

//commentaire du résultat
function resultat() {calcul();

                    alert("Ton score est de "+score+" points.");}
                    /*if (score<8) {alert("Ton taux de TOC est de "+score+" sur 10, comme tu es attentif à ta santé il vaut mieux ne plus TOcer pour le moment mais aller s'amuser autrement.");}
                        else {alert("Ton taux de TOC est de "+score+" sur 10. Pour aujourd'hui tu peux raisonnablement TOCer :-)");}
                    }*/
