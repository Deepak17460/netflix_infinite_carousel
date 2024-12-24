

# Movie Carousel

This project implements a responsive movie carousel that fetches popular movie posters from The Movie Database (TMDb) API and displays them in a sliding carousel. The carousel allows users to navigate through the images using previous and next arrows, and hover over an image to enlarge it.

## Features
- **Responsive Layout**: The carousel adapts to different screen sizes (mobile, tablet, desktop).
- **Image Hover Effect**: Hover over any image to enlarge it.
- **Movie Data**: Fetches movie posters and titles from The Movie Database API.

## Technologies Used
- **HTML**: Markup for structure.
- **CSS**: Styling the carousel and adding hover effects.
- **JavaScript**: Fetching data from TMDb API and handling carousel behavior.
- **TMDb API**: For fetching popular movie data.

## Getting Started

To get started with the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:
- **Git**: For cloning the repository.
- **Text Editor**: To edit and view the code (e.g., Visual Studio Code, Sublime Text).
- **Browser**: To view the carousel.

### Clone the Repository

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/movie-carousel.git
```

2. Navigate to the project directory:

```bash
cd movie-carousel
```

### API Key Setup

1. Create an account on [The Movie Database (TMDb)](https://www.themoviedb.org/).
2. Get your API key from the TMDb API section.
3. Replace the `apiKey` in `script.js` with your own API key.

```javascript
const apiKey = 'your-api-key-here';
```

### Running the Project

You can open the `index.html` file directly in your browser to view the carousel.

Alternatively, you can serve the project using a local server if you prefer:

1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VSCode.
2. Right-click `index.html` and select "Open with Live Server".

## Folder Structure

```
movie-carousel/
│
├── index.html       # The main HTML file
├── script.js        # JavaScript file to fetch movie data and control the carousel
├── styles.css       # CSS file for styling the carousel and hover effects
└── README.md        # This file
```

## Customization

- **No. of Sections Per Screen**: The number of movie images displayed on each screen can be modified in the `:root` CSS variables (`--no-of-sections-per-screen`).
- **Hover Effect**: The image enlarges on hover. You can adjust the scaling factor by changing the `transform: scale(1.2)` value in `styles.css`.

## Contributing

If you’d like to contribute to this project, feel free to fork the repository and submit a pull request with your changes. Please ensure your code follows the existing style.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- **TMDb API**: For providing the movie data.
- **All contributors**: For making this project possible.


### How to Use This `README.md`:

1. **Project Overview**: Describes the carousel's functionality and the technologies used.
2. **Getting Started**: Steps to clone and run the project.
3. **Customization**: Explains how to adjust the carousel behavior, such as the number of sections and hover effect.
4. **Contributing**: Encourages others to contribute to the project.
5. **License**: If you’re using an open-source license like MIT, include it; otherwise, modify this section.
