
class View {
  constructor(){
    this.app = document.getElementById('app');
    this.tittle = this.createElement('h', 'title');
    this.tittle.textContent = 'Searh GIFs';
    this.app.prepend(this.tittle);

    this.searchError = this.createElement('span', 'error');
    document.querySelector('#app').append(this.searchError);
  }
  createElement(elementTag, elementClass){
    const element = document.createElement(elementTag);
    if(elementClass) {
      element.classList.add(elementClass);
    }
    return element;
  }
  /*createGif(gifData){
    const gifElement = this.createElement('li', 'gif-prev');
    gifElement.innerHTML = `<img class="gif-prev-img" src = "${gifData.data.images.downsized.url}" alt="${gifData.data.title}"> <span class="gif-prev-title">${gifData.data.title}</span>`;
    this.gifsList.append(gifElement);
  }*/

}

const container = document.querySelector('.container');

class Search {
  constructor(view){
    this.view = view;
    document.querySelector('button').addEventListener('click', this.searchGifs.bind(this))    
  }

  async searchGifs() {
  return await fetch(`https://api.giphy.com/v1/gifs/search?api_key=zbW1z2BPKsvJqOLOTVH5Z8tqi1oj37Zm&q=${encodeURIComponent
(document.querySelector('input').value)}&limit=5&offset=0&rating=g&lang=ru`)
  .then (res => res.json())
  .then(res => {
    console.log(res);
    container.innerHTML = "";
    this.view.searchError = "";
    {
        for (let data of res.data) {
        let img = document.createElement('img');
        img.setAttribute('src', data.images.downsized.url);
        container.append(img);
      }
    }
    /*if (res.data.lehgth===0) {
      this.view.searchError.innerText = "Ничего не найдено :( Попробуйте ещё раз";
    }*/
  }) 
  }

  /*.then((res) => {
    if(res.ok) {res => {
      res.data.forEach(
        gif => this.view.createGif(gif))}
    } else {

    }
  })*/
  }
  
  new Search(new View());

  