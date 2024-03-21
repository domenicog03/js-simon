// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const casualnumber=[];


for(let i = 0; i<5 ; i++){
    casualnumber.push(parseInt(Math.random() * 100));
}

let video = document.querySelector(".numeri");

video.innerHTML=casualnumber;

setTimeout(pulisci, 30000)

setTimeout(gioco, 31000)
















function pulisci(){
    video.innerHTML = "";
}

const arrayusernumber = [];
function gioco(){

   

    for (let i = 0; i < 5; i++){
        const usernumber = parseInt(prompt('Inserisci i numeri che ricordi '))
        if (casualnumber.includes(usernumber) ){
            arrayusernumber.push(usernumber);
        }
    }
    alert('hai indovinato' + arrayusernumber.length + ' numeri, che sono:  ' + arrayusernumber );
}



