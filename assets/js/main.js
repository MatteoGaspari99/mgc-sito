/* MG Consulting srls — script del sito: menu mobile, pulsanti Copia, modulo di contatto */
(function(){
  'use strict';

  /* Menu mobile: il bottone "Menu" mostra/nasconde la lista dei link (solo sotto i 1080px, vedi CSS) */
  var nav=document.querySelector('.menu'), toggle=document.querySelector('.menu-toggle');
  if(nav&&toggle){
    function setOpen(open){
      nav.classList.toggle('open',open);
      toggle.setAttribute('aria-expanded',open?'true':'false');
    }
    toggle.addEventListener('click',function(){ setOpen(!nav.classList.contains('open')); });
    // Chiude il menu quando si sceglie una voce o si preme Esc
    nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ setOpen(false); }); });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&nav.classList.contains('open')){ setOpen(false); toggle.focus(); }
    });
  }

  /* Pulsanti "Copia": navigator.clipboard, con fallback su execCommand e infine sulla selezione del testo */
  var live=document.getElementById('copy-live');
  function announce(msg){
    if(!live) return;
    live.textContent='';
    setTimeout(function(){ live.textContent=msg; },50);
  }
  function selectText(el){
    var r=document.createRange(); r.selectNodeContents(el);
    var s=window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
  function legacyCopy(text){
    var ta=document.createElement('textarea');
    ta.value=text; ta.setAttribute('readonly',''); ta.setAttribute('aria-hidden','true');
    ta.style.position='fixed'; ta.style.left='-9999px';
    document.body.appendChild(ta); ta.select();
    var ok=false;
    try{ ok=document.execCommand('copy'); }catch(e){ ok=false; }
    document.body.removeChild(ta);
    return ok;
  }
  document.querySelectorAll('.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var text=b.dataset.copy, label=b.dataset.label||'Testo';
      function done(){
        b.textContent='Copiato';
        announce(label+' copiato negli appunti');
        setTimeout(function(){ b.textContent='Copia'; },1500);
      }
      function fail(){
        var target=document.getElementById(b.dataset.target);
        if(target) selectText(target);
        announce('Copia automatica non disponibile: il testo è selezionato, copialo manualmente');
      }
      if(navigator.clipboard&&navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(done,function(){ legacyCopy(text)?done():fail(); });
      }else{
        legacyCopy(text)?done():fail();
      }
    });
  });

  /* Modulo di contatto.
     Se il <form> ha data-endpoint (es. Formspree), invia i dati con fetch.
     Altrimenti apre il programma di posta con un'email precompilata (mailto). */
  document.querySelectorAll('form.contact-form').forEach(function(f){
    var status=f.querySelector('.form-status');
    function say(msg,ok){ if(status){ status.textContent=msg; status.className='form-status '+(ok?'ok':'err'); } }
    f.addEventListener('submit',function(e){
      e.preventDefault();
      if(!f.checkValidity()){ f.reportValidity(); return; }
      var d={}; new FormData(f).forEach(function(v,k){ d[k]=v; });
      var subject='Richiesta dal sito: '+(d.argomento||'informazioni');
      var body='Nome: '+d.nome+'\nAzienda: '+(d.azienda||'-')+'\nEmail: '+d.email+'\nTelefono: '+(d.telefono||'-')+'\nMacchina / controllo: '+(d.macchina||'-')+'\n\n'+d.messaggio;
      var endpoint=f.dataset.endpoint;
      if(endpoint){
        var btn=f.querySelector('button[type=submit]'); btn.disabled=true;
        fetch(endpoint,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify(d)})
          .then(function(r){ if(!r.ok) throw new Error(); f.reset(); say('Messaggio inviato. Vi rispondiamo entro un giorno lavorativo.',true); })
          .catch(function(){ say('Invio non riuscito. Scriveteci a massimo.gaspari@mgc-italia.it o chiamate il +39 380 659 5689.',false); })
          .then(function(){ btn.disabled=false; });
      }else{
        window.location.href='mailto:massimo.gaspari@mgc-italia.it?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
        say('Si apre il vostro programma di posta con il messaggio già compilato: basta premere Invia. Se non si apre, scriveteci a massimo.gaspari@mgc-italia.it.',true);
      }
    });
  });
})();
