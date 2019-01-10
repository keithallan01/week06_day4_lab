document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  // form.reset();
});

const handleFormSubmit = function(event) {
  event.preventDefault()
  // console.log(event.target.title.value);
  // console.log(event.target.author.value);
  // console.log(event.target.category.value)
  const readingList = document.querySelector('#reading-list');
  const newItem = document.createElement('p')
  newItem.textContent = `ADDED: ${event.target.title.value} AUTHOR: ${event.target.author.value}
                        TYPE: ${event.target.category.value}`;
  const form = document.querySelector('#new-item-form')
    form.reset();
  readingList.appendChild(newItem);

};

// const form = document.querySelector('#new-item-form')
//   form.reset();
