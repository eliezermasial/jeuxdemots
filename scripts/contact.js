
// les variables qu'on peut initialiser
let zoneProposition = document.querySelector(".zoneProposition")

let button = document.getElementById("btnValiderMot")
let optionSourceBtnradio = document.querySelectorAll(`input[name="optionSource"]`)


// les  variables a incrumenter
let score = 0;
let i = 0;
let couleur= ""

// cette function est celle qui affiche le score du jeux
function afficherScore(){
    let zoneScore = document.querySelector(".zoneScore span")
    zoneScore.innerHTML = `${score}/${4}`
}

/*****************************************************************************************
 * cette fonction affiche le btnPartgaer,
 * affiche la formulaire de partage et ca desactive aussi la formu par event double clique
 * ***************************************************************************************/

function buttonPartager(){
    btnPartager.style.display = "block"

    btnPartager.addEventListener("click",(e)=>{
        if(btnPartager.click){
            console.log("felicitation")
            let formulairePartager = document.querySelector(" .popupBackground")
            formulairePartager.classList.remove("popupBackground")
            formulairePartager.classList.add("affichagePopup")

            body.addEventListener("dblclick",()=>{
                console.log("bonjourkjffj")
                formulairePartager.classList.remove("affichagePopup")
                formulairePartager.classList.add("popupBackground")
            })
            
        }
    })
} 


/*************************************************
* cette fonction execute la liste de mots
* si l'utilisateur choisi de jouer avec les mots
***********************************************/
function afficherMots(){

    zoneProposition.innerHTML = listesMots[i++]
     afficherScore(score)
     
     // action effectuer par le button
     
     button.addEventListener("click",()=>{

        if(zoneSaisie.value){
 
            console.log(zoneSaisie.value)
            console.log(zoneProposition.textContent)
            afficherScore(score++)
            
        } else{

            console.log("ce code ne marche pas elie")
            
        }
         
         zoneProposition.innerHTML = listesMots[i++]
         zoneSaisie.value = " "
         zoneSaisie.focus()

         //cette condiion verifie si la valeur de zoneProposition egal nul pour stoper le jeux
        if(zoneProposition.innerHTML === "undefined"){
 
             zoneProposition.innerHTML = "le jeux est fini"  
             zoneSaisie.disabled = true    
             button.disabled = true; //desactivation de l'evenement

             buttonPartager()

         } 
         
     })
 
 }


function lencerJeux(){
    afficherMots()
     
     
    for(let y = 0; y < optionSourceBtnradio.length; y++){

        optionSourceBtnradio[y].addEventListener("change",(e)=>{
    
            // cette condition verifie sur quel button radion se deroule l'evenement
            if(e.target.value === "1"){
                
                afficherMots()
                optionSourceBtnradio[y].disabled = true;
                console.log("elizer")
                afficherScore(score++)
                
            } else {
                zoneProposition.innerHTML = "en pause"
                /*
                afficherPhrase()
                optionSourceBtnradio[y].disabled = true;
                console.log("tambalelele")  */
                console.log("tamba")
                optionSourceBtnradio[y].disabled = true
            }
        })
        
    } 
}







