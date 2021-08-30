export function modalPost() {
  const modal = document.createElement('section');
  modal.id = 'modalshow';
  modal.classList.add('modal');
  const contentModal = `
    <section class='modal-content'>  
        <section>
            <img src=> 
        </section>
        <input type="text" placeholder="Publica tus ideas aqui">
        <section>
            <button type="button">Publicar</button>
        </section>
    </section>`;
  modal.innerHTML = contentModal;
  return modal;
//   const modalSection = document.createElement('section');
//   const modalContentback = document.createElement('section');
//   const modalContentinput = document.createElement('input');
//   const modalContentbutton = document.createElement('button');
//   modalSection.id = 'modalpost';
//   modalSection.className = 'modal';
//   modalSection.appendChild(modalContentback);
//   modalSection.appendChild(modalContentinput);
}
