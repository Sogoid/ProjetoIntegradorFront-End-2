let dados = JSON.parse(localStorage.getItem('register'));

// Agora 'dados' é um array de objetos
$.each(dados, function (i, item) {
    let nameUser = item.apelido || item.name;
    $("#user-logged").text(nameUser.toUpperCase());
});

const timeNow = new Date();
const dataFormatada = timeNow.toLocaleDateString("pt-BR", {
    dateStyle: "short",
});
$("#data-atual").text(dataFormatada);
