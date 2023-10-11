// Função para finalizar a sessão
$('#btn-exit').on('click', function () {
    localStorage.setItem('userLogged', false);
    localStorage.clear();
    window.location.href = "/"
    console.log("foi clicado para sair");
});
