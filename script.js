let hamburguer = document.querySelector(".ham");
let hamburguerList = document.querySelector(".hidden-menu ul");
let hidderMenu = document.querySelector(".hidden-menu");
let topbarLogo = document.querySelector(".topbar-logo");
let headerLogo = document.querySelector("header .logo");
let goupButton = document.querySelector(".goup-btn");
let body = document.querySelector("body");
let produtos = document.querySelector(".produ-over");

// AO INICIAR O SITE, REMOVA O ACESSO DO USUARIO A DAR SCROLL ( DESATIVAR OVERFLOW )
body.classList.add("no-overflow");

// CASO CLIQUE NO HAMBURGUER
hamburguer.onclick = function() {
    hamburguer.classList.toggle("clicked");
    hidderMenu.classList.toggle("visible");
    body.classList.toggle("no-overflow");
}

// CASO CLIQUE EM ALGUMA OPÇÃO DO MENU ESCONDIDO, ESCONDA O NOVAMENTE
hamburguerList.onclick = function() {
    hamburguer.classList.remove("clicked");
    hidderMenu.classList.remove("visible");
    body.classList.remove("no-overflow");
}

// ENQUANTO O USUARIO DA SCROLL:
window.onscroll = () => {

    // BOTÃO "GOUP" FICA VISIVEL OU INVISIVEL CASO O USUARIO ULTRAPASSE O HEADER
    if( scrollY > headerLogo.scrollHeight ){
        topbarLogo.classList.add("visible");
    } else {
        topbarLogo.classList.remove("visible");
    }

    // SE O "Y" DO SITE FOR MENOR QUE A ALTURA DO HADER, ENTÃO FAÇA O "GOUP" APARECER, SE NÃO, FAÇA DESAPARECER
    if( scrollY < headerLogo.scrollHeight ) {
        goupButton.style = "transform: scale(0);";
    } else {
        goupButton.style = "transform: scale(0.8);";
    }
}

// CASO CLIQUE NO BOTÃO "GOUP", FAÇA O USUARIO VOLTAR AO TOPO DA PAGINA
goupButton.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

// HIDDEN EXTRA PAGES
let menuCestas = document.querySelector(".cestas");
let menuArranjos = document.querySelector(".arranjos");
let menuVasos = document.querySelector(".vasos");
let menuBuquePresente = document.querySelector(".buque-presente");
let menuBuqueNoiva = document.querySelector(".buque-noiva");
let menuKits = document.querySelector(".kits");
let menuArtesanato = document.querySelector(".artesanato");

let closeBtn = document.querySelector(".close");
let menuH1 = document.querySelector(".produ-over h1");
let menuProdu = document.querySelector(".produ-over");

