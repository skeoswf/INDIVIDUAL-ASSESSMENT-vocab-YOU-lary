import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  document.querySelector('#login-form-container').innerHTML = `
    <h1>vocab assessment</h1>
    <hr/>
  `;

  ViewDirectorBasedOnUserAuthStatus();
};

init();

console.warn('testasdad');
