---

description: "Scopri HTX S.r.l., la tua guida nell'adozione dell'Intelligenza Artificiale per le PMI italiane."
layout: "simple"
showHero: false
---

<div class="flex justify-center mb-12">
  <div class="max-w-3xl mx-auto px-4">
    <div class="bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-lg p-8 border-l-4 border-blue-500">
      <div class="text-center">
        <blockquote class="text-lg font-light italic text-neutral-700 dark:text-neutral-300 leading-relaxed" id="pirsig-quote">
          "Qualsiasi lavoro tu faccia, se trasformi in arte ciò che stai facendo, con ogni probabilità scoprirai di essere divenuto per gli altri una persona interessante e non un oggetto. Questo perché le tue decisioni, fatte tenendo conto della Qualità, cambiano anche te. Meglio: non solo cambiano anche te e il lavoro, ma cambiano anche gli altri, perché la Qualità è come un'onda. Quel lavoro di Qualità che pensavi nessuno avrebbe notato viene notato eccome, e chi lo vede si sente un pochino meglio: probabilmente trasferirà negli altri questa sua sensazione e in questo modo la Qualità continuerà a diffondersi."
        </blockquote>
        <cite class="block mt-4 text-sm font-medium text-neutral-600 dark:text-neutral-400" id="pirsig-author">
          — Robert Pirsig <span id="pirsig-language">(Italiano)</span>
        </cite>
      </div>
    </div>
  </div>
</div>

<script>
const pirsigQuotes = [
  { text: "Qualsiasi lavoro tu faccia, se trasformi in arte ciò che stai facendo, con ogni probabilità scoprirai di essere divenuto per gli altri una persona interessante e non un oggetto. Questo perché le tue decisioni, fatte tenendo conto della Qualità, cambiano anche te. Meglio: non solo cambiano anche te e il lavoro, ma cambiano anche gli altri, perché la Qualità è come un'onda. Quel lavoro di Qualità che pensavi nessuno avrebbe notato viene notato eccome, e chi lo vede si sente un pochino meglio: probabilmente trasferirà negli altri questa sua sensazione e in questo modo la Qualità continuerà a diffondersi.", language: "Italiano" },
  { text: "No matter what job you do, if you turn it into an art, you're likely to become interesting to others. This is because your decisions, made with Quality in mind, change you too. Better yet, they change not only you and your work, but others as well, because Quality is like a wave. That Quality work you thought no one would notice is indeed noticed, and it makes those who see it feel a bit better: they're likely to pass on this feeling, thus Quality continues to spread.", language: "English" },
  { text: "Peu importe le travail que vous faites, si vous le transformez en art, vous devenez probablement intéressant pour les autres. Cela est dû au fait que vos décisions, prises avec la Qualité à l'esprit, vous changent également. Mieux encore : elles changent non seulement vous et votre travail, mais aussi les autres, car la Qualité est comme une vague. Ce travail de Qualité que vous pensiez passer inaperçu est en effet remarqué, et il rend ceux qui le voient un peu meilleurs : ils sont susceptibles de transmettre ce sentiment, ainsi la Qualité continue de se propager.", language: "Français" },
  { text: "Egal welche Arbeit du verrichtest, wenn du sie in eine Kunst verwandelst, wirst du wahrscheinlich für andere interessant. Dies liegt daran, dass deine Entscheidungen, mit Qualität im Sinn, auch dich verändern. Noch besser: Sie verändern nicht nur dich und deine Arbeit, sondern auch andere, denn Qualität ist wie eine Welle. Diese Qualitätsarbeit, von der du dachtest, dass sie niemand bemerken würde, wird tatsächlich bemerkt, und sie macht diejenigen, die sie sehen, ein bisschen besser: Sie werden wahrscheinlich dieses Gefühl weitergeben, so dass die Qualität weiterverbreitet wird.", language: "Deutsch" },
  { text: "No importa el trabajo que hagas, si lo conviertes en un arte, probablemente te vuelvas interesante para los demás. Esto se debe a que tus decisiones, tomadas con la Calidad en mente, también te cambian a ti. Mejor aún: cambian no solo a ti y tu trabajo, sino también a los demás, porque la Calidad es como una ola. Ese trabajo de Calidad que pensabas que nadie notaría es, de hecho, notado, y hace que aquellos que lo ven se sientan un poco mejor: probablemente transmitan este sentimiento, así la Calidad sigue extendiéndose.", language: "Español" }
];

let currentQuoteIndex = 0;

function changePirsigQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % pirsigQuotes.length;
  const quote = pirsigQuotes[currentQuoteIndex];
  
  document.getElementById('pirsig-quote').textContent = `"${quote.text}"`;
  document.getElementById('pirsig-language').textContent = `(${quote.language})`;
}

// Cambia citazione ogni 20 secondi dopo un ritardo iniziale di 15 secondi
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    changePirsigQuote();
    setInterval(changePirsigQuote, 20000);
  }, 15000);
});
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

La Qualità è come un'onda e ci ispira in quello che facciamo. Siamo un partner affidabile specializzato in innovazione. 

