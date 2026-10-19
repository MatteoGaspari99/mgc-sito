# Sito web MG Consulting srls

Sito vetrina statico di **MG Consulting srls** (Thiene, VI): consulenza, formazione, post-processor e sviluppo software CAD/CAM su ESPRIT CAM e NX CAD.

Dominio di destinazione: **https://www.mgc-italia.it** (hosting Register.it).

## Struttura

```
index.html            Home (pagina singola con ancore: servizi, post-processor, formazione, chi siamo, contatti)
privacy.html          Privacy e cookie policy
assets/css/style.css  Foglio di stile (token colore e font del marchio)
assets/img/           Logo, favicon, immagine Open Graph
favicon.ico
robots.txt, sitemap.xml
DEPLOY.md             Come pubblicare su Register.it e su GitHub
CLAUDE.md             Note per chi continua lo sviluppo con Claude Code
```

Nessun processo di build: i file si caricano così come sono.

## Identità visiva

| Elemento | Valore |
| --- | --- |
| Grafite (sfondi scuri) | `#2B2F33` |
| Verde petrolio (accento) | `#0B6872` · scuro `#084A51` · chiaro `#6CC5CE` |
| Titoli | Orbitron 600/800 (Google Fonts) |
| Testo | Inter 400–700 (Google Fonts) |
| Firma grafica | il "taglio" diagonale a 22° del logo, ripreso nell'hero e nelle copertine LinkedIn |

I colori sono definiti come variabili CSS in cima a `assets/css/style.css`; il tema scuro segue `prefers-color-scheme`.

## Anteprima in locale

Aprire `index.html` nel browser, oppure:

```bash
python3 -m http.server 8080
# poi http://localhost:8080
```

## Cose da fare prima della pubblicazione

- [ ] Far controllare `privacy.html` a un consulente privacy (testo base)
- [ ] Verificare nel pannello Register.it il tempo di conservazione dei log e aggiornare la privacy
- [ ] Sostituire le iniziali in "Chi siamo" con le foto, se desiderato
- [ ] Attivare HTTPS (Let's Encrypt) nel pannello Register.it
- [ ] Inviare `sitemap.xml` a Google Search Console
