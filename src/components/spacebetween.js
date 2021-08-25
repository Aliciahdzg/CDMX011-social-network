export function spacebetween() {
// Insertar el "o" del diseño
  const oFromDesign = document.createElement('p');
  const spanSpace = document.createElement('span');
  oFromDesign.setAttribute('class', 'hr-test');
  oFromDesign.appendChild(spanSpace);
  spanSpace.textContent = 'ó';
  return oFromDesign;
}
