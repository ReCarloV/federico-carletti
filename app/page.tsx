import { ArrowDown, ArrowUpRight, Image as ImageIcon, MapPin, Dumbbell, Laptop, GraduationCap, MessageCircle, Mail, Phone, Camera as Instagram, BriefcaseBusiness as Linkedin, Clock3 } from 'lucide-react';
import { profile, whatsappUrl, locations, inPersonPrices, onlinePlans, approach } from '@/lib/site-content';
import { SiteFaq } from '@/components/site-faq';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Federico Carletti — Personal Training & Coaching',
  description: 'Personal training a Milano e Buccinasco e coaching online per forza, ipertrofia, running e performance.',
  url: 'https://federico-carletti.recarlo5.chatgpt.site',
  telephone: profile.phone, email: profile.email,
  areaServed: ['Milano', 'Buccinasco'],
  sameAs: [profile.instagram, profile.linkedin],
  location: locations.map((location) => ({ '@type': 'Place', name: location.name, address: { '@type': 'PostalAddress', streetAddress: location.street, addressLocality: location.locality, postalCode: location.postalCode, addressCountry: 'IT' } })),
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inizio" aria-label="Federico Carletti, torna all’inizio">
            <span className="brand-mark" aria-hidden="true">fc<span>.</span></span>
            <span className="brand-name">Federico Carletti<span>Physio & Personal Training</span></span>
          </a>
          <nav aria-label="Navigazione principale" className="main-nav">
            <a href="#chi-sono">Chi sono</a><a href="#percorsi">Percorsi</a><a href="#approccio">Approccio</a><a href="#contatti">Contatti</a>
          </nav>
          <a href="#contatti" className="header-contact">Parliamone <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </header>
      <main id="contenuto">
        <section className="hero container" id="inizio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-line" /> Personal training & coaching online</p>
            <h1 id="hero-title">Allenarsi bene<br />comincia <em>da te.</em></h1>
            <p className="hero-intro">Sono Federico Carletti. Ti accompagno in un percorso di allenamento costruito intorno ai tuoi obiettivi, al tuo livello e al tempo che hai.</p>
            <div className="hero-actions"><a className="button button-primary" href="#percorsi">Scopri i percorsi <ArrowDown size={18} aria-hidden="true" /></a><a className="button button-outline" href="#contatti">Contattami <ArrowUpRight size={18} aria-hidden="true" /></a></div>
            <p className="hero-location"><MapPin size={16} aria-hidden="true" /> Milano · Buccinasco · Online</p>
          </div>
          <figure className="portrait-slot">
            {profile.portrait.src ? <img src={profile.portrait.src} alt={profile.portrait.alt} width="900" height="1100" fetchPriority="high" /> : <div className="portrait-placeholder"><span className="portrait-top">FEDERICO CARLETTI <span>01 /</span></span><span className="portrait-monogram" aria-hidden="true">fc<span>.</span></span><div className="photo-note"><ImageIcon size={20} aria-hidden="true" /><span>Qui, una mia fotografia.<small>Segnaposto in attesa di una foto autentica.</small></span></div></div>}
            <figcaption><span>Scienze Motorie, movimento e allenamento.</span><ArrowUpRight size={23} aria-hidden="true" /></figcaption>
          </figure>
        </section>
        <div className="credential-strip"><div className="container"><span>Laureato in Scienze Motorie</span><span>Studente di Fisioterapia</span><span>Incontri di 1 ora · In sede o da remoto</span></div></div>
        <section className="section container about-grid" id="chi-sono" aria-labelledby="about-title">
          <div className="section-heading"><p className="eyebrow">01 / Chi sono</p><h2 id="about-title">Prima del programma,<br /><em>la persona.</em></h2><a className="text-link about-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">La mia formazione su LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="about-copy"><p className="large-copy">Sono Federico, laureato in Scienze Motorie e studente di Fisioterapia. Il movimento è il filo che unisce il mio lavoro e la mia formazione.</p><p>Lavoro come personal trainer a Milano e Buccinasco e propongo percorsi di coaching online. Mi rivolgo a chi si avvicina all’allenamento e a chi vuole dare una direzione più precisa al proprio lavoro su forza, ipertrofia, corsa e performance.</p><p>Nel mio approccio, ascolto e personalizzazione vanno insieme. Voglio capire cosa cerchi, da dove parti e come l’allenamento può trovare spazio nella tua quotidianità.</p><div className="education"><div><span className="education-label">Titolo conseguito</span><strong>Scienze delle Attività Motorie e Sportive</strong><span>Laurea triennale · Università degli Studi di Milano</span></div><div><span className="education-label">Formazione in corso</span><strong>Fisioterapia</strong><span>Humanitas University · Percorso 2024–2027</span></div></div></div>
        </section>
        <section className="section services-section" id="percorsi" aria-labelledby="services-title">
          <div className="container">
            <div className="section-top"><div className="section-heading"><p className="eyebrow">02 / Come posso aiutarti</p><h2 id="services-title">Un punto di partenza.<br /><em>Più modi di allenarti.</em></h2></div><p className="section-aside">In presenza oppure online. Scegliamo il percorso in base a ciò che vuoi affrontare e a come preferisci essere seguito.</p></div>
            <div className="service-grid">
              <article className="service-card"><div className="service-card-top"><Dumbbell size={29} strokeWidth={1.4} aria-hidden="true" /><span>IN PRESENZA</span></div><h3>Personal training</h3><p>Per chi inizia o si allena già e desidera una guida individuale. Lavoriamo insieme, con attenzione all’esecuzione e a un allenamento adatto al tuo punto di partenza.</p><div className="service-detail"><span>Come si svolge</span><p>Incontri di un’ora a Milano o Buccinasco, con un programma costruito intorno ai tuoi obiettivi.</p></div><div className="service-footer"><span><Clock3 size={16} aria-hidden="true" /> 1 ora per incontro</span><a className="text-link" href="#tariffe-presenza">Vedi le tariffe <ArrowDown size={16} aria-hidden="true" /></a></div></article>
              <article className="service-card"><div className="service-card-top"><Laptop size={29} strokeWidth={1.4} aria-hidden="true" /><span>OVUNQUE TI ALLENI</span></div><h3>Coaching online</h3><p>Per chi preferisce allenarsi in autonomia con una programmazione personalizzata. Il percorso può riguardare forza, ipertrofia, running o un obiettivo di performance.</p><div className="service-detail"><span>Come si svolge</span><p>Programmazione con aggiornamento mensile, check settimanale oppure un percorso dedicato a un obiettivo specifico.</p></div><div className="service-footer"><span><Laptop size={16} aria-hidden="true" /> Supporto da remoto</span><a className="text-link" href="#tariffe-online">Vedi i percorsi <ArrowDown size={16} aria-hidden="true" /></a></div></article>
            </div>
            <aside className="physio-note" aria-labelledby="physio-title"><GraduationCap size={28} strokeWidth={1.4} aria-hidden="true" /><div><h3 id="physio-title">Fisioterapia: il mio percorso di formazione</h3><p>Studio Fisioterapia e continuo ad approfondire il movimento e la persona. Questo percorso si affianca alla mia formazione in Scienze Motorie. <strong>Non sono ancora fisioterapista: attualmente non offro prestazioni fisioterapiche o riabilitative.</strong></p></div></aside>
            <div className="pricing-presence" id="tariffe-presenza"><div className="pricing-intro"><p className="eyebrow">Personal training in presenza</p><h3>Il tempo dedicato a te.</h3></div><div className="presence-prices">{inPersonPrices.map((price) => <div className="presence-price" key={price.label}><span>{price.label}</span><strong>{price.price}</strong><small>{price.note}</small></div>)}</div><a className="text-link" href={whatsappUrl('Ciao Federico, vorrei informazioni sul personal training in presenza e richiedere un primo appuntamento.')} target="_blank" rel="noopener noreferrer">Richiedi un appuntamento <ArrowUpRight size={18} aria-hidden="true" /></a></div>
            <div className="online-heading" id="tariffe-online"><p className="eyebrow">Coaching online</p><h3>Scegli il livello di supporto.</h3><p>Forza, ipertrofia, running e obiettivi di performance.</p></div>
            <div className="plans-grid">{onlinePlans.map((plan) => <article className="plan-card" key={plan.id}><div className="plan-number">{plan.number}<span> / COACHING ONLINE</span></div><h4>{plan.name}</h4><p className="plan-description">{plan.description}</p><div className="plan-price">{plan.from && <span className="from-label">A partire da</span>}<strong>{plan.price}</strong><span>{plan.period}</span></div><p className="plan-detail">{plan.detail}</p>{plan.packages.length > 0 && <dl className="plan-packages">{plan.packages.map((pack) => <div key={pack.duration}><dt>{pack.duration}</dt><dd><strong>{pack.price}</strong><small>{pack.unit}</small></dd></div>)}</dl>}<a className="button button-outline plan-button" href={whatsappUrl(plan.message)} target="_blank" rel="noopener noreferrer">{plan.cta}<ArrowUpRight size={16} aria-hidden="true" /></a></article>)}</div>
            <p className="pricing-note">I pacchetti di coaching prevedono pagamento anticipato. Il livello di supporto varia in base al percorso scelto.</p>
          </div>
        </section>
        <section className="section approach-section" id="approccio" aria-labelledby="approach-title"><div className="container"><div className="section-top"><div className="section-heading"><p className="eyebrow">03 / Il mio approccio</p><h2 id="approach-title">Ascoltare. Costruire.<br /><em>Adattare, insieme.</em></h2></div><p className="section-aside">Un percorso personale prende forma nel dialogo, nel lavoro e nella verifica di come sta andando.</p></div><ol className="steps">{approach.map((step, i) => <li key={step.title}><span className="step-number">0{i + 1}<span aria-hidden="true">/</span></span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>
        <section className="section container faq-grid" id="domande" aria-labelledby="faq-title"><div className="section-heading"><p className="eyebrow">04 / Domande frequenti</p><h2 id="faq-title">Prima di<br /><em>cominciare.</em></h2><p className="faq-intro">Qualche informazione pratica per il nostro primo incontro.</p><a className="text-link" href={whatsappUrl('Ciao Federico, vorrei chiederti alcune informazioni prima di iniziare un percorso.')} target="_blank" rel="noopener noreferrer">Hai un’altra domanda? Scrivimi <ArrowUpRight size={17} aria-hidden="true" /></a></div><SiteFaq /></section>
        <section className="section contact-section" id="contatti" aria-labelledby="contact-title"><div className="container"><div className="contact-heading"><div className="section-heading"><p className="eyebrow">05 / Contatti e sedi</p><h2 id="contact-title">Il primo passo?<br /><em>Parliamone.</em></h2></div><div className="contact-intro"><p>Raccontami cosa cerchi e come preferisci iniziare: in sede o da remoto. Concorderemo insieme il primo appuntamento di un’ora.</p><a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Richiedi un appuntamento <MessageCircle size={19} aria-hidden="true" /></a><span className="contact-helper">Si apre WhatsApp. Giorno e orario sono da concordare.</span></div></div><div className="contact-grid"><div className="direct-contacts"><h3>I miei contatti</h3><a href={`mailto:${profile.email}`}><Mail size={20} strokeWidth={1.5} aria-hidden="true" /><span><small>Email</small>{profile.email}</span><ArrowUpRight size={18} aria-hidden="true" /></a><a href={`tel:${profile.phone}`}><Phone size={20} strokeWidth={1.5} aria-hidden="true" /><span><small>Telefono</small>{profile.displayPhone}</span><ArrowUpRight size={18} aria-hidden="true" /></a><a href={profile.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} strokeWidth={1.5} aria-hidden="true" /><span><small>Instagram</small>@federicoocarlettii</span><ArrowUpRight size={18} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} strokeWidth={1.5} aria-hidden="true" /><span><small>LinkedIn</small>Federico Carletti</span><ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="location-list"><h3>Dove lavoro</h3>{locations.map((location) => <article className="location" key={location.name}><span className="location-city"><MapPin size={16} aria-hidden="true" />{location.city}</span><h4>{location.name}</h4><address>{location.street}<br />{location.postalCode} {location.locality}</address><div className="location-links"><a className="text-link" href={location.maps} target="_blank" rel="noopener noreferrer">Indicazioni stradali <ArrowUpRight size={16} aria-hidden="true" /></a><a className="venue-source" href={location.website} target="_blank" rel="noopener noreferrer">Sito della sede</a></div></article>)}<div className="remote-location"><Laptop size={21} strokeWidth={1.4} aria-hidden="true" /><p><strong>Anche da remoto</strong><span>Primo incontro e coaching online.</span></p></div></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-main"><a className="brand" href="#inizio"><span className="brand-mark" aria-hidden="true">fc<span>.</span></span><span className="brand-name">Federico Carletti<span>Physio & Personal Training</span></span></a><p>Laureato in Scienze Motorie · Studente di Fisioterapia<br /><span>Personal training a Milano e Buccinasco · Coaching online</span></p><a className="text-link" href="#inizio">Torna su <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Federico Carletti</span><span>Anteprima · Fotografia e dati fiscali da completare</span></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    </>
  );
}
