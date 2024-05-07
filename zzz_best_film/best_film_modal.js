function openModalBestFilm() {
    document.querySelector('.overlay-best-film').style.display = 'block';
    document.querySelector('.modal-best-film').classList.add('modal--open');
}

function closeModalBestFilm() {
    document.querySelector('.overlay-best-film').style.display = 'none';
    document.querySelector('.modal-best-film').classList.remove('modal--open');
}