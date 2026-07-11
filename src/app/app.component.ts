import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
  readonly experiences: Experience[] = [
    {
      role: 'Desenvolvedor Back-end',
      nameCompany: 'Pass',
      logo: 'assets/images/passbusiness_logo.jpg',
      timeExperience: 'Junho de 2025 — atualmente',
      descriptionExperience:
        'Desenvolvimento e manutenção de APIs e microsserviços para pagamentos, e-mails e integrações externas. Atuação com processamento assíncrono, bancos relacionais, documentação de APIs e deploy em nuvem.',
      tec: ['Node.js', 'TypeScript', 'NestJS', 'MySQL', 'Pub/Sub', 'Docker', 'Swagger'],
    },
    {
      role: 'Desenvolvedor Full-Stack',
      nameCompany: 'WEMIND',
      logo: 'assets/images/wemind_logo.webp',
      timeExperience: 'Abril de 2024 — março de 2025',
      descriptionExperience:
        'Construção de APIs seguras, interfaces responsivas e experiências em tempo real com WebSockets. Colaboração com design e back-end para entregar soluções escaláveis.',
      tec: ['PHP', 'JavaScript', 'WebSockets', 'REST APIs', 'UI responsiva'],
    },
    {
      role: 'Desenvolvedor Full-Stack',
      nameCompany: 'Rekomendo',
      logo: 'assets/images/rekomendo-logo.webp',
      timeExperience: 'Agosto de 2024 — março de 2025',
      descriptionExperience:
        'Desenvolvimento de uma plataforma de serviços para Feira de Santana, atuando no front-end e no back-end em recursos para clientes e prestadores.',
      tec: ['Ionic', 'Angular', 'Firebase', 'TypeScript', 'Node.js', 'Express'],
    },
  ];
  readonly projects: Project[] = [
    {
      name: 'Rekomendo',
      technologies: ['Ionic', 'Angular', 'Firebase', 'Node.js'],
      description:
        'Marketplace de serviços locais com jornadas completas para clientes e prestadores, da descoberta à contratação.',
      link: 'https://rekomendo.com.br',
    },
    {
      name: 'Swap Book',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description:
        'Plataforma de compra e troca de livros com autenticação, chat em tempo real, favoritos e geolocalização.',
      link: 'https://swap-book.vercel.app',
    },
    {
      name: 'ProSen',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description:
        'Portal para busca de trabalhos e divulgação de eventos do SENAI, com autenticação e upload de arquivos.',
      link: 'https://pro-sen.vercel.app',
    },
    {
      name: 'Rick & Morty API',
      technologies: ['React', 'JavaScript', 'REST API'],
      description:
        'SPA dinâmica para explorar personagens e dados da série, criada para consolidar consumo de APIs.',
      link: 'https://rick-and-morty-spa-three.vercel.app',
    },
    {
      name: 'Momentos',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      description:
        'Rede de memórias com publicação de fotos, comentários, busca e gerenciamento de postagens.',
      link: 'https://github.com/JoaoHneri/Moments-site-angular',
    },
    {
      name: 'Consulta CEP',
      technologies: ['Angular', 'NestJS', 'MySQL'],
      description:
        'Sistema autenticado de consultas geográficas por raio, com resultados tabulares e histórico.',
      link: 'https://github.com/JoaoHneri/Desafio_Consulta_Cep',
    },
  ];
  ngOnInit(): void {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }
}
