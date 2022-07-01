/**
 * Filter workshops with select
 */
const select = document.getElementById('categories');
select.addEventListener('change', filterCategories);

let workshops = document.querySelectorAll('.workshop')

function filterCategories()  {
  let option = select.value;

  workshops.forEach(workshop => {
    // if(option === 'all') {
    //   workshop.classList.remove('hide');
    // } else if(workshop.classList.contains(option)) {
    //   workshop.classList.remove('hide');
    //   workshop.classList.add('hide');
    // }
    workshop.classList.remove('hide');

    if(!workshop.classList.contains(option)) {
      workshop.classList.add('hide');
    }
  });
}