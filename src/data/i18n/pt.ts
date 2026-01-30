export const pt = {
  header: [
    "Início", "Sobre", "Estudo de caso", "Contato", "Idioma", "Ver Github"
  ],
  hero: {
    title1: {
      start: "Criando Soluções para o",
      highlight: "mundo real",
      end: ".",
    },
    title2: {
      start: "Da",
      highlight: "ideia",
      end: "ao produto.",
    },
    description:
      "Olá! Sou Richard Camargo. Transformei problemas operacionais complexos em software funcional — rápido, limpo e escalável.",
    button1: "Veja estudos de caso",
    button2: "Me contate",
  },
  about: {
    title: "Sobre",
    texts: [
      "[ 1 ]. Sou um desenvolvedor de software focado em criar sistemas reais para resolver problemas operacionais. Gosto de trabalhar desde o conceito até a entrega em produção, considerando tanto os aspectos técnicos quanto a experiência dos usuários do sistema.",
      "[ 2 ]. Recebi treinamento técnico no CTI e desenvolvi um sistema de gestão usado em um evento real, servindo milhares de pessoas, como meu projeto final. Durante o ensino médio, obtive certificação em desenvolvimento robótico usando Arduino UNO da UNESP e também estagiei como desenvolvedor web no campo de TI. Atualmente trabalho com desenvolvimento de sistemas internos, lidando com regras de negócio, integrações e processos do mundo real.",
      "[ 3 ]. Minha maior vantagem é ter experiência com projetos fora do ambiente acadêmico, com usuários reais, prazos e responsabilidades. Isso me proporcionou uma visão mais próxima do produto do que apenas a implementação técnica.",
    ],
  },
  case: {
    title: "Trabalho de conclusão de curso",
  },
  project: {
    options: [
      {
        title: {
          start: "Problema",
          highlight: "?",
        },
        text: "Um evento com muitas pessoas e sem sistema para controlar clientes, despesas ou receitas, apenas folhas de papel que inspiram nenhuma confiança. Um verdadeiro caos operacional em uma das maiores escolas do estado de São Paulo.",
      },
      {
        title: {
          start: "Solução",
          highlight: "!",
        },
        text: "Um sistema integrado para compras feitas nas lojas do evento e controle de clientes e créditos. Foi essa nossa solução com a criação do Viva Pay, um sistema que atendeu mais de 5.000 clientes em um evento de três dias no início."
      },
      {
        title: {
          start: "Resultado",
        },
        text: "O projeto foi concluído dois meses antes do evento e utilizado com sucesso em um ambiente de produção real. Durante três dias, o sistema atendeu mais de 5.000 clientes, lidando com transações reais e fluxos operacionais. O ciclo completo de desenvolvimento levou aproximadamente seis meses, desde o conceito inicial até a entrega final.",
      },
    ],
    architecture: {
      title: "Arquitetura",
      description: "O projeto foi dividido em três sistemas:",
      texts: [
        "[ 1 ]. API autenticada para comunicação e segurança entre as outras duas partes do sistema, para transferência de crédito do cliente para compras nas lojas do evento.",
        "[ 2 ]. Software de gestão responsável por gerenciar eventos, controlar caixa, lojas, vendedores e controle de crédito do cliente.",
        "[ 3 ]. Aplicação para gerenciamento de lojas, usada pelos vendedores para verificar saldos, debitar e verificar informações da loja, como valores arrecadados e histórico de transações.",
        "Além do sistema principal, também foi desenvolvido um site de apresentação, disponibilizando o sistema para download e explicando como ele funciona.",
      ],
    },
    stack: {
      title: "Stack",
      technologies: [
        { name: "Design", icon: "fa-pen-nib", technologies: ["Figma"] },
        {
          name: "Management",
          icon: "fa-file-alt",
          technologies: ["Notion", "Docs"],
        },
        {
          name: "Database",
          icon: "fa-database",
          technologies: ["PostgreSQL", "PgAdmin4"],
        },
        { name: "Backend", icon: "fa-server", technologies: ["AdonisJS"] },
        {
          name: "Frontend",
          icon: "fa-laptop-code",
          technologies: ["Vue3", "IonicJS", "JavaFx"],
        },
      ],
    },
  },
  contact: {
    contact_info: {
      title: "Informações de Contato",
      infos: ["Email", "Telefone"]
    },
    social_info: "Informações Sociais",
    form: {
      title: {
        start: "Vamos trabalhar",
        highlight: "juntos",
      },
      inputs: ["Nome *", "Email *", "Seu assunto *", "Sua mensagem *"],
      button: "Enviar mensagem",
    },
  },
};
