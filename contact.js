
// les constants necessaires utilisés pour les jeux
const listesMots = ["poulet","elie","tamba","masiala"]
const listesPhrases = ["vient manger","pourquoi tu es triste","vas a l'ecole","a quel heure viendras-tu"]
const zoneSaisie = document.querySelector(".zoneSaisie input")

// les variables qu'on peut initialiser
let zoneProposition = document.querySelector(".zoneProposition")

let button = document.getElementById("btnValiderMot")
let optionSourceBtnradio = document.querySelectorAll(`input[name="optionSource"]`)


// les  variables a incrumenter
let score = 0;
let i = 0;
let couleur= ""

// cette function est celle qui affiche les resustats du jeux
function afficherScore(){
    let zoneScore = document.querySelector(".zoneScore span")
    zoneScore.innerHTML = `${score}/${4}`
}

/* **********************************************************

 ****   ces 2 function gere la gestion des propositions
 ****   par les mots ou par les phrase selon la demande
 ****   de l'utilisateur

*/
function affichePropositionmots(){
   return   listesMots[i++]
}
function affichePropositionphrase(){
    zoneProposition.innerHTML = listesPhrases[i++]
}


function lencerJeux(){

    for(let y = 0; y < optionSourceBtnradio.length; y++){

        optionSourceBtnradio[y].addEventListener("change",(e)=>{
    
            // cette condition verifie sur quel button radion se deroule l'evenement
            if(e.target.value === "1"){
                
                afficherMots()
                optionSourceBtnradio[y].disabled = true;
                
            } else {
                afficherPhrase()
                optionSourceBtnradio[y].disabled = true;
                console.log("tambalelele") 
            }
        })
        
    } 
}

/*
//cette fonction execute la liste des phrases si l'utilisateur choisi de jouer sur les phrases
function afficherPhrase(){
    zoneProposition.innerHTML = listesPhrases[i++]
    afficherScore(score)
    
    // action effectuer par le button
    button.addEventListener("click",()=>{
        zoneSaisie.value = " "
        if(zoneSaisie.value.length){

            console.log("bonjour masiala")
            afficherScore(score++)

        } else{
            console.log("ecris quelque chose")
        }
        zoneSaisie.value = " "
        /* else{
            console.log("desole eliezer arranger le chose")
        }

        zoneProposition.innerHTML = listesPhrases[i++]
        zoneSaisie.value = " "

        //cette condiion verifie si la valeur de zoneProposition egal nul pour stoper le jeux
        if(zoneProposition.innerHTML === "undefined"){

            zoneProposition.innerHTML = "le jeux est fini"      
            button.disabled = true; //desactivation de l'evenement

        } 
    })

} */

//cette fonction execute la liste de mots si l'utilisateur choisi de jouer avec les mots
function afficherMots(){

   zoneProposition.innerHTML = listesMots[i++]
    afficherScore(score)
    
    // action effectuer par le button
    button.addEventListener("click",()=>{

        if(zoneProposition.innerHTML === zoneSaisie.value){

            console.log("bonjour elie")
            afficherScore(score++)

        }

        zoneProposition.innerHTML = listesMots[i++]
        zoneSaisie.value = " "

        //cette condiion verifie si la valeur de zoneProposition egal nul pour stoper le jeux
        if(zoneProposition.innerHTML === "undefined"){

            zoneProposition.innerHTML = "le jeux est fini"      
            button.disabled = true; //desactivation de l'evenement

        }
    
        
    })

}
    



lencerJeux()





