let burnCalorie = 0;
let dietCalorie = 0;
let burn = 0;
let diet = 0;

const btn = document.getElementsByClassName('btn');

calorieCalculation();

function calorieCalculation() {
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            const genderForm = document.forms.genderForm;
            let gender = genderForm.gender.value;
            gender = genderCheck(gender);
            
            const activeForm = document.forms.avtiveType;
            let active = activeForm.active.value;
            active = activeCheck(active);

            const age = document.getElementById('age').value;
            const height = document.getElementById('height').value;
            const weight = document.getElementById('weight').value;

            burnCalorie = burnCalc(gender, active, height, weight, age);
            burnCalorie = Math.trunc(burnCalorie);

            dietCalorie = dietCalc(burnCalorie);
            dietCalorie = Math.trunc(dietCalorie);

            burn = document.getElementById('burn-calorie');
            burn.textContent = burnCalorie;

            diet = document.getElementById('diet-calorie');
            diet.textContent = dietCalorie;
        })
    }
}

function activeCheck(active) {
    if(active == 'low') {
        return active = 1.2;
    } else if(active == 'normal') {
        return active = 1.55;
    } else if(active == 'high') {
        return active = 1.725;
    }
}

function genderCheck(gender) {
    if(gender == 'men') {
       return  gender = 5;
    } else if (gender == 'women') {
       return gender = -161;
    }
}

function burnCalc(gender, active, height, weight, age) {
    const kiso = (10 * weight) + (6.25 * height) + (-5 * age) + gender;
    burn = kiso * active;
    return burn;
}

function dietCalc(cal) {
    diet = cal * 0.8;
    return diet;
}