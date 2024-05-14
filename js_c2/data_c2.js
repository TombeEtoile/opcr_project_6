// API PATH
const dataUrlC2 = "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score&page_size=6";

fetch(dataUrlC2)
    .then(response => response.json())
    .then(data => {

        // Film 1 (C2-m1)
        const C2M1 = data.results[0];
        const C2M1Id = C2M1.id;
        const dataUrlC2M1 = `http://localhost:8000/api/v1/titles/${C2M1Id}`;

        fetch(dataUrlC2M1)
            .then(response => response.json())
            .then(movieDataC2M1 => {
                updateMovieDetails(movieDataC2M1, "c2-m1");
            })

        // Film 2 (C2-m2)
        const C2M2 = data.results[1];
        const C2M2Id = C2M2.id;
        const dataUrlC2M2 = `http://localhost:8000/api/v1/titles/${C2M2Id}`;

        fetch(dataUrlC2M2)
            .then(response => response.json())
            .then(movieDataC2M2 => {
                updateMovieDetails(movieDataC2M2, "c2-m2");
            })

        // Film 3 (C2-m3)
        const C2M3 = data.results[2];
        const C2M3Id = C2M3.id;
        const dataUrlC2M3 = `http://localhost:8000/api/v1/titles/${C2M3Id}`;

        fetch(dataUrlC2M3)
            .then(response => response.json())
            .then(movieDataC2M3 => {
                updateMovieDetails(movieDataC2M3, "c2-m3");
            })

        // Film 4
        const C2M4 = data.results[3];
        const C2M4Id = C2M4.id;
        const dataUrlC2M4 = `http://localhost:8000/api/v1/titles/${C2M4Id}`;

        fetch(dataUrlC2M4)
            .then(response => response.json())
            .then(movieDataC2M4 => {
                updateMovieDetails(movieDataC2M4, "c2-m4");
            })

        // Film 5
        const C2M5 = data.results[4];
        const C2M5Id = C2M5.id;
        const dataUrlC2M5 = `http://localhost:8000/api/v1/titles/${C2M5Id}`;

        fetch(dataUrlC2M5)
            .then(response => response.json())
            .then(movieDataC2M5 => {
                updateMovieDetails(movieDataC2M5, "c2-m5");
            })

        // Film 6
        const C2M6 = data.results[5];
        const C2M6Id = C2M6.id;
        const dataUrlC2M6 = `http://localhost:8000/api/v1/titles/${C2M6Id}`;

        fetch(dataUrlC2M6)
            .then(response => response.json())
            .then(movieDataC2M6 => {
                updateMovieDetails(movieDataC2M6, "c2-m6");
            })

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
    })
