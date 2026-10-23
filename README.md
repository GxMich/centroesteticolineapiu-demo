# Linea Più - proposta Esosomic

Landing statica in HTML, CSS e JavaScript per il Centro Estetico Linea Più di Novara. Le azioni principali sono WhatsApp e chiamata; B-Vanity resta disponibile come alternativa.

## Direzione grafica

Fondo neutro, accento bordeaux, Bodoni Moda per i titoli e Manrope per il testo. Una nuova fotografia editoriale del trattamento sostituisce la scena botanica nell'hero. Su mobile, offerta e contatti precedono la grande fotografia. Il layout evita sezioni ripetute e lascia leggibili le condizioni della promozione.

## Modifiche ai contenuti

I recapiti, la proposta, i metadati e le immagini si configurano in `config.js`:

- `phone`: numero usato da tutte le chiamate.
- `whatsappContactNumber`: numero internazionale, senza spazi o segno +.
- `whatsappMessage`: messaggio precompilato; non viene inviato automaticamente.
- `bookingUrl`: collegamento B-Vanity.
- `heroDescription`, `offerDescription`, `campaignNotice`: contenuti della proposta.
- `images.hero`, `images.heroSmall`: fotografia principale e variante mobile.
- `images.promotion`: creatività ufficiale della campagna.

La [pagina ufficiale delle promozioni](https://www.centroesteticolineapiu.it/promozioni) presenta Esosomic in istituto, Crema A e Siero B a casa e lo sconto del 20% fino al 31 ottobre, senza anno e prezzo finale. La landing richiede conferma di questi dettagli.

Il cellulare 380 694 1236 è pubblicato come Estetica sul sito del centro. Il link WhatsApp usa questo numero; la presenza dell'account WhatsApp non è stata confermata dalla pagina ufficiale.

## Immagini

`facial-ritual-v3.webp` è una fotografia editoriale generata per questa proposta, non una foto del centro o di un suo cliente. La versione da 640 px pesa circa 49 KB; la versione da 1024 px circa 118 KB. Il file originale resta nella cartella generated_images di Codex. Le note di provenienza sono nei file `.json` accanto alle immagini. `promo-antiage.webp` proviene dalla promozione ufficiale.

## Demo pubblica

- Demo: https://centroesteticolineapiu-demo.vercel.app
- Repository: https://github.com/GxMich/centroesteticolineapiu-demo

La proposta dimostrativa usa `noindex, nofollow` per non competere con il sito ufficiale nei motori di ricerca.

## Preview

Avvia un server statico, per esempio `python -m http.server 4173`, e apri `http://localhost:4173`. Per Vercel non serve una build. La versione locale non aggiorna il sito ufficiale.

## Verifica

Controllati in Chrome a 320, 390, 768 e 1440 px: caricamento immagini, collegamenti telefonici e WhatsApp, metadati, assenza di overflow orizzontale, dimensioni dei target, FAQ con puntatore e tastiera. Su mobile, contatti nella prima schermata e barra fissa attiva dopo l'hero, nascosta presso i contatti finali. Verificata anche la preferenza di movimento ridotto.
