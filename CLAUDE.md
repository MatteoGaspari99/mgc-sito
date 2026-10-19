# Note per Claude Code

Sito vetrina statico di MG Consulting srls (consulenza e formazione CAD/CAM su ESPRIT e NX CAD, Thiene VI). Nessun framework, nessun build: HTML + CSS + poche righe di JS.

## Regole del progetto

- Lingua dei testi e dei commenti: **italiano**, tono semplice e diretto, adatto a chi lavora in officina. Frasi brevi che promettono un risultato concreto ("dal programma CAM al programma macchina, senza errori").
- Non usare lorem ipsum né dati inventati: telefono, email, indirizzo e P.IVA sono quelli reali in `index.html`.
- ESPRIT è il CAM (post-processor, cinematiche, add-in). **NX è solo CAD**: su NX l'azienda fa formazione, non post-processor né cinematiche.
- Colori e font sono variabili CSS in cima a `assets/css/style.css`; non introdurre colori fuori dai token. Tema scuro via `prefers-color-scheme`.
- Niente librerie esterne oltre a Google Fonts. Se si aggiungono servizi terzi (analytics, moduli, mappe), aggiornare `privacy.html` e valutare il banner cookie.
- Le immagini vanno in `assets/img/` con `width`/`height` espliciti.
- Dopo ogni modifica visiva: screenshot a 1280 e 390 px con Playwright (chromium già installato, non eseguire `playwright install`) e controllo che nulla sfori in orizzontale.

## Deploy

Vedi `DEPLOY.md`: caricamento FTP/File Manager su Register.it nella cartella pubblica, oppure GitHub Pages con DNS puntato dal pannello Register.

## Idee già discusse, non ancora fatte

- Pagina Corsi con schede e modulo di richiesta informazioni (richiede un backend o un servizio form esterno → privacy).
- Pagina Post-processor: aggiungere 3-5 casi reali (controllo, macchina, problema, risultato) quando Massimo li fornisce.
- Pagina Cinematiche/Sviluppo software, sullo stesso modello di post-processor.html. (Corsi ESPRIT e Corsi NX CAD fatte: `corsi-esprit.html`, `corsi-nx.html`.)
- Modulo di contatto: oggi apre un mailto; attivare Formspree (vedi README) e aggiornare la privacy.
- Google Business Profile e Search Console da attivare (vedi piano marketing in chat).
- Foto reali di Massimo e Matteo al posto delle iniziali.
- Font ospitati in locale (`assets/fonts/`) per eliminare la dipendenza da Google e semplificare la privacy.
