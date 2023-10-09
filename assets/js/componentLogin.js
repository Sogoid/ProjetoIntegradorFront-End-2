$("#btn-login").on("click", function (event) {
    // Para evitar o envio do formulário utilizaremos a seguinte instrução:
    event.preventDefault();

    let inputUser = $("#inputUser").val();
    let inputPassword = $("#inputPassword").val();
    let dados = JSON.parse(localStorage.getItem("register"));
    let existe = false;

    dados.forEach((object) => {
        if ((object.email === inputUser || object.apelido === inputUser) && object.password === inputPassword) {
            // Define 'userLogged' como verdadeiro no localStorage
            localStorage.setItem('userLogged', true);
            window.location.href = "../../index.html"
            existe = true;
        }
    });
    if (!existe) {
        console.log("Dados incorreto insira os dados novamente");
    }

});

// Função para finalizar a sessão
$('a.dropdown-item').on('click', function () {
    localStorage.removeItem('userLogged');
    localStorage.clear();
});
