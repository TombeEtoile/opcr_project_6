// API PATH
const dataUrlC1 = "http://localhost:8000/api/v1/titles/?genre=Mystery&sort_by=-imdb_score&page_size=6";

        fetch(dataUrlC1)
            .then(response => response.json())
            .then(data => {

                // Film 1 (C1-m1)
                const C1M1 = data.results[0];
                const C1M1Id = C1M1.id;
                const dataUrlC1M1 = `http://localhost:8000/api/v1/titles/${C1M1Id}`;

                fetch(dataUrlC1M1)
                    .then(response => response.json())
                    .then(movieDataC1M1 => {
                        updateMovieDetails(movieDataC1M1, "c1-m1");
                    })

                // Film 2 (C1-m2)
                const C1M2 = data.results[1];
                const C1M2Id = C1M2.id;
                const dataUrlC1M2 = `http://localhost:8000/api/v1/titles/${C1M2Id}`;

                fetch(dataUrlC1M2)
                    .then(response => response.json())
                    .then(movieDataC1M2 => {
                        updateMovieDetails(movieDataC1M2, "c1-m2");
                    })

                // Film 3 (C1-m3)
                const C1M3 = data.results[2];
                const C1M3Id = C1M3.id;
                const dataUrlC1M3 = `http://localhost:8000/api/v1/titles/${C1M3Id}`;

                fetch(dataUrlC1M3)
                    .then(response => response.json())
                    .then(movieDataC1M3 => {
                        updateMovieDetails(movieDataC1M3, "c1-m3");
                    })

                // Film 4
                const C1M4 = data.results[3];
                const C1M4Id = C1M4.id;
                const dataUrlC1M4 = `http://localhost:8000/api/v1/titles/${C1M4Id}`;

                fetch(dataUrlC1M4)
                    .then(response => response.json())
                    .then(movieDataC1M4 => {
                        updateMovieDetails(movieDataC1M4, "c1-m4");
                    })

                // Film 5
                const C1M5 = data.results[4];
                const C1M5Id = C1M5.id;
                const dataUrlC1M5 = `http://localhost:8000/api/v1/titles/${C1M5Id}`;

                fetch(dataUrlC1M5)
                    .then(response => response.json())
                    .then(movieDataC1M5 => {
                        updateMovieDetails(movieDataC1M5, "c1-m5");
                    })

                // Film 6
                const C1M6 = data.results[5];
                const C1M6Id = C1M6.id;
                const dataUrlC1M6 = `http://localhost:8000/api/v1/titles/${C1M6Id}`;

                fetch(dataUrlC1M6)
                    .then(response => response.json())
                    .then(movieDataC1M6 => {
                        updateMovieDetails(movieDataC1M6, "c1-m6");
                    })

                function updateMovieDetails(movie, prefix) {
                    // TITLE
                    const title = movie.title;
                    const titleElement = document.getElementById(`${prefix}-title`);
                    titleElement.textContent = title;
                    const modalTitleElement = document.getElementById(`${prefix}-modal-title`);
                    modalTitleElement.textContent = title;

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
