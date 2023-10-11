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
            window.location.href = "../page/indexView.html"
            existe = true;
        }
    });
    if (!existe) {
        console.log("Dados incorreto insira os dados novamente");
    }

});

$(function () {
    const getGitUser = localStorage.getItem("register");
    if (getGitUser) {
        let dados = JSON.parse(getGitUser);
        let username = dados?.register?.apelido;
        if (username) {
            let img = $('#perfil');
            let defaultImg = 'https://github.com/' + username + '.png';

            img[0].onerror = function () {
                $(this).attr('src', defaultImg);
            };
        } else {
            console.error('Nenhum item "register" encontrado no localStorage');
        }
    }
});


