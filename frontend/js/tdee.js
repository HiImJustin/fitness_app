//Function for TDEE
function tobedetermined() {
//BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day),
// where s is +5 for males and -161 for females.
    
    function weightHeightConversion(pounds, inches, feet) {
        weight = (pounds / 2.2).toFixed(2);
        heightToCm = ((inches / 12) + feet);
        height = (heightToCm * 30.48);
    }
    

}    

    function getFormValues() {
        age = parseInt(document.getElementById('age').value);
        weight = document.getElementById('weight').value;
        height = document.getElementById('height').value;
        sex = document.getElementById('sex').value;
        activity = document.getElementById('activity').value;
    }



    function calculateTDEE(bmr) {
        if(activity === "Sedentary") {
            tdee = Math.round(bmr * 1.2)
        } else if (activity === "lightly Active") {
            tdee = Math.round(bmr * 1.375)
        } else if (activity === "Moderately Active") {
            tdee = Math.round(bmr * 1.55)
        }   else if (activity === "Very Active") {
            tdee = Math.round(bmr * 1.725)
        }   else if (activity === "Extreemly Active") {
            tdee = Math.round(bmr * 1.9)
        }
    }

    function showResults(bmr, tdee) {
        let tdeeresults = document.getElementById("tdeeresults");
        let bmrresults = document.getElementById("bmr");
        let losehalfkg = document.getElementById("losehalfkg");
        let losekg = document.getElementById('losekg');
        let gainhalfkg = document.getElementById('gainhalfkg');
        let maintain = document.getElementById("maintain");

        tdeeresults.innerHTML += ` TDEE: ${tdee}`;
        bmrresults.innerHTML += `bmr: ${bmr}`;
        losehalfkg.innerHTML += ` ${tdee - 500} calories`;
        losekg.innerHTML += ` ${tdee - 1000} calories`;
        gainhalfkg.innerHTML += ` ${tdee + 500} calories`;
        maintain.innerHTML += ` ${tdee} Calories`
    }



    function calculateBMR() {
        //Get the form values
        getFormValues();

        //Convert values if needed

        if(sex === 'female') {
            let femaleBmr = (10 * weight) + (6.25 * height);
            bmr = (femaleBmr) - (5 * age)
            bmr = Math.round(bmr);
            console.log(bmr)

            calculateTDEE(bmr);

            showResults(bmr, tdee);
            console.log(showResults);
            
        } else {
            let maleBmr = (10 * weight) + (6.25 * height);
            bmr = (maleBmr) + (5 * age)
            bmr + Math.round(bmr);
            console.log(bmr);

            calculateTDEE(bmr);

            showResults(bmr, tdee);
            console.log(showResults);
        }
    }
