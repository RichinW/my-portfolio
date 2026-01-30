
export const en = {
  header: [
    "Hero", "About", "Case", "Contact", "Language", "View Github"
  ],
  hero: {
    title1: {
      start: "Building",
      highlight: "real-world ",
      end: "software solutions.",
    },
    title2: {
      start: "From",
      highlight: "idea",
      end: "to production.",
    },
    description:
      "Hey there! I’m Richard Camargo. I turn complex operational problems into working software — fast, clean and scalable.",
    button1: "View case studies",
    button2: "Contact me",
  },
  about: {
    title: "About",
    texts: [
      "[ 1 ]. I am a software developer focused on building real systems to solve operational problems. I enjoy working from concept to production delivery, considering both the technical aspects and the experience of those who will use the system.",
      "[ 2 ]. I received technical training at CTI and developed a management system used in a real event, serving thousands of people, as my final project. During high school, I obtained a certificate in robot development using Arduino UNO from UNESP and also interned as a web developer in the IT field. I currently work with internal systems development, dealing with business rules, integrations, and real-world processes.",
      "[ 3 ]. My biggest advantage is having experienced projects outside the academic environment, with real users, deadlines, and responsibilities. This has given me a closer view of the product than just technical implementation.",
    ],
  },
  case: {
    title: "Final Course Project",
  },
  project: {
    options: [
      {
        title: {
          start: "Problem",
          highlight: "?",
        },
        text: "An event with lots of people and no system for controlling customers, expenses, or earnings, just paper slips that inspire no confidence. A real operational mess at one of the largest schools in the state of São Paulo.",
      },
      {
        title: {
          start: "Solution",
          highlight: "!",
        },
        text: "An integrated system for purchases made at event stores and customer and credit control. That was our solution with the creation of Viva Pay, a system that served more than 5,000 customers at a three-day event on its first.",
      },
      {
        title: {
            start: "Result",
        },
        text: "The project was completed two months before the event and successfully used in a real production environment. During three days, the system served more than 5,000 customers, handling real transactions and operational workflows. The full development cycle took approximately six months, from initial concept to final delivery.",
      },
    ],
    architecture: {
      title: "Architecture",
      description: "The project was divided into three systems:",
      texts: [
        "[ 1 ]. Authenticated API for communication and security between the other two parts of the system, for transferring customer credit for purchases at event stores.",
        "[ 2 ]. Management software responsible for managing events, controlling cash, stores, salespeople, and customer credit control.",
        "[ 3 ]. Application for store management, used by salespeople to check balances, debit, and verify store information, such as collected amounts and transaction history.",
        "In addition to the main system, a presentation website was also developed, making the system available for download and explaining how it works.",
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
      title: "Contact Info",
      infos: ["Email", "Phone"]
    },
    social_info: "Social Info",
    form: {
      title: {
        start: "Let's work",
        highlight: "together",
      },
      inputs: ["Name *", "Email *", "Your subject *", "Your message *"],
      button: "Send message",
    },
  },
};
