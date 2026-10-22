# Linea Più · landing per campagne social

Landing page statica, mobile-first e pronta per Vercel. È una **demo non ufficiale** proposta da Michele Modica; lo sconto del 20% è esemplificativo e condizioni e disponibilità vanno confermate dal centro.

## Personalizzazione rapida

Modifica `window.LANDING_CONFIG` in `config.js`:

- `businessName`, `brandMark`, `location`, `address`, `phone`, `email`
- `campaignLabel`, `discount`, `heroTitle`, `heroDescription`, `offerDescription`
- `campaignNotice` per indicare con precisione condizioni e dettagli da confermare
- `images.hero` e `images.ritual` per sostituire le immagini con materiale approvato
- `whatsappNumber`: solo un numero WhatsApp Business verificato, in cifre e formato internazionale. Quando è impostato, le CTA aprono WhatsApp con un messaggio già scritto; l’utente decide se inviarlo. Se resta vuoto, le CTA usano il recapito telefonico verificato.
- `bookingUrl`: lascia vuoto per nascondere il collegamento alle prenotazioni

Telefono, email e sistema B-Vanity sono stati verificati sul sito pubblico del centro. Il numero telefonico non è stato verificato come WhatsApp. Riconferma i recapiti con il cliente prima della pubblicazione.

## Avvio e deploy

Per una preview locale, avvia un server statico nella cartella, ad esempio `python -m http.server 4173`, poi apri `http://localhost:4173`. Per Vercel, importa la cartella o il repository: non servono build command né framework preset. `vercel.json` configura URL puliti e header di sicurezza.

La hero usa un’immagine editoriale generata per questa demo; le immagini editoriali non rappresentano il centro. Sostituiscile con fotografie approvate prima di usare la pagina in una campagna pubblica.
