/* eslint-disable no-unused-vars */
import { Login } from './components/login.js';
import { Feed } from './components/feed.js';
import { Signup } from './components/signup.js';
import { auth } from './firebase.js';

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

window.onload = () => {
  rootDiv.appendChild(component());
};

auth.onAuthStateChanged((user) => {
  if (!user) {
    onNavigate('/');
  } else {
    const userUID = user.uid;
    const email = user.email;
    const name = user.displayName;
  }
});
