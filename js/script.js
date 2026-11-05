document.addEventListener("DOMContentLoaded", () => {
    
    // seção navbar
    const navbar = document.querySelector(".navbar")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled")
        } else {
            navbar.classList.remove("scrolled")
        }
    })
    
    // seção carrossel
    
    const carroseis = document.querySelectorAll(".carrossel")
    
    carroseis.forEach((carrossel) => {
        
        const imgs = carrossel.querySelector(".container-carrossel");
        const img = carrossel.querySelectorAll(".container-carrossel img")
        const botaoVoltar = carrossel.querySelector(".botao-voltar");
        const botaoAvancar = carrossel.querySelector(".botao-avancar");
        
        let idx = 0;
        
        function movimentarCarrossel() {
            if (idx > img.length - 1) {
                idx = 0;
            } else if (idx < 0) {
                idx = img.length - 1;
            }
            imgs.style.transform = `translateX(${-idx * 300}px)`;
    }
    
    // botões de controle
    botaoAvancar.addEventListener("click", () => {
        idx++;
        movimentarCarrossel();
    });
    
    botaoVoltar.addEventListener("click", () => {
        idx--;
        movimentarCarrossel();
    });
})

})