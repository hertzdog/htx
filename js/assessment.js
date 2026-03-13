/**
 * HTX AI Readiness Assessment — Form logic
 * Vanilla JS, no dependencies
 */
(function () {
  'use strict';

  var API_URL = 'https://assessment.ht-x.com/api/v1/assess';
  var TOTAL_STEPS = 6;
  var currentStep = 1;

  // Detect language from URL path
  var pathParts = window.location.pathname.split('/');
  var lang = 'en';
  var validLangs = ['it', 'en', 'fr', 'de', 'es'];
  if (pathParts.length > 1 && validLangs.indexOf(pathParts[1]) !== -1) {
    lang = pathParts[1];
  }

  // i18n error messages
  var msgs = {
    it: {
      required: 'Compila tutti i campi obbligatori.',
      email: 'Inserisci un indirizzo email valido.',
      radio: 'Seleziona un\'opzione per ogni domanda obbligatoria.',
      activity: 'Seleziona almeno un\'attività.',
      problem: 'Seleziona almeno un problema.',
      option: 'Seleziona almeno un\'opzione.',
      specify: 'Specifica il settore.',
      serverError: 'Errore del server',
      genericError: 'Si è verificato un errore: '
    },
    en: {
      required: 'Please fill in all required fields.',
      email: 'Please enter a valid email address.',
      radio: 'Please select an option for each required question.',
      activity: 'Please select at least one activity.',
      problem: 'Please select at least one problem.',
      option: 'Please select at least one option.',
      specify: 'Please specify your industry.',
      serverError: 'Server error',
      genericError: 'An error occurred: '
    },
    fr: {
      required: 'Veuillez remplir tous les champs obligatoires.',
      email: 'Veuillez entrer une adresse email valide.',
      radio: 'Veuillez sélectionner une option pour chaque question obligatoire.',
      activity: 'Veuillez sélectionner au moins une activité.',
      problem: 'Veuillez sélectionner au moins un problème.',
      option: 'Veuillez sélectionner au moins une option.',
      specify: 'Veuillez préciser votre secteur.',
      serverError: 'Erreur du serveur',
      genericError: 'Une erreur s\'est produite : '
    },
    de: {
      required: 'Bitte füllen Sie alle Pflichtfelder aus.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      radio: 'Bitte wählen Sie eine Option für jede Pflichtfrage.',
      activity: 'Bitte wählen Sie mindestens eine Aktivität.',
      problem: 'Bitte wählen Sie mindestens ein Problem.',
      option: 'Bitte wählen Sie mindestens eine Option.',
      specify: 'Bitte geben Sie Ihre Branche an.',
      serverError: 'Serverfehler',
      genericError: 'Ein Fehler ist aufgetreten: '
    },
    es: {
      required: 'Por favor, complete todos los campos obligatorios.',
      email: 'Por favor, introduzca una dirección de email válida.',
      radio: 'Por favor, seleccione una opción para cada pregunta obligatoria.',
      activity: 'Por favor, seleccione al menos una actividad.',
      problem: 'Por favor, seleccione al menos un problema.',
      option: 'Por favor, seleccione al menos una opción.',
      specify: 'Por favor, especifique su sector.',
      serverError: 'Error del servidor',
      genericError: 'Se ha producido un error: '
    }
  };

  function t(key) {
    return (msgs[lang] || msgs.en)[key] || msgs.en[key];
  }

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

  // -- Hide error on user interaction --
  form.addEventListener('input', hideError);
  form.addEventListener('change', hideError);

  // -- Clickable step indicators --
  stepIndicators.forEach(function (s) {
    s.style.cursor = 'pointer';
    s.addEventListener('click', function () {
      var target = parseInt(this.dataset.step);
      if (target < currentStep) {
        hideError();
        showStep(target);
      } else if (target > currentStep) {
        for (var i = currentStep; i < target; i++) {
          if (!validateStep(i)) return;
        }
        showStep(target);
      }
    });
  });

  // -- "Other" industry toggle --
  var settoreRadios = form.querySelectorAll('input[name="q1_4_settore"]');
  var altroInput = form.querySelector('input[name="q1_4_settore_altro"]');
  settoreRadios.forEach(function (r) {
    r.addEventListener('change', function () {
      altroInput.style.display = this.value === 'other' ? 'block' : 'none';
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

    progressBar.style.width = ((n / TOTAL_STEPS) * 100) + '%';
    stepIndicators.forEach(function (s) {
      var sn = parseInt(s.dataset.step);
      s.classList.toggle('active', sn === n);
      s.classList.toggle('done', sn < n);
    });

    try { sessionStorage.setItem('htx_assess_step', n); } catch (e) {}

    var formSection = document.getElementById('assessment-form');
    if (formSection) formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function validateStep(n) {
    hideError();

    var fieldset = form.querySelector('.htx-assess-fieldset[data-step="' + n + '"]');
    if (!fieldset) return true;

    // Required text/email inputs
    var inputs = fieldset.querySelectorAll('input[required]:not([type="radio"]):not([type="checkbox"])');
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value.trim()) {
        showError(t('required'));
        inputs[i].focus();
        return false;
      }
      if (inputs[i].type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs[i].value)) {
        showError(t('email'));
        inputs[i].focus();
        return false;
      }
    }

    // Required textareas
    var textareas = fieldset.querySelectorAll('textarea[required]');
    for (var j = 0; j < textareas.length; j++) {
      if (!textareas[j].value.trim()) {
        showError(t('required'));
        textareas[j].focus();
        return false;
      }
    }

    // Required radio groups
    var radioGroups = {};
    var radios = fieldset.querySelectorAll('input[type="radio"][required]');
    radios.forEach(function (r) { radioGroups[r.name] = true; });
    for (var name in radioGroups) {
      if (!fieldset.querySelector('input[name="' + name + '"]:checked')) {
        showError(t('radio'));
        return false;
      }
    }

    // Checkbox groups (at least one checked)
    if (n === 2) {
      if (fieldset.querySelectorAll('input[name="q2_2_attivita"]:checked').length === 0) {
        showError(t('activity'));
        return false;
      }
    }
    if (n === 3) {
      if (fieldset.querySelectorAll('input[name="q3_3_problemi"]:checked').length === 0) {
        showError(t('problem'));
        return false;
      }
    }
    if (n === 5) {
      if (fieldset.querySelectorAll('input[name="q5_2_vincoli"]:checked').length === 0) {
        showError(t('option'));
        return false;
      }
    }

    // Check "Other" industry
    if (n === 1) {
      var sel = fieldset.querySelector('input[name="q1_4_settore"]:checked');
      if (sel && sel.value === 'other' && !altroInput.value.trim()) {
        showError(t('specify'));
        altroInput.focus();
        return false;
      }
    }

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
            throw new Error(body.detail || t('serverError'));
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
        showError(t('genericError') + err.message);
      });
  });

  function collectFormData() {
    var d = {};
    d.lang = lang;

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

    var formSection = document.getElementById('assessment-form');
    if (formSection) formSection.style.display = 'none';

    resultsDiv.style.display = 'block';
    document.getElementById('result-prontezza').textContent = result.prontezza + '%';
    document.getElementById('result-impatto').textContent = result.impatto + '%';
    document.getElementById('result-quadrant').textContent = result.quadrant;

    var dlBtn = document.getElementById('result-download');
    dlBtn.href = result.pdf_url;

    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    try { sessionStorage.removeItem('htx_assess_step'); } catch (e) {}
  }

  try { sessionStorage.removeItem('htx_assess_step'); } catch (e) {}

})();
