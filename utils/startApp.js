
import ViewDirectorBasedOnUserAuthStatus from './viewDirector';

const startApp = () => {
  ViewDirectorBasedOnUserAuthStatus();
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getBooks().then((books) => showBooks(books));
};

startApp();

export default startApp;
