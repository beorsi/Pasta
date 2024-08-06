function corBlur(){
    let corpo = document.body
    corpo.classList.toggle("corBlur")
}

const btnPesquisa = document.getElementById("pesquisa")
const barraPesquisa = document.getElementById("Barra")

btnPesquisa.addEventListener("click", () => {
    barraPesquisa.showModal();
})