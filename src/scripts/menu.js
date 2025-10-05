document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-button');
  const listHeader = document.querySelector('.list-header');
  if (hamburger && listHeader) {
    hamburger.addEventListener('click', () => {
      if (!listHeader.classList.contains('list-header-on')) {
        listHeader.className = 'list-header-on';
      } else {
        listHeader.className = 'list-header';
      }
    });
  }
});