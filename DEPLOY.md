# Pubblicazione del sito

## 1. Su GitHub (dal vostro computer)

Il repository è già inizializzato con un commit. Per portarlo su GitHub:

1. Su github.com → **New repository** → nome `mgc-sito`, privato o pubblico, **senza** README/.gitignore (ci sono già).
2. Nella cartella del progetto:

```bash
git remote add origin https://github.com/<vostro-utente>/mgc-sito.git
git push -u origin main
```

Da quel momento ogni modifica si fa con `git add -A && git commit -m "..." && git push`.

## 2. Su Register.it

Il sito è statico: basta caricare i file nella cartella pubblica dell'hosting.

### Se avete un piano hosting (Linux o Windows)

1. Pannello Register.it → **Hosting** → **File Manager** (oppure recuperate i dati FTP: host, utente, password).
2. Entrate nella cartella pubblica: di solito `httpdocs`, `public_html` oppure `www`.
3. Caricate **tutto il contenuto** della cartella del progetto (non la cartella stessa), esclusi `.git`, `.review`, `README.md`, `DEPLOY.md`, `CLAUDE.md`:
   - `index.html`, `privacy.html`, `favicon.ico`, `robots.txt`, `sitemap.xml`
   - la cartella `assets/` intera
4. Se c'è un file `index.html` o `index.php` di esempio di Register, sostituitelo.
5. Pannello → **Sicurezza / SSL**: attivate il certificato (Let's Encrypt è gratuito) e il reindirizzamento automatico da `http` a `https`.
6. Verificate che `www.mgc-italia.it` e `mgc-italia.it` portino entrambi al sito (impostazione "dominio principale / alias" nel pannello).

Con FTP da riga di comando (sostituire i dati):

```bash
lftp -u UTENTE,PASSWORD ftp.mgc-italia.it -e "mirror -R --exclude .git/ --exclude .review/ --exclude-glob *.md . httpdocs; quit"
```

### Se avete solo il dominio, senza hosting

Due strade:

- **Attivare un hosting Register.it** (il piano base è sufficiente) e seguire i passi sopra.
- **GitHub Pages gratuito**: nel repository GitHub → Settings → Pages → Source: `main`, cartella `/ (root)`. Poi nel pannello DNS di Register.it:
  - record `A` per `@` verso `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - record `CNAME` per `www` verso `<vostro-utente>.github.io`
  - su GitHub Pages impostare il custom domain `www.mgc-italia.it` e spuntare "Enforce HTTPS".
  Aggiungere nel repository un file `CNAME` contenente `www.mgc-italia.it`.

## 3. Dopo la pubblicazione

- Aprire `https://www.mgc-italia.it/` e `https://www.mgc-italia.it/privacy.html` da telefono e da computer.
- Controllare l'anteprima del link su LinkedIn (Post Inspector) per l'immagine Open Graph.
- Registrare il sito su Google Search Console e inviare `https://www.mgc-italia.it/sitemap.xml`.
- Aggiornare il campo "Sito web" della pagina LinkedIn aziendale con `https://www.mgc-italia.it`.
