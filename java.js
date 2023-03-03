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

comissoesLink.addEventListener("click", () => {
  tableComissoes.classList.add("active");
  tableTotal.classList.remove("active");
});

totalLink.addEventListener("click", () => {
  tableComissoes.classList.remove("active");
  tableTotal.classList.add("active");
});
$(document).ready(function() {
  $("#total-link").click(function() {
    $("#table-total").addClass("active");
    $("#table-comissoes").removeClass("active");
  });

  $("#comissoes-link").click(function() {
    $("#table-comissoes").addClass("active");
    $("#table-total").removeClass("active");
  });
});




