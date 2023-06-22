// Fully working scripts.js file

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

// Encapsulated functionality in an object
const app = {
  initialize() {
    this.checkSourceAndRange();
    this.createPreviews();
    this.addShowMoreListener();
    this.addActivePreviewListeners();
    this.addSearchOptions();
    this.addSearchToggleListener();
    this.addSettingsToggleListener();
    this.addThemeSaveListener();
  },

  checkSourceAndRange() {
    if (!books && !Array.isArray(books)) throw new Error('Source required');
    if (!range && range.length < 2) throw new Error('Range must be an array with two numbers');
  },

  createPreviews() {
    const fragment = document.createDocumentFragment();
    const extracted = books.slice(0, BOOKS_PER_PAGE);

    for (const book of extracted) {
      const preview = this.createPreview(book);
      fragment.appendChild(preview);
    }

    document.querySelector("[data-list-items]").appendChild(fragment);
  },

  createPreview(props) {
    const { author, id, image, title } = props;

    const element = document.createElement("button");
    element.classList.add("preview");
    element.dataset.preview = id;
    element.innerHTML = /* html */ `
      <img 
        class="preview__image" 
        src="${image}" 
      />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
      </div>
    `;
    return element;
  },

  addShowMoreListener() {
    const showmoreButton = document.querySelector('[data-list-button]');
    showmoreButton.addEventListener("click", this.showMore);
    showmoreButton.innerHTML = /* html */ `
      <span>Show more</span>
      <span class="list__remaining">
          (${this.updateRemaining()})
      </span>
    `;
  },

  showMore(event) {
    event.preventDefault();
    page += 1;
    const remaining = this.updateRemaining();
    const hasRemaining = remaining > 0 ? remaining : 0;

    const rangeStart = (page - 1) * BOOKS_PER_PAGE;
    const rangeEnd = books.length - remaining;
    extracted = books.slice(rangeStart, rangeEnd);

    if (hasRemaining > 0) {
      const fragment = document.createDocumentFragment();

      for (const book of extracted) {
        const preview = this.createPreview(book);
        fragment.appendChild(preview);
      }

      document.querySelector("[data-list-items]").appendChild(fragment);

      const previewList = document.querySelectorAll('.preview');
      const previewArray = Array.from(previewList);

      for (const preview of previewArray) {
        preview.addEventListener('click', this.activePreview);
      }
    }
  },

  updateRemaining() {
    const remaining = books.length - (BOOKS_PER_PAGE * page);
    return remaining;
  },

  addActivePreviewListeners() {
    const previewList = document.querySelectorAll('.preview');
    const previewArray = Array.from(previewList);

    for (const preview of previewArray) {
      preview.addEventListener('click', this.activePreview);
    }
  },

  activePreview(event) {
    event.preventDefault();
    let active;

    const bookPreview = event.target.closest('.preview');
    const bookPreviewId = bookPreview.getAttribute('data-preview');

    for (const book of books) {
      if (active) break;

      if (book.id === bookPreviewId) {
        active = book;
      }
    }

    if (!active) return;

    const { title, image, description, published, author } = active;
    summary.showModal();
    summaryBackground.src = image;
    summaryImage.src = image;
    summaryTitle.innerText = title;
    summarySubtitle.innerText = `${authors[author]} (${new Date(published).getFullYear()})`;
    summaryDescription.innerText = description;

    summaryClose.addEventListener('click', () => {
      summary.close();
    });
  },

  addSearchOptions() {
    const genresFragment = document.createDocumentFragment();
    const genresOption = document.createElement('option');
    genresOption.value = 'any';
    genresOption.innerText = 'All Genres';
    genresFragment.appendChild(genresOption);

    for (const genre in genres) {
      const genresOption = document.createElement('option');
      genresOption.value = genres[genre];
      genresOption.innerText = genres[genre];
      genresFragment.appendChild(genresOption);
    }

    document.querySelector('[data-search-genres]').appendChild(genresFragment);

    const authorsFragment = document.createDocumentFragment();
    const authorsOption = document.createElement('option');
    authorsOption.value = 'any';
    authorsOption.innerText = 'All Authors';
    authorsFragment.appendChild(authorsOption);

    for (const author in authors) {
      const authorsOption = document.createElement('option');
      authorsOption.value = authors[author];
      authorsOption.innerText = authors[author];
      authorsFragment.appendChild(authorsOption);
    }

    document.querySelector('[data-search-authors]').appendChild(authorsFragment);
  },

  addSearchToggleListener() {
    const searchButton = document.querySelector('[data-header-search]');
    const searchMenu = document.querySelector('[data-search-overlay]');
    const searchCancel = document.querySelector('[data-search-cancel]');

    const showSearchMenu = (event) => {
      event.preventDefault();
      searchMenu.showModal();

      searchCancel.addEventListener('click', () => {
        searchMenu.close();
      });
    };

    searchButton.addEventListener('click', showSearchMenu);
  },

  addSettingsToggleListener() {
    const settingsButton = document.querySelector('[data-header-settings]');
    const settingsCancel = document.querySelector('[data-settings-cancel]');
    const settings = document.querySelector('[data-settings-overlay]');

    const showSettings = (event) => {
      event.preventDefault();
      settings.showModal();

      settingsCancel.addEventListener('click', () => {
        settings.close();
      });
    };

    settingsButton.addEventListener('click', showSettings);
  },

  addThemeSaveListener() {
    const settingsSave = document.querySelector('[data-settings-overlay] [type="submit"]');
    const settingsData = document.querySelector('[data-settings-form]');

    const saveTheme = (event) => {
      event.preventDefault();
      const formData = new FormData(settingsData);
      const result = Object.fromEntries(formData);

      document.documentElement.style.setProperty('--color-dark', themeColor[result.theme].dark);
      document.documentElement.style.setProperty('--color-light', themeColor[result.theme].light);

      settings.close();
    };

    settingsSave.addEventListener('click', saveTheme);
  },
};

// Initialize the app
app.initialize();
