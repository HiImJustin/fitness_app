fetch("/api/exercises")
    .then(res => res.json())
    .then(exercises => {

        let exercise_options = document.getElementById("exercise-options")
        console.log(exercises)

        //Loops for each exercise in the exercises table
        for(let exercise of exercises) {
            exercise_options.innerHTML += `
            <article id="exercise">
                <h1>${exercise.exerciseName}</h1>
            </article>
            `
        }
    })

function selectExercises() {
    
    //Get 
    let exercise_options = document.querySelector("#exercise-options")
    exercise_options.addEventListener("click", doSomething, false)

    function doSomething(e) {
        if(e.target !== e.currentTarget) {
            var clickedItem = e.target.innerHTML;
            alert("hello " + clickedItem)
        }
        e.stopPropagation();
    }


    //Click on each avaliable options and turn the backgroundcolor to green to show its selected, need to be able to do it for all and click it to unselect back to grey
}


