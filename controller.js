console.log("Controller")

//Event Listener for the Submit Button
const submitButton = document.querySelector('#sub-btn');
submitButton.addEventListener('click',positionNameSet);

//Gets the name value and calls the method to update the DOM list
function positionNameSet () {
  const positionName = getPositionName.bind(window)();
  window.updatePositionList(positionName);
}
