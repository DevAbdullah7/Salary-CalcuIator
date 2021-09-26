let menu = document.querySelector('.menu');
let infoLayout = document.querySelector('.infoLayout');
let main = document.querySelector('.main');
let monthlyCommitments = document.querySelector('.monthlyCommitments');
let personFinancing = document.querySelector('.personFinancing');
let RealEstateFinancing = document.querySelector('.RealEstateFinancing');
let btns = document.querySelectorAll('.btns span');
let totalSalaryDetailes = document.querySelectorAll('.totalSalaryDetailes div');
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
let test = 'Nothing'
console.log(test)
btns.forEach(function (btn) {
    btn.onclick = function () {
        btns.forEach(function (btn) {
            btn.classList.remove('show');
        })
        this.classList.add('show');
    }
})
totalSalaryDetailes.forEach(function (totalSalaryDetaile) {
    totalSalaryDetaile.onclick = function () {
        totalSalaryDetailes.forEach(function (totalSalaryDetaile) {
            totalSalaryDetaile.classList.remove('show');
        })
        this.classList.add('show');
    }
})