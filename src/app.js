const routes = {
  '/': home,
  '/sigup': signup,
  '/login': login,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({},
    pathname,
    window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

const homeRoute = document.querySelector('#home');
homeRoute.addEventListener('click', () => {
  onNavigate('/');
});
const loginRoute = document.querySelector('#login');
loginRoute.addEventListener('click', () => {
  onNavigate('/login');
});
const signupRoute = document.querySelector('#signup');
signupRoute.addEventListener('click', () => {
  onNavigate('/signup');
});


window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};