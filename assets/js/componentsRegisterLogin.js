let formIds = ["#frmCadastroLogin", "#frmCadastro"];

function salvarDados() {
    let inputUserGitHub = $("#inputUserGitHub").val();
    let inputRegisterCPF = $("#inputRegisterCPF").val();
    let inputRegisterUserLogin = $("#inputRegisterUserLogin").val();
    let inputRegisterEmailLogin = $("#inputRegisterEmailLogin").val();
    let inputRegisterEnd = $("#inputRegisterEnd").val();
    let inputRegisterDataNasc = $("#inputRegisterDataNasc").val();
    let inputRegisterPasswordLogin = $("#inputRegisterPasswordLogin").val();
    let inputRegisterRepeatPasswordLogin = $("#inputRegisterRepeatPasswordLogin").val();
    let registerAcceptTermLogin = $("#registerAcceptTermLogin").val();

    if (inputRegisterPasswordLogin === inputRegisterRepeatPasswordLogin) {

        if (localStorage.getItem('register') === null ||
            localStorage.getItem('register') === '' ||
            localStorage.getItem('register') === undefined) {
            let data = [];
            localStorage.setItem('register', JSON.stringify(data));
        }

        let dados = JSON.parse(localStorage.getItem('register'));

        // Cria um objeto com todas as informações, exceto repeatPassword
        let register = {
            apelido: inputUserGitHub,
            cpfUser: inputRegisterCPF,
            name: inputRegisterUserLogin,
            dataNascimento: inputRegisterDataNasc,
            email: inputRegisterEmailLogin,
            endereco: inputRegisterEnd,
            password: inputRegisterPasswordLogin,
            acceptTerm: registerAcceptTermLogin,
        }

        dados.push(register); // Adiciona o objeto ao array
        localStorage.setItem('register', JSON.stringify(dados)); // Salva o array no localStorage

        console.log(dados);
    } else {
        console.log("As senhas não são iguais");
    }
}

formIds.forEach(function (formId) {
    $(formId).on("submit", function (event) {
        event.preventDefault();
        salvarDados();
    });
});

$("#btnSalvar").on("click", function (event) {
    event.preventDefault();
    salvarDados();
});



// Função para limpar o localStorage do navegador.
$("#btn-clean").one("click", () => {
    localStorage.clear();
})

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
