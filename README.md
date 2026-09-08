# Federico Carletti — Physio & Personal Training

Sito professionale statico in italiano: personal training a Milano e Buccinasco e coaching online.

**Hosting:** GitHub Pages, sul repository `ReCarloV/federico-carletti`.

Il sito non richiede un account ai visitatori, non dipende da ChatGPT o Sites e non ha un server applicativo. Non servono npm, React, un database, chiavi API o un processo di compilazione. Non carica font, mappe o script di terze parti: i collegamenti ai servizi esterni si aprono soltanto quando il visitatore li seleziona.

## File da aggiornare

- `index.html`: tutti i testi, contatti, prezzi, sedi, metadati e domande frequenti.
- `styles.css`: colori, spazi, caratteri e adattamento a smartphone e tablet.
- `navigation.js`: evidenzia nel menu la sezione in lettura; nessuna dipendenza esterna.
- `federico-carletti-logo.png`: logo FC con figura in movimento, blu e turchese.
- `favicon.svg` e `apple-touch-icon.png`: versioni del logo per schede e schermata Home.
- `.nojekyll`: indica a GitHub Pages di pubblicare i file così come sono.

Per una modifica, aggiorna il file corrispondente e salvalo nel ramo `main` di GitHub. Pages pubblica automaticamente gli aggiornamenti. Il menu rimane visibile durante lo scorrimento, anche su smartphone. `navigation.js` assegna `aria-current="location"` al collegamento della sezione in lettura, comprese le FAQ; non cambia URL o focus. I collegamenti e le FAQ native `details` / `summary` funzionano anche senza JavaScript.

## Identità visiva

Palette coordinata con PersonalCoach, FisioBrief e Workout Archive: blu `#087df0`, turchese `#08bdb5`, blu notte `#061226`, fondo chiaro `#fbfdff`. I colori per testi e pulsanti usano tonalità più scure per mantenere un contrasto leggibile. Le variabili sono all’inizio di `styles.css`.

Logo generato con lo strumento imagegen integrato: monogramma FC con una figura in movimento, usato nella testata, nel segnaposto fotografico e nel piè di pagina. Il logo non sostituisce la futura fotografia autentica.

## Pubblicazione su GitHub Pages

Nel repository: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.

Indirizzo del sito: `https://recarlov.github.io/federico-carletti/`.

Il repository deve essere pubblico per usare Pages con GitHub Free. I file contengono esclusivamente i contenuti professionali e i recapiti destinati al sito pubblico.

Documentazione ufficiale: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Anteprima sul computer

Apri `index.html` nel browser, oppure usa un server statico locale:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Poi apri `http://127.0.0.1:4173/`. I file CSS e l’icona usano percorsi relativi: il sito funziona anche nella sottocartella di GitHub Pages.

## Inserire la fotografia

Salva una fotografia autentica e ottimizzata, per esempio `images/federico.webp`. In `index.html`, sostituisci il blocco `div` con classe `portrait-placeholder`, dentro `figure.portrait-slot`, con:

```html
<img src="./images/federico.webp"
     alt="Descrizione fedele della fotografia di Federico"
     width="900" height="1100" fetchpriority="high">
```

Aggiorna la descrizione alternativa in base alla fotografia effettiva. Non usare il testo di esempio come descrizione definitiva.

## Contenuti e dati ancora da integrare

- Qualifiche, servizi, sedi, recapiti e durata di un’ora sono stati confermati da Federico il 6 settembre 2026. Le tariffe sono state aggiornate su sua indicazione il 9 settembre 2026.
- Il sito distingue la laurea in Scienze Motorie dal percorso in corso in Fisioterapia. Non offre prestazioni fisioterapiche o riabilitative.
- Restano da integrare la fotografia autentica, i dati fiscali da pubblicare e le indicazioni definitive su abbigliamento e materiale per il primo incontro.
- I testi sull’approccio sono una bozza editoriale da rileggere con Federico.
- I pulsanti aprono WhatsApp con un testo che il visitatore sceglie se inviare. Non creano prenotazioni automatiche.
- I pacchetti di coaching prevedono pagamento anticipato. Non sono indicate modalità di pagamento, inclusione dell’accesso alle palestre o disponibilità non confermate.

Fonti degli indirizzi: https://www.olona1894.it/ e https://www.milagofitness.it/.

## Verifiche della migrazione

Controllati la presenza dei contenuti e di tutti i prezzi, le destinazioni dei contatti, i collegamenti interni, il caricamento degli asset con percorsi relativi e l’assenza di risorse Sites/ChatGPT. HTML e CSS standard, JSON-LD descrittivo per i motori di ricerca e un piccolo script locale per la navigazione. Nessun tracciamento o richiesta di rete dello script.

## Tariffe confermate il 9 settembre 2026

| Percorso | Singola / 1 mese | 5 lezioni / 3 mesi | 10 lezioni / 6 mesi |
| --- | --- | --- | --- |
| Personal training in presenza | 60 € | 250 € (50 €/lezione) | 450 € (45 €/lezione) |
| Coaching mensile | 70 € | 180 € (60 €/mese) | 360 € (60 €/mese) |
| Check settimanale | 120 € | 300 € (100 €/mese) | 540 € (90 €/mese) |

Obiettivo / Performance: a partire da 150 €/mese. Il totale di 540 € per 6 mesi di check settimanale è stato riconfermato espressamente.
