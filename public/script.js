const button = document.querySelector('.menu-button');
const links = document.querySelector('.nav-links');
if (button && links) {
  button.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      links.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const launch = window.GYMPROGRES_LAUNCH || {};
const storeLabels = {
  googlePlay: 'Pobierz w Google Play',
  appStore: 'Pobierz w App Store'
};

let liveStores = 0;
let knownStores = 0;

document.querySelectorAll('.store-link[data-store]').forEach((link) => {
  const store = link.dataset.store;
  const config = launch[store] || {};
  knownStores += 1;

  if (config.live === true && typeof config.url === 'string' && config.url.trim()) {
    link.href = config.url.trim();
    link.textContent = storeLabels[store] || 'Pobierz aplikację';
    link.removeAttribute('aria-disabled');
    link.classList.remove('is-disabled');
    link.target = '_blank';
    link.rel = 'noopener';
    liveStores += 1;
    return;
  }

  link.removeAttribute('href');
  link.setAttribute('aria-disabled', 'true');
  link.classList.add('is-disabled');
  link.addEventListener('click', (event) => event.preventDefault());
});

const launchNote = document.querySelector('[data-launch-note]');
if (launchNote && knownStores > 0) {
  if (liveStores === knownStores) {
    launchNote.textContent =
      'GymProgres jest dostępny w Google Play i App Store. Wersja webowa pozostaje dostępna dla istniejących kont.';
  } else if (liveStores > 0) {
    launchNote.textContent =
      'GymProgres jest już dostępny w jednym ze sklepów. Publikacja drugiej wersji mobilnej jest w toku.';
  }
}
