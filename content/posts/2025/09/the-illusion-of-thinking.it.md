---
categories:
- Articoli
date: 2025-06-07T10:28:23+0200
description: PDF di apple che mostra come gli LLM collassano con puzzle come la torre
  di Hanoi a livelli crescenti.
draft: false
feature_image: /images/background.svg
images: []
last_linked: '2025-10-31T08:34:31.613179'
processed_date: 2025-09-06 10:47
related_articles:
- /posts/2025/06/2505-24864-prorl-prolonged-reinforcement-learning/
- /posts/2025/02/deepseek-r1-incentivizes-reasoning-in-llms-through/
- /posts/2025/05/2505-03335v2-absolute-zero-reinforced-self-play-re/
series:
- Articoli Interessanti
showDate: true
showPagination: true
showReadingTime: true
showWordCount: true
slug: the-illusion-of-thinking
source_date: '2025-09-06'
source_type: Content
source_url: ''
tags:
- AI
title: The Illusion of Thinking
---

{{< lead >}}
![Default featured image](/images/background.svg)
{{< /lead >}}

<small>  

#### Fonte  

**Tipo:** Content
**Link originale:** []()
**Data pubblicazione:** 2025-09-06

</small>  

---

## Sintesi

**WHAT** – Il paper, intitolato *The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity*, analizza i Large Reasoning Models (LRMs), cioè versioni di LLM progettate per il “ragionamento” tramite meccanismi come catene di pensiero e auto-riflessione.

**WHY** – L’obiettivo è capire i reali benefici e i limiti degli LRMs, andando oltre le metriche standard basate su benchmark matematici o di programmazione, spesso contaminati da dati di addestramento. Vengono introdotti ambienti di puzzle controllabili (Hanoi, River Crossing, Blocks World, ecc.) per testare sistematicamente la complessità dei problemi e analizzare sia le risposte finali sia le tracce di ragionamento.

**WHO** – Ricerca condotta da Apple Research, con contributi di Parshin Shojaee, Iman Mirzadeh, Keivan Alizadeh, Maxwell Horton, Samy Bengio, Mehrdad Farajtabar.

**WHERE** – Il lavoro si inserisce nel contesto accademico e industriale dell’AI, contribuendo al dibattito sulle capacità reali di ragionamento dei modelli linguistici.

**WHEN** – Pubblicato nel 2025.

**BUSINESS IMPACT:**

* **Opportunità:** Il paper fornisce insight critici per lo sviluppo e la valutazione di modelli AI avanzati, evidenziando dove gli LRMs offrono vantaggi (task di complessità media).
* **Rischi:** Gli LRMs collassano su problemi complessi e non sviluppano capacità di problem-solving generalizzabili, limitando l’affidabilità in contesti mission-critical.
* **Integrazione:** Necessità di nuove metriche e benchmark controllabili per misurare davvero la capacità di ragionamento.

**TECHNICAL SUMMARY:**

* **Metodologia:** Test in ambienti puzzle con simulazioni controllate.
* **Risultati chiave:**

  1. Tre regimi di complessità:

     * Bassa: LLM standard più efficienti e accurati.
     * Media: LRMs vantaggiosi grazie al ragionamento esplicito.
     * Alta: collasso totale per entrambi.
  2. Paradosso: con l’aumentare della difficoltà, i modelli riducono l’impegno di ragionamento pur avendo budget di token disponibile.
  3. Overthinking su task semplici, inefficienze nei processi di auto-correzione.
  4. Fallimento nell’esecuzione di algoritmi espliciti, con inconsistenze tra puzzle.
* **Limiti dichiarati:** i puzzle non coprono tutta la varietà di task reali e l’analisi si basa su API black-box.

---

## Casi d’uso

* **Benchmarking avanzato:** definizione di nuovi standard di valutazione per LLM e LRMs.
* **Strategic Intelligence:** comprensione dei limiti per evitare sovrastime delle capacità di ragionamento.
* **R\&D AI:** guida per future architetture e approcci di training.
* **Risk Management:** identificazione delle soglie di complessità oltre le quali i modelli collassano.

---

## Risorse

### Link Originali

* PDF: [*The Illusion of Thinking*](https://ml-site.cdn-apple.com/papers/the-illusion-of-thinking.pdf)

---

*<small>Articolo segnalato e selezionato dal team Human Technology eXcellence elaborato tramite intelligenza artificiale (in questo caso con LLM HTX-EU-Mistral3.1Small) il 2025-09-06 10:47
Fonte originale: [the-illusion-of-thinking.pdf](https://ml-site.cdn-apple.com/papers/the-illusion-of-thinking.pdf)</small>*

---

## Articoli Correlati

- [[2505.24864] ProRL: Prolonged Reinforcement Learning Expands Reasoning Boundaries in Large Language Models](/posts/2025/06/2505-24864-prorl-prolonged-reinforcement-learning/) - *LLM, Foundation Model*
- [DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning | Nature](/posts/2025/02/deepseek-r1-incentivizes-reasoning-in-llms-through/) - *LLM, AI, Best Practices*
- [[2505.03335v2] Absolute Zero: Reinforced Self-play Reasoning with Zero Data](/posts/2025/05/2505-03335v2-absolute-zero-reinforced-self-play-re/) - *Tech*