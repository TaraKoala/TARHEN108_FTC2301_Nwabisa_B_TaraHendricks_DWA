//@ts-check

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

/**
 * Page that will display books and increment as more books show
 * @type {number} 
 */
let page = 1;

/**
 * Amount of books to be displayed on each page
 * @type {Array}
 */
let matches = books;

/**
 * All DOM elements
 * @typedef {Object} domElements
 * @prop {object} list
 * @prop {object} search
 * @prop {object} settings 
 * @prop {object} header
 */
/**
 * @type {domElements}
 */
export const domElements = {
    list : {
        dataListItems : document.querySelector('[data-list-items]'),
        dataListButton : document.querySelector('[data-list-button]'),
        dataListClose : document.querySelector('[data-list-close]'),
        dataListActive : document.querySelector('[data-list-active]'),
        dataListMessage : document.querySelector('[data-list-message]'),
        dataListImage : document.querySelector('[data-list-image]'),
        dataListBlur : document.querySelector('[data-list-blur]'),
        dataListTitle : document.querySelector('[data-list-title]'),
        dataListSubtitle : document.querySelector('[data-list-subtitle]'),
        dataListDescription : document.querySelector('[data-list-description]'),
    },
    
    search : {
        dataSearchGenres : document.querySelector('[data-search-genres]'),
        dataSearchAuthors : document.querySelector('[data-search-authors]'),
        dataSearchCancel : document.querySelector('[data-search-cancel]'),
        dataSearchOverlay : document.querySelector('[data-search-overlay]'),
        dataSearchTitle : document.querySelector('[data-search-title]'),
        dataSearchForm : document.querySelector('[data-search-form]'),
    },
    
    settings : {
        dataSettingsTheme : document.querySelector('[data-settings-theme]'),    
        dataSettingsCancel : document.querySelector('[data-settings-cancel]'),
        dataSettingsOverlay : document.querySelector('[data-settings-overlay]'),
        dataSettingsForm : document.querySelector('[data-settings-form]'),
    },
   
    header : {
        dataHeaderSearch : document.querySelector('[data-header-search]'),
        dataHeaderSettings : document.querySelector('[data-header-settings]'),
    }    
}

export class Preview {    
    /**
    * @param {string} image
    * @param {string} title
    * @param {object} authors
    * @param {string} author 
    * @returns {string}
    */
   previewHtml = ( image, title, authors, author  ) => {
    return `
    <img
        class="preview__image"
        src="${image}"
    />
            
    <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
    </div>
    `        
    }    
}
