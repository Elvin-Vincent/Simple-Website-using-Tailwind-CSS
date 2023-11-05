window.addEventListener('load', () => {
  const menuicon = document.querySelector('#menuicon');
  const navmenu = document.querySelector('#navmenu');

  menuicon.addEventListener('click', () => {
    if (navmenu.classList.contains('hidden')) {
      navmenu.classList.remove('hidden');
    } else {
      navmenu.classList.add('hidden');
    }
  });
});
