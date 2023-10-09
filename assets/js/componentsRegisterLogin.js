$("#frmCadastroLogin").on("submit", function (event) {
    // Para evitar o envio do formulário utilizaremos a seguinte instrução:
    event.preventDefault();


    // Cadastro simplificado no Login
    let inputUserGitHub = $("#inputUserGitHub").val();
    let inputRegisterUserLogin = $("#inputRegisterUserLogin").val();
    let inputRegisterEmailLogin = $("#inputRegisterEmailLogin").val();
    let inputRegisterPasswordLogin = $("#inputRegisterPasswordLogin").val();
    let inputRegisterRepeatPasswordLogin = $("#inputRegisterRepeatPasswordLogin").val();
    let registerAcceptTermLogin = $("#registerAcceptTermLogin").val();

    let register = {
        apelido: inputUserGitHub,
        name: inputRegisterUserLogin,
        email: inputRegisterEmailLogin,
        password: inputRegisterPasswordLogin,
        repeatPassword: inputRegisterRepeatPasswordLogin,
        acceptTerm: registerAcceptTermLogin,
    }

    // Função para validar campos
    // if (!validaCampos(register)) return;

    if (localStorage.getItem('register') === null ||
        localStorage.getItem('register') === '' || localStorage.getItem('register') === undefined) {
        let data = [];
        localStorage.setItem('register', JSON.stringify(data));
    }

    let dados = JSON.parse(localStorage.getItem('register'));
    dados.push(register);
    localStorage.setItem('register', JSON.stringify(dados));

    console.log(dados);
});

// Função para limpar o localStorage do navegador.
// $("#btn-clean").one("click", () => {
//     localStorage.clear();
// })

// Continuação da Função para validar campos
// function validaCampos(register) {
//     for (let key in register) {
//         let value = register[key];
//         if (value === "") {
//             const toastEl = document.querySelector('.toast');
//             const toast = new bootstrap.Toast(toastEl, { 'delay': 12000 });
//             toast.show();
//             let label = document.querySelector("label[for=" + key + "]").textContent;
//             document.querySelector(".message").innerHTML = "Por favor, preencha o campo abaixo:<br> <strong>" + label + "</strong>.";
//             return false;  // Retorna falso se algum campo estiver vazio
//         }
//     }
//     return true;  // Retorna verdadeiro se todos os campos estiverem preenchidos
// }
