const botaoMudaTema = document.getElementById("botao-muda-tema");
const body = document.querySelector("body");
const mudaImagem = document.querySelector(".imagem-botao");

botaoMudaTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    if(modoEscuroAtivo){

        mudaImagem.setAttribute("src", "./src/images/sun.png");
    
    } else {

        mudaImagem.setAttribute("src", "./src/images/moon.png");
    }
});