let optionbtnRadio = document.querySelectorAll('input[name="optionSource"]')
let messageEmail = document.getElementById("labelEmail")


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

/***************************
 * gestion de validation name
 ***************************/
const validName = function () {
 
    let messageName = document.getElementById("labelname")
  
    if(inputname.value.length < 3) {
        messageName.innerHTML = "le nom est court"
        messageName.style.color = "red"
    } else{
        messageName.style.color = "green"
        messageName.innerHTML = "valid"
        
    }
        
}

/********************************
 * gestion de validation d'email
 *******************************/
const validEmail = function (){

    //on decrit l'expression reguliere pour que l'email soit valid
    let emailRegexp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g')

    // on test expression reguliere de email
    let testExpr = emailRegexp.test(email.value)

    if(!testExpr){

        messageEmail.innerHTML = "Adresse non valid"
        messageEmail.style.color = "red"
        
        return false

    } else {
        messageEmail.innerHTML = "Adresse valide"
        messageEmail.style.color = "green"
        
        return true
    }
    
}

/********************************************
 * gestion de validation de password of mail
 *******************************************/
const validPassword = function  (){
    let messagePassword = document.getElementById("labelpassword")
    let valid = false
    
    switch (password.value.length < 5) {

        case /[A-Z]/.test(password.value): //au moins une lettre MAJ
            messagePassword.innerHTML = "password no valid veuillez saisir 1/Maj"
            messagePassword.style.color = "red"
            break;

        case /[a-z]/.test(password.value): //au moins une lettre mini
            messagePassword.innerHTML = "password no valid veuillez saisir 1/min"
            messagePassword.style.color = "red"
            break;

        case /[0-9]/.test(password.value): //au moins un chiffre
            messagePassword.innerHTML = "password no valid veuillez saisir 1/chiffre"
            messagePassword.style.color = "red"
            break;  

        default:
            
            messagePassword.innerHTML = "password valid"
            messagePassword.style.color = "green"
            console.log("bravot")
            valid = true
            break;

    }

    if(valid){
        return true
    } else{
        return false
    }

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

            //evenement qui execute fonction validName
            inputname.addEventListener("change",validName)
            //l'evenement qui execute la fonction validEmail
            email.addEventListener("change",validEmail)

            //evenement qui execute la fonction validpassword
            password.addEventListener("change",validPassword)
            
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


/*****************************************
 * gestion event submit dans la formulaire
 ****************************************/
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(validEmail(form.Email) && validPassword(form.password) && validName(form.inputname)) {

        form.submit()
        form.disabled = true
    } 
  
})

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
