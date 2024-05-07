// API PATH
const dataUrlC1 = "http://localhost:8000/api/v1/titles/?genre=Mystery&sort_by=-imdb_score&page_size=6";

// MOVIE 1
fetch(dataUrlC1)
  .then(response => response.json())
  .then(data => {
    const C1M1 = data.results[0];
    const C1M1Id = C1M1.id;
    const dataUrl = `http://localhost:8000/api/v1/titles/${C1M1Id}`;

    fetch(dataUrl)
      .then(response => response.json())
      .then(movieDataC1M1 => {

        // TITLE
        const C1M1Title = movieDataC1M1.title;
        const C1M1TitleElement = document.getElementById("c1-m1-title");
        C1M1TitleElement.textContent = C1M1Title;
        const C1M1ModalTitleElement = document.getElementById("c1-m1-modal-title");
        C1M1ModalTitleElement.textContent = C1M1Title;

        // IMAGE
        const C1M1Image = movieDataC1M1.image_url;
        const C1M1ImageElement = document.getElementById("c1-m1-image");
        C1M1ImageElement.src = C1M1Image;

        // GENRE
        const C1M1Genres = movieDataC1M1.genres;
        const C1M1GenresElement = document.getElementById("genres-c1-m1");
        C1M1GenresElement.textContent = C1M1Genres.join(", "); // Si vous voulez afficher les genres séparés par une virgule

        // YEAR
        const C1M1year = movieDataC1M1.year;
        const C1M1yearElement = document.getElementById("year-c1-m1");
        C1M1yearElement.textContent = C1M1year;

        // CLASSIFICATION
        const C1M1Classification = movieDataC1M1.rated;
        const C1M1ClassificationElement = document.getElementById("classification-c1-m1");
        C1M1ClassificationElement.textContent = C1M1Classification;

        // SCORE IMDB
        const C1M1ImdbScore = movieDataC1M1.imdb_score;
        const C1M1ImdbScoreElement = document.getElementById("imdb-score-c1-m1");
        C1M1ImdbScoreElement.textContent = C1M1ImdbScore;

        // DIRECTORS
        const C1M1Directors = movieDataC1M1.directors.join(", ");
        const C1M1DirectorsElement = document.getElementById("directors-c1-m1");
        C1M1DirectorsElement.textContent = C1M1Directors;

        // ACTORS
        const C1M1Actors = movieDataC1M1.actors.join(", ");
        const C1M1ActorsElement = document.getElementById("actors-c1-m1");
        C1M1ActorsElement.textContent = C1M1Actors;

        // DURATION
        const C1M1Duration = `${movieDataC1M1.duration} minutes`;
        const C1M1DurationElement = document.getElementById("duration-c1-m1");
        C1M1DurationElement.textContent = C1M1Duration;

        // NATIVE COUNTRY
        const C1M1NativeCountry = movieDataC1M1.countries.join(", ");
        const C1M1NativeCountryElement = document.getElementById("native-country-c1-m1");
        C1M1NativeCountryElement.textContent = C1M1NativeCountry;

        // BOX OFFICE REVENUE
        const C1M1BoxOfficeRevenue = movieDataC1M1.worldwide_gross_income;
        const C1M1BoxOfficeRevenueElement = document.getElementById("box-office-revenue-c1-m1");
        C1M1BoxOfficeRevenueElement.textContent = C1M1BoxOfficeRevenue;

      })
      .catch(error => console.error("Une erreur s'est produite lors de la récupération des données :", error));


// MOVIE 2
fetch(dataUrlC1)
  .then(response => response.json())
  .then(data => {
      const C1M1 = data.results[1];
      const C1M1Id = C1M1.id;
      const dataUrl = `http://localhost:8000/api/v1/titles/${C1M1Id}`;

    fetch(dataUrl)
      .then(response => response.json())
      .then(movieData => {

    // TITLE
    const C1M2Title = movieData.title;
    const C1M2TitleElement = document.getElementById("c1-m2-title");
    C1M2TitleElement.textContent = C1M2Title;
    const C1M2ModalTitleElement = document.getElementById("c1-m2-modal-title");
    C1M2ModalTitleElement.textContent = C1M2Title;

    //IMAGE
    const C1M2Image = movieData.image_url;
    const C1M2ImageElement = document.getElementById("c1-m2-image");
    C1M2ImageElement.src = C1M2Image;

    // GENRE
    const C1M2Genres = movieData.genres;
    const C1M2GenresElement = document.getElementById("genres-c1-m2");
    C1M2GenresElement.textContent = C1M2Genres;

    // YEAR
    const C1M2year = movieData.year;
    const C1M2yearElement = document.getElementById("year-c1-m2");
    C1M2yearElement.textContent = C1M2year;

    // CLASSIFICATION
    const C1M2Classification = movieData.classification;
    const C1M2ClassificationElement = document.getElementById("classification-c1-m2");
    C1M2ClassificationElement.textContent = C1M2Classification;

    // SCORE IMDB
    const C1M2ImdbScore = movieData.imdb_score;
    const C1M2ImdbScoreElement = document.getElementById("imdb-score-c1-m2");
    C1M2ImdbScoreElement.textContent = C1M2ImdbScore;

    // DIRECTORS
    const C1M2Directors = movieData.directors;
    const C1M2DirectorsElement = document.getElementById("directors-c1-m2");
    C1M2DirectorsElement.textContent = C1M2Directors;

    // ACTORS
    const C1M2Actors = movieData.actors;
    const C1M2ActorsElement = document.getElementById("actors-c1-m2");
    C1M2ActorsElement.textContent = C1M2Actors;

    // DURATION
    const C1M2Duration = movieData.duration;
    const C1M2DurationElement = document.getElementById("duration-c1-m2");
    C1M2DurationElement.textContent = C1M2Duration;

    // NATIVE COUNTRY
    const C1M2NativeCountry = movieData.native_country;
    const C1M2NativeCountryElement = document.getElementById("native-country-c1-m2");
    C1M2NativeCountryElement.textContent = C1M2NativeCountry;

    // BOX OFFICE REVENUE
    const C1M2BoxOfficeRevenue = movieData.box_office_revenue;
    const C1M2BoxOfficeRevenueElement = document.getElementById("box-office-revenue-c1-m2");
    C1M2BoxOfficeRevenueElement.textContent = C1M2BoxOfficeRevenue;

  })
  .catch(error => console.error("Une erreur s'est produite lors de la récupération des données :", error));


// MOVIE 3
fetch(dataUrlC1)
  .then(response => response.json())
  .then(data => {
    const C1M3 = data.results[2];

    // TITLE
    const C1M3Title = C1M3.title;
    const C1M3TitleElement = document.getElementById("c1-m3-title");
    C1M3TitleElement.textContent = C1M3Title;
    const C1M3ModalTitleElement = document.getElementById("c1-m3-modal-title");
    C1M3ModalTitleElement.textContent = C1M3Title;

    //IMAGE
    const C1M3Image = C1M3.image_url;
    const C1M3ImageElement = document.getElementById("c1-m3-image");
    C1M3ImageElement.src = C1M3Image;

    // GENRE
    const C1M3Genres = C1M3.genres;
    const C1M3GenresElement = document.getElementById("genres-c1-m3");
    C1M3GenresElement.textContent = C1M3Genres;

    // YEAR
    const C1M3year = C1M3.year;
    const C1M3yearElement = document.getElementById("year-c1-m3");
    C1M3yearElement.textContent = C1M3year;

    // CLASSIFICATION
    const C1M3Classification = C1M3.classification;
    const C1M3ClassificationElement = document.getElementById("classification-c1-m3");
    C1M3ClassificationElement.textContent = C1M3Classification;

    // SCORE IMDB
    const C1M3ImdbScore = C1M3.imdb_score;
    const C1M3ImdbScoreElement = document.getElementById("imdb-score-c1-m3");
    C1M3ImdbScoreElement.textContent = C1M3ImdbScore;

    // DIRECTORS
    const C1M3Directors = C1M3.directors;
    const C1M3DirectorsElement = document.getElementById("directors-c1-m3");
    C1M3DirectorsElement.textContent = C1M3Directors;

    // ACTORS
    const C1M3Actors = C1M3.actors;
    const C1M3ActorsElement = document.getElementById("actors-c1-m3");
    C1M3ActorsElement.textContent = C1M3Actors;

    // DURATION
    const C1M3Duration = C1M3.duration;
    const C1M3DurationElement = document.getElementById("duration-c1-m3");
    C1M3DurationElement.textContent = C1M3Duration;

    // NATIVE COUNTRY
    const C1M3NativeCountry = C1M3.native_country;
    const C1M3NativeCountryElement = document.getElementById("native-country-c1-m3");
    C1M3NativeCountryElement.textContent = C1M3NativeCountry;

    // BOX OFFICE REVENUE
    const C1M3BoxOfficeRevenue = C1M3.box_office_revenue;
    const C1M3BoxOfficeRevenueElement = document.getElementById("box-office-revenue-c1-m3");
    C1M3BoxOfficeRevenueElement.textContent = C1M3BoxOfficeRevenue;

  })
  .catch(error => console.error("Une erreur s'est produite lors de la récupération des données :", error));


// MOVIE 4
fetch(dataUrlC1)
  .then(response => response.json())
  .then(data => {
    const C1M4 = data.results[3];

    // TITLE
    const C1M4Title = C1M4.title;
    const C1M4TitleElement = document.getElementById("c1-m4-title");
    C1M4TitleElement.textContent = C1M4Title;
    const C1M4ModalTitleElement = document.getElementById("c1-m4-modal-title");
    C1M4ModalTitleElement.textContent = C1M4Title;

    //IMAGE
    const C1M4Image = C1M4.image_url;
    const C1M4ImageElement = document.getElementById("c1-m4-image");
    C1M4ImageElement.src = C1M4Image;

    // GENRE
    const C1M4Genres = C1M4.genres;
    const C1M4GenresElement = document.getElementById("genres-c1-m4");
    C1M4GenresElement.textContent = C1M4Genres;

    // YEAR
    const C1M4year = C1M4.year;
    const C1M4yearElement = document.getElementById("year-c1-m4");
    C1M4yearElement.textContent = C1M4year;

    // CLASSIFICATION
    const C1M4Classification = C1M4.classification;
    const C1M4ClassificationElement = document.getElementById("classification-c1-m4");
    C1M4ClassificationElement.textContent = C1M4Classification;

    // SCORE IMDB
    const C1M4ImdbScore = C1M4.imdb_score;
    const C1M4ImdbScoreElement = document.getElementById("imdb-score-c1-m4");
    C1M4ImdbScoreElement.textContent = C1M4ImdbScore;

    // DIRECTORS
    const C1M4Directors = C1M4.directors;
    const C1M4DirectorsElement = document.getElementById("directors-c1-m4");
    C1M4DirectorsElement.textContent = C1M4Directors;

    // ACTORS
    const C1M4Actors = C1M4.actors;
    const C1M4ActorsElement = document.getElementById("actors-c1-m4");
    C1M4ActorsElement.textContent = C1M4Actors;

    // DURATION
    const C1M4Duration = C1M4.duration;
    const C1M4DurationElement = document.getElementById("duration-c1-m4");
    C1M4DurationElement.textContent = C1M4Duration;

    // NATIVE COUNTRY
    const C1M4NativeCountry = C1M4.native_country;
    const C1M4NativeCountryElement = document.getElementById("native-country-c1-m4");
    C1M4NativeCountryElement.textContent = C1M4NativeCountry;

    // BOX OFFICE REVENUE
    const C1M4BoxOfficeRevenue = C1M4.box_office_revenue;
    const C1M4BoxOfficeRevenueElement = document.getElementById("box-office-revenue-c1-m4");
    C1M4BoxOfficeRevenueElement.textContent = C1M4BoxOfficeRevenue;

  })
  .catch(error => console.error("Une erreur s'est produite lors de la récupération des données :", error));


// MOVIE 5
fetch(dataUrlC1)
  .then(response => response.json())
  .then(data => {
    const C1M5 = data.results[4];

    // TITLE
    const C1M5Title = C1M5.title;
    const C1M5TitleElement = document.getElementById("c1-m5-title");
    C1M5TitleElement.textContent = C1M5Title;
    const C1M5ModalTitleElement = document.getElementById("c1-m5-modal-title");
    C1M5ModalTitleElement.textContent = C1M5Title;

    //IMAGE
    const C1M5Image = C1M5.image_url;
    const C1M5ImageElement = document.getElementById("c1-m5-image");
    C1M5ImageElement.src = C1M5Image;

    // GENRE
    const C1M5Genres = C1M5.genres;
    const C1M5GenresElement = document.getElementById("genres-c1-m5");
    C1M5GenresElement.textContent = C1M5Genres;

    // YEAR
    const C1M5year = C1M5.year;
    const C1M5yearElement = document.getElementById("year-c1-m5");
    C1M5yearElement.textContent = C1M5year;

    // CLASSIFICATION
    const C1M5Classification = C1M5.classification;
    const C1M5ClassificationElement = document.getElementById("classification-c1-m5");
    C1M5ClassificationElement.textContent = C1M5Classification;

    // SCORE IMDB
    const C1M5ImdbScore = C1M5.imdb_score;
    const C1M5ImdbScoreElement = document.getElementById("imdb-score-c1-m5");
    C1M5ImdbScoreElement.textContent = C1M5ImdbScore;

    // DIRECTORS
    const C1M5Directors = C1M5.directors;
    const C1M5DirectorsElement = document.getElementById("directors-c1-m5");
    C1M5DirectorsElement.textContent = C1M5Directors;

    // ACTORS
    const C1M5Actors = C1M5.actors;
    const C1M5ActorsElement = document.getElementById("actors-c1-m5");
    C1M5ActorsElement.textContent = C1M5Actors;

    // DURATION
    const C1M5Duration = C1M5.duration;
    const C1M5DurationElement = document.getElementById("duration-c1-m5");
    C1M5DurationElement.textContent = C1M5Duration;

    // NATIVE COUNTRY
    const C1M5NativeCountry = C1M5.native_country;
    const C1M5NativeCountryElement = document.getElementById("native-country-c1-m5");
    C1M5NativeCountryElement.textContent = C1M5NativeCountry;

    // BOX OFFICE REVENUE
    const C1M5BoxOfficeRevenue = C1M5.box_office_revenue;
    const C1M5BoxOfficeRevenueElement = document.getElementById("box-office-revenue-c1-m5");
    C1M5BoxOfficeRevenueElement.textContent = C1M5BoxOfficeRevenue;

  })
  .catch(error => console.error("Une erreur s'est produite lors de la récupération des données :", error));


// MOVIE 6
fetch(dataUrlC1)
  .then(response => response.json())
  .then(data => {
    const C1M6 = data.results[5];

    // TITLE
    const C1M6Title = C1M6.title;
    const C1M6TitleElement = document.getElementById("c1-m6-title");
    C1M6TitleElement.textContent = C1M6Title;
    const C1M6ModalTitleElement = document.getElementById("c1-m6-modal-title");
    C1M6ModalTitleElement.textContent = C1M6Title;

    //IMAGE
    const C1M6Image = C1M6.image_url;
    const C1M6ImageElement = document.getElementById("c1-m6-image");
    C1M6ImageElement.src = C1M6Image;

    // GENRE
    const C1M6Genres = C1M6.genres;
    const C1M6GenresElement = document.getElementById("genres-c1-m6");
    C1M6GenresElement.textContent = C1M6Genres;

    // YEAR
    const C1M6year = C1M6.year;
    const C1M6yearElement = document.getElementById("year-c1-m6");
    C1M6yearElement.textContent = C1M6year;

    // CLASSIFICATION
    const C1M6Classification = C1M6.classification;
    const C1M6ClassificationElement = document.getElementById("classification-c1-m6");
    C1M6ClassificationElement.textContent = C1M6Classification;

    // SCORE IMDB
    const C1M6ImdbScore = C1M6.imdb_score;
    const C1M6ImdbScoreElement = document.getElementById("imdb-score-c1-m6");
    C1M6ImdbScoreElement.textContent = C1M6ImdbScore;

    // DIRECTORS
    const C1M6Directors = C1M6.directors;
    const C1M6DirectorsElement = document.getElementById("directors-c1-m6");
    C1M6DirectorsElement.textContent = C1M6Directors;

    // ACTORS
    const C1M6Actors = C1M6.actors;
    const C1M6ActorsElement = document.getElementById("actors-c1-m6");
    C1M6ActorsElement.textContent = C1M6Actors;

    // DURATION
    const C1M6Duration = C1M6.duration;
    const C1M6DurationElement = document.getElementById("duration-c1-m6");
    C1M6DurationElement.textContent = C1M6Duration;

    // NATIVE COUNTRY
    const C1M6NativeCountry = C1M6.native_country;
    const C1M6NativeCountryElement = document.getElementById("native-country-c1-m6");
    C1M6NativeCountryElement.textContent = C1M6NativeCountry;

    // BOX OFFICE REVENUE
    const C1M6BoxOfficeRevenue = C1M6.box_office_revenue;
    const C1M6BoxOfficeRevenueElement = document.getElementById("box-office-revenue-c1-m6");
    C1M6BoxOfficeRevenueElement.textContent = C1M6BoxOfficeRevenue;

  })
  .catch(error => console.error("Une erreur s'est produite lors de la récupération des données :", error));
  })
  .catch(error => console.error("Une erreur s'est produite lors de la récupération des données de la liste de films :", error));
})
