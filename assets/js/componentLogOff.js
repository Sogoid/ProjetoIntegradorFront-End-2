// Função para finalizar a sessão
$('#btn-exit').on('click', function () {
    localStorage.setItem('userLogged', false);
    // localStorage.clear();
    window.location.href = "/"
});

// Function para alterar imagem de user.
let dadoImg = JSON.parse(localStorage.getItem('register'));

for (let item of dadoImg) {
    if (item && item.apelido) {
        let img = $('#perfil');
        let img1 = "/assets/img/fotoUser.png";
        let defaultImg = 'https://github.com/' + item.apelido + '.png';
        console.log(defaultImg);
        img.attr('src', defaultImg);

        img[0].onerror = function () {
            $(this).attr('src', img1);
        };
        break; // Sai do loop assim que encontrar um item que corresponda ao critério
    } else {
        console.error('Nenhum item "register" encontrado no localStorage');
    }
}
