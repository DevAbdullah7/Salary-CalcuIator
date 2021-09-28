
let menu = document.querySelector('.menu');
let infoLayout = document.querySelector('.infoLayout');
let main = document.querySelector('.main');
let monthlyCommitments = document.querySelector('.monthlyCommitments');
let personFinancing = document.querySelector('.personFinancing');
let RealEstateFinancing = document.querySelector('.RealEstateFinancing');
let maxMonthlyCommitments = document.querySelector('.maxMonthlyCommitments');
let maxPersonFinancing = document.querySelector('.maxPersonFinancing');
let maxRealEstateFinancing = document.querySelector('.maxRealEstateFinancing');
let btns = document.querySelectorAll('.btns span');
let totalSalaryDetailes = document.querySelectorAll('.totalSalaryDetailes section');
let infoDetaileP = document.querySelector('.infoDetaileP');
let infoDetaileR = document.querySelector('.infoDetaileR');
let infoDetaileC = document.querySelector('.infoDetaileC');
let infoDetaile = document.querySelector('.infoDetaile');
let billsDetaile = document.querySelector('.billsDetaile');
menu.onclick = function () {
    menu.classList.toggle('activate');
    infoLayout.classList.toggle('activate');
    main.classList.toggle('activate');
}
btns.forEach(function (btn) {
    btn.onclick = function () {
        btns.forEach(function (btn) {
            btn.classList.remove('show');
        });
        totalSalaryDetailes.forEach(function (totalSalaryDetaile) {
            totalSalaryDetaile.classList.remove('show')
        });
        this.classList.add('show');
        if (btn.className === "monthlyCommitments show") {
            maxMonthlyCommitments.classList.add('show')
        } else if (btn.className === "personFinancing show") {
            maxPersonFinancing.classList.add('show')
        } else {
            maxRealEstateFinancing.classList.add('show')
        }
    }
})
let commitmentsList = document.querySelector('#commitmentsList');
let patBtn = document.querySelector('.pay');
let payValue = document.querySelector('#payValue');
patBtn.onclick = function () {
    let temp = 0;
    MonthlyCommitmentsThrRest.textContent = parseInt(MonthlyCommitmentsThrRest.textContent) - payValue.value;
    if (commitmentsList.value === 'installment') {
        if (infoDetaileC.textContent == '') {
            infoDetaileC.textContent = parseInt(payValue.value)
        } else {
            infoDetaileC.textContent = parseInt(infoDetaileC.textContent) + parseInt(payValue.value);
        }
        let percentInstallment = document.querySelector('.percentInstallment');
        percentInstallment.innerHTML = `${((parseInt(infoDetaileC.textContent) * 100) / parseInt(totalSalary.value)).toFixed(2)}%`
    } else if (commitmentsList.value === 'bills') {
        if (billsDetaile.textContent == '') {
            billsDetaile.textContent = parseInt(payValue.value)
        } else {
            billsDetaile.innerHTML = parseInt(billsDetaile.textContent) + parseInt(payValue.value);
        }
        let percentBills = document.querySelector('.percentBills');
        percentBills.innerHTML = `${((parseInt(billsDetaile.textContent) * 100) / parseInt(totalSalary.value)).toFixed(2)}%`
    }
}