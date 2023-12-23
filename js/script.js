const buttonMode = document.querySelector(".switch-button");
const projetos = document.querySelectorAll(".projeto")
let isButtonMoved = false;

function toggleMode() {
    const html = document.documentElement;

    if (html.classList.contains("light")) {
        html.classList.remove("light");
        if (isButtonMoved) {
            buttonMode.style.transform = "translateY(-50%) translateX(0)";
            isButtonMoved = false;
        }
    } else {
        html.classList.add("light");
        if (!isButtonMoved) {
            buttonMode.style.transform = "translateY(-50%) translateX(32px)";
            isButtonMoved = true;
        }
    }
}


function descricaoProjeto(descricao){
    console.log(descricao)
    let container = document.createElement("div")
    container.classList.add("container-janela")
    

    let janela = document.createElement("div")
    janela.classList.add("janela")


    let close = document.createElement("button")
    close.classList.add("closeButton")
    close.classList.add("fa-solid")
    close.classList.add("fa-xmark")
    janela.appendChild(close)

    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = descricao
    paragrafo.classList.add("paragrafo-janela")
    janela.appendChild(paragrafo)

    container.appendChild(janela)

    document.body.appendChild(container);

    setTimeout(() => {
        janela.classList.add("mostrar");
    }, 100);

    let dVoltar = janela.querySelector(".closeButton");
    dVoltar.addEventListener("click", () => {
        
        janela.remove();
        container.remove();
    });

    
  
}

buttonMode.addEventListener("click", () => {
    toggleMode();
});



projetos.forEach(element =>{
    element.addEventListener("click", ()=>{
        let descricao = element.getAttribute("data-description")
        descricaoProjeto(descricao)
    })
})