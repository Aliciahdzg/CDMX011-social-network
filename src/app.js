import { Login } from './components/login.js';
import { Feed } from './components/feed.js';
import { Signup } from './components/signup.js';
import { auth } from './firebase.js';
import { Posts } from './components/CRUDposts.js';

const routes = {
  '/': Login,
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

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());

auth.onAuthStateChanged((user) => {
  if (!user) {
    onNavigate('/');
  }
});