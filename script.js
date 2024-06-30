document.addEventListener('DOMContentLoaded', fetchJoke);

const button = document.querySelector('.container button');
const jokeText = document.querySelector('.joke-text');

button.addEventListener('click', fetchJoke);

/**
 * Fetch a joke from the API and display it
 */
function fetchJoke() {
    getJoke()
        .then(joke => {
            jokeText.innerHTML = joke;
        })
        .catch(error => {
            jokeText.innerHTML = 'Oops! Something went wrong. Please try again later.';
            console.error('Error fetching joke:', error);
        });
}

/**
 * Get a joke from the API
 * @returns {Promise<string>} The joke text
 */
function getJoke() {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => data.joke);
}
