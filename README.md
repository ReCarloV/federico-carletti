# Federico Carletti — Physio & Personal Training

Sito professionale statico in italiano e inglese: personal training a Milano e Buccinasco e coaching online. L’indirizzo principale apre sempre la versione italiana.

**Hosting:** GitHub Pages, sul repository `ReCarloV/federico-carletti`.

Il sito non richiede un account ai visitatori, non dipende da ChatGPT o Sites e non ha un server applicativo. Non servono npm, React, un database, chiavi API o un processo di compilazione. Non carica font, mappe o script di terze parti: i collegamenti ai servizi esterni si aprono soltanto quando il visitatore li seleziona.

## File da aggiornare

- `index.html`: versione italiana, con testi, contatti, prezzi, sedi, metadati e domande frequenti.
- `en.html`: versione inglese completa, compresi i messaggi precompilati di WhatsApp.
- `styles.css`: colori, spazi, caratteri e adattamento a smartphone e tablet.
- `navigation.js`: evidenzia nel menu la sezione in lettura e chiude il menu delle lingue con Escape o al clic esterno; nessuna dipendenza esterna. Il cambio di focus non chiude il menu, per non interrompere il clic sui collegamenti.
- `federico-carletti-logo.png`: logo FC con figura in movimento, blu e turchese.
- `federico-carletti-ritratto.jpg`: fotografia autentica fornita da Federico per l’apertura.
- `favicon.svg` e `apple-touch-icon.png`: versioni del logo per schede e schermata Home.
- `.nojekyll`: indica a GitHub Pages di pubblicare i file così come sono.

Per una modifica, aggiorna il file corrispondente e salvalo nel ramo `main` di GitHub. Pages pubblica automaticamente gli aggiornamenti. Il menu rimane visibile durante lo scorrimento, anche su smartphone. `navigation.js` assegna `aria-current="location"` al collegamento della sezione in lettura, comprese le FAQ; non cambia URL o focus. I collegamenti e le FAQ native `details` / `summary` funzionano anche senza JavaScript.

## Italiano e inglese

Il menu “Lingua / Language”, in alto a destra, collega le due pagine. Su smartphone mostra la sigla IT o EN; aprendolo si leggono i nomi completi Italiano ed English. La lingua corrente è contrassegnata da una spunta. Il menu nativo e i suoi collegamenti funzionano anche senza JavaScript.

La pagina principale `/federico-carletti/` resta italiana; `/federico-carletti/en.html` apre direttamente la versione inglese. Non vengono usati cookie, memoria locale o riconoscimento della lingua del browser per cambiare la lingua in automatico.

Quando aggiorni prezzi, servizi, formazione, sedi o FAQ, modifica **entrambe le pagine** nello stesso aggiornamento. I testi inglesi sono una traduzione dei contenuti confermati e non aggiungono qualifiche o prestazioni. Mantieni identici gli ID delle sezioni per condividere lo script di navigazione. Ogni pagina ha titolo, descrizione, lingua HTML e URL canonico propri, oltre ai collegamenti `hreflang` reciproci; `x-default` indica l’italiano. Foto, logo, CSS e JavaScript sono condivisi.

## Identità visiva

Palette coordinata con PersonalCoach, FisioBrief e Workout Archive: blu `#087df0`, turchese `#08bdb5`, blu notte `#061226`, fondo chiaro `#fbfdff`. I colori per testi e pulsanti usano tonalità più scure per mantenere un contrasto leggibile. Le variabili sono all’inizio di `styles.css`.

Logo generato con lo strumento imagegen integrato: monogramma FC con una figura in movimento, usato nella testata, nel piè di pagina e nelle icone del sito. L’apertura contiene il ritratto autentico fornito da Federico.

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

## Fotografia

Il ritratto `federico-carletti-ritratto.jpg` è la fotografia fornita da Federico il 9 settembre 2026. Il file originale è conservato senza ritocchi. In apertura viene mostrato in un formato circolare compatto: massimo 340 px su desktop e 240 px su smartphone.

Per sostituirlo, aggiorna il file oppure il percorso `src` di `img.portrait-photo` in `index.html`. Mantieni `width`, `height` e testo alternativo coerenti con la nuova fotografia. Le dimensioni di visualizzazione si regolano con `.portrait-slot` in `styles.css`.

## Contenuti e dati ancora da integrare

- Qualifiche, servizi, sedi, recapiti e durata di un’ora sono stati confermati da Federico il 6 settembre 2026. Le tariffe sono state aggiornate su sua indicazione il 9 settembre 2026.
- Il sito distingue la laurea in Scienze Motorie dal percorso in corso in Fisioterapia. Non offre prestazioni fisioterapiche o riabilitative.
- Restano da integrare i dati fiscali da pubblicare e le indicazioni definitive su abbigliamento e materiale per il primo incontro.
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
