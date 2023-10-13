// Recupera os dados do localStorage
let dados = JSON.parse(localStorage.getItem("register"));

// Função para lidar com o evento de clique no botão de login
function handleLoginClick(event) {
    event.preventDefault();

    let inputUser = $("#inputUser").val();
    let inputPassword = $("#inputPassword").val();
    let userExists = false;

    dados.forEach((user) => {
        if ((user.email === inputUser || user.apelido === inputUser) && user.password === inputPassword) {
            localStorage.setItem('userLogged', true);
            window.location.href = "../page/indexView.html";
            userExists = true;
        }
    });

    if (!userExists) {
        console.log("Dados incorretos. Insira os dados novamente.");
    }
}

// Função para lidar com o evento de entrada do campo de usuário
function handleUserInput() {
    let inputGitUser = $(this).val();

    if (!inputGitUser) {
        console.error('O campo de entrada está vazio ou nulo');
        return;
    }

    $.each(dados, function (i, user) {
        let apelido = user.apelido;
        console.log(apelido);
        if (inputGitUser === apelido) {
            updateProfileImage(apelido);
        } else {
            console.error('Nenhum item "register" encontrado no localStorage');
        }
    });
}

// Função para atualizar a imagem de perfil
function updateProfileImage(username) {
    let img = $('#perfil');
    let defaultImg = "/assets/img/fotoUser.png";
    let gitHubImg = 'https://github.com/' + username + '.png';

    img.attr('src', gitHubImg);

    img[0].onerror = function () {
        $(this).attr('src', defaultImg);
    };
}

// Adiciona os manipuladores de eventos
$("#btn-login").on("click", handleLoginClick);
$('#inputUser').on("input", handleUserInput);


$(document).on("pageshow", function () {
    $('#inputUser').val('');
    $('#inputPassword').val('');
});
