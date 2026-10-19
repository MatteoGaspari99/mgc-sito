# Contesto del progetto MG Consulting (per Claude Code)

Questo file riassume tutto quello che è stato deciso e fatto nella chat Cowork di ottobre 2026, così chi continua il lavoro (persona o Claude Code) parte con le stesse informazioni.

## L'azienda

- **MG Consulting srls**, Via dell'Aeroporto 13, 36016 Thiene (VI). P.IVA 04566400240. Fondata nel 2025. Tel. +39 380 659 5689, email massimo.gaspari@mgc-italia.it. Sito: www.mgc-italia.it. LinkedIn: linkedin.com/company/mg-consulting-cadcam
- **Massimo Gaspari**, titolare. Nel CAD/CAM dal 1989 (Sitec 1989–2009, Answers 2010–2024). Sviluppa post-processor e cinematiche per ESPRIT; consulenza; tiene i corsi di ESPRIT e NX CAD.
- **Matteo Gaspari**, CAM & Software Engineer. Programmazione CNC con ESPRIT, sviluppo C#/.NET (add-in, automazioni, integrazione con i gestionali). Utente GitHub: MatteoGaspari99.
- Regola fissa: **ESPRIT è il CAM** (post-processor, cinematiche, add-in). **NX è solo CAD**: su NX si fa formazione, niente post-processor né cinematiche.

## Servizi (come li descrive il sito)

1. Consulenza CAD/CAM: scelta e avvio del CAM, strategie di lavorazione, standardizzazione utensili e processi.
2. Formazione: corsi base/avanzati di fresatura 3–5 assi, tornitura, mill-turn, multitasking, elettroerosione a filo. In azienda o da remoto (non in aula a Thiene).
3. Sviluppo software: add-in per ESPRIT, integrazione con gestionali (ERP, MES, PDM).
4. Supporto: post-processor e cinematiche, programmazione CNC conto terzi, assistenza in produzione.

## Identità visiva

- Colori: grafite `#2B2F33`, verde petrolio `#0B6872` (scuro `#084A51`, chiaro `#6CC5CE`). Font: Orbitron (titoli), Inter (testo).
- Logo "MG" con il taglio diagonale a 22°; firma grafica "Taglio" ripresa in hero e copertine.
- Tono dei testi: semplice, diretto, da officina. Frasi che promettono un risultato ("dal programma CAM al programma macchina, senza errori"). Niente paroloni.

## Stato della pubblicazione (19/10/2026)

- Repository GitHub: `MatteoGaspari99/mgc-sito`, branch `main`, GitHub Pages attivo da root con custom domain `www.mgc-italia.it` (file `CNAME` e `.nojekyll` presenti).
- DNS su Register.it già configurato: `www` CNAME → `matteogaspari99.github.io.`; apex A → 185.199.108/109/110/111.153. Email e PEC non toccate.
- GitHub Pages: DNS check superato, certificato HTTPS attivo per `www` e apex, **Enforce HTTPS** attivo (19/10/2026).
- Hosting Register non acquistato: il sito vive su GitHub Pages.

## Cose ancora da fare

- [ ] Casi reali nella pagina post-processor (3–5: controllo, macchina, particolarità, risultato) quando Massimo li fornisce.
- [x] Pagine `corsi-esprit.html` e `corsi-nx.html` (19/10/2026). Da far rivedere a Massimo i contenuti dei singoli corsi; mancano durate e date.
- [ ] Pagina Sviluppo software, sul modello di `post-processor.html`.
- [ ] Modulo di contatto: oggi apre un mailto; attivare Formspree e aggiornare `privacy.html` (vedi README).
- [ ] Google Business Profile, Search Console (inviare `sitemap.xml`), recensioni Google.
- [ ] Chiedere a Hexagon/ESPRIT e Siemens l'inserimento tra i partner/centri di formazione con link al sito.
- [ ] Foto reali di Massimo e Matteo nella sezione Chi siamo.
- [ ] Far controllare `privacy.html` a un consulente.
- [ ] Aggiornare il campo "Sito web" della pagina LinkedIn con https://www.mgc-italia.it.

## Materiale già prodotto (fuori dal repository)

- Copertine LinkedIn (pagina 1128×191, profili 1584×396), logo 400×400, foto profilo di Matteo, immagine del post di lancio: consegnati nella chat Cowork.
- Documenti Claude: proposta profilo LinkedIn aziendale, profilo di Matteo, profilo di Massimo, piano strategico 2026–2027 su AI e posizionamento.

## Come lavorare su questo repository

- Niente build: modificare HTML/CSS/JS e fare `git push`; GitHub Pages pubblica in 1–2 minuti.
- Dopo ogni modifica visiva: screenshot a 1280 e 390 px con Playwright e controllo che nulla sfori in orizzontale.
- Nuove pagine: copiare head, header e footer da `post-processor.html`, aggiornare `sitemap.xml` e i link del menu in tutte le pagine.
