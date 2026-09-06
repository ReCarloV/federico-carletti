# Federico Carletti — Physio & Personal Training

Sito professionale in italiano per personal training a Milano e Buccinasco e coaching online. Prima versione privata, senza moduli di raccolta dati, analytics, font remoti o servizi a pagamento aggiunti al progetto.

## Aggiornare il sito

- `lib/site-content.ts`: contatti, fotografia, sedi, tariffe, domande frequenti e fasi del percorso.
- `app/page.tsx`: testi della presentazione e struttura delle sezioni.
- `app/globals.css`: colori, tipografia e adattamento a smartphone e tablet.
- `app/layout.tsx`: titolo, descrizione e metadati per i motori di ricerca.

Per inserire la fotografia, salva un’immagine ottimizzata in `public/images/federico.webp`, poi imposta `profile.portrait.src` su `/images/federico.webp` e aggiorna `profile.portrait.alt` per descrivere la fotografia effettiva. Il segnaposto scompare automaticamente. Il nome e il punto nel riquadro sono elementi tipografici, non una fotografia inventata.

## Contenuti confermati e fonti

- Conferma dell’utente del 6 settembre 2026: laurea in Scienze Motorie, studente di Fisioterapia, personal training in presenza e coaching online, entrambe le sedi, pubblico generale, pubblicazione dei prezzi allegati, contatti e incontri di un’ora in sede o da remoto.
- Formazione: profilo indicato dall’utente, https://www.linkedin.com/in/federicocarletti/ (parti pubbliche indicizzate). Laurea triennale in Scienze delle Attività Motorie e Sportive all’Università degli Studi di Milano. Fisioterapia presso Humanitas University, percorso indicato 2024–2027, in corso.
- Tariffe: listino italiano fornito dall’utente, `AEEE427D-989F-4CE0-B36B-CF5D8B5F9027.jpeg`. Trascritte senza arrotondamenti o offerte aggiunte. Pagamento anticipato riferito ai pacchetti di coaching.
- Indirizzo Canottieri Olona 1894: Alzaia Naviglio Grande 146, 20144 Milano, verificato sul sito ufficiale https://www.olona1894.it/ e sul regolamento del club.
- Indirizzo Milago Fitness: Via Indipendenza 3, 20090 Buccinasco, verificato sul sito ufficiale https://www.milagofitness.it/.
- Testi sull’approccio: bozza editoriale basata sul percorso personalizzato richiesto dall’utente. Da rileggere insieme prima della pubblicazione aperta.

Il sito dichiara esplicitamente lo stato di studente di Fisioterapia. Non offre fisioterapia, riabilitazione, diagnosi o promesse di risultato e non contiene recensioni, certificazioni o numeri inventati.

## Dati ancora da integrare

- Fotografia autentica di Federico (segnaposto visibile).
- Indicazioni precise su abbigliamento e materiale per il primo incontro: la FAQ invita a concordarle.
- Dati fiscali da mostrare nel sito pubblico e informazioni definitive sulla gestione delle richieste prima di aprire l’accesso al pubblico.

Non sono indicati disponibilità, orari, pagamenti digitali, servizi a domicilio o inclusione dell’accesso alle palestre, perché non definiti. I pulsanti WhatsApp aprono un messaggio precompilato che il visitatore sceglie se inviare; non creano una prenotazione. Email e telefono aprono i rispettivi programmi. Le mappe sono collegamenti esterni, senza incorporamenti.

## Sviluppo

Progetto Sites/Vinext generato con pnpm. Conservare il file di lock e l’identificativo esistente in `.openai/hosting.json`.

```sh
pnpm install
pnpm dev
pnpm exec tsc --noEmit
pnpm build
```

Il progetto non usa database, autenticazione applicativa o API esterne. L’anteprima ospitata resta privata tramite Sites. I metadati locali descrivono Milano e Buccinasco; non classificano l’attività come studio di fisioterapia. I font di sistema evitano richieste esterne.
