'use strict';

const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const apiKey = 'a38b6690aac4e418ee51b703bda3e84c';
const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

const noOfSectionsPerScreen = 3;
let sections = [];

async function fetchMovies() {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}&language=en-US&page=1`);
    const data = await response.json();
    return data.results;
}

async function updateCarousel() {
    const movies = await fetchMovies();
    slider.innerHTML = '';

    movies.forEach(movie => {
        const movieImg = document.createElement('section');
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
        img.alt = movie.title;
        movieImg.appendChild(img);
        slider.appendChild(movieImg);
    });

    updateSections();
}

function updateSections() {
    sections = document.querySelectorAll('.slider section');
}

function move(direction) {
    if (sections.length === 0) return;

    if (direction === -1) {
        const firstSections = Array.from(sections).slice(0, noOfSectionsPerScreen);
        slider.style.transition = 'transform 0.5s ease';
        slider.style.transform = `translateX(-${100 * noOfSectionsPerScreen}vw)`;

        slider.addEventListener(
            'transitionend',
            () => {
                firstSections.forEach((section) => slider.appendChild(section));
                slider.style.transition = 'none';
                slider.style.transform = 'translateX(0)';
                updateSections();
            },
            { once: true }
        );
    } else if (direction === 1) {
        const lastSections = Array.from(sections).slice(-noOfSectionsPerScreen);
        lastSections.reverse().forEach((section) => slider.prepend(section));
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${100 * noOfSectionsPerScreen}vw)`;

        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease';
            slider.style.transform = 'translateX(0)';
        }, 10);

        updateSections();
    }
}

next.addEventListener('click', () => move(-1));
prev.addEventListener('click', () => move(1));

updateCarousel();
