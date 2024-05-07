// AFFICHAGE RESPONSIV CATÉGORIE 1
function toggleMoviesVisibilityC1() {
    const movieContainer = document.getElementById("moviesContainerC1");
    const showMoreButton = document.getElementById("showMoreButton");

    // Si la classe 'show_all_movies' est présente, on la retire, sinon, on l'ajoute
    movieContainer.classList.toggle('show_all_movies');

    // On change le texte du bouton en fonction de l'état actuel
    if (movieContainer.classList.contains('show_all_movies')) {
        showMoreButton.textContent = "Voir moins";
    } else {
        showMoreButton.textContent = "Voir plus";
    }
}


// AFFICHAGE RESPONSIV CATÉGORIE 2
function toggleMoviesVisibilityC2() {
    const movieContainer = document.getElementById("moviesContainerC2");
    const showMoreButton = document.getElementById("showMoreButton");

    // Si la classe 'show_all_movies' est présente, on la retire, sinon, on l'ajoute
    movieContainer.classList.toggle('show_all_movies');

    // On change le texte du bouton en fonction de l'état actuel
    if (movieContainer.classList.contains('show_all_movies')) {
        showMoreButton.textContent = "Voir moins";
    } else {
        showMoreButton.textContent = "Voir plus";
    }
}


// AFFICHAGE RESPONSIV CATÉGORIE 3
function toggleMoviesVisibilityC3() {
    const movieContainer = document.getElementById("moviesContainerC3");
    const showMoreButton = document.getElementById("showMoreButton");

    // Si la classe 'show_all_movies' est présente, on la retire, sinon, on l'ajoute
    movieContainer.classList.toggle('show_all_movies');

    // On change le texte du bouton en fonction de l'état actuel
    if (movieContainer.classList.contains('show_all_movies')) {
        showMoreButton.textContent = "Voir moins";
    } else {
        showMoreButton.textContent = "Voir plus";
    }
}