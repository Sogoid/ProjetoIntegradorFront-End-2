$(function () {
  let routes = {
    "": function () {
      // Não carrega nada para a rota da home
    },
    "register": function () {
      $("#view").load("page/registerView.html");
    },
    "listUser": function () {
      $("#view").load("page/listUser.html");
    },
  };

  $(window).on("hashchange", function () {
    let hash = location.hash.replace("#", "");
    if (routes.hasOwnProperty(hash)) {
      routes[hash]();  // Chama a função correspondente ao hash atual
    } else {
      $("#content").html("<h1>404 Not Found</h1>");
    }
  });

  $(window).trigger("hashchange");
});

// Function para validar se usuário esta logado para acessar a pagina.
$(function () {
  let url = window.location.href;
  let paginaCadastro = 'page/cadastroLogin.html';
  let paginaEsqueceuSenha = 'page/esqueceuSenha.html';

  // Verifique se o usuário está na página de cadastro ou esqueceu a senha
  if (url.indexOf(paginaCadastro) !== -1 || url.indexOf(paginaEsqueceuSenha) !== -1) {
    // Se estiver na página de cadastro ou esqueceu a senha, não faça nada
    return;
  }

  // Para todas as outras páginas, verifique se o usuário está logado
  if (!localStorage.getItem('userLogged')) {
    // Se não estiver logado, redirecione para a página de login
    window.location.href = 'page/login.html';
  }
});

