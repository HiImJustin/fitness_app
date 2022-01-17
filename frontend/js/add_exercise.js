function addExercise() {

    //Get access to the add_exercise form element
    let addExercise = document.getElementById("addExercise");
    //Convert the exercise form fields into JSON
    let formDataJSON = JSON.stringify(Object.fromEntries(new FormData(addExercise)));

    //Post the form data to the API

    fetch("/api/add/exercise", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: formDataJSON
    })
    .then(res => res.json())
    .then(res => {
        //Handle the response from the server
        console.log("add exercise request sent")
    })
    .catch(err => {
        console.log("add exercise request failed " + err)
    })
}