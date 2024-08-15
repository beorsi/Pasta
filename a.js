function corBlur(){
    let corpo = document.body
    corpo.classList.toggle("corBlur")
}

const btnPesquisa = document.getElementById("pesquisa")
const barraPesquisa = document.getElementById("Barra")

btnPesquisa.addEventListener("click", () => {
    barraPesquisa.showModal();
})
const conf = document.getElementById("confirmar")
const popUp = document.getElementById("popUp")

conf.addEventListener("click", () => {
    barraPesquisa.showModal();
})