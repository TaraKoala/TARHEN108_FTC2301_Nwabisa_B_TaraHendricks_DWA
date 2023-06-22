class PreviewCreator {
    constructor(props) {
      this.props = props;/*  */
    }
  
    createPreview() {
      const { author, id, image, title } = this.props;
  
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
    }
  }
  
  // Create an instance of PreviewCreator for encapsulation
  const previewCreator = new PreviewCreator();
  
  // Loop for the preview of books
  for (const book of extracted) {
    const preview = previewCreator.createPreview(book);
    fragment.appendChild(preview);
  }
  
  document.querySelector("[data-list-items]").appendChild(fragment);


  //second generation from chat gpt

  class PreviewManager {
    constructor() {
      this.extracted = []; // Assuming this is defined somewhere in your code
      this.fragment = document.createDocumentFragment();
    }
  
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
    }
  
    renderPreviews() {
      for (const book of this.extracted) {
        const preview = this.createPreview(book);
        this.fragment.appendChild(preview);
      }
  
      document.querySelector("[data-list-items]").appendChild(this.fragment);
    }
  }
  
  // Usage:
  const previewManager = new PreviewManager();
  previewManager.renderPreviews();
  
  