/* =========================
   SAFETECH - SCRIPT.JS
========================= */


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const elementos = document.querySelectorAll(
    ".card, .diferencial-card, .etapa, .depoimento-card, .contato-info, .contato-form"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("mostrar");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.classList.add("animar");

    observer.observe(elemento);

});



/* =========================
   FORMULÁRIO DE CONTATO
========================= */

const formulario = document.querySelector(".contato-form form");


if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome = document.getElementById("nome").value.trim();

        const email = document.getElementById("email").value.trim();

        const mensagem = document.getElementById("mensagem").value.trim();


        /* Verificação */

        if (!nome || !email || !mensagem) {

            alert(
                "Por favor, preencha todos os campos obrigatórios."
            );

            return;

        }


        /* Mensagem de sucesso */

        alert(
            "✅ Mensagem enviada com sucesso!\n\n" +
            "Obrigada pelo contato, " +
            nome +
            "!"
        );


        /* Limpa o formulário */

        formulario.reset();

    });

}



/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.classList.add("botao-topo");

botaoTopo.setAttribute(
    "aria-label",
    "Voltar ao topo"
);


document.body.appendChild(botaoTopo);



/* Aparece depois de rolar */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.classList.add("ativo");

    } else {

        botaoTopo.classList.remove("ativo");

    }

});



/* Voltar ao topo */

botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =========================
   MENU - FECHAR AO CLICAR
========================= */

const linksMenu = document.querySelectorAll(
    ".nav-links a"
);


linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        document
            .querySelector(".nav-links")
            .classList.remove("menu-aberto");

    });

});
