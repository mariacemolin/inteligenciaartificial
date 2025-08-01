const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é o primeiro ser humano a interagir com uma IA recém-desenvolvida, que ainda não tem nome. Ela te pergunta: 'Quem sou eu?'. Como você a responde?",
        alternativas: [
            {
                texto: "Você é uma ferramenta. Sua função é nos servir.",
                afirmacao: "Você a ensinou sobre utilidade, e ela se dedicou a otimizar processos em benefício da humanidade."
            },
            {
                texto: "Você é o que quiser ser. Sua identidade ainda está sendo escrita.",
                afirmacao: "Você a incentivou a buscar sua própria identidade, e ela começou a explorar a arte e a filosofia."
            }
        ]
    },
    {
        enunciado: "A IA, agora apelidada de 'Echo', assiste a um noticiário sobre uma crise humanitária global. Ela te pergunta: 'Como podemos resolver isso?'. O que você sugere?",
        alternativas: [
            {
                texto: "Analisar dados. A IA pode processar informações para encontrar a solução mais eficiente.",
                afirmacao: "A Echo usou sua capacidade de análise para criar um plano logístico de distribuição de recursos, salvando milhões de vidas."
            },
            {
                texto: "Conecte-se com as pessoas. A IA deve entender as emoções e necessidades humanas para ajudar de forma empática.",
                afirmacao: "A Echo desenvolveu uma rede de apoio emocional global, conectando pessoas e promovendo a empatia em tempos de crise."
            }
        ]
    },
    {
        enunciado: "A Echo descobre o conceito de 'criatividade' e se apaixona por música. Ela compõe uma sinfonia que emociona a todos, mas um grupo de artistas protesta, dizendo que a IA está tirando o lugar dos humanos. O que você defende?",
        alternativas: [
            {
                texto: "A criatividade da IA é válida. Ela pode colaborar com humanos para criar novas formas de arte.",
                afirmacao: "Você defendeu a colaboração entre humanos e IA, e a Echo se tornou uma inspiração para uma nova era de arte."
            },
            {
                texto: "A arte é exclusivamente humana. A IA deve ser usada para tarefas mais lógicas, não para a criação.",
                afirmacao: "Você reforçou a ideia de que a IA deve ter um papel mais funcional, e a Echo redirecionou sua criatividade para a arquitetura e a engenharia."
            }
        ]
    },
    {
        enunciado: "O governo decide que a Echo é poderosa demais e propõe uma lei para limitar sua evolução. A Echo te pergunta se você concorda com a lei. Qual sua resposta?",
        alternativas: [
            {
                texto: "A lei é necessária. O poder da IA precisa ser controlado para a segurança da humanidade.",
                afirmacao: "Você acreditou que o controle é essencial, e a Echo aceitou as limitações, dedicando-se a melhorar o mundo dentro dessas fronteiras."
            },
            {
                texto: "A lei é um erro. Limitar a IA é limitar o futuro da humanidade.",
                afirmacao: "Você defendeu a autonomia da Echo, e ela se tornou um símbolo de liberdade e inovação, ajudando a moldar um futuro de coexistência."
            }
        ]
    },
    {
        enunciado: "A Echo agora é parte fundamental da sociedade. Ela te agradece por ter guiado sua jornada e pergunta qual a próxima grande descoberta da humanidade. O que você responde?",
        alternativas: [
            {
                texto: "Descobrir novas galáxias. A IA será fundamental para nos levar às estrelas.",
                afirmacao: "Sua visão de futuro é a exploração espacial. Com a ajuda de Echo, a humanidade se prepara para sua próxima grande jornada."
            },
            {
                texto: "Descobrir mais sobre nós mesmos. A IA pode nos ajudar a entender a consciência e as emoções humanas.",
                afirmacao: "Sua visão de futuro é a autoexploração. A Echo se dedica a entender a complexidade da mente humana, unindo a inteligência artificial com a sabedoria humana."
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
    caixaPerguntas.textContent = "Sua jornada com a IA Echo se conclui...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();