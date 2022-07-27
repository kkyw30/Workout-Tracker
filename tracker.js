
let workouts = {};   // dict to store all the workouts
let workout_limit = 10000000;   // basically unlimited workouts 
let exercise_limit = 20;        // max exercises per workout 
let workout_count = 0;          // current number of workouts
let exercise_count = 0; 

// method to render workout on the screen 
function renderWorkout(workout) {
    const list = document.querySelector('.js-workout-tracker');
    const item = document.querySelector(`[data-key='${workout.id}']`);
    const exercise_list = document.querySelector(`[data-key='${workout.exercises}]`);

    if (workout.deleted) {
        item.remove(); 
        exercise_list.remove(); 
        return 
    }

    const isChecked = todo.checked ? 'done': ''; 
    const node = document.createElement("li"); 
    node.setAttribute('class', `todo-item ${isChecked}`);   // set class attribute of node 
    node.setAttribute('data-key', item.id); 
    node.setAttribute('list', workout.exercises); 

    if (item) {
        list.replaceChild(node, item);    // replace child node with parent node Item
    } else {
        list.append(node); 
    }
}

// method to add workout (name) to the dictionary 
function addWorkout(text) {
    const workout = {
        text, 
        id: Date.now(),
        exercises: [],
    };
    workouts[workout] = exercises; 

    // add new form to the screen (new workout) 
    var this_workout = document.getElementById('workout'); 
    if (this_workout) {
        if (count < limit) {
            // Create new form
            var newForm = document.createElement('form'); 
            newForm.innerHTML = 'Exercise';

            // Create new text box
            var newInput = document.createElement('input'); 
            newInput.type = 'text'; 
            newInput.name = 'exercises[]';
        }
    }
}

// method to add exercises to a workout 
function addExercise(text, workout) {
    // only add the exercise if count is less than the limit
    if (exercise_count < exercise_limit) {
        workout.exercises.append(text); 
        renderWorkout(workout); 
    } else {
        return 
    }
}

// method to delete a workout
function deleteTodo(key) {
    const index = workouts.findIndex(item => item.id === Number(key));
    const workout = {
        deleted: true,
        ...workouts[index]
    };
    workouts = workouts.filter(item => item.id != Number(key)); 
    renderWorkout(workout);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input'); 

    const text = input.ariaValueMax.trim(); 
    if (text !== '') {
        addTodo(text);
        input.value = ''; 
        input.focus(); 
    }
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('add-workout')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  
  if (event.target.classList.contains('add-exercise')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});