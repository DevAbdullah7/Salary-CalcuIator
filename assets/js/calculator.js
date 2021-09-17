let totalSalary = document.querySelector('#totalSalary');
let totalSalaryBtn = document.querySelector('#totalSalaryBtn');
let maxPersonFinancingYearsCount = document.querySelector('#maxPersonFinancingYearsCount');
let maxPersonFinancingTotal = document.querySelector('#maxPersonFinancingTotal');
let maxPersonFinancingMonthly = document.querySelector('#maxPersonFinancingMonthly');
let PersonFinancingTheRest = document.querySelector('#PersonFinancingTheRest');
let maxRealEstateFinancingYearsCount = document.querySelector('#maxRealEstateFinancingYearsCount');
let maxRealEstateFinancingTotal = document.querySelector('#maxRealEstateFinancingTotal');
let maxRealEstateFinancingMonthly = document.querySelector('#maxRealEstateFinancingMonthly');
let RealEstateFinancingTheRest = document.querySelector('#RealEstateFinancingTheRest');
let MonthlyCommitments = document.querySelector('#MonthlyCommitments');
let MonthlyCommitmentsThrRest = document.querySelector('#MonthlyCommitmentsThrRest');
totalSalaryBtn.onclick = function () {
    if (totalSalary.value.length > 3) {
        if (maxPersonFinancingYearsCount.value == '') {
            maxPersonFinancingYearsCount.value = 5;
        }
        if (maxRealEstateFinancingYearsCount.value == '') {
            maxRealEstateFinancingYearsCount.value = 25;
        }
        let personFinancingMonthes = (maxPersonFinancingYearsCount.value * 12).toFixed(2);
        let personFinancingInstallment = ((totalSalary.value * 33.33) / 100).toFixed(2);
        let realEstateFinancingMonthes = (maxRealEstateFinancingYearsCount.value * 12).toFixed(2);
        let realEstateFinancingInstallment = ((totalSalary.value * 55) / 100).toFixed(2);
        let MonthlyCommitmentsInstallment = ((totalSalary.value * (45 - 33.33)) / 100).toFixed(2);
        maxPersonFinancingTotal.value = (personFinancingMonthes * personFinancingInstallment).toFixed(2);
        maxPersonFinancingMonthly.value = personFinancingInstallment;
        PersonFinancingTheRest.value = (totalSalary.value - personFinancingInstallment).toFixed(2);
        maxRealEstateFinancingTotal.value = (realEstateFinancingMonthes * realEstateFinancingInstallment).toFixed(2);
        maxRealEstateFinancingMonthly.value = realEstateFinancingInstallment;
        RealEstateFinancingTheRest.value = (totalSalary.value - realEstateFinancingInstallment).toFixed(2);
        MonthlyCommitments.value = MonthlyCommitmentsInstallment;
        MonthlyCommitmentsThrRest.value = (totalSalary.value - MonthlyCommitmentsInstallment).toFixed(2);

    }
}