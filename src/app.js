import { Home } from './components/home.js';
import { Login } from './components/login.js';
import { Post } from './components/post.js';
import { Signup } from './components/signup.js';

const routes = {
  '/': Home,
  '/login': Login,
  '/signup': Signup,
  '/post': Post,
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

window.onload = () => {
  onNavigate('/');
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());
