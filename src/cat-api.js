const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_doTDU5uNSE3g3jd7R7b82Vlg6CA048GnQOAdMVxdmmR30NvY0LFrd9xqbcSlQ4q3';

//fetch all the breeds
export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`, {
        headers: {
            api_key: API_KEY,
        }
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        } else {
            return res.json();
        }
    });
}

//fetch specific selected cat breed from selection
export function fetchCatByBreed(breedID) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedID}`, {
        headers: {
            "x-api-key": API_KEY,
        }
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        } else {
            return res.json();
        }
    });
}