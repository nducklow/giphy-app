const searchButton = document.querySelector('#search');
const imageResults = document.querySelector('.images');
const inputField = document.querySelector('#keyword')




function getApi() {
imageResults.textContent = ""
  const keywordInput = inputField.value
    const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=evlnTTq9Xy4nMxxG5SkYGT2nA6maWM3I&q=${keywordInput}&limit=3&rating=g`
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
.then(function (gifs) {
      console.log(gifs.data);
for (const image of gifs.data) {

const imgEl = document.createElement('img');
imgEl.setAttribute('src', image.images.downsized.url)
imageResults.appendChild(imgEl);
}  
console.log(keywordInput)
})
}
searchButton.addEventListener('click', getApi)

