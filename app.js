function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

        //get the text
        let title = newToDoText.value;

        //create a new li and Ul. li for structure only
        let newLi = document.createElement('li');

        newLi.textContent= title;

        //create a new input
        let checkbox = document.createElement('input');
        let delButton = document.createElement('button');

        //set the input's type to checkbox
        checkbox.type = "checkbox";

        // label button & provide delete functionality
        delButton.innerHTML ="delete"
        delButton.addEventListener('click', function() {
             newLi.parentNode.removeChild(newLi);
           });

        //attach the checkbox to the li
        newLi.appendChild(checkbox);
        newLi.appendChild(delButton);

        //attach the li to the ul
        toDoList.appendChild(newLi);

        //empty the input
        newToDoText.value = '';
        //
        // toDoList.addEventListener('click', event => {
        //   newLi.delete;
        // });
  });

}

window.onload = function() {
  onReady();
};
