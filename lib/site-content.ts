// Contatti, tariffe e fotografia: modifica qui i dati pubblici del sito.
export const profile = {
  name: 'Federico Carletti',
  email: 'fede.physio.sc@gmail.com',
  phone: '+393384914587',
  displayPhone: '+39 338 491 4587',
  instagram: 'https://www.instagram.com/federicoocarlettii/',
  linkedin: 'https://www.linkedin.com/in/federicocarletti/',
  portrait: { src: '', alt: 'Federico Carletti durante il suo lavoro di personal trainer' },
};

export const whatsappUrl = (message = 'Ciao Federico, vorrei richiedere un primo appuntamento e avere informazioni sui tuoi percorsi.') => `https://wa.me/${profile.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

export const locations = [
  {
    name: 'Canottieri Olona 1894', city: 'Milano · Navigli',
    street: 'Alzaia Naviglio Grande, 146', postalCode: '20144', locality: 'Milano',
    website: 'https://www.olona1894.it/',
    maps: 'https://www.google.com/maps/search/?api=1&query=Canottieri+Olona+1894+Alzaia+Naviglio+Grande+146+Milano',
  },
  {
    name: 'Milago Fitness', city: 'Buccinasco',
    street: 'Via Indipendenza, 3', postalCode: '20090', locality: 'Buccinasco',
    website: 'https://www.milagofitness.it/',
    maps: 'https://www.google.com/maps/search/?api=1&query=Milago+Fitness+Via+Indipendenza+3+Buccinasco',
  },
];

// Tariffe confermate dal listino fornito il 6 settembre 2026.
export const inPersonPrices = [
  { label: 'Lezione singola', price: '50 €', note: '1 incontro · 1 ora' },
  { label: '5 lezioni', price: '225 €', note: '45 € / lezione' },
  { label: '10 lezioni', price: '400 €', note: '40 € / lezione' },
];

export const onlinePlans = [
  {
    id: 'mensile', number: '01', name: 'Coaching mensile',
    description: 'Per allenarti in autonomia, con una direzione chiara.',
    detail: 'Programmazione personalizzata di 4 settimane con aggiornamento mensile.',
    price: '60 €', period: '/ mese',
    packages: [{ duration: '3 mesi', price: '165 €', unit: '55 € / mese' }, { duration: '6 mesi', price: '300 €', unit: '50 € / mese' }],
    cta: 'Informazioni sul mensile',
    message: 'Ciao Federico, vorrei informazioni sul coaching online mensile.',
  },
  {
    id: 'settimanale', number: '02', name: 'Con check settimanale',
    description: 'Per confrontarti con me con maggiore frequenza.',
    detail: 'Feedback settimanale e aggiornamento continuo del percorso.',
    price: '100 €', period: '/ mese',
    packages: [{ duration: '3 mesi', price: '285 €', unit: '95 € / mese' }, { duration: '6 mesi', price: '540 €', unit: '90 € / mese' }],
    cta: 'Informazioni sui check',
    message: 'Ciao Federico, vorrei informazioni sul coaching online con check settimanale.',
  },
  {
    id: 'performance', number: '03', name: 'Obiettivo / Performance',
    description: 'Per dare struttura alla preparazione di un obiettivo specifico.',
    detail: 'Durata e investimento complessivo definiti in base all’obiettivo e al tempo disponibile fino all’evento.',
    price: '150 €', period: '/ mese', from: true, packages: [],
    cta: 'Parliamo del tuo obiettivo',
    message: 'Ciao Federico, vorrei parlare con te di un obiettivo specifico e del percorso di coaching performance.',
  },
];

export const approach = [
  { title: 'Ci conosciamo', text: 'Un primo incontro di un’ora, in sede o da remoto, per parlare di te, delle tue abitudini e di quello che cerchi nell’allenamento.' },
  { title: 'Definiamo la direzione', text: 'Mettiamo a fuoco gli obiettivi e il punto di partenza, tenendo conto del tempo, degli spazi e dell’attrezzatura a tua disposizione.' },
  { title: 'Lavoriamo sul tuo percorso', text: 'In presenza, ti accompagno nell’allenamento. Online, segui una programmazione personalizzata con il supporto previsto dal percorso scelto.' },
  { title: 'Rivediamo i progressi', text: 'Il confronto serve a capire come procede il lavoro e cosa adattare. Nel coaching online, gli aggiornamenti seguono la formula mensile o con check settimanale.' },
];

export const faqs = [
  { question: 'Come richiedo il primo appuntamento?', answer: 'Puoi scrivermi su WhatsApp o via email, oppure chiamarmi. Indica se preferisci un incontro in sede o da remoto: concorderemo direttamente luogo, giorno e orario. L’invio del messaggio è una richiesta, non una prenotazione già confermata.' },
  { question: 'Quanto dura e dove si svolge?', answer: 'Il primo incontro dura un’ora e può svolgersi in sede o da remoto. Lavoro presso Canottieri Olona 1894 a Milano e Milago Fitness a Buccinasco. Anche le lezioni di personal training durano un’ora.' },
  { question: 'Devo essere già allenato per iniziare?', answer: 'No. I percorsi si rivolgono sia a chi inizia sia a chi si allena già. Il punto di partenza e gli obiettivi personali orientano la scelta del lavoro da fare insieme.' },
  { question: 'Come funziona il coaching online?', answer: 'Il coaching mensile comprende una programmazione personalizzata di 4 settimane, aggiornata ogni mese. La formula con check settimanale comprende feedback ogni settimana e aggiornamento continuo. Per un obiettivo specifico o di performance, durata e investimento dipendono dall’obiettivo e dal tempo fino all’evento.' },
  { question: 'Quale abbigliamento serve? Cosa devo portare?', answer: 'Le indicazioni pratiche per abbigliamento e materiale sono da concordare in base al primo incontro scelto. Chiedimele quando mi contatti, specificando se ci vedremo in sede o da remoto.' },
  { question: 'Posso richiedere un trattamento di fisioterapia?', answer: 'Al momento sono studente di Fisioterapia, non fisioterapista. I servizi che offro qui sono personal training e coaching per l’allenamento; non comprendono trattamenti fisioterapici o riabilitativi.' },
  { question: 'Come si pagano i pacchetti di coaching?', answer: 'I pacchetti di coaching prevedono pagamento anticipato. Il livello di supporto varia in base al percorso scelto. Per concordare la modalità di pagamento puoi contattarmi direttamente.' },
];
