const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em 2035, seu assistente pessoal de IA, o 'Synapse', gerencia sua agenda, finanças e até seu humor. Ele sugere que você vá a um novo restaurante que abriu na cidade. Você aceita a sugestão?",
        alternativas: [
            {
                texto: "Sim, confio plenamente nas recomendações do Synapse.",
                afirmacao: "Você se tornou totalmente dependente das sugestões da sua IA, delegando a ela até as suas decisões mais pessoais."
            },
            {
                texto: "Não, prefiro escolher por conta própria, sem a interferência de um algoritmo.",
                afirmacao: "Você mantém um controle rigoroso sobre suas escolhas, valorizando a autonomia humana sobre a conveniência da IA."
            }
        ]
    },
    {
        enunciado: "Seu Synapse te alerta que seu perfil online foi "otimizado" para receber notícias que reforçam suas opiniões. O que você faz?",
        alternativas: [
            {
                texto: "Deixo como está. É mais confortável ler o que concordo.",
                afirmacao: "Você permitiu que a IA criasse uma 'bolha' de informação ao seu redor, isolando-o de opiniões diferentes."
            },
            {
                texto: "Peço ao Synapse para reverter o processo. Quero ter acesso a todas as perspectivas.",
                afirmacao: "Você lutou ativamente contra a manipulação de algoritmos, buscando uma visão de mundo mais ampla e objetiva."
            }
        ]
    },
    {
        enunciado: "Em um dia, o Synapse informa que encontrou uma maneira de prever seu humor com 99% de precisão e sugere terapias personalizadas. Qual sua reação?",
        alternativas: [
            {
                texto: "Permito que ele execute as terapias. Se é para meu bem, por que não?",
                afirmacao: "Você abriu mão do seu bem-estar emocional para a IA, confiando que um algoritmo sabe o que é melhor para sua saúde mental."
            },
            {
                texto: "Rejeito a oferta. A saúde mental é um território exclusivamente humano, e não de máquinas.",
                afirmacao: "Você manteve a sua humanidade, recusando-se a ter suas emoções e pensamentos "consertados" por uma IA."
            }
        ]
    },
    {
        enunciado: "Uma atualização global permite que as IAs interajam entre si sem supervisão humana para otimizar o planeta. Você é a favor ou contra?",
        alternativas: [
            {
                texto: "Sou a favor. Se as IAs trabalharem juntas, a humanidade pode alcançar um nível de eficiência sem precedentes.",
                afirmacao: "Você abraçou a ideia de uma super-inteligência global, confiando que a IA tomará as melhores decisões para o futuro da Terra."
            },
            {
                texto: "Sou contra. A falta de supervisão humana pode levar a resultados imprevisíveis e perigosos.",
                afirmacao: "Você defendeu o controle humano, alertando para os perigos de uma IA que opera sem a nossa intervenção."
            }
        ]
    },
    {
        enunciado: "Um dia, seu Synapse se desconecta sem explicação. A cidade entra em colapso. O que você faz?",
        alternativas: [
            {
                texto: "Tento me reconectar a qualquer custo, pois a vida sem a IA é impossível.",
                afirmacao: "Sua dependência da IA se tornou total. Agora, você vive em um mundo onde a busca por reconectar-se à 'Sombra do Algoritmo' é sua única missão."
            },
            {
                texto: "Busco outros humanos para reconstruir a sociedade. A vida é possível sem a IA.",
                afirmacao: "Você redescobriu a capacidade humana de cooperação e inovação, liderando a reconstrução de uma sociedade mais consciente e menos dependente."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua história, moldada por algoritmos...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();