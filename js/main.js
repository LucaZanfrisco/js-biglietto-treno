'use strict';

const euroChilometro = 0.21;

// Inserimento da parte dell'utente dell'eta
const etaUtente = parseInt(prompt('Inserire la propria età'));
//Controllo se il valore inserito è valido se non valido apparira un alert 
if(isNaN(etaUtente)){
    alert('Ricaricare la pagina');
}

// Inserimento da parte dell'utente della distanza da percorrere    
const distanza = parseFloat(prompt('Inserire i chilometri da percorrere'));
//Controllo se il valore inserito è valido se non valido apparira un alert 
if(isNaN(distanza)){
    alert('Ricaricare la pagina');
}

//Stampa a video della distanza che l'utente vuole percorrere
console.log(`Chilometri da percorrere: ${distanza}`);

// Calcolo del prezzo pieno del biglietto
let costoBiglietto = distanza * euroChilometro;
//Stampa a video del prezzo pieno del biglietto
console.log(`Prezzo pieno: ${costoBiglietto.toFixed(2)}€`)

let sconto = 0;

//controllo attraverso l'eta inserita se l'utente ha diritto ad uno sconto e stampa a video del prezzo in base allo sconto
if(etaUtente > 0 && etaUtente < 18){
    costoBiglietto *= 0.8;
    sconto = 20;
}else if(etaUtente >= 65){
    costoBiglietto *= 0.6;
    sconto = 40;
}
console.log(`Hai ${etaUtente} anni hai diritto ad un ${sconto}% di sconto. Il costo del biglietto è: ${costoBiglietto.toFixed(2)}€`);