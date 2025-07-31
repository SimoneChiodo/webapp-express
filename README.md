# Progetto React + Backend Express: Web App per la gestione di film e recensioni

### Nome repository frontend: webapp-react

## Descrizione complessiva

Il progetto consiste nello sviluppo di una web app moderna che permette di visualizzare una lista di film, consultare i dettagli di ciascun film con le relative recensioni, e aggiungere nuove recensioni tramite un form dedicato.

La struttura si basa su un frontend React creato con Vite, arricchito da React Router per la navigazione tra pagine e Axios per le chiamate AJAX al backend. L’interfaccia prevede una home con la lista dei film e una pagina dettagliata per ogni film.

Il backend Express, dotato di un’API REST, gestisce i dati dei film e delle recensioni, includendo la funzionalità di persistenza su database e abilitando le chiamate CORS per comunicare con il frontend.

Inoltre, il progetto pone attenzione alla riutilizzabilità dei componenti React, alla validazione dei form, e a un’interfaccia curata e user-friendly.

### Obiettivi principali

- Configurazione ambiente React (Vite), pulizia codice, installazione dipendenze (React Router, Axios, Bootstrap opzionale)
- Impostazione layout base e routing tra pagina home (lista film) e dettaglio film
- Connessione frontend-backend con chiamate AJAX per lista film e dettagli + recensioni
- Implementazione backend con API REST per gestire film e recensioni, con test su Postman
- Creazione form di inserimento recensioni in React con salvataggio sul database e aggiornamento vista
- Bonus: validazione form e ottimizzazione estetica/UX
