// eslint-disable eol-last
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>vocab assessment</h1>
    <button class="btn btn-danger" id="click-me">Click ME!</button><br />
    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));
  ViewDirectorBasedOnUserAuthStatus();
};

init();

console.warn('test');
