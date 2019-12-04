import menu from './components/menu';
import database from './database/menu.json';
import refs from './utils/refs';

menu(database, refs.menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const initTheme = localStorage.getItem('theme') || Theme.LIGHT;
if (initTheme === Theme.LIGHT) {
  refs.switch.checked = false;
} else {
  refs.switch.checked = true;
}
refs.body.classList = initTheme;

function setTheme(currentTheme) {
  refs.body.classList = currentTheme;
  localStorage.setItem('theme', currentTheme);
}

function handleChangeTheme() {
  if (refs.switch.checked === true) {
    setTheme(Theme.DARK);
  } else {
    setTheme(Theme.LIGHT);
  }
}
refs.switch.addEventListener('change', handleChangeTheme);
