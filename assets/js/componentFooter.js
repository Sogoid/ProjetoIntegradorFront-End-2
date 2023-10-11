let dados = JSON.parse(localStorage.getItem('register'));

// Agora 'dados' é um array de objetos
$.each(dados, function (i, item) {

    $("#user-logged").text(item.apelido.toUpperCase());
});

const timeNow = new Date();
const dataFormatada = timeNow.toLocaleDateString("pt-BR", {
    dateStyle: "short",
});
$("data-atual").text(dataFormatada);