// name = TÍTULO DA PÁGINA DOS PRODUTOS | ex = "Arranjos"
// MAX = NÚMERO MÁXIMO DE CONTAINERS DENTRO DA PÁGINA SECUNDÁRIA | ex = 5
function menuProduFunc(name, MAX){
    produtos.classList.add("visible"); // FAZ O MENU FICAR VISIVEL
    hamburguer.classList.remove("clicked"); // FAZ O HAMBURGUER VOLTA AO NORMAL 
    hidderMenu.classList.remove("visible");  // FAZ O MENU HAMBURGUER SUMIR
    body.classList.add("no-overflow");
    closeBtn.style = "display: block;"; // FAZ O BOTÃO "X" APARECER
    menuProdu.scrollTo(0,0); // SEMPRE QUE CLICAR EM UM MENU NOVO, ELE VOLTA A FICA NO TOPO

    let h1Produ = document.createElement("h1");
    h1Produ.innerHTML = name; // MUDA O NOME DO H1 DENTRO DO MENU
    produtos.appendChild(h1Produ);

    for( let i = 0; i < MAX; i++ ) {
        
        
        // #rergion CRIA OS RESPECTIVOS SUB MENUS DENTRO DO MENU, MELHOR PARA NAO POLUIR O HTML
        let mainDivProdu = document.createElement("div"); // DIV PRINCIPAL QUE IRA CONTER O .produ-over-menu
        let aProdu = document.createElement("a"); // ADICIONA A MENSAGEM CUSTOMIZADA NO WAHTSAPP E REDIRECIONA AO WHATSAPP AO CLICAR NA FOTO
        let imgProduDiv = document.createElement("div"); // DIV PARA OVERFLOW NA IMAGEM
        let imgProdu = document.createElement("img"); // A IMAGEM QUE FICARA VISIBEL NESTE CONTAINER
        let pProdu = document.createElement("p");  // CRIA A MENSAGEM EMBAIXO DA FOTO
        
        h1Produ.innerHTML = name; // <h1> TÍTULO
        
        let textoBase = "Olá Dmais Flores, Gostaria de encomendar "; // TEXTO BASE PARA EVITAR REPETIÇÃO
        let textDescricao = new Array(); // CRIAR ARRAY PARA A DESCRIÇÃO
        let img = new Array(); // CRIAR ARRAY PARA AS IMAGENS
        let textWhats = new Array(); // TEXTO AUTOMATICO NO WHATSAPP

        // LINK <a> TEXTO CUSTOMIZAVEL AUTOMATICO DO WHATSAPP
        if( name === "Cestas" ) {
            
            // DESCRIÇÃO
            textDescricao[0] = "Cesta média romântica"; textDescricao[1] = "Cesta de chocolate com ursinho";
            textDescricao[2] = "Cesta chocolate"; textDescricao[3] = "Cesta coração maravilhosa";
            textDescricao[4] = "Cesta pequena com mini coração"; textDescricao[5] = "Cesta pequena coração";
            
            // WHATSAPP TEXTO
            textWhats[0] = textoBase + textDescricao[i]; textWhats[1] = textoBase + textDescricao[i];
            textWhats[2] = textoBase + textDescricao[i]; textWhats[3] = textoBase + textDescricao[i];
            textWhats[4] = textoBase + textDescricao[i]; textWhats[5] = textoBase + textDescricao[i];
            
            // IMAGEM
            img[0] = "./IMG/Cestas/cesta1.jpeg"; img[1] = "./IMG/Cestas/cesta2.jpeg";
            img[2] = "./IMG/Cestas/cesta3.jpeg"; img[3] = "./IMG/Cestas/cesta4.jpeg";
            img[4] = "./IMG/Cestas/cesta5.jpeg"; img[5] = "./IMG/Cestas/cesta6.jpeg";

            imgProdu.style.top = "-140px";

        } else if ( name === "Arranjos" ) {
            
            // DESCRIÇÃO
            textDescricao[0] = "Arranjo médio de girassol artificial"; textDescricao[1] = "Arranjo vermelho com rosas, gerbera e lírio de E.V.A.";
            textDescricao[2] = "Arranjo no tom salmom, vermelho e rosa de E.V.A. com artificial"; textDescricao[3] = "Arranjo nos tons azul de E.V.A. com artificial";
            textDescricao[4] = "Arranjo nos tons azul com rosa, cravo de E.V.A. e flores artificiais"; textDescricao[5] = "Arranjo nos tons de rosa com preto com rosas, cravo de E.V.A. e lírios artificial";
            textDescricao[6] = "Arranjo com rosas, gerberas, cravos, lírio de E.V.A. com girassol artificial"; textDescricao[7] = "Arranjo em vermelho com flores de E.V.A.";
            textDescricao[8] = "Arranjo com rosas, lírio de E.V.A. e lírios e flores artificiais"; textDescricao[9] = "Arranjo nos tons lilás com branco com rosas de E.V.A. e flores artificiais";
            
            // WHATSAPP TEXTO
            textWhats[0] = textoBase + textDescricao[i]; textWhats[1] = textoBase + textDescricao[i];
            textWhats[2] = textoBase + textDescricao[i]; textWhats[3] = textoBase + textDescricao[i];
            textWhats[4] = textoBase + textDescricao[i]; textWhats[5] = textoBase + textDescricao[i];
            textWhats[6] = textoBase + textDescricao[i]; textWhats[7]= textoBase + textDescricao[i];
            textWhats[8] = textoBase + textDescricao[i]; textWhats[9] = textoBase + textDescricao[i];

            // IMAGEM
            img[0] = "./IMG/Arranjos/arranjos1.jpeg"; img[1] = "./IMG/Arranjos/arranjos2.jpeg";
            img[2] = "./IMG/Arranjos/arranjos3.jpeg"; img[3] = "./IMG/Arranjos/arranjos4.jpeg";
            img[4] = "./IMG/Arranjos/arranjos5.jpeg"; img[5] = "./IMG/Arranjos/arranjos6.jpeg";
            img[6] = "./IMG/Arranjos/arranjos7.jpeg"; img[7] = "./IMG/Arranjos/arranjos8.jpeg";
            img[8] = "./IMG/Arranjos/arranjos9.jpeg"; img[9] = "./IMG/Arranjos/arranjos10.jpeg";

            imgProdu.style.top = "-120px";

        } else if ( name === "Peças<br>para<br>Decoração" ) {
            
            // DESCRIÇÃO
            textDescricao[0] = "Vaso pequeno para ornamentação"; textDescricao[1] = "Bandejas para guloseimas";
            textDescricao[2] = "Bandejas para doces"; textDescricao[3] = "Bandejas vários tamanhos e cores";
            textDescricao[4] = "Cestas de e.v.a para montar com guloseimas"; textDescricao[5] = "Cesta coração tricolor";
            
            // WHATSAPP TEXTO
            textWhats[0] = textoBase + textDescricao[i]; textWhats[1] = textoBase + textDescricao[i];
            textWhats[2] = textoBase + textDescricao[i]; textWhats[3] = textoBase + textDescricao[i];
            textWhats[4] = textoBase + textDescricao[i]; textWhats[5] = textoBase + textDescricao[i];

            // IMAGEM
            img[0] = "./IMG/peças_decor/pecas_decor1.jpeg"; img[1] = "./IMG/peças_decor/pecas_decor2.jpeg";
            img[2] = "./IMG/peças_decor/pecas_decor3.jpeg"; img[3] = "./IMG/peças_decor/pecas_decor4.jpeg";
            img[4] = "./IMG/peças_decor/pecas_decor5.jpeg"; img[5] = "./IMG/peças_decor/pecas_decor6.jpeg";

            if(( i === 0 ) || ( i === 5 )){
                imgProdu.style.top = "-100px";
            } else {
                imgProdu.style.top = "0px";
            }

        } else if ( name === "Buquês<br>para<br>Presente" ) {

            // DESCRIÇÃO
            textDescricao[0] = "Ramalhete com 12 rosa branca";
            
            // WHATSAPP TEXTO
            textWhats[0] = textoBase + textDescricao[i];

            // IMAGEM
            img[0] = "./IMG/Buques Presente/BuquePresente1.jpeg";

            imgProdu.style.top = "-100px";

        } else if ( name === "Buquês<br>de<br>Noiva" ) {

            // DESCRIÇÃO
            textDescricao[0] = "Buquê marsala/bordô com lapela"; textDescricao[1] = "Buquê azul com branco";
            textDescricao[2] = "Buquê misto amore"; textDescricao[3] = "Buquê girassol";
            textDescricao[4] = "Buquê nos tons laranja"; textDescricao[5] = "Buquê nos tons amarelo com flores de E.V.A.";
            
            // WHATSAPP TEXTO
            textWhats[0] = textoBase + textDescricao[i]; textWhats[1] = textoBase + textDescricao[i];
            textWhats[2] = textoBase + textDescricao[i]; textWhats[3] = textoBase + textDescricao[i];
            textWhats[4] = textoBase + textDescricao[i]; textWhats[5] = textoBase + textDescricao[i];

            // IMAGEM
            img[0] = "./IMG/Buque Noiva/noiva1.jpeg"; img[1] = "./IMG/Buque Noiva/noiva2.jpeg";
            img[2] = "./IMG/Buque Noiva/noiva3.jpeg"; img[3] = "./IMG/Buque Noiva/noiva4.jpeg";
            img[4] = "./IMG/Buque Noiva/noiva5.jpeg"; img[5] = "./IMG/Buque Noiva/noiva6.jpeg";

            if( i === 1 ){
                imgProdu.style.top = "0px";
            } else {
                imgProdu.style.top = "-100px";
            }

        } else if ( name === "Locação de Kits<br>&<br>Decorações" ) {
            
            // DESCRIÇÃO
            textDescricao[0] = "Decoração aniversário"; textDescricao[1] = "Decoração noivado/aniversário";
            textDescricao[2] = "Bolo fake girassol"; textDescricao[3] = "Decor girassol pode ser usado  noivado, casamento, aniversário, bodas e outros.";
            textDescricao[4] = "Decoração para casamento em vermelho e branco tradicional"; textDescricao[5] = "Decoração infantil";
            textDescricao[6] = "Decoração branca de neve"; textDescricao[7] = "Decoração poderosa chefinha";
            textDescricao[8] = "Decoração poderoso chefinho"; textDescricao[9] = "Decoração casamento simples";
            
            // WHATSAPP TEXTO
            textWhats[0] = textoBase + textDescricao[i]; textWhats[1] = textoBase + textDescricao[i];
            textWhats[2] = textoBase + textDescricao[i]; textWhats[3] = textoBase + textDescricao[i];
            textWhats[4] = textoBase + textDescricao[i]; textWhats[5] = textoBase + textDescricao[i];
            textWhats[6] = textoBase + textDescricao[i]; textWhats[7] = textoBase + textDescricao[i];
            textWhats[8] = textoBase + textDescricao[i]; textWhats[9] = textoBase + textDescricao[i];

            // IMAGEM
            img[0] = "./IMG/Kits/kits1.jpeg"; img[1] = "./IMG/Kits/kits2.jpeg";
            img[2] = "./IMG/Kits/kits3.jpeg"; img[3] = "./IMG/Kits/kits4.jpeg";
            img[4] = "./IMG/Kits/kits5.jpeg"; img[5] = "./IMG/Kits/kits6.jpeg";
            img[6] = "./IMG/Kits/kits7.jpeg"; img[7] = "./IMG/Kits/kits8.jpeg";
            img[8] = "./IMG/Kits/kits9.jpeg"; img[9] = "./IMG/Kits/kits10.jpeg";

            if(( i === 0 ) || ( i === 1 ) || ( i === 2 ) || ( i === 3 ) || ( i === 4 )){
                imgProdu.style.top = "-100px";
            } else {
                imgProdu.style.top = "0px";
            }

        } else if ( name === "Produtos<br>para<br>Artesanato" ) {
            
            // DESCRIÇÃO
            textDescricao[0] = "E.V.A. com glitter e sem glitter"; textDescricao[1] = "Fita floral e fita adesiva";
            textDescricao[2] = "Pistola e bastão"; textDescricao[3] = "Balão coração e inflador";
            textDescricao[4] = "Colas variadas"; textDescricao[5] = "Tintas variadas e pincéis de vários tamanhos";
            
            // WHATSAPP TEXTO
            textWhats[0] = textoBase + textDescricao[i]; textWhats[1] = textoBase + textDescricao[i];
            textWhats[2] = textoBase + textDescricao[i]; textWhats[3] = textoBase + textDescricao[i];
            textWhats[4] = textoBase + textDescricao[i]; textWhats[5] = textoBase + textDescricao[i];

            // IMAGEM
            img[0] = "./IMG/Artesanato/Artesanato1.jpeg"; img[1] = "./IMG/Artesanato/Artesanato2.jpeg";
            img[2] = "./IMG/Artesanato/Artesanato3.jpeg"; img[3] = "./IMG/Artesanato/Artesanato4.jpeg";
            img[4] = "./IMG/Artesanato/Artesanato5.jpeg"; img[5] = "./IMG/Artesanato/Artesanato6.jpeg";

            if(( i === 1 ) || ( i === 2 )){
                imgProdu.style.top = "-140px";
            }   else {
                imgProdu.style.top = "0px";
            }

            if(( i === 4 ) || ( i === 5 )) {
                imgProdu.style = "transform: scale(1.1);";
            }

        }

        // LINK <a>
        let whatsappText = textWhats[i]; // TEXTO QUE IRA APARECER AUTOMATICAMENTE NO WHATSAPP
        let A = "https://api.whatsapp.com/send?phone=5534992026815&text="; // API DO WHATSAPP PARA ENVIAR TEXTO
        let B = textoBase + " \"" + textDescricao[i] +"\" "; // O TEXTO CUSTOMIZADO

        aProdu.href = A + B; // JUNTAR OS DOIS E FORMAR UM LINK COMPLETO
        aProdu.target = "_blank";// ABRIR EM UMA NOVA ANBA
        
        pProdu.innerHTML = textDescricao[i]; // descrição do produto
        imgProdu.src = img[i]; // IMAGEM DO PRODUTO

        imgProduDiv.appendChild(imgProdu);
        imgProduDiv.classList.add("img-produ-div");
        aProdu.appendChild(imgProduDiv);
        mainDivProdu.appendChild(aProdu);
        mainDivProdu.append(pProdu);
        mainDivProdu.classList.add("produ-over-menu");
        produtos.appendChild(mainDivProdu);
        // #endregion
    }

}

