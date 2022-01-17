# Fitness APP

## The overall goal is to have the ability to do the following:

## Main functionality
- Track excercies that the users inputs with what exercise it is and the weight used or for cardio the duration and speed ect
- Track the food the user inputs with its macronurtrients and caloric values
- Keep records of the users exercise history so they can view their progress and previous lifts
- Keep records of the users total caloric intake so they can view their history and eating patterns 

## Functionality to add later
- Calculate the users TDEE 
- Calculate based on the users details what will be needed for maintenance, bulking, or losing weight
- Calculate micronutrients
- Calculate the users estimated energy levels based on their diet and activity
- Calculate estimated muscle gained based on users goals with their exercise's and diet
- Calculate estimated fat lost based on exercise and diet
- The ability to scan a barcode or take a picture of the information label and quickly input all the information

## The Following will be the requirments needed for the main functionality ONLY

## Database Requirements
users - userID, age, height, weight, gender, tdee

exercises - exerciseID, exerciseName, avgCalBurned, userID
customRoutine - routineID, routineName, userID, exercise1, exercise2, exercise3, exercise4, 

food - foodID, foodName, caloriesPer100grams, protien, carbs, fat
userDiet - mealID, foodID, customMealID, userID, calories, protien, carbs, fat, totalFat, dateAdded
customMeals- customMealID, customMealName, caloriesPer100grams, protien, carbs, fat, userID



## Users
- Create users
- Read user information
- Update information
- Delete account

## Exercises
- Create  exercise performed with wegith used or speed and duration based on type of exercise
- Read history of workouts
- Update workouts performed to correct the data
- Delete workout history

## Food -- Probably should be an admin only function 
- Create new food entry to the database contaiting the information about its caloric value and macronutrients
- Read a table of all food information that is currently in the database
- Update food information that is in the database
- Delete food information that is in the database

## User Diet
- Create new mealEntry based on food avaliable in the database or the users customMeals
- View a history of all meal entries based on each day
- Update any meal entries that has been added for the user
- Delete meal entries records

## To do list

Design app layout

Main page after login


## NPM MODULES
npm install express
npm install mysql2