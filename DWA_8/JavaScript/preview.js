// shows the first 36 books on the page

class Preview {    
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

const previewOutput = new Preview();

const starting = document.createDocumentFragment();

for (const { image, title, id, author } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button');
    //@ts-ignore
    element.classList = 'preview'; //initially returned 'cannot assign to 'classList' because it is a read-only property'; added ts-ignore
    element.setAttribute('data-preview', id);

    element.innerHTML = previewOutput.previewHtml(image, title, authors, author);
    
    starting.appendChild(element)
}
domElements.list.dataListItems.appendChild(starting);