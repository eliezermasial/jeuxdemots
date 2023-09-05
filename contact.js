
// les variables utilisés pour les jeux
const listesMots = ["poulet","elie","tamba","masiala"]
const listesPhrases = ["vient manger","pourquoi tu es triste","vas a l'ecole","a quel heure viendras-tu"]
const zoneSaisie = document.querySelector(".zoneSaisie input")

let zoneProposition = document.querySelector(".zoneProposition")
let zoneScore = document.querySelector(".zoneScore span")
let button = document.getElementById("btnValiderMot")
let optionSource = document.querySelectorAll(`input[name="optionSource"]`)


// les  variables a incrumenter
let score = 0;
let i = 0;
let couleur= ""


function lencerJeux(){
    for(let y = 0; y < optionSource.length; y++){

        optionSource[y].addEventListener("click",()=>{
    
            if(optionSource[y].checked){
                let check = optionSource[y].value
                
                if(check === "1"){
                    afficherMots()
                    optionSource[y].disabled = true;
                    console.log("bienvenu")
                } else{
                    afficherPhrase()
                    optionSource[y].disabled = true
                }
            }
        })
        
    }
}

function afficherPhrase(){
    zoneProposition.innerHTML = listesPhrases[i++]

    button.addEventListener("click",()=>{
    
        zoneProposition.innerHTML = listesPhrases[i++]
    
        if(zoneProposition.innerHTML === "undefined"){

            zoneProposition.innerHTML = "le jeux est fini"
            zoneScore.innerHTML = `${score}/${listesPhrases.length}`
            button.disabled = true;
            
        }

        score++
    })
}

function afficherMots(){

    zoneProposition.innerHTML = listesMots[i++]
    
    // action effectuer par le button
    button.addEventListener("click",()=>{
    
        zoneProposition.innerHTML = listesMots[i++]
        
        if(zoneProposition.innerHTML === "undefined"){
            zoneProposition.innerHTML = "le jeux est fini"
            zoneScore.innerHTML = `${score}/${listesMots.length}`
            button.disabled = true;
                
        }
    
        score++      
    })

}
    



lencerJeux()