// APAGAR TODOS OS FILHOS DE UM ELEMENTO
// SERÁ USADO PARA APAGAR OS FILHOS SEMPRE QUE O USUARIO CLICAR EM UM ITEM EM "NOSSOS PRODUTOS"
// SERA APAGADO E DPS EXECUTADO O LOOP PARA CRIAR OS NOVOS ITEMS E ASSIM VAI
function removeAllChilds(parent){
    while( parent.firstChild ){// ENQUANTO EXISTIR O PRIMEIRO FILHO DO ELEMENTO "PARENT"
        parent.removeChild(parent.firstChild); // DELETE ESTE FILHO
    }
}


menuCestas.onclick = () => menuProduFunc("Cestas", 6); // CESTAS
menuArranjos.onclick = () => menuProduFunc("Arranjos", 10); // ARRANJOS
menuVasos.onclick = () => menuProduFunc("Peças<br>para<br>Decoração", 6); // PEÇAS PARA DECORAÇÃO
menuBuquePresente.onclick = () => menuProduFunc("Buquês<br>para<br>Presente", 1); // BUQUÊS PARA PRESENTE
menuBuqueNoiva.onclick = () => menuProduFunc("Buquês<br>de<br>Noiva", 6); // BUQUÊS DE NOIVA
menuKits.onclick = () => menuProduFunc("Locação de Kits<br>&<br>Decorações", 10);
menuArtesanato.onclick = () => menuProduFunc("Produtos<br>para<br>Artesanato", 6); // ARTESANATO


// BOTÃO "X" DA JANELA POP UP 
let close = document.querySelector(".close");

close.addEventListener("click", function(){
    produtos.classList.remove("visible");
    body.classList.remove("no-overflow");
    closeBtn.style = "display: none;";
    
    removeAllChilds(produtos);
});

document.addEventListener('keydown', function(e) {
    if(e.key == "Escape"){
        produtos.classList.remove("visible");
        body.classList.remove("no-overflow");

        hamburguer.classList.remove("clicked");
        hidderMenu.classList.remove("visible");
        closeBtn.style = "display: none;";
        
        removeAllChilds(produtos);
    }
});


let loading = document.querySelector(".loading");

window.setTimeout(function(){
    body.removeChild(loading);
    body.classList.remove("no-overflow");
}, 1500);
