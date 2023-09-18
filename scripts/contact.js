let optionbtnRadio = document.querySelectorAll('input[name="optionSource"]') 


//les variables a incrumenter
let i = 0
let score = 0

// gestion d'affichage de score du jeu
function afficherScore(){
    let zoneafficherScore = document.querySelector(" .zoneScore span")
    return zoneafficherScore.innerHTML = `${score}/${4}`
}

//affichager message d'erreur
function affichermessageErreur(){
    let messageError = document.getElementById('msError')

    return (
        inputEcriture.classList.add("mserrorInput"),
        messageError.classList.add("affichermsError")
        
    )
}
//desactiver le message d'erreur
function desactivermessageErreur(){
    let messageError = document.getElementById('msError')

    return (
        messageError.classList.remove("affichermsError"),
        inputEcriture.classList.remove("mserrorInput")
    )
}

/*****************************************************************************************
 * cette fonction affiche le btnPartgaer,
 * affiche la formulaire de partage et ca desactive aussi la formu par event double clique
 * ***************************************************************************************/
function afficherbtnPartager(){
    btnPartager.style.display = 'block'

    btnPartager.addEventListener("click",(e)=>{

        let formulairePartager = document.querySelector(" .popupBackground")
        if(btnPartager.click){
            formulairePartager.classList.remove("popupBackground")
            formulairePartager.classList.add("affichagePopup")

            body.addEventListener("dblclick",()=>{
                formulairePartager.classList.remove("affichagePopup")
                formulairePartager.classList.add("popupBackground")
            })
        }
     
    })
    
}


/*************************************************
* gestion des mots
* cette fonction execute la liste de mots
* si l'utilisateur choisi de jouer avec les mots
***********************************************/
function afficherMots() {
    zoneProposition.innerHTML = listesMots[i++]
    inputEcriture.focus()
    

    btnValider.addEventListener("click",()=>{
        if(inputEcriture.value.length){
            if(zoneProposition.innerHTML === inputEcriture.value){
            
                afficherScore(score++)
                zoneProposition.innerHTML = listesMots[i++]
                inputEcriture.value = ""
                desactivermessageErreur()
                inputEcriture.focus()
    
                if(zoneProposition.innerHTML === "undefined"){
                    zoneProposition.innerHTML = "le jeu est fini"
    
                    //desactivation btnvalide
                    inputEcriture.disabled = true
                    btnValider.disabled = true
                    afficherbtnPartager()
                }
    
            } else{
                affichermessageErreur()
                
            }

        } else{
            inputEcriture.focus()
            return alert("veuillez saisir quelque chose")
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
