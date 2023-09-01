$(document).on("click", ".nav-link", function (e) {
    // obter o ID do div do "data-target" do link
    let id = $(this).data("target");
    // ocultar TODOS os divs com o id
    $(".section > div[id]").hide();
    // mostrar apenas o div relevante com o ID alvo
    $("#" + id).show();
});

// Exemplo de configuração
// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>Navegação de página única</title>
//             <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
//             <style>
//         .section > div[id] {
//                     display: none;
//         }
//             </style>
//         </head>
//         <body>
//             <nav>
//                 <ul>
//                     <li><a href="#" class="nav-link" data-target="home">Home</a></li>
//                     <li><a href="#" class="nav-link" data-target="about">Sobre</a></li>
//                     <li><a href="#" class="nav-link" data-target="contact">Contato</a></li>
//                 </ul>
//             </nav>

//             <div class="section">
//                 <div id="home">
//                     <h1>Home</h1>
//                     <p>Esta é a página inicial.</p>
//                 </div>

//                 <div id="about">
//                     <h1>Sobre</h1>
//                     <p>Esta é a página sobre.</p>
//                 </div>

//                 <div id="contact">
//                     <h1>Contato</h1>
//                     <p>Esta é a página de contato.</p>
//                 </div>
//             </div>

//             <script>
//                 $(document).on('click','.nav-link',function(e){
//             // obter o ID do div do "data-target" do link
//             var id = $(this).data('target');
//             // ocultar TODOS os divs com o id
//             $('.section > div[id]').hide();
//                 // mostrar apenas o div relevante com o ID alvo
//                 $('#' + id).show();
//         });
//             </script>
//         </body>
//     </html>
