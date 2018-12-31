// one function with embedded functions that's called when window is loaded
function onReady() {
  //declare toDos as blank array
  const toDos = [];
  let id=0;

  const addToDoForm = document.getElementById('addToDoForm');

  //declare createNewToDo function
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    // note to self: create new array object each time createNewToDo is executed
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });

    id++;
    // set newToDoText value used by the field to empty
    newToDoText.value = '';

    // note to self: need this here to update the UI based on changes in state
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

      const delButton = document.createElement('button');
      button.type = "button";


      // for assignment checker - i'm stuck here... how do I use the filter technique?
      delButton.addEventListener('click',event => {
        toDos = toDos.filter(toDo => toDo.id==id) {
          return toDo.id !== id;
        })
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);
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
