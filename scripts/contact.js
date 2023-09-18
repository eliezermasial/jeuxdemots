let optionbtnRadio = document.querySelectorAll('input[name="optionSource"]') 

//les variables a incrumenter
let i = 0
let j = 0
let score = 0

// gestion d'affichage de score du jeu
function afficherScore(){
    let zoneafficherScore = document.querySelector(" .zoneScore span")

    return zoneafficherScore.innerHTML = `${score}/${4}`
}

/*************************************************
* gestion des mots
* cette fonction execute la liste de mots
* si l'utilisateur choisi de jouer avec les mots
*
***********************************************/
function afficherMots() {
    zoneProposition.innerHTML = listesMots[i++]
    inputEcriture.focus()
    

    btnValider.addEventListener("click",(e)=>{
        if(zoneProposition.innerHTML === inputEcriture.value){
            console.log("felicitation")
            console.log(zoneafficherScore)
            
            afficherScore(score++)
            zoneProposition.innerHTML = listesMots[i++]
            inputEcriture.value = ""
            inputEcriture.focus()

            if(zoneProposition.innerHTML === "undefined"){
                zoneProposition.innerHTML = "le jeu est fini"

                //desactivation btnvalide
                inputEcriture.disabled = true
                btnValider.disabled = true
            }

        } else{
            console.log("desole")
        }
        
    })
    
}



/*******************************
 * gestion du jeu
 * cette fonction execute le jeu
 *******************************/
function lencerJeu(){
    afficherMots()
    afficherScore(score)
    
    for(let y = 0; y < optionbtnRadio.length; y++){
        

        //ici on est ecoute l'event change de btnRadio
        optionbtnRadio[y].addEventListener("change",(e)=>{
            
            if(e.target.value === "1"){

                afficherMots()
                
                optionbtnRadio[y].disabled = true
                console.log(e.target.value)
                
            } else{
                zoneProposition.innerHTML = "en pause"
                optionbtnRadio[y].disabled = true
            }
        })
        
    }
}