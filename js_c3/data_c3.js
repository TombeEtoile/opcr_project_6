document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById("dropdown-select");

    selectElement.addEventListener("change", function (event) {
        const selectedValue = event.target.value;
        let apiUrl;

        switch (selectedValue) {
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

                // Film 1 (c3-m1)
                const C3M1 = data.results[0];
                const C3M1Id = C3M1.id;
                const dataUrlC3M1 = `http://localhost:8000/api/v1/titles/${C3M1Id}`;

                fetch(dataUrlC3M1)
                    .then(response => response.json())
                    .then(movieDataC3M1 => {
                        updateMovieDetails(movieDataC3M1, "c3-m1");
                    })

                // Film 2 (c3-m2)
                const C3M2 = data.results[1];
                const C3M2Id = C3M2.id;
                const dataUrlC3M2 = `http://localhost:8000/api/v1/titles/${C3M2Id}`;

                fetch(dataUrlC3M2)
                    .then(response => response.json())
                    .then(movieDataC3M2 => {
                        updateMovieDetails(movieDataC3M2, "c3-m2");
                    })

                // Film 3 (c3-m3)
                const C3M3 = data.results[2];
                const C3M3Id = C3M3.id;
                const dataUrlC3M3 = `http://localhost:8000/api/v1/titles/${C3M3Id}`;

                fetch(dataUrlC3M3)
                    .then(response => response.json())
                    .then(movieDataC3M3 => {
                        updateMovieDetails(movieDataC3M3, "c3-m3");
                    })

                // Film 4
                const C3M4 = data.results[3];
                const C3M4Id = C3M4.id;
                const dataUrlC3M4 = `http://localhost:8000/api/v1/titles/${C3M4Id}`;

                fetch(dataUrlC3M4)
                    .then(response => response.json())
                    .then(movieDataC3M4 => {
                        updateMovieDetails(movieDataC3M4, "c3-m4");
                    })

                // Film 5
                const C3M5 = data.results[4];
                const C3M5Id = C3M5.id;
                const dataUrlC3M5 = `http://localhost:8000/api/v1/titles/${C3M5Id}`;

                fetch(dataUrlC3M5)
                    .then(response => response.json())
                    .then(movieDataC3M5 => {
                        updateMovieDetails(movieDataC3M5, "c3-m5");
                    })

                // Film 6
                const C3M6 = data.results[5];
                const C3M6Id = C3M6.id;
                const dataUrlC3M6 = `http://localhost:8000/api/v1/titles/${C3M6Id}`;

                fetch(dataUrlC3M6)
                    .then(response => response.json())
                    .then(movieDataC3M6 => {
                        updateMovieDetails(movieDataC3M6, "c3-m6");
                    })
            });
    });
});

function updateMovieDetails(movie, prefix) {
    // TITLE
    const title = movie.title;
    const titleElement = document.getElementById(`${prefix}-title`);
    titleElement.textContent = title;
    const modalTitleElement = document.getElementById(`${prefix}-modal-title`);
    modalTitleElement.textContent = title;
    const ImageAltElement = document.getElementById(`${prefix}-image`)
    ImageAltElement.alt = title;

    //IMAGE
    const image = movie.image_url;
    const imageElement = document.getElementById(`${prefix}-image`);
    imageElement.src = image;

    // GENRE
    const genres = movie.genres;
    const genresElement = document.getElementById(`genres-${prefix}`);
    genresElement.textContent = genres.join(", ");

    // YEAR
    const year = movie.year;
    const yearElement = document.getElementById(`year-${prefix}`);
    yearElement.textContent = year;

    // CLASSIFICATION
    const classification = movie.rated;
    const classificationElement = document.getElementById(`classification-${prefix}`);
    classificationElement.textContent = classification;

    // SCORE IMDB
    const imdbScore = movie.imdb_score;
    const imdbScoreElement = document.getElementById(`imdb-score-${prefix}`);
    imdbScoreElement.textContent = imdbScore;

    // DIRECTORS
    const directors = movie.directors.join(", ");
    const directorsElement = document.getElementById(`directors-${prefix}`);
    directorsElement.textContent = directors;

    // ACTORS
    const actors = movie.actors.join(", ");
    const actorsElement = document.getElementById(`actors-${prefix}`);
    actorsElement.textContent = actors;

    // DURATION
    const duration = `${movie.duration} minutes`;
    const durationElement = document.getElementById(`duration-${prefix}`);
    durationElement.textContent = duration;

    // NATIVE COUNTRY
    const nativeCountry = movie.countries.join(", ");
    const nativeCountryElement = document.getElementById(`native-country-${prefix}`);
    nativeCountryElement.textContent = nativeCountry;

    // BOX OFFICE REVENUE
    const boxOfficeRevenue = movie.worldwide_gross_income;
    const boxOfficeRevenueElement = document.getElementById(`box-office-revenue-${prefix}`);
    boxOfficeRevenueElement.textContent = boxOfficeRevenue;
}
