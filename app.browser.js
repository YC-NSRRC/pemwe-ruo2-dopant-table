const STORAGE_KEY = 'pemwe-periodic-literature-v1';

const ELEMENTS = [
  { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', group: 1, period: 1, category: 'nonmetal' },
  { atomicNumber: 2, symbol: 'He', name: 'Helium', group: 18, period: 1, category: 'noble-gas' },
  { atomicNumber: 3, symbol: 'Li', name: 'Lithium', group: 1, period: 2, category: 'alkali-metal' },
  { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', group: 2, period: 2, category: 'alkaline-earth' },
  { atomicNumber: 5, symbol: 'B', name: 'Boron', group: 13, period: 2, category: 'metalloid' },
  { atomicNumber: 6, symbol: 'C', name: 'Carbon', group: 14, period: 2, category: 'nonmetal' },
  { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', group: 15, period: 2, category: 'nonmetal' },
  { atomicNumber: 8, symbol: 'O', name: 'Oxygen', group: 16, period: 2, category: 'nonmetal' },
  { atomicNumber: 9, symbol: 'F', name: 'Fluorine', group: 17, period: 2, category: 'halogen' },
  { atomicNumber: 10, symbol: 'Ne', name: 'Neon', group: 18, period: 2, category: 'noble-gas' },
  { atomicNumber: 11, symbol: 'Na', name: 'Sodium', group: 1, period: 3, category: 'alkali-metal' },
  { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', group: 2, period: 3, category: 'alkaline-earth' },
  { atomicNumber: 13, symbol: 'Al', name: 'Aluminium', group: 13, period: 3, category: 'post-transition-metal' },
  { atomicNumber: 14, symbol: 'Si', name: 'Silicon', group: 14, period: 3, category: 'metalloid' },
  { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', group: 15, period: 3, category: 'nonmetal' },
  { atomicNumber: 16, symbol: 'S', name: 'Sulfur', group: 16, period: 3, category: 'nonmetal' },
  { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', group: 17, period: 3, category: 'halogen' },
  { atomicNumber: 18, symbol: 'Ar', name: 'Argon', group: 18, period: 3, category: 'noble-gas' },
  { atomicNumber: 19, symbol: 'K', name: 'Potassium', group: 1, period: 4, category: 'alkali-metal' },
  { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', group: 2, period: 4, category: 'alkaline-earth' },
  { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', group: 3, period: 4, category: 'transition-metal' },
  { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', group: 4, period: 4, category: 'transition-metal' },
  { atomicNumber: 23, symbol: 'V', name: 'Vanadium', group: 5, period: 4, category: 'transition-metal' },
  { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', group: 6, period: 4, category: 'transition-metal' },
  { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', group: 7, period: 4, category: 'transition-metal' },
  { atomicNumber: 26, symbol: 'Fe', name: 'Iron', group: 8, period: 4, category: 'transition-metal' },
  { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', group: 9, period: 4, category: 'transition-metal' },
  { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', group: 10, period: 4, category: 'transition-metal' },
  { atomicNumber: 29, symbol: 'Cu', name: 'Copper', group: 11, period: 4, category: 'transition-metal' },
  { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', group: 12, period: 4, category: 'transition-metal' },
  { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', group: 13, period: 4, category: 'post-transition-metal' },
  { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', group: 14, period: 4, category: 'metalloid' },
  { atomicNumber: 33, symbol: 'As', name: 'Arsenic', group: 15, period: 4, category: 'metalloid' },
  { atomicNumber: 34, symbol: 'Se', name: 'Selenium', group: 16, period: 4, category: 'nonmetal' },
  { atomicNumber: 35, symbol: 'Br', name: 'Bromine', group: 17, period: 4, category: 'halogen' },
  { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', group: 18, period: 4, category: 'noble-gas' },
  { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', group: 1, period: 5, category: 'alkali-metal' },
  { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', group: 2, period: 5, category: 'alkaline-earth' },
  { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', group: 3, period: 5, category: 'transition-metal' },
  { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', group: 4, period: 5, category: 'transition-metal' },
  { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', group: 5, period: 5, category: 'transition-metal' },
  { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', group: 6, period: 5, category: 'transition-metal' },
  { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', group: 7, period: 5, category: 'transition-metal' },
  { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', group: 8, period: 5, category: 'transition-metal' },
  { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', group: 9, period: 5, category: 'transition-metal' },
  { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', group: 10, period: 5, category: 'transition-metal' },
  { atomicNumber: 47, symbol: 'Ag', name: 'Silver', group: 11, period: 5, category: 'transition-metal' },
  { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', group: 12, period: 5, category: 'transition-metal' },
  { atomicNumber: 49, symbol: 'In', name: 'Indium', group: 13, period: 5, category: 'post-transition-metal' },
  { atomicNumber: 50, symbol: 'Sn', name: 'Tin', group: 14, period: 5, category: 'post-transition-metal' },
  { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', group: 15, period: 5, category: 'metalloid' },
  { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', group: 16, period: 5, category: 'metalloid' },
  { atomicNumber: 53, symbol: 'I', name: 'Iodine', group: 17, period: 5, category: 'halogen' },
  { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', group: 18, period: 5, category: 'noble-gas' },
  { atomicNumber: 55, symbol: 'Cs', name: 'Caesium', group: 1, period: 6, category: 'alkali-metal' },
  { atomicNumber: 56, symbol: 'Ba', name: 'Barium', group: 2, period: 6, category: 'alkaline-earth' },
  { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', group: 3, period: 6, category: 'lanthanide' },
  { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', group: 4, period: 8, category: 'lanthanide' },
  { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', group: 5, period: 8, category: 'lanthanide' },
  { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', group: 6, period: 8, category: 'lanthanide' },
  { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', group: 7, period: 8, category: 'lanthanide' },
  { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', group: 8, period: 8, category: 'lanthanide' },
  { atomicNumber: 63, symbol: 'Eu', name: 'Europium', group: 9, period: 8, category: 'lanthanide' },
  { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', group: 10, period: 8, category: 'lanthanide' },
  { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', group: 11, period: 8, category: 'lanthanide' },
  { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', group: 12, period: 8, category: 'lanthanide' },
  { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', group: 13, period: 8, category: 'lanthanide' },
  { atomicNumber: 68, symbol: 'Er', name: 'Erbium', group: 14, period: 8, category: 'lanthanide' },
  { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', group: 15, period: 8, category: 'lanthanide' },
  { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', group: 16, period: 8, category: 'lanthanide' },
  { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', group: 17, period: 8, category: 'lanthanide' },
  { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', group: 4, period: 6, category: 'transition-metal' },
  { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', group: 5, period: 6, category: 'transition-metal' },
  { atomicNumber: 74, symbol: 'W', name: 'Tungsten', group: 6, period: 6, category: 'transition-metal' },
  { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', group: 7, period: 6, category: 'transition-metal' },
  { atomicNumber: 76, symbol: 'Os', name: 'Osmium', group: 8, period: 6, category: 'transition-metal' },
  { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', group: 9, period: 6, category: 'transition-metal' },
  { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', group: 10, period: 6, category: 'transition-metal' },
  { atomicNumber: 79, symbol: 'Au', name: 'Gold', group: 11, period: 6, category: 'transition-metal' },
  { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', group: 12, period: 6, category: 'transition-metal' },
  { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', group: 13, period: 6, category: 'post-transition-metal' },
  { atomicNumber: 82, symbol: 'Pb', name: 'Lead', group: 14, period: 6, category: 'post-transition-metal' },
  { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', group: 15, period: 6, category: 'post-transition-metal' },
  { atomicNumber: 84, symbol: 'Po', name: 'Polonium', group: 16, period: 6, category: 'post-transition-metal' },
  { atomicNumber: 85, symbol: 'At', name: 'Astatine', group: 17, period: 6, category: 'halogen' },
  { atomicNumber: 86, symbol: 'Rn', name: 'Radon', group: 18, period: 6, category: 'noble-gas' },
  { atomicNumber: 87, symbol: 'Fr', name: 'Francium', group: 1, period: 7, category: 'alkali-metal' },
  { atomicNumber: 88, symbol: 'Ra', name: 'Radium', group: 2, period: 7, category: 'alkaline-earth' },
  { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', group: 3, period: 7, category: 'actinide' },
  { atomicNumber: 90, symbol: 'Th', name: 'Thorium', group: 4, period: 9, category: 'actinide' },
  { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', group: 5, period: 9, category: 'actinide' },
  { atomicNumber: 92, symbol: 'U', name: 'Uranium', group: 6, period: 9, category: 'actinide' },
  { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', group: 7, period: 9, category: 'actinide' },
  { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', group: 8, period: 9, category: 'actinide' },
  { atomicNumber: 95, symbol: 'Am', name: 'Americium', group: 9, period: 9, category: 'actinide' },
  { atomicNumber: 96, symbol: 'Cm', name: 'Curium', group: 10, period: 9, category: 'actinide' },
  { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', group: 11, period: 9, category: 'actinide' },
  { atomicNumber: 98, symbol: 'Cf', name: 'Californium', group: 12, period: 9, category: 'actinide' },
  { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', group: 13, period: 9, category: 'actinide' },
  { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', group: 14, period: 9, category: 'actinide' },
  { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', group: 15, period: 9, category: 'actinide' },
  { atomicNumber: 102, symbol: 'No', name: 'Nobelium', group: 16, period: 9, category: 'actinide' },
  { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', group: 17, period: 9, category: 'actinide' },
  { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', group: 4, period: 7, category: 'transition-metal' },
  { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', group: 5, period: 7, category: 'transition-metal' },
  { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', group: 6, period: 7, category: 'transition-metal' },
  { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', group: 7, period: 7, category: 'transition-metal' },
  { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', group: 8, period: 7, category: 'transition-metal' },
  { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', group: 9, period: 7, category: 'transition-metal' },
  { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', group: 10, period: 7, category: 'transition-metal' },
  { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', group: 11, period: 7, category: 'transition-metal' },
  { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', group: 12, period: 7, category: 'transition-metal' },
  { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', group: 13, period: 7, category: 'post-transition-metal' },
  { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', group: 14, period: 7, category: 'post-transition-metal' },
  { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', group: 15, period: 7, category: 'post-transition-metal' },
  { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', group: 16, period: 7, category: 'post-transition-metal' },
  { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', group: 17, period: 7, category: 'halogen' },
  { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', group: 18, period: 7, category: 'noble-gas' },
];

const CATEGORY_LABELS = {
  'nonmetal': 'Reactive nonmetal',
  'noble-gas': 'Noble gas',
  'alkali-metal': 'Alkali metal',
  'alkaline-earth': 'Alkaline earth',
  'metalloid': 'Metalloid',
  'halogen': 'Halogen',
  'transition-metal': 'Transition metal',
  'post-transition-metal': 'Post-transition metal',
  'lanthanide': 'Lanthanide',
  'actinide': 'Actinide',
};

function createDefaultEntry() {
  return {
    title: '',
    journalInfo: '',
    publicationYear: '',
    publicationId: '',
    sampleName: '',
    synthesis: '',
    activity: '',
    stability: '',
    notes: '',
    pdfFileName: '',
    pdfFileSize: '',
    pdfUploadedAt: '',
    updatedAt: '',
  };
}

function createAllDefaults() {
  return Object.fromEntries(ELEMENTS.map((element) => [element.symbol, createDefaultEntry(element.symbol)]));
}

function hasLocalEntryContent(entry = {}) {
  return Boolean(
    entry.title || entry.journalInfo || entry.publicationYear || entry.publicationId ||
    entry.sampleName || entry.synthesis || entry.activity || entry.stability || entry.notes ||
    entry.pdfFileName || entry.pdfFileSize || entry.pdfUploadedAt || entry.updatedAt ||
    (Array.isArray(entry.articles) && entry.articles.some((article) => hasLocalEntryContent(article)))
  );
}

function getEntryArticles(entry = {}) {
  if (Array.isArray(entry.articles)) {
    return entry.articles
      .filter((article) => hasLocalEntryContent(article))
      .map((article) => ({
        ...createDefaultEntry(),
        ...article,
      }));
  }

  if (hasLocalEntryContent(entry)) {
    return [{
      ...createDefaultEntry(),
      ...entry,
    }];
  }

  return [];
}

function loadEntries(storage = globalThis.localStorage, aiEntries = globalThis.PEMWE_AI_ENTRIES || {}) {
  const defaults = createAllDefaults();

  for (const element of ELEMENTS) {
    defaults[element.symbol] = {
      ...defaults[element.symbol],
      ...(aiEntries[element.symbol] || {}),
    };
  }

  if (!storage) {
    return defaults;
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    for (const element of ELEMENTS) {
      if (!hasLocalEntryContent(parsed[element.symbol])) {
        continue;
      }
      defaults[element.symbol] = {
        ...defaults[element.symbol],
        ...parsed[element.symbol],
      };
    }
  } catch {
    return defaults;
  }

  return defaults;
}

function saveEntries(storage = globalThis.localStorage, entries) {
  if (!storage) {
    return;
  }
  storage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function snapshotPayload(element, entry) {
  const headingPrefix = element.symbol === 'Ru' ? 'RuO2 core' : `RuO2 doped with ${element.symbol}`;

  return {
    heading: `${headingPrefix} - ${element.name} (${element.atomicNumber})`,
    subheading: `${CATEGORY_LABELS[element.category] || 'Element'} dopant literature note`,
    rows: [
      { label: 'Article title', value: entry.title || 'Not specified' },
      { label: 'Journal', value: entry.journalInfo || 'Not specified' },
      { label: 'Year', value: entry.publicationYear || 'Not specified' },
      { label: 'Volume/pages/article no.', value: entry.publicationId || 'Not specified' },
      { label: 'Sample name', value: entry.sampleName || 'Not specified' },
      { label: 'Synthesis method', value: entry.synthesis || 'Not specified' },
      { label: 'PEMWE activity', value: entry.activity || 'Not specified' },
      { label: 'PEMWE stability', value: entry.stability || 'Not specified' },
      { label: 'PDF file', value: entry.pdfFileName || 'Not uploaded' },
      { label: 'Remarks', value: entry.notes || 'Not specified' },
    ],
  };
}

function summarizeText(text, fallback, maxLength = 130) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (!clean) {
    return fallback;
  }
  return clean.length > maxLength ? `${clean.slice(0, maxLength - 3)}...` : clean;
}

function articleSummaryLine(article = {}, index = 0) {
  const sampleName = summarizeText(article.sampleName, 'Sample not specified', 46);
  const stability = summarizeText(article.stability, 'Not specified', 62);
  const journalAndId = summarizeText(
    [article.journalInfo, article.publicationId].filter(Boolean).join(', '),
    'Journal information not specified',
    70,
  );
  const title = summarizeText(article.title, 'Title not specified', 92);

  return `Article ${index + 1} | ${sampleName} | PEMWE stability: ${stability} | ${journalAndId} | ${title}`;
}

function initApp() {
  const table = document.querySelector('[data-periodic-table]');
  const modal = document.querySelector('[data-modal]');
  const indexModal = document.querySelector('[data-index-modal]');
  const status = document.querySelector('[data-status]');
  const filledCount = document.querySelector('[data-filled-count]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalMeta = document.querySelector('[data-modal-meta]');
  const openIndexButton = document.querySelector('[data-open-index]');
  const closeIndexButton = document.querySelector('[data-close-index]');
  const indexByElement = document.querySelector('[data-index-by-element]');
  const indexByCount = document.querySelector('[data-index-by-count]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');
  const form = document.querySelector('[data-editor-form]');
  const summaryPanel = document.querySelector('[data-entry-summary]');
  const summaryList = document.querySelector('[data-entry-summary-list]');
  const manualEditButton = document.querySelector('[data-manual-edit]');
  const editorFields = document.querySelector('[data-editor-fields]');
  const editorActions = document.querySelector('[data-editor-actions]');
  const summaryViewButton = document.querySelector('[data-summary-view]');
  const saveButton = document.querySelector('[data-save-entry]');
  const downloadButton = document.querySelector('[data-download-png]');
  const copyButton = document.querySelector('[data-copy-png]');
  const fields = {
    title: document.querySelector('[name="title"]'),
    journalInfo: document.querySelector('[name="journalInfo"]'),
    publicationYear: document.querySelector('[name="publicationYear"]'),
    publicationId: document.querySelector('[name="publicationId"]'),
    sampleName: document.querySelector('[name="sampleName"]'),
    synthesis: document.querySelector('[name="synthesis"]'),
    activity: document.querySelector('[name="activity"]'),
    stability: document.querySelector('[name="stability"]'),
    notes: document.querySelector('[name="notes"]'),
  };

  let entries = loadEntries();
  let activeElement = null;
  let activeArticleIndex = 0;
  let activePdfMeta = { pdfFileName: '', pdfFileSize: '', pdfUploadedAt: '' };

  function showStatus(message) {
    status.textContent = message;
    clearTimeout(showStatus.timer);
    showStatus.timer = setTimeout(() => {
      status.textContent = 'Ready';
    }, 2600);
  }

  function updateFilledCount() {
    const count = Object.values(entries).filter((entry) => getEntryArticles(entry).length).length;
    filledCount.textContent = `${count} / ${ELEMENTS.length}`;
  }

  function renderTable() {
    table.innerHTML = '';

    for (const element of ELEMENTS) {
      const entry = entries[element.symbol] || createDefaultEntry();
      const articleCount = getEntryArticles(entry).length;
      const isRuCore = element.symbol === 'Ru';
      const button = document.createElement('button');
      button.className = `element-card ${element.category}`;
      button.style.gridColumn = String(element.group);
      button.style.gridRow = String(element.period);
      button.type = 'button';
      button.disabled = isRuCore;
      button.dataset.symbol = element.symbol;
      button.setAttribute('aria-label', isRuCore ? 'RuO2 core marker' : `${element.name}, ${element.symbol}`);
      button.innerHTML = `
        <span class="atomic-number">${element.atomicNumber}</span>
        <span class="symbol">${element.symbol}</span>
        <span class="element-name">${isRuCore ? 'RuO2 core' : element.name}</span>
        <span class="article-count" aria-label="${articleCount} articles">${articleCount || ''}</span>
      `;
      if (isRuCore) {
        button.classList.add('ruo2-core');
      }
      if (articleCount) {
        button.classList.add('has-entry');
      }
      if (!isRuCore) {
        button.addEventListener('click', () => openEditor(element));
      }
      table.append(button);
    }
  }

  function getIndexedElements() {
    return ELEMENTS
      .filter((element) => element.symbol !== 'Ru')
      .map((element) => ({
        ...element,
        articleCount: getEntryArticles(entries[element.symbol] || createDefaultEntry()).length,
      }))
      .filter((element) => element.articleCount > 0);
  }

  function createIndexElementLink(element) {
    const link = document.createElement('a');
    link.href = `#${element.symbol}`;
    link.className = 'index-link';
    link.setAttribute('data-index-symbol', element.symbol);
    link.innerHTML = `
      <span class="index-symbol">${element.symbol}</span>
      <span class="index-name">${element.name}</span>
      <span class="index-count">${element.articleCount} ${element.articleCount === 1 ? 'article' : 'articles'}</span>
    `;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      indexModal.close();
      openEditor(element);
    });
    return link;
  }

  function renderLiteratureIndex() {
    const indexedElements = getIndexedElements();

    indexByElement.innerHTML = '';
    indexByCount.innerHTML = '';

    if (!indexedElements.length) {
      const empty = document.createElement('p');
      empty.className = 'index-empty';
      empty.textContent = 'No literature entries have been recorded yet.';
      indexByElement.append(empty.cloneNode(true));
      indexByCount.append(empty);
      return;
    }

    for (const element of indexedElements) {
      indexByElement.append(createIndexElementLink(element));
    }

    const grouped = new Map();
    for (const element of indexedElements) {
      const current = grouped.get(element.articleCount) || [];
      current.push(element);
      grouped.set(element.articleCount, current);
    }
    for (const count of [...grouped.keys()].sort((a, b) => b - a)) {
      const group = document.createElement('section');
      const heading = document.createElement('h4');
      const links = document.createElement('div');

      group.className = 'index-count-group';
      heading.textContent = `${count} ${count === 1 ? 'article' : 'articles'}`;
      links.className = 'index-chip-list';

      for (const element of grouped.get(count).sort((a, b) => a.atomicNumber - b.atomicNumber)) {
        links.append(createIndexElementLink(element));
      }

      group.append(heading, links);
      indexByCount.append(group);
    }
  }

  function openEditor(element) {
    activeElement = element;
    const entry = entries[element.symbol] || createDefaultEntry(element.symbol);
    const article = getEntryArticles(entry)[0] || createDefaultEntry(element.symbol);
    activeArticleIndex = 0;
    modalTitle.textContent = element.symbol === 'Ru' ? 'RuO2 core' : `RuO2 doped with ${element.symbol}`;
    modalMeta.textContent = `${element.name} - atomic number ${element.atomicNumber} - ${CATEGORY_LABELS[element.category] || 'Element'}`;
    renderEntrySummary(element, entry);
    setFormValues(article);
    setEditorMode('summary');
    modal.showModal();
    manualEditButton.focus();
  }

  function closeEditor() {
    modal.close();
    activeElement = null;
    activeArticleIndex = 0;
    activePdfMeta = { pdfFileName: '', pdfFileSize: '', pdfUploadedAt: '' };
    setEditorMode('summary');
  }

  function setEditorMode(mode) {
    const isManual = mode === 'manual';
    summaryPanel.hidden = isManual;
    editorFields.hidden = !isManual;
    editorActions.hidden = !isManual;
    if (isManual) {
      fields.title.focus();
    }
  }

  function renderEntrySummary(element, entry) {
    const articles = getEntryArticles(entry);

    summaryList.innerHTML = '';

    if (!articles.length) {
      summaryList.append(renderArticleSummary({
        title: `${element.symbol} has no literature entries yet`,
        notes: 'Ask Codex to extract a PDF, or add a manual article entry.',
      }, 0, false));
      return;
    }

    for (const [index, article] of articles.entries()) {
      summaryList.append(renderArticleSummary(article, index));
    }
  }

  function renderArticleSummary(article, index, actionable = true) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const detailList = document.createElement('dl');
    const actions = document.createElement('div');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    details.className = 'entry-summary-card';
    summary.className = 'summary-bullet';
    detailList.className = 'summary-detail-list';
    actions.className = 'article-actions';
    summary.textContent = articleSummaryLine(article, index);

    editButton.type = 'button';
    editButton.className = 'secondary-button compact-button';
    editButton.setAttribute('data-article-edit', String(index));
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editArticle(index));

    deleteButton.type = 'button';
    deleteButton.className = 'secondary-button compact-button danger-button';
    deleteButton.setAttribute('data-article-delete', String(index));
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteArticle(index));

    for (const [label, value] of buildSummaryCards(article)) {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const description = document.createElement('dd');

      row.className = 'detail-row';
      term.textContent = label;
      description.textContent = value;
      row.append(term, description);
      detailList.append(row);
    }

    details.append(summary, detailList);
    if (actionable) {
      actions.append(editButton, deleteButton);
      details.append(actions);
    }
    return details;
  }

  function setFormValues(article = createDefaultEntry()) {
    activePdfMeta = {
      pdfFileName: article.pdfFileName || '',
      pdfFileSize: article.pdfFileSize || '',
      pdfUploadedAt: article.pdfUploadedAt || '',
    };
    fields.title.value = article.title || '';
    fields.journalInfo.value = article.journalInfo || '';
    fields.publicationYear.value = article.publicationYear || '';
    fields.publicationId.value = article.publicationId || '';
    fields.sampleName.value = article.sampleName || '';
    fields.synthesis.value = article.synthesis || '';
    fields.activity.value = article.activity || '';
    fields.stability.value = article.stability || '';
    fields.notes.value = article.notes || '';
  }

  function normalizeEntryArticles(articles, fallbackEntry = createDefaultEntry()) {
    const filledArticles = articles.filter((article) => hasLocalEntryContent(article));

    if (!filledArticles.length) {
      return {
        ...createDefaultEntry(),
        articles: [],
        updatedAt: new Date().toISOString(),
      };
    }

    return {
      ...fallbackEntry,
      ...filledArticles[0],
      articles: filledArticles,
    };
  }

  function editArticle(articleIndex) {
    if (!activeElement) {
      return;
    }

    const entry = entries[activeElement.symbol] || createDefaultEntry(activeElement.symbol);
    const articles = getEntryArticles(entry);
    const article = articles[articleIndex] || createDefaultEntry(activeElement.symbol);
    activeArticleIndex = articleIndex;
    setFormValues(article);
    setEditorMode('manual');
  }

  function startNewArticle() {
    if (!activeElement) {
      return;
    }

    const entry = entries[activeElement.symbol] || createDefaultEntry(activeElement.symbol);
    activeArticleIndex = getEntryArticles(entry).length;
    setFormValues(createDefaultEntry(activeElement.symbol));
    setEditorMode('manual');
  }

  function deleteArticle(articleIndex) {
    if (!activeElement) {
      return;
    }

    const currentEntry = entries[activeElement.symbol] || createDefaultEntry(activeElement.symbol);
    const nextArticles = getEntryArticles(currentEntry);
    nextArticles.splice(articleIndex, 1);
    const nextEntry = normalizeEntryArticles(nextArticles);
    entries = {
      ...entries,
      [activeElement.symbol]: nextEntry,
    };
    activeArticleIndex = 0;
    saveEntries(localStorage, entries);
    renderEntrySummary(activeElement, nextEntry);
    renderTable();
    renderLiteratureIndex();
    updateFilledCount();
    showStatus(`${activeElement.symbol} article deleted`);
  }

  function buildSummaryCards(article) {
    return [
      ['Article title', article.title],
      ['Journal information', article.journalInfo],
      ['Publication year', article.publicationYear],
      ['Volume/pages/article number', article.publicationId],
      ['Sample name', article.sampleName],
      ['Synthesis method', article.synthesis],
      ['PEMWE activity', article.activity],
      ['PEMWE stability', article.stability],
      ['Mechanism and remarks', article.notes],
      ['PDF file', article.pdfFileName],
    ].filter(([, value]) => Boolean(value));
  }

  function collectEntry() {
    return {
      title: fields.title.value.trim(),
      journalInfo: fields.journalInfo.value.trim(),
      publicationYear: fields.publicationYear.value.trim(),
      publicationId: fields.publicationId.value.trim(),
      sampleName: fields.sampleName.value.trim(),
      synthesis: fields.synthesis.value.trim(),
      activity: fields.activity.value.trim(),
      stability: fields.stability.value.trim(),
      notes: fields.notes.value.trim(),
      ...activePdfMeta,
      updatedAt: new Date().toISOString(),
    };
  }

  function persistActiveEntry() {
    if (!activeElement) {
      return null;
    }

    const nextEntry = collectEntry();
    const currentEntry = entries[activeElement.symbol] || createDefaultEntry(activeElement.symbol);
    const existingArticles = getEntryArticles(currentEntry);
    const nextArticles = [...existingArticles];
    if (activeArticleIndex >= nextArticles.length) {
      nextArticles.push(nextEntry);
    } else {
      nextArticles[activeArticleIndex] = nextEntry;
    }
    const normalizedEntry = normalizeEntryArticles(nextArticles, nextEntry);
    entries = {
      ...entries,
      [activeElement.symbol]: normalizedEntry,
    };
    saveEntries(localStorage, entries);
    renderEntrySummary(activeElement, normalizedEntry);
    renderTable();
    renderLiteratureIndex();
    updateFilledCount();
    showStatus(`${activeElement.symbol} entry saved`);
    return nextEntry;
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 6) {
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = '';

    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
      if (lines.length === maxLines - 1) {
        break;
      }
    }
    if (line) {
      lines.push(line);
    }

    for (let index = 0; index < Math.min(lines.length, maxLines); index += 1) {
      const suffix = index === maxLines - 1 && words.length > lines.join(' ').split(/\s+/).length ? '...' : '';
      ctx.fillText(`${lines[index]}${suffix}`, x, y + index * lineHeight);
    }

    return y + Math.min(lines.length, maxLines) * lineHeight;
  }

  function createSnapshotCanvas(element, entry) {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1600;
    const ctx = canvas.getContext('2d');
    const payload = snapshotPayload(element, entry);

    ctx.fillStyle = '#f7f8fb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#101623';
    ctx.fillRect(0, 0, canvas.width, 220);
    ctx.fillStyle = '#6bd0c7';
    ctx.fillRect(0, 216, canvas.width, 8);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 76px Arial';
    ctx.fillText(payload.heading, 96, 118);
    ctx.font = '400 28px Arial';
    ctx.fillText(`PEMWE literature note - ${payload.subheading}`, 100, 172);

    let y = 300;
    for (const row of payload.rows) {
      ctx.fillStyle = '#dfe5ef';
      ctx.fillRect(96, y - 42, 1408, 2);
      ctx.fillStyle = '#526071';
      ctx.font = '700 24px Arial';
      ctx.fillText(row.label.toUpperCase(), 100, y);
      ctx.fillStyle = '#111827';
      ctx.font = '400 30px Arial';
      y = wrapText(ctx, row.value, 100, y + 44, 1320, 40, row.label === 'Remarks' ? 5 : 3) + 56;
    }

    ctx.fillStyle = '#6b7280';
    ctx.font = '400 22px Arial';
    ctx.fillText(`Generated ${new Date().toLocaleString()} from PEMWE doped periodic table`, 100, 1540);

    return canvas;
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png', 1);
    });
  }

  async function downloadSnapshot() {
    if (!activeElement) {
      return;
    }
    const entry = persistActiveEntry();
    const canvas = createSnapshotCanvas(activeElement, entry);
    const blob = await canvasToBlob(canvas);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeElement.symbol}-PEMWE-literature-note.png`;
    link.click();
    URL.revokeObjectURL(url);
    showStatus(`${activeElement.symbol} PNG saved`);
  }

  async function copySnapshot() {
    if (!activeElement) {
      return;
    }
    const entry = persistActiveEntry();
    const canvas = createSnapshotCanvas(activeElement, entry);
    const blob = await canvasToBlob(canvas);

    if (!navigator.clipboard || !globalThis.ClipboardItem) {
      showStatus('Clipboard unavailable; use Save PNG instead');
      return;
    }

    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    showStatus(`${activeElement.symbol} screenshot copied`);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    persistActiveEntry();
  });

  saveButton.addEventListener('click', persistActiveEntry);
  manualEditButton.addEventListener('click', startNewArticle);
  summaryViewButton.addEventListener('click', () => setEditorMode('summary'));
  downloadButton.addEventListener('click', downloadSnapshot);
  copyButton.addEventListener('click', copySnapshot);
  openIndexButton.addEventListener('click', () => {
    renderLiteratureIndex();
    indexModal.showModal();
  });
  closeIndexButton.addEventListener('click', () => indexModal.close());
  indexModal.addEventListener('click', (event) => {
    if (event.target === indexModal) {
      indexModal.close();
    }
  });
  closeButtons.forEach((button) => button.addEventListener('click', closeEditor));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeEditor();
    }
  });

  renderTable();
  renderLiteratureIndex();
  updateFilledCount();
}

if (typeof document !== 'undefined') {
  initApp();
}
