// untuk hitung BMI nya
// rumus: Kg/M^2

function calculateBMI(){
    let weight = document.getElementById('input-berat-badan').value;
    let height = document.getElementById('input-tinggi-badan').value;
    let age = document.getElementById('input-usia').value;
    let gender = document.querySelector('input[name="jenis-kelamin"]:checked');
    let resultBMI = document.getElementById('result-bmi');

    if(weight !== '' && height !== '' && age !== '' && gender !== ''){
        height = height/100; //covert dari cm ke meter
        let BMI = (weight / (height ** 2)).toFixed(2); // 2 angka decimal
        resultBMI.textContent = BMI;
    } else {
        alert('Please fill all the fields');
    }



}