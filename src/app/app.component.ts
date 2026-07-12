import { Component, OnDestroy, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { LanguageService } from './services/language.service';
interface Experience {
  role: string;
  nameCompany: string;
  logo: string;
  timeExperience: string;
  descriptionExperience: string;
  tec: string[];
}
interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}
const experienceBase = [
  {
    nameCompany: 'Pass',
    logo: 'assets/images/passbusiness_logo.jpg',
    tec: ['Node.js', 'TypeScript', 'NestJS', 'MySQL', 'Pub/Sub', 'Docker', 'Swagger'],
  },
  {
    nameCompany: 'WEMIND',
    logo: 'assets/images/wemind_logo.webp',
    tec: ['PHP', 'JavaScript', 'WebSockets', 'REST APIs', 'Responsive UI'],
  },
  {
    nameCompany: 'Rekomendo',
    logo: 'assets/images/rekomendo-logo.webp',
    tec: ['Ionic', 'Angular', 'Firebase', 'TypeScript', 'Node.js', 'Express'],
  },
];
const experienceCopy = {
  'pt-BR': [
    [
      'Desenvolvedor Back-end',
      'Junho de 2025 — atualmente',
      'Desenvolvimento e manutenção de APIs e microsserviços para pagamentos, e-mails e integrações externas. Atuação com processamento assíncrono, bancos relacionais e documentação de APIs.',
    ],
    [
      'Desenvolvedor Full-Stack',
      'Abril de 2024 — março de 2025',
      'Construção de APIs seguras, interfaces responsivas e experiências em tempo real com WebSockets. Colaboração com design e back-end para entregar soluções escaláveis.',
    ],
    [
      'Desenvolvedor Full-Stack',
      'Agosto de 2024 — março de 2025',
      'Desenvolvimento de uma plataforma de serviços para Feira de Santana, atuando no front-end e no back-end em recursos para clientes e prestadores.',
    ],
  ],
  en: [
    [
      'Back-end Developer',
      'June 2025 — present',
      'Development and maintenance of APIs and microservices for payments, emails and external integrations. Working with asynchronous processing, relational databases and API documentation.',
    ],
    [
      'Full-Stack Developer',
      'April 2024 — March 2025',
      'Built secure APIs, responsive interfaces and real-time experiences with WebSockets. Collaborated with design and back-end teams to deliver scalable solutions.',
    ],
    [
      'Full-Stack Developer',
      'August 2024 — March 2025',
      'Developed a service platform for Feira de Santana, working across front-end and back-end features for customers and service providers.',
    ],
  ],
};
const projectBase = [
  ['Rekomendo', ['Ionic', 'Angular', 'Firebase', 'Node.js'], 'https://rekomendo.com.br'],
  ['Swap Book', ['React', 'Node.js', 'MongoDB'], 'https://swap-book.vercel.app'],
  ['ProSen', ['React', 'Node.js', 'MongoDB'], 'https://pro-sen.vercel.app'],
  [
    'Rick & Morty API',
    ['React', 'JavaScript', 'REST API'],
    'https://rick-and-morty-spa-three.vercel.app',
  ],
  [
    'Momentos',
    ['Angular', 'TypeScript', 'CSS'],
    'https://github.com/JoaoHneri/Moments-site-angular',
  ],
  [
    'Consulta CEP',
    ['Angular', 'NestJS', 'MySQL'],
    'https://github.com/JoaoHneri/Desafio_Consulta_Cep',
  ],
] as const;
const projectCopy = {
  'pt-BR': [
    'Marketplace de serviços locais com jornadas completas para clientes e prestadores, da descoberta à contratação.',
    'Plataforma de compra e troca de livros com autenticação, chat em tempo real, favoritos e geolocalização.',
    'Portal para busca de trabalhos e divulgação de eventos do SENAI, com autenticação e upload de arquivos.',
    'SPA dinâmica para explorar personagens e dados da série, criada para consolidar consumo de APIs.',
    'Rede de memórias com publicação de fotos, comentários, busca e gerenciamento de postagens.',
    'Sistema autenticado de consultas geográficas por raio, com resultados tabulares e histórico.',
  ],
  en: [
    'Local services marketplace with complete customer and provider journeys, from discovery to hiring.',
    'Book trading and shopping platform with authentication, real-time chat, favorites and geolocation.',
    'Portal for browsing SENAI projects and events, featuring authentication and file uploads.',
    'Dynamic SPA for exploring characters and series data, built to consolidate API consumption skills.',
    'Memory-sharing network with photo posts, comments, search and post management.',
    'Authenticated geographic search system based on distance radius, with tabular results and history.',
  ],
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly title = 'portifolio-joao';
  readonly technologies = [
    'Angular',
    'React',
    'Next.js',
    'Java',
    'Spring',
    'Node.js',
    'NestJS',
    'MySQL',
  ];
  readonly courses = {
    'pt-BR': [
      ['Sistemas de Informação', 'Instituto Federal da Bahia'],
      ['Desenvolvimento de Sistemas', 'SENAI Bahia'],
      ['Inglês Intermediário II', 'Universidade Estadual de Feira de Santana'],
    ],
    en: [
      ['Information Systems', 'Federal Institute of Bahia'],
      ['Systems Development', 'SENAI Bahia'],
      ['Intermediate English II', 'State University of Feira de Santana'],
    ],
  };
  experiences: Experience[] = [];
  projects: Project[] = [];
  private readonly languageSubscription: Subscription;

  constructor(public lang: LanguageService) {
    this.languageSubscription = this.lang.languageChanges.subscribe(() => this.updateContent());
  }

  private updateContent(): void {
    this.experiences = experienceBase.map((base, index) => ({
      role: experienceCopy[this.lang.language][index][0],
      timeExperience: experienceCopy[this.lang.language][index][1],
      descriptionExperience: experienceCopy[this.lang.language][index][2],
      ...base,
    }));
    this.projects = projectBase.map((project, index) => ({
      name: project[0],
      technologies: [...project[1]],
      link: project[2],
      description: projectCopy[this.lang.language][index],
    }));
  }

  ngOnInit(): void {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
