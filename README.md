# Federico Carletti — Physio & Personal Training

Sito professionale statico in italiano: personal training a Milano e Buccinasco e coaching online.

**Hosting:** GitHub Pages, sul repository `ReCarloV/federico-carletti`.

Il sito non richiede un account ai visitatori, non dipende da ChatGPT o Sites e non ha un server applicativo. Non servono npm, React, un database, chiavi API o un processo di compilazione. Non carica font, mappe o script di terze parti: i collegamenti ai servizi esterni si aprono soltanto quando il visitatore li seleziona.

## File da aggiornare

- `index.html`: tutti i testi, contatti, prezzi, sedi, metadati e domande frequenti.
- `styles.css`: colori, spazi, caratteri e adattamento a smartphone e tablet.
- `favicon.svg`: icona del sito.
- `.nojekyll`: indica a GitHub Pages di pubblicare i file così come sono.

Per una modifica, aggiorna il file corrispondente e salvalo nel ramo `main` di GitHub. Pages pubblica automaticamente gli aggiornamenti. Le FAQ usano gli elementi HTML nativi `details` e `summary` e funzionano senza JavaScript.

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

- Qualifiche, servizi, prezzi delle immagini fornite, sedi, recapiti e durata di un’ora sono stati confermati da Federico il 6 settembre 2026.
- Il sito distingue la laurea in Scienze Motorie dal percorso in corso in Fisioterapia. Non offre prestazioni fisioterapiche o riabilitative.
- Restano da integrare la fotografia autentica, i dati fiscali da pubblicare e le indicazioni definitive su abbigliamento e materiale per il primo incontro.
- I testi sull’approccio sono una bozza editoriale da rileggere con Federico.
- I pulsanti aprono WhatsApp con un testo che il visitatore sceglie se inviare. Non creano prenotazioni automatiche.
- I pacchetti di coaching prevedono pagamento anticipato. Non sono indicate modalità di pagamento, inclusione dell’accesso alle palestre o disponibilità non confermate.

Fonti degli indirizzi: https://www.olona1894.it/ e https://www.milagofitness.it/.

## Verifiche della migrazione

Controllati la presenza dei contenuti e di tutti i prezzi, le destinazioni dei contatti, i collegamenti interni, il caricamento degli asset con percorsi relativi e l’assenza di risorse Sites/ChatGPT. HTML e CSS standard, con un solo script JSON-LD descrittivo per i motori di ricerca e nessuno script applicativo.
