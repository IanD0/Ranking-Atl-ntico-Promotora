const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    if (this.classList.contains('Site')) {
      window.open(this.href, '_blank');

    }
  });
});

/* Gráfico */


  // seleciona o link "Total" e o modal
const totalLink = document.querySelector('#total-link');
const modal = document.querySelector('#modal');
const modalLink = document.querySelector('.modal_link');


// adiciona um ouvinte de evento de clique ao link "Total"
totalLink.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'block';
});

// adiciona um ouvinte de evento de clique ao botão "Ok"
modalLink.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'none';
});

// Verifica se a classe "active" está presente no elemento "btn"
if (btnElement.classList.contains('active')) {
  modalElement.style.display = 'flex';
} else {
  modalElement.style.display = 'none';
}





  
