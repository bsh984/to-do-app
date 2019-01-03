// one function with embedded functions that's called when window is loaded
function onReady() {
  //declare toDos as blank array
  let toDos = [];
  let id=0;

  const addToDoForm = document.getElementById('addToDoForm');

  //declare createNewToDo function
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    let unparsedToDos = localStorage.getItem('toDosString');
    toDos = JSON.parse(unparsedToDos);

    // note to self: create new array object each time createNewToDo is executed
    toDos.push({
      title: newToDoText.value
      ,complete: false
      ,id: id
    });

    // set newToDoText value used by the field to empty
    newToDoText.value = '';
    id++;

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
      checkbox.addEventListener('change',function() {
        if (this.checked) {
          toDo.complete=true;
        } else {
          toDo.complete=false;
        };
      });

      const delButton = document.createElement('button');
      delButton.type = "button";
      delButton.innerHTML = "Delete";

      delButton.addEventListener('click', () => {
        toDos = toDos.filter(function(toDoBeingFiltered){
          return toDoBeingFiltered.id !== toDo.id;
        });

        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);

      localStorage.setItem('toDosString',JSON.stringify(toDos));
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
