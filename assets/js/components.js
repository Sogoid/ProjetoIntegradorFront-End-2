// Carrega o componente referente ao menu no rodapé para dispositivos moveis.
$("#menu__footer").load("./assets/components/asideFooterComp.html");

// Carrega o componente referente ao rodapé
$("#footer").load("./assets/components/footerComp.html");

// Carrega o componente referente a logo.
$("#menu__lateral-logo").load("./assets/components/aisdeCompLogo.html");

// Carrega o componente referente ao menu.
$("#menu__lateral-nav").load("./assets/components/asideComp.html");

// Carrega o componente referente ao menu DropDown.
$("#menu__lateral-dropdown").load("./assets/components/asideCompDropdwon.html");

$(function () {
    const getGitUser = localStorage.getItem("register");
    if (getGitUser) {
        let dados = JSON.parse(getGitUser);
        let username = dados.register.apelido;
        let img = $('#perfil');
        let defaultImg = 'https://github.com/' + username + '.png';

        img[0].onerror = function () {
            $(this).attr('src', defaultImg);
        };
    } else {
        console.error('Nenhum item "register" encontrado no localStorage');
    }
});



