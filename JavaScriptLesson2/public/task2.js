/**
 * 
 */
let employeeSalaries ={
	director: 30000,
	accountant: 20000,
	secretary: 20000,
	programmer: 20000,
	tester: 15000,
	support: 10000
}
var salaryFund=0;
	for (let salary in employeeSalaries) {
	salaryFund += employeeSalaries[salary];
}
	console.log("The wage fund amounted to " + salaryFund);