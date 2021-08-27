import { Home } from './components/home.js';
import { Login } from './components/login.js';
import { Feed } from './components/feed.js';
import { Signup } from './components/signup.js';

const routes = {
  '/': Home,
  '/login': Login,
  '/signup': Signup,
  '/feed': Feed,
};

const rootDiv = document.getElementById('root');

export const onNavigate = (pathname) => {
  window.history.pushState({},
    pathname,
    window.location.origin + pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

// window.onload = () => {
//   onNavigate('/');
// };

// rootDiv.addEventListener('onchange', () => {
// location.reload();
// });

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());