Di solito capita che quando iniziamo una collaborazione (interna, con le persone coinvolte in azienda o esterna con altre realtà) è l'inizio di qualcosa di duraturo. 

## Dove siamo

**Trieste, città della scienza**: qualità della vita e vantaggio competitivo.

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
  
  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/barca.jpg" alt="La nascita di HTX" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Qualità della vita</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">Trieste, in Friuli Venezia Giulia è una città che offre la possibilità di videre il mare e la montagna tutto l'anno. E' il posto giusto dove far crescere un team che accoglie e valorizza de diversità: Trieste è una città dal profondo carattere internazionale e multiculturale</p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/researcher_density_trieste.png" alt="HTX e Microsoft" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Città della scienza</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">Il Friuli Venezia Giulia è stata la prima regione italiana ad essere classificata <strong>Strong innovator</strong> dall'OECD. Trieste ospita <strong>30 centri di ricerca</strong> e di alta formazione nazionali e internazionali di primo livello (ICGEB, ICTP, OGS, ELETTRA, Università, ecc.). Trieste è la città europea con la <strong>più alta densità di ricercatori</strong> (37 ogni 1.000 lavoratori)</p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/logistica_trieste.png" alt="HTX progetto regionale" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Nel cuore dell'Europa</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">Trieste è al centro dell’Europa. Il <strong>Porto Franco di Trieste</strong> è un porto dell’Adriatico situato a Trieste, in Italia: il porto commerciale più importante d’Italia e l’8° porto dell’Unione Europea. La distanza che separa Trieste da Milano è la stessa che la separa da Vienna, Bratislava, Budapest e Monaco.
.</p>
    </div>
  </div>

  </div>


---

Vuoi saperne di più su come possiamo aiutare la tua azienda? [Contattaci](mailto:hello@ht-x.com).

---

## Alcuni momenti importanti

Alcuni episodi che raccontano un po' della nostra storia: dalla nascita dell'azienda agli eventi che hanno segnato il nostro percorso, a momenti di vita quotidiana.

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
  
  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/nascita-azienda.jpg" alt="La nascita di HTX" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">La nascita di HTX</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">Il primo passo: la fondazione il 10 gennaio 2024, con la bozza del primo logo (generato con AI). La visione era chiara: portare l'AI alle PMI italiane.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/microsoft_founders_hub.png" alt="HTX e Microsoft" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">HTX ammessa da Microsoft</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">A maggio 2024, HTX è ammessa al Microsoft Founders Hub che offre un contributo in servizi pari a <strong>150,000$</strong>.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/DISPLAY-EDITABILE_4-3.png" alt="HTX progetto regionale" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">HTX: grant da 70k€</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">A giugno 2024, la Regione Friuli Venezia Giulia comunica ad HTX che il progetto sulla AI privata per le aziende è supportato con grant da <strong>70.000€</strong>.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/jeremy-bishop-vGjGvtSfys4-unsplash.jpg" alt="HTX seed funding" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">HTX: seed funding 50k€</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">A ottobre 2024, l'attività di ricerca e sviluppo di HTX è supportata da un investimento privato pari a <strong>50.000€</strong>.</p>
    </div>
  </div>


  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/presentazione-ministro.jpg" alt="HighEST Lab: HTX presenta insieme a Reply" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">HighEST Lab: HTX presenta insieme a Reply</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400"> All'inaugurazione dell'HighEST Lab HTX presenta insieme a Reply DIANA, la cacciatrice di bandi. All'incontro presente il <strong>Ministro dell'Università e della Ricerca Anna Maria Bernini</strong>. 
      </p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/HTX Logo e nome_vertical_black_on_white.png" alt="HTX SME fund" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">HTX: SME fund 1k€</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">A marzo 2025, il marchio ufficiale di HTX è depositato a livello europeo grazie al contributo dello SME Fund per <strong>1.000€</strong>.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/evento-bic.jpg" alt="Evento tecnologico Trieste" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">HTX all'inaugurazione del nuovo Data Center</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">Il 28 marzo 2025 abbiamo parlato di Private AI all'inaugurazione del Data Center del BIC Incubatori FVG. Un evento di apertura molto partecipato e lo speciale endorsement del <strong>Vicepresidente della Regione Friuli Venezia Giulia</strong>.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/smau-parigi.jpg" alt="SMAU Parigi 2025" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">HTX a SMAU Parigi 2025</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">Ad aprile 2025 HTX è stata selezionata per rappresentare la Regione Friuli Venezia Giulia allo SMAU presso la <strong>Station F</strong> a Parigi.
Abbiamo avuto l’onore di accogliere presso il nostro stand il <strong>Vice Ministro del Ministero delle Imprese e del Made in Italy</strong>, con cui abbiamo discusso del futuro delle soluzioni di intelligenza artificiale private.</p>
    </div>
  </div>

  <div class="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src="/images/azienda/allabusiness-school-sole24-ore.jpg" alt="Università di Torino" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">HTX è invitata al Sole 24 ore Business School</h4>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">A giugno 2025 Invitati a parlare di Intelligenza Artificiale e Machine Learning alla prestigiosa scuola del Sole24ore, per il Master in Sanità Pharma e Biomed</p>
    </div>
  </div>
  
</div>

