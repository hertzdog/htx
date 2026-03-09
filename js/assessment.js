/**
 * HTX AI Readiness Assessment — Form logic
 * Vanilla JS, no dependencies
 */
(function () {
  'use strict';

  var API_URL = 'http://46.62.193.247:8002/api/v1/assess';
  var TOTAL_STEPS = 6;
  var currentStep = 1;

  // DOM refs
  var form = document.getElementById('assessment-form-el');
  var btnNext = document.getElementById('assess-next');
  var btnBack = document.getElementById('assess-back');
  var btnSubmit = document.getElementById('assess-submit');
  var progressBar = document.getElementById('assess-progress-bar');
  var stepIndicators = document.querySelectorAll('#assess-steps span');
  var errorDiv = document.getElementById('assess-error');
  var loadingDiv = document.getElementById('assess-loading');
  var resultsDiv = document.getElementById('assess-results');

  if (!form) return;

  // -- Clickable step indicators --
  stepIndicators.forEach(function (s) {
    s.style.cursor = 'pointer';
    s.addEventListener('click', function () {
      var target = parseInt(this.dataset.step);
      if (target < currentStep) {
        // Always allow going back
        hideError();
        showStep(target);
      } else if (target > currentStep) {
        // Validate all steps up to target before jumping forward
        for (var i = currentStep; i < target; i++) {
          if (!validateStep(i)) return;
        }
        showStep(target);
      }
    });
  });

  // -- "Altro" settore toggle --
  var settoreRadios = form.querySelectorAll('input[name="q1_4_settore"]');
  var altroInput = form.querySelector('input[name="q1_4_settore_altro"]');
  settoreRadios.forEach(function (r) {
    r.addEventListener('change', function () {
      altroInput.style.display = this.value === 'Altro (specificare)' ? 'block' : 'none';
    });
  });

  // -- Step navigation --
  function showStep(n) {
    currentStep = n;
    var fieldsets = form.querySelectorAll('.htx-assess-fieldset');
    fieldsets.forEach(function (fs) {
      fs.classList.toggle('active', parseInt(fs.dataset.step) === n);
    });

    btnBack.style.display = n > 1 ? '' : 'none';
    btnNext.style.display = n < TOTAL_STEPS ? '' : 'none';
    btnSubmit.style.display = n === TOTAL_STEPS ? '' : 'none';

    // Progress
    progressBar.style.width = ((n / TOTAL_STEPS) * 100) + '%';
    stepIndicators.forEach(function (s) {
      var sn = parseInt(s.dataset.step);
      s.classList.toggle('active', sn === n);
      s.classList.toggle('done', sn < n);
    });

    // Save progress
    try { sessionStorage.setItem('htx_assess_step', n); } catch (e) { /* noop */ }

    // Scroll to form
    var formSection = document.getElementById('assessment-form');
    if (formSection) formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function validateStep(n) {
    var fieldset = form.querySelector('.htx-assess-fieldset[data-step="' + n + '"]');
    if (!fieldset) return true;

    // Check required text/email inputs
    var inputs = fieldset.querySelectorAll('input[required]:not([type="radio"]):not([type="checkbox"])');
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value.trim()) {
        showError('Compila tutti i campi obbligatori.');
        inputs[i].focus();
        return false;
      }
      if (inputs[i].type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs[i].value)) {
        showError('Inserisci un indirizzo email valido.');
        inputs[i].focus();
        return false;
      }
    }

    // Check required textareas
    var textareas = fieldset.querySelectorAll('textarea[required]');
    for (var j = 0; j < textareas.length; j++) {
      if (!textareas[j].value.trim()) {
        showError('Compila tutti i campi obbligatori.');
        textareas[j].focus();
        return false;
      }
    }

    // Check required radio groups
    var radioGroups = {};
    var radios = fieldset.querySelectorAll('input[type="radio"][required]');
    radios.forEach(function (r) { radioGroups[r.name] = true; });
    for (var name in radioGroups) {
      if (!fieldset.querySelector('input[name="' + name + '"]:checked')) {
        showError('Seleziona un\'opzione per ogni domanda obbligatoria.');
        return false;
      }
    }

    // Check checkbox groups (at least one checked for required groups)
    if (n === 2) {
      var act = fieldset.querySelectorAll('input[name="q2_2_attivita"]:checked');
      if (act.length === 0) {
        showError('Seleziona almeno un\'attività.');
        return false;
      }
    }
    if (n === 3) {
      var prob = fieldset.querySelectorAll('input[name="q3_3_problemi"]:checked');
      if (prob.length === 0) {
        showError('Seleziona almeno un problema.');
        return false;
      }
    }
    if (n === 5) {
      var vinc = fieldset.querySelectorAll('input[name="q5_2_vincoli"]:checked');
      if (vinc.length === 0) {
        showError('Seleziona almeno un\'opzione.');
        return false;
      }
    }

    // Check "Altro" settore
    if (n === 1) {
      var sel = fieldset.querySelector('input[name="q1_4_settore"]:checked');
      if (sel && sel.value === 'Altro (specificare)' && !altroInput.value.trim()) {
        showError('Specifica il settore.');
        altroInput.focus();
        return false;
      }
    }

    hideError();
    return true;
  }

  function showError(msg) {
    errorDiv.textContent = msg;
    errorDiv.style.display = 'block';
  }

  function hideError() {
    errorDiv.style.display = 'none';
  }

  btnNext.addEventListener('click', function () {
    if (validateStep(currentStep)) {
      showStep(currentStep + 1);
    }
  });

  btnBack.addEventListener('click', function () {
    hideError();
    showStep(currentStep - 1);
  });

  // -- Form submission --
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    hideError();
    form.style.display = 'none';
    document.querySelector('.htx-assess-nav').style.display = 'none';
    document.querySelector('.htx-assess-progress').style.display = 'none';
    document.querySelector('#assess-steps').style.display = 'none';
    loadingDiv.style.display = 'flex';

    var data = collectFormData();

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (res) {
        if (!res.ok) {
          return res.json().then(function (body) {
            throw new Error(body.detail || 'Errore del server');
          });
        }
        return res.json();
      })
      .then(function (result) {
        showResults(result);
      })
      .catch(function (err) {
        loadingDiv.style.display = 'none';
        form.style.display = '';
        document.querySelector('.htx-assess-nav').style.display = '';
        document.querySelector('.htx-assess-progress').style.display = '';
        document.querySelector('#assess-steps').style.display = '';
        showError('Si è verificato un errore: ' + err.message);
      });
  });

  function collectFormData() {
    var d = {};

    // Text/email inputs
    d.q1_1_azienda = val('q1_1_azienda');
    d.q1_2_ruolo = val('q1_2_ruolo');
    d.q1_3_dimensione = radio('q1_3_dimensione');
    d.q1_4_settore = radio('q1_4_settore');
    d.q1_4_settore_altro = val('q1_4_settore_altro');

    d.q2_1_giornata = val('q2_1_giornata');
    d.q2_2_attivita = checkboxes('q2_2_attivita');
    d.q2_3_tempo = val('q2_3_tempo');

    d.q3_1_ripetitivo = val('q3_1_ripetitivo');
    d.q3_2_trasferimento = parseInt(radio('q3_2_trasferimento')) || 1;
    d.q3_3_problemi = checkboxes('q3_3_problemi');
    d.q3_4_excel = val('q3_4_excel');

    d.q4_1_tentativi = radio('q4_1_tentativi');
    d.q4_2_soluzioni = val('q4_2_soluzioni');
    d.q4_3_urgenza = parseInt(radio('q4_3_urgenza')) || 1;

    d.q5_1_dati_sensibili = radio('q5_1_dati_sensibili');
    d.q5_2_vincoli = checkboxes('q5_2_vincoli');
    d.q5_3_rinuncia_privacy = radio('q5_3_rinuncia_privacy');

    d.q6_1_problema_magico = val('q6_1_problema_magico');
    d.q6_2_disponibilita = radio('q6_2_disponibilita');
    d.q6_3_email = val('q6_3_email');

    return d;
  }

  function val(name) {
    var el = form.querySelector('[name="' + name + '"]');
    return el ? el.value.trim() : '';
  }

  function radio(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : '';
  }

  function checkboxes(name) {
    var checked = form.querySelectorAll('input[name="' + name + '"]:checked');
    return Array.prototype.map.call(checked, function (c) { return c.value; });
  }

  function showResults(result) {
    loadingDiv.style.display = 'none';

    // Hide form section content
    var formSection = document.getElementById('assessment-form');
    if (formSection) formSection.style.display = 'none';

    // Show results
    resultsDiv.style.display = 'block';
    document.getElementById('result-prontezza').textContent = result.prontezza + '%';
    document.getElementById('result-impatto').textContent = result.impatto + '%';
    document.getElementById('result-quadrant').textContent = result.quadrant;

    var dlBtn = document.getElementById('result-download');
    dlBtn.href = result.pdf_url;

    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Clear session storage
    try { sessionStorage.removeItem('htx_assess_step'); } catch (e) { /* noop */ }
  }

  // -- Clear saved step on fresh load (avoid landing on step 6 with empty form) --
  try { sessionStorage.removeItem('htx_assess_step'); } catch (e) { /* noop */ }

})();
