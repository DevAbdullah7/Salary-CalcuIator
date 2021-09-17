let menu = document.querySelector('.menu');
let infoLayout = document.querySelector('.infoLayout');
let main = document.querySelector('.main');
let monthlyCommitments = document.querySelector('.monthlyCommitments');
let personFinancing = document.querySelector('.personFinancing');
let RealEstateFinancing = document.querySelector('.RealEstateFinancing');
let maxMonthlyCommitments = document.querySelector('.maxMonthlyCommitments');
let maxPersonFinancing = document.querySelector('.maxPersonFinancing');
let maxRealEstateFinancing = document.querySelector('.maxRealEstateFinancing');
menu.onclick = function () {
    menu.classList.toggle('activate');
    infoLayout.classList.toggle('activate');
    main.classList.toggle('activate');
}
monthlyCommitments.onclick = function () {
    maxMonthlyCommitments.classList.toggle('show');
    maxPersonFinancing.classList.remove('show');
    maxRealEstateFinancing.classList.remove('show');
}
personFinancing.onclick = function () {
    maxPersonFinancing.classList.toggle('show');
    maxMonthlyCommitments.classList.remove('show');
    maxRealEstateFinancing.classList.remove('show');
}
RealEstateFinancing.onclick = function () {
    maxRealEstateFinancing.classList.toggle('show');
    maxMonthlyCommitments.classList.remove('show');
    maxPersonFinancing.classList.remove('show');
}
