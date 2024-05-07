import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelectE = document.querySelector('.breed-select');
const catInfoE = document.querySelector('.cat-info');
const loaderE = document.querySelector('.loader');
const errorE = document.querySelector('.error');

//CREATE THE DROPDOWN OPTIONS
function chooseBreed() {
    fetchBreeds().then(data => {
        loaderE.classList.replace('loader', 'is-hidden');

        let optionsMarkUp = data.map(({ id, name }) => {
            return `<option value=${id}>${name}</option>`
        })
        breedSelectE.insertAdjacentHTML('beforeend', optionsMarkUp);
        breedSelectE.classList.remove('is-hidden');
    });
}

chooseBreed();

breedSelectE.addEventListener('change', (e) => {
    //show loader while loading...
    loaderE.classList.replace('is-hidden', 'loader');
    
    //hide selected element and cat info while loading..
    catInfoE.classList.add('is-hidden');

    let breedId = e.target.value;

    fetchCatByBreed(breedId).then(data => {
        const {url, breeds} = data[0];
        const {name, description, temperament} = breeds[0];
        catInfoE.innerHTML = `
            <img src=${url} alt=${name} width="400"/>
            <div>
                <h2>${name}</h2>
                <p>${description}</p>
                <p>${temperament}</p>
            </div>
        `;
        catInfoE.classList.remove('is-hidden');
        loaderE.classList.add('is-hidden');
        errorE.classList.add('is-hidden');
    });
})



