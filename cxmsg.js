class Cxmsg{
    // config = {
    //     titulo: "",
    //     mensagem: "",
    //     cor: "",
    //     tipo: "ok",
    //     ok: null,
    //     sim: null,
    //     nao: null
    // }

    static aberta = false;
    static retorno = false;
    static config = null;

    static mostrar = (config) => {
        if(this.aberta) return;     // evita abrir duas caixas de mensagem,
        this.aberta = true;     // pois guarda se uma já está aberta
        this.config = config;

        const cxmsgFundo = window.document.createElement("div");
        cxmsgFundo.setAttribute("id", "cxmsgFundo");
        cxmsgFundo.setAttribute("class", "cxmsgFundo");

        const cxmsg = window.document.createElement("div");
        cxmsg.setAttribute("id", "cxmsg");
        cxmsg.setAttribute("class", "cxmsg");
        cxmsgFundo.appendChild(cxmsg);

        const cxmsgTitulo = window.document.createElement("div");
        cxmsgTitulo.setAttribute("id", "cxmsgTitulo");
        cxmsgTitulo.setAttribute("class", "cxmsgTitulo");
        cxmsgTitulo.setAttribute("style", `background-color: ${this.config.cor} !important`);
        cxmsg.appendChild(cxmsgTitulo);

        const titulo = window.document.createElement("p");
        titulo.innerHTML = this.config.titulo;
        cxmsgTitulo.appendChild(titulo);

        const btnFecharCxmsg = window.document.createElement("img");
        btnFecharCxmsg.setAttribute("id", "btnFecharCxmsg");
        btnFecharCxmsg.setAttribute("class", "btnFecharCxmsg");
        btnFecharCxmsg.setAttribute("src", "../../imagens/fechar.svg");
        btnFecharCxmsg.setAttribute("title", "Fechar caixa de mensagem");
        btnFecharCxmsg.addEventListener("click", (evt) => {
            this.fechar(false);
        })
        cxmsgTitulo.appendChild(btnFecharCxmsg);

        const cxmsgCorpo = window.document.createElement("div");
        cxmsgCorpo.setAttribute("id", "cxmsgCorpo");
        cxmsgCorpo.setAttribute("class", "cxmsgCorpo");
        cxmsg.appendChild(cxmsgCorpo);

        const mensagem = window.document.createElement("p");
        mensagem.innerHTML = this.config.mensagem;
        cxmsgCorpo.appendChild(mensagem);

        const cxmsgRodape = window.document.createElement("div");
        cxmsgRodape.setAttribute("id", "cxmsgRodape");
        cxmsgRodape.setAttribute("class", "cxmsgRodape");
        cxmsgRodape.setAttribute("style", `background-color: ${this.config.cor} !important`);
        cxmsg.appendChild(cxmsgRodape);

        if(this.config.tipo == "ok") {      // tipo OK, só aparece o botão OK
            const btnOkCxmsg = window.document.createElement("button");
            btnOkCxmsg.setAttribute("id", "btnCxmsg");
            btnOkCxmsg.setAttribute("class", "btnCxmsg");
            btnOkCxmsg.innerHTML = "Ok";
            btnOkCxmsg.addEventListener("click", (evt) => {
                if(this.config.ok) this.config.ok();
                this.fechar(true);
            })
            cxmsgRodape.appendChild(btnOkCxmsg);
        } 
        if(this.config.tipo == "sn") {      // tipo SNK, aparecem Sim e Não
            const btnSimCxmsg = window.document.createElement("button");
            btnSimCxmsg.setAttribute("id", "btnCxmsg");
            btnSimCxmsg.setAttribute("class", "btnCxmsg");
            btnSimCxmsg.innerHTML = "Sim";
            btnSimCxmsg.addEventListener("click", (evt) => {
                if(this.config.sim) this.config.sim();
                this.fechar(true);
            })
            cxmsgRodape.appendChild(btnSimCxmsg);

            const btnNaoCxmsg = window.document.createElement("button");
            btnNaoCxmsg.setAttribute("id", "btnCxmsg");
            btnNaoCxmsg.setAttribute("class", "btnCxmsg");
            btnNaoCxmsg.innerHTML = "Não";
            btnNaoCxmsg.addEventListener("click", (evt) => {
                if(this.config.nao) this.config.nao();
                this.fechar(false);
            })
            cxmsgRodape.appendChild(btnNaoCxmsg);
        }

        document.body.prepend(cxmsgFundo);
    }

    static fechar = (retorno) => {
        window.document.getElementById("cxmsgFundo").remove();
        this.aberta = false;
        this.retorno = retorno;
    }
}

export {Cxmsg};
