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

const comissoesLink = document.getElementById("comissoes-link");
const totalLink = document.getElementById("total-link");
const tableComissoes = document.getElementById("table-comissoes");
const tableTotal = document.getElementById("table-total");

// Adicione os manipuladores de eventos de clique aos botões
comissoesLink.addEventListener("click", () => {
  tableComissoes.classList.add("active");
  tableTotal.classList.remove("active");
});

totalLink.addEventListener("click", () => {
  tableTotal.classList.add("active");
  tableComissoes.classList.remove("active");
});
