// shows the first 36 books on the page
//I made use of the function and DOM to pull elements from the HTML doc, this enables the user to preview the list of books.
const createPreview = (props) => {
    const {author, id, image, title} = props

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
    return element
};

//loop for the preview of books
for (const books of extracted) {
    const preview = createPreview(books)
    fragment.appendChild(preview)
}

document.querySelector("[data-list-items]").appendChild(fragment);