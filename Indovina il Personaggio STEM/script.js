const personaggi = {
    fisici: {
        "einstein": "è un fisico noto per la sua teoria della relatività?",
        "newton": "Questo fisico è famoso per la sua legge della gravitazione universale?",
        "marie curie": "è uno scienziato noto per le sue pionieristiche ricerche sulla radioattività?",
        "stephen hawking": 'lo scienziato è autore di "Breve Storia del Tempo"?',
        "bohr": "Questo fisico è famoso per il suo contributo allo sviluppo della teoria atomica e per il modello atomico?"
    },
    matematici: {
        "leonhard euler": "è famoso per la sua formula per i poliedri?",
        "ada lovelace": "ha scritto il primo algoritmo per un computer?",
        "alan turing": "ha introdotto la macchina di turing?",
        "euclide": 'ha scritto un trattato di geometria chiamato "elementi"?',
        "srinivasa ramanujan": "ha fatto importanti contributi alla teoria dei numeri e delle serie infinite?"
    },
    artisti: {
        "da vinci": "Questo artista ha dipinto un famoso ritratto di una donna conosciuta per il suo sguardo enigmatico?",
        "van gogh": "è l'artista famoso per la sua opera che rappresenta un cielo notturno?",
        "picasso": "Questo pittore è conosciuto per il suo stile cubista?",
        "frida kahlo": "l'artista è noto per i suoi autoritratti, spesso caratterizzati da colori vivaci e simbolismo?",
        "salvador dalì": "l'artista è surrealista noto per opere che presentano orologi morbidi?"
    },
    scrittori: {
        "shakespeare": "ha scritto 'romeo e giulietta' e 'amleto'?",
        "jane austen": "ha scritto 'orgoglio e pregiudizio'?",
        "hemingway": "ha scritto 'il vecchio e il mare'?",
        "j.k rowling": "ha scritto la saga di Harry potter?",
        "tolstoj": "ha scritto 'guerra e pace'?"
    }
};

let categoriaCorrente = "";
let domandeCorrenti = [];
let personaggioSelezionato = "";

document.getElementById("iniziaGioco").addEventListener("click", function() {
    document.getElementById("personaggi").style.display = "none";
    document.getElementById("iniziaGioco").style.display = "none";
    mostraDomandeIniziali();
});

function mostraDomandeIniziali() {
    categoriaCorrente = "iniziali";
    domandeCorrenti = ["è un fisico?", "è un matematico?", "è uno scrittore?", "è un artista?"];
    mostraDomandaCasuale();
}

function mostraDomandeFisici() {
    categoriaCorrente = "fisici";
    domandeCorrenti = Object.values(personaggi.fisici);
    mostraDomandaCasuale();
}

function mostraDomandeMatematici() {
    categoriaCorrente = "matematici";
    domandeCorrenti = Object.values(personaggi.matematici);
    mostraDomandaCasuale();
}

function mostraDomandeArtisti() {
    categoriaCorrente = "artisti";
    domandeCorrenti = Object.values(personaggi.artisti);
    mostraDomandaCasuale();
}

function mostraDomandeScrittori() {
    categoriaCorrente = "scrittori";
    domandeCorrenti = Object.values(personaggi.scrittori);
    mostraDomandaCasuale();
}

function mostraDomandaCasuale() {
    const domandaCasuale = domandeCorrenti[Math.floor(Math.random() * domandeCorrenti.length)];
    if (domandaCasuale) {
        document.getElementById("domanda").innerText = domandaCasuale;
    } else {
        alert("Errore nel gioco!");
    }
}

function risposta(rispostaUtente) {
    switch (categoriaCorrente) {
        case "iniziali":
            if (rispostaUtente === "si") {
                if (document.getElementById("domanda").innerText === "è un fisico?") {
                    mostraDomandeFisici();
                } else if (document.getElementById("domanda").innerText === "è un matematico?") {
                    mostraDomandeMatematici();
                } else if (document.getElementById("domanda").innerText === "è uno scrittore?") {
                    mostraDomandeScrittori();
                } else if (document.getElementById("domanda").innerText === "è un artista?") {
                    mostraDomandeArtisti();
                }
            } else {
                domandeCorrenti = domandeCorrenti.filter(domanda => domanda !== document.getElementById("domanda").innerText);
                mostraDomandaCasuale();
            }
            break;

        case "fisici":
        case "matematici":
        case "artisti":
        case "scrittori":
            if (rispostaUtente === "si") {
                for (const [personaggio, domanda] of Object.entries(personaggi[categoriaCorrente])) {
                    if (domanda === document.getElementById("domanda").innerText) {
                        personaggioSelezionato = personaggio;
                        break;
                    }
                }
                mostraRisultato();
            } else {
                domandeCorrenti = domandeCorrenti.filter(domanda => domanda !== document.getElementById("domanda").innerText);
                mostraDomandaCasuale();
            }
            break;

        default:
            alert("Errore nel gioco!");
            break;
    }
}

function mostraRisultato() {
    alert("Il personaggio che hai scelto è " + personaggioSelezionato);
    resetGioco();
}

function resetGioco() {
    document.getElementById("personaggi").style.display = "block";
    document.getElementById("iniziaGioco").style.display = "inline-block";
    document.getElementById("domanda").innerText = "";
    categoriaCorrente = "";
    domandeCorrenti = [];
    personaggioSelezionato = "";
}
