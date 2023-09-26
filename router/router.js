$(function () {
  let routes = {
    "": function () {
      // Não carrega nada para a rota da home
    },
    "cadastro": function () {
      $("#view").load("page/cadastroView.html");
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
