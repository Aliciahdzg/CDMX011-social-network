export function modalPost() {
  const modal = document.createElement('section');
  modal.id = 'modalshow';
  modal.classList.add('modal');
  const contentModal = `
    <form id ='form-post' class='modal-content'>  
        <section>
            <img src="#"> 
        </section>
        <textarea class="modal-grow" placeholder="Publica tus ideas aqui" id="textPost"></textarea>
        <section class="background-button-modal">
            <button class="signup-button" type="submit" id="publishPost" >Publicar</button>
        </section>
    </form>`;
  modal.innerHTML = contentModal;
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
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


