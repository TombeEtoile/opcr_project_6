/*
document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("dropdown-select");

    selectElement.addEventListener("change", function(event) {
        const selectedValue = event.target.value;
        let apiUrl;

        switch(selectedValue) {
            case "drama":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Drama&sort_by=-imdb_score&page_size=6";
                break;
            case "thriller":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Thriller&sort_by=-imdb_score&page_size=6";
                break;
            case "action":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=6";
                break
            case "comedy":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score&page_size=6";
                break;
            case "horror":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score&page_size=6";
                break;
            case "mystery":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Mystery&sort_by=-imdb_score&page_size=6";
                break;
            case "history":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=History&sort_by=-imdb_score&page_size=6";
                break;
            case "family":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Family&sort_by=-imdb_score&page_size=6";
                break;
            case "fantasy":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Fantasy&sort_by=-imdb_score&page_size=6";
                break;
            case "sci-fiction":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Sci-fiction&sort_by=-imdb_score&page_size=6";
                break;
            case "western":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Western&sort_by=-imdb_score&page_size=6";
                break;
            case "adventure":
                apiUrl = "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score&page_size=6";
                break;
            case "all-categories":
                apiUrl = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=6";
                break;
            default:
                apiUrl = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=6";
                break;
        }

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const C3M1 = data.results[0];

                // TITLE
                const C3M1Title = C3M1.title;
                const C3M1TitleElement = document.getElementById("c3-m1-title");
                C3M1TitleElement.textContent = C3M1Title;
                const C3M1ModalTitleElement = document.getElementById("c3-m1-modal-title");
                C3M1ModalTitleElement.textContent = C3M1Title;

                //IMAGE
                const C3M1Image = C3M1.image_url;
                const C3M1ImageElement = document.getElementById("c3-m1-image");
                C3M1ImageElement.src = C3M1Image;

                // GENRE
                const C3M1Genres = C3M1.genres;
                const C3M1GenresElement = document.getElementById("genres-c3-m1");
                C3M1GenresElement.textContent = C3M1Genres;

                // YEAR
                const C3M1year = C3M1.year;
                const C3M1yearElement = document.getElementById("year-c3-m1");
                C3M1yearElement.textContent = C3M1year;

                // CLASSIFICATION
                const C3M1Classification = C3M1.classification;
                const C3M1ClassificationElement = document.getElementById("classification-c3-m1");
                C3M1ClassificationElement.textContent = C3M1Classification;

                // SCORE IMDB
                const C3M1ImdbScore = C3M1.imdb_score;
                const C3M1ImdbScoreElement = document.getElementById("imdb-score-c3-m1");
                C3M1ImdbScoreElement.textContent = C3M1ImdbScore;

                // DIRECTORS
                const C3M1Directors = C3M1.directors;
                const C3M1DirectorsElement = document.getElementById("directors-c3-m1");
                C3M1DirectorsElement.textContent = C3M1Directors;

                // ACTORS
                const C3M1Actors = C3M1.actors;
                const C3M1ActorsElement = document.getElementById("actors-c3-m1");
                C3M1ActorsElement.textContent = C3M1Actors;

                // DURATION
                const C3M1Duration = C3M1.duration;
                const C3M1DurationElement = document.getElementById("duration-c3-m1");
                C3M1DurationElement.textContent = C3M1Duration;

                // NATIVE COUNTRY
                const C3M1NativeCountry = C3M1.native_country;
                const C3M1NativeCountryElement = document.getElementById("native-country-c3-m1");
                C3M1NativeCountryElement.textContent = C3M1NativeCountry;

                // BOX OFFICE REVENUE
                const C3M1BoxOfficeRevenue = C3M1.box_office_revenue;
                const C3M1BoxOfficeRevenueElement = document.getElementById("box-office-revenue-c3-m1");
                C3M1BoxOfficeRevenueElement.textContent = C3M1BoxOfficeRevenue;
            })
    });
});
 */

/*
document.addEventListener("DOMContentLoaded", function() {
    const categories = ["drama", "thriller", "action"]; // Ajoutez les autres catégories ici

    categories.forEach(category => {
        const dataUrl = `http://localhost:8000/api/v1/titles/?genre=${category}&sort_by=-imdb_score&page_size=6`;

        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {
                for (let i = 1; i < 6; i++) {
                    const movie = data.results[i];
                    const moviePrefix = `${category}-c3-m${i + 1}`;

                    // Création de l'élément de conteneur de film
                    const movieContainer = document.createElement("div");
                    movieContainer.classList.add("movie");

                    // Création de l'élément de l'image du film
                    const imageContainer = document.createElement("div");
                    imageContainer.classList.add("movie_image-container");

                    const imageElement = document.createElement("img");
                    imageElement.classList.add("movie_image");
                    imageElement.id = `${moviePrefix}-image`;
                    imageElement.src = movie.image_url;
                    imageElement.alt = movie.title;

                    imageContainer.appendChild(imageElement);
                    movieContainer.appendChild(imageContainer);

                    // Création de l'élément du titre du film
                    const titleElement = document.createElement("h3");
                    titleElement.classList.add("movie_title");
                    titleElement.id = `${moviePrefix}-title`;
                    titleElement.textContent = movie.title;

                    movieContainer.appendChild(titleElement);

                    // Ajout du film au conteneur de films de la catégorie correspondante
                    const moviesContainer = document.getElementById(`moviesContainer${category.toUpperCase()}`);
                    moviesContainer.appendChild(movieContainer);

                    // Vous pouvez continuer de la même manière pour les autres détails du film
                }
            })
            .catch(error => console.error("Une erreur s'est produite lors de la récupération des données :", error));
    });
});
 */