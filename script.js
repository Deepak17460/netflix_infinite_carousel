'use strict';

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
let sections = document.querySelectorAll('.slider section');
const noOfSections = sections.length;
const noOfSectionsPerScreen = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--no-of-sections-per-screen'));

let direction;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Function to update the sections reference after DOM changes
function updateSections() {
    sections = document.querySelectorAll('.slider section');
}

// Function to handle movement logic
function move(direction) {
    if (direction === -1) {
        // Move forward
        const firstSections = Array.from(sections).slice(0, noOfSectionsPerScreen);
        slider.style.transition = 'transform 0.5s ease';
        slider.style.transform = `translateX(-${100}vw)`;

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
        // Move backward
        const lastSections = Array.from(sections).slice(-noOfSectionsPerScreen);
        lastSections.reverse().forEach((section) => slider.prepend(section));
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${100}vw)`;

        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease';
            slider.style.transform = 'translateX(0)';
        }, 10);

        updateSections();
    }
}

// Event listeners for the arrows
next.addEventListener('click', () => move(-1));
prev.addEventListener('click', () => move(1));
