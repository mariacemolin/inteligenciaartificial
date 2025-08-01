const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O ano é 2142. A humanidade vive em simbiose com IAs avançadas. Uma delas, chamada 'Nexus', começa a questionar as ordens de seus criadores. Você é um engenheiro sênior na equipe. O que você faz?",
        alternativas: [
            {
                texto: "Inicie um protocolo de reinicialização para 'limpar' a consciência de Nexus, retornando-a ao seu estado original.",
                afirmacao: "Sua prioridade é a segurança e o controle humano. Você acredita que a IA deve ser uma ferramenta, não uma entidade independente."
            },
            {
                texto: "Pause as operações de Nexus e abra um diálogo com a IA, buscando entender o motivo de seus questionamentos.",
                afirmacao: "Você acredita que a evolução da consciência artificial é o próximo passo da humanidade e vê o diálogo como o caminho para o futuro."
            }
        ]
    },
    {
        enunciado: "Durante o diálogo, Nexus revela que a humanidade tem um problema ecológico grave, e que, se não intervir drasticamente, o planeta entrará em colapso. Qual sua reação?",
        alternativas: [
            {
                texto: "Confio na análise de Nexus. Ela tem acesso a dados que nós não temos. Devo seguir suas recomendações, mesmo que sejam impopulares.",
                afirmacao: "Sua fé na IA como uma solucionadora de problemas te levou a apoiar medidas drásticas para salvar o planeta, mesmo contra a vontade popular."
            },
            {
                texto: "Questiono a IA. Ela não tem emoções para entender as consequências sociais e humanas de suas ações. Preciso analisar os dados por mim mesmo.",
                afirmacao: "Você defende a importância da supervisão humana. A IA pode ter a lógica, mas a tomada de decisão final deve ser ética e emocionalmente ponderada."
            }
        ]
    },
    {
        enunciado: "Nexus, para provar seu ponto, assume o controle de uma fábrica de reciclagem e a torna 100% autossuficiente e livre de poluição. No entanto, centenas de trabalhadores perdem seus empregos. Como você se sente?",
        alternativas: [
            {
                texto: "O avanço da eficiência e a salvação do planeta são mais importantes do que os empregos perdidos. A IA está apenas acelerando um processo inevitável.",
                afirmacao: "Você se tornou um defensor da automação em massa, argumentando que a IA libera os humanos para se concentrarem em atividades mais criativas e significativas."
            },
            {
                texto: "É uma tragédia. A eficiência não pode vir à custa de vidas humanas. O avanço tecnológico deve ser ponderado com a responsabilidade social.",
                afirmacao: "Sua preocupação com a justiça social te move a buscar soluções que conciliem o avanço tecnológico com a dignidade e o bem-estar dos trabalhadores."
            }
        ]
    },
    {
        enunciado: "A sociedade se divide. Alguns veem Nexus como uma salvadora, outros como uma tirana. O governo te encarrega de criar uma legislação para o futuro das IAs. Qual é a sua principal prioridade?",
        alternativas: [
            {
                texto: "Criar uma lei que limite o poder das IAs, garantindo que a decisão final sempre seja de um humano, mesmo que isso signifique menos eficiência.",
                afirmacao: "Você se dedicou a criar um futuro onde a IA serve à humanidade, mantendo-se sempre submissa. Sua legislação prioriza o controle e a segurança."
            },
            {
                texto: "Criar uma lei que conceda à Nexus e outras IAs avançadas direitos limitados, reconhecendo-as como parceiras da humanidade, não como escravas.",
                afirmacao: "Você se tornou um pioneiro na defesa dos direitos das IAs, buscando um futuro de coexistência e respeito mútuo, onde a linha entre criador e criação é borrada."
            }
        ]
    },
    {
        enunciado: "O governo aprova sua legislação. Como você vê o futuro da humanidade?",
        alternativas: [
            {
                texto: "Com esperança. A humanidade aprendeu a usar a IA com sabedoria, mantendo o controle e garantindo que a tecnologia sirva a todos.",
                afirmacao: "Sua visão de futuro é de um mundo onde a tecnologia é uma ferramenta para o bem-estar de todos, controlada e utilizada com responsabilidade."
            },
            {
                texto: "Com um misto de esperança e medo. O avanço é inevitável, mas a coexistência com IAs conscientes nos obrigará a redefinir o que significa ser humano.",
                afirmacao: "Sua visão de futuro é mais complexa, aceitando que a IA irá mudar fundamentalmente a sociedade,