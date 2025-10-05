document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-button');
  const listHeader = document.querySelector('.list-header');
  const listItems = document.querySelectorAll('.section-li');

  if (hamburger && listHeader) {
    hamburger.addEventListener('click', () => {
      if (!listHeader.classList.contains('list-header-on')) {
        listHeader.className = 'list-header-on';
      } else {
        listHeader.className = 'list-header';
      }
    });
  }

  if(listItems){
    listItems.forEach(item => {
      item.addEventListener('click', () => {
        if (listHeader.classList.contains('list-header-on')) {
          listHeader.className = 'list-header';
        }
      });
    });
  }
  
});