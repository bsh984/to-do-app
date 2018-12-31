// one function with embedded functions that's called when window is loaded
function onReady() {
  //declare toDos as blank array
  const toDos = [];
  //assign ID to var addToDoForm. now can use addToDoForm and manipulate
  const addToDoForm = document.getElementById('addToDoForm');

  //declare createNewToDo function
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    // create new array object each time createNewToDo is executed
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    // set newToDoText value used by the field to empty
    newToDoText.value = '';

    // need this here to update the UI based on changes in state
    // since the event handler below will preventDefault submit behavior
    // otherwise the renderTheUI will never get called
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
    
    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  //event listener will trigger event handler/execute the functions declared above
  addToDoForm.addEventListener('submit',event => {
    event.preventDefault();
    createNewToDo();
  });

  // on initial load, the UI needs to be rendered. it'll just appear blank
  renderTheUI();
}

window.onload = function() {
  onReady();
};
