export function logo() {
  const firstChild = document.createElement('section');
  const imgLogo = document.createElement('img');
  const imgLogoLand = document.createElement('img');
  const welcomeText = document.createElement('p');
  const title = document.createElement('h1');

  firstChild.setAttribute('class', 'container');
  // Titulo del Logo Landscape
  title.textContent = 'Plantagram';
  title.setAttribute('class', 'logo');
  title.id = 'logo-title';
  firstChild.appendChild(title);
  imgLogo.src = 'images/logo.png';
  imgLogo.alt = 'plantita';
  imgLogo.setAttribute('class', 'image-size');
  imgLogo.id = 'logo-img';
  firstChild.appendChild(imgLogo);
  // Imagen del Landscape
  imgLogoLand.src = 'images/girls.jpg';
  imgLogoLand.alt = 'chicas';
  imgLogoLand.setAttribute('class', 'image-size');
  imgLogoLand.id = 'logo-img-land';
  firstChild.appendChild(imgLogoLand);
  // Texto de bienvenida
  welcomeText.setAttribute('class', 'welcome-text');
  welcomeText.textContent = 'Bienvenid@ a la plataforma destinada a los amantes de plantas';
  firstChild.appendChild(welcomeText);

  return firstChild;
}
