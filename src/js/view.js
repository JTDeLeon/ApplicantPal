console.log("view")

//Updates the DOM list to include a new position name
updatePositionList = (positionName) => {
  const posList = document.querySelector('#position-list');
  const newListItem = document.createElement('li');
  newListItem.textContent = positionName;

  posList.appendChild(newListItem);
}
