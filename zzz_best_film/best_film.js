// API PATH

const dataUrlBestFilm = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1"

// MOVIE 1
fetch(dataUrlBestFilm)
  .then(response => response.json())
  .then(data => {
    const bestFilm = data.results[0];
    const bestFilmId = bestFilm.id;
    const dataUrlBestFilmId = `http://localhost:8000/api/v1/titles/${bestFilmId}`;

    fetch(dataUrlBestFilmId)
      .then(response => response.json())
      .then(movieDataBestFilm => {

        // TITLE
        const bestFilmTitle = movieDataBestFilm.title;
        const bestFilmTitleElement = document.getElementById("best-film-title");
        bestFilmTitleElement.textContent = bestFilmTitle;
        const bestFilmModalTitleElement = document.getElementById("best-film-modal-title");
        bestFilmModalTitleElement.textContent = bestFilmTitle;

        // IMAGE
        const bestFilmImage = movieDataBestFilm.image_url;
        const bestFilmImageElement = document.getElementById("best_film_image_id");
        bestFilmImageElement.src = bestFilmImage;

        // GENRE
        const bestFilmGenres = movieDataBestFilm.genres;
        const bestFilmGenresElement = document.getElementById("genres-best-film");
        bestFilmGenresElement.textContent = bestFilmGenres.join(", ");

        // YEAR
        const bestFilmyear = movieDataBestFilm.year;
        const bestFilmyearElement = document.getElementById("year-best-film");
        bestFilmyearElement.textContent = bestFilmyear;

        // CLASSIFICATION
        const bestFilmClassification = movieDataBestFilm.rated;
        const bestFilmClassificationElement = document.getElementById("classification-best-film");
        bestFilmClassificationElement.textContent = bestFilmClassification;

        // SCORE IMDB
        const bestFilmImdbScore = movieDataBestFilm.imdb_score;
        const bestFilmImdbScoreElement = document.getElementById("imdb-score-best-film");
        bestFilmImdbScoreElement.textContent = bestFilmImdbScore;

        // DIRECTORS
        const bestFilmDirectors = movieDataBestFilm.directors.join(", ");
        const bestFilmDirectorsElement = document.getElementById("directors-best-film");
        bestFilmDirectorsElement.textContent = bestFilmDirectors;

        // ACTORS
        const bestFilmActors = movieDataBestFilm.actors.join(", ");
        const bestFilmActorsElement = document.getElementById("actors-best-film");
        bestFilmActorsElement.textContent = bestFilmActors;

        // DURATION
        const bestFilmDuration = `${movieDataBestFilm.duration} minutes`;
        const bestFilmDurationElement = document.getElementById("duration-best-film");
        bestFilmDurationElement.textContent = bestFilmDuration;

        // NATIVE COUNTRY
        const bestFilmNativeCountry = movieDataBestFilm.countries.join(", ");
        const bestFilmNativeCountryElement = document.getElementById("native-country-best-film");
        bestFilmNativeCountryElement.textContent = bestFilmNativeCountry;

        // BOX OFFICE REVENUE
        const bestFilmBoxOfficeRevenue = movieDataBestFilm.worldwide_gross_income;
        const bestFilmBoxOfficeRevenueElement = document.getElementById("box-office-revenue-best-film");
        bestFilmBoxOfficeRevenueElement.textContent = bestFilmBoxOfficeRevenue;

      })
      .catch(error => console.error("Une erreur s'est produite lors de la récupération des données :", error));
    })
