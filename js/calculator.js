let totalSalary = document.querySelector('#totalSalary');
let totalSalaryBtn = document.querySelector('.totalSalaryBtn');
let maxPersonFinancingYearsCount = document.querySelector('#maxPersonFinancingYearsCount');
let maxPersonFinancingTotal = document.querySelector('#maxPersonFinancingTotal');
let maxPersonFinancingMonthly = document.querySelector('#maxPersonFinancingMonthly');
let PersonFinancingTheRest = document.querySelector('#PersonFinancingTheRest');
let maxRealEstateFinancingYearsCount = document.querySelector('#maxRealEstateFinancingYearsCount');
let maxRealEstateFinancingTotal = document.querySelector('#maxRealEstateFinancingTotal');
let maxRealEstateFinancingMonthly = document.querySelector('#maxRealEstateFinancingMonthly');
let RealEstateFinancingTheRest = document.querySelector('#RealEstateFinancingTheRest');
let MonthlyCommitments = document.querySelector('#MonthlyCommitments');
let MonthlyCommitmentsThrRest = document.querySelector('.MonthlyCommitmentsThrRest');
let personFinancingMonthes = 0;
let personFinancingInstallment = 0;
let realEstateFinancingMonthes = 0;
let realEstateFinancingInstallment = 0;
let MonthlyCommitmentsInstallment = 0;
totalSalaryBtn.onclick = function () {
    if (totalSalary.value.length > 3) {
        if (maxPersonFinancingYearsCount.value == '') {
            maxPersonFinancingYearsCount.value = 5;
        }
        if (maxRealEstateFinancingYearsCount.value == '') {
            maxRealEstateFinancingYearsCount.value = 25;
        }
        personFinancingMonthes = (maxPersonFinancingYearsCount.value * 12).toFixed(2);
        personFinancingInstallment = ((totalSalary.value * 33.33) / 100).toFixed(2);
        realEstateFinancingMonthes = (maxRealEstateFinancingYearsCount.value * 12).toFixed(2);
        realEstateFinancingInstallment = ((totalSalary.value * 55) / 100).toFixed(2);
        MonthlyCommitmentsInstallment = ((totalSalary.value * (45)) / 100).toFixed(2);
        maxPersonFinancingTotal.innerHTML = (personFinancingMonthes * personFinancingInstallment).toFixed(2);
        maxPersonFinancingMonthly.innerHTML = personFinancingInstallment;
        PersonFinancingTheRest.innerHTML = (totalSalary.value - personFinancingInstallment).toFixed(2);
        maxRealEstateFinancingTotal.innerHTML = (realEstateFinancingMonthes * realEstateFinancingInstallment).toFixed(2);
        maxRealEstateFinancingMonthly.innerHTML = realEstateFinancingInstallment;
        RealEstateFinancingTheRest.innerHTML = (totalSalary.value - realEstateFinancingInstallment).toFixed(2);
        MonthlyCommitmentsThrRest.innerHTML = `${totalSalary.value} ريال`;
        infoDetaileP.innerHTML = personFinancingInstallment;
        infoDetaileR.innerHTML = realEstateFinancingInstallment;
    }
}
