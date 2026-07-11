import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type Language = 'pt-BR' | 'en';
const text = {
  'pt-BR': {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    talk: 'Vamos conversar',
    available: 'Disponível para novos desafios',
    heroTitle: 'Construo produtos digitais que',
    heroEmphasis: 'funcionam de verdade.',
    intro:
      'Olá, sou João Henrique — desenvolvedor Full-Stack focado em transformar problemas complexos em experiências simples, rápidas e escaláveis.',
    explore: 'Explorar projetos',
    download: 'Baixar currículo',
    technologies: 'Principais tecnologias',
    imageAlt: 'Ilustração de João Henrique trabalhando com tecnologia',
    years: 'anos criando',
    aboutLabel: 'Sobre mim',
    aboutTitle: 'Código com contexto.',
    aboutEmphasis: 'Produto com propósito.',
    aboutSummary:
      'Combino visão de produto, cuidado visual e engenharia para criar soluções que sejam boas para quem usa e sustentáveis para quem mantém.',
    education: 'Formação contínua',
    profileAlt: 'Foto de João Henrique',
    profileKicker: 'Desenvolvedor • Estudante • Criador',
    profileTitle: 'Entre interfaces e APIs, meu foco é sempre a',
    profileEmphasis: 'experiência completa.',
    profileP1:
      'Sou desenvolvedor Full-Stack e estudante de Sistemas de Informação no IFBA, com formação técnica em Desenvolvimento de Sistemas pelo SENAI-BA. Tenho experiência prática com JavaScript, TypeScript, Angular, React, Node.js e PHP.',
    profileP2:
      'Gosto de entender o problema antes de escolher a tecnologia. Atualmente aprofundo conhecimentos em Java, Spring Boot, Docker, cloud e inteligência artificial para construir sistemas cada vez mais robustos.',
    resume: 'Currículo',
    journey: 'Trajetória',
    journeyTitle: 'Experiência que',
    journeyEmphasis: 'gera impacto.',
    journeySummary:
      'Atuação de ponta a ponta, do desenho da solução ao deploy, em produtos reais e equipes multidisciplinares.',
    selected: 'Projetos selecionados',
    ideas: 'Ideias que saíram',
    ideasEmphasis: 'do papel.',
    projectsSummary:
      'Uma seleção de aplicações em que explorei produto, interface, arquitetura e integrações.',
    footerLabel: 'Tem um projeto em mente?',
    footerTitle: 'Vamos criar algo',
    footerEmphasis: 'memorável.',
    sendEmail: 'Enviar um e-mail',
    back: 'Voltar ao topo',
  },
  en: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    talk: "Let's talk",
    available: 'Available for new opportunities',
    heroTitle: 'I build digital products that',
    heroEmphasis: 'truly work.',
    intro:
      "Hi, I'm João Henrique — a Full-Stack developer focused on turning complex problems into simple, fast and scalable experiences.",
    explore: 'Explore projects',
    download: 'Download résumé',
    technologies: 'Main technologies',
    imageAlt: 'Illustration of João Henrique working with technology',
    years: 'years building',
    aboutLabel: 'About me',
    aboutTitle: 'Code with context.',
    aboutEmphasis: 'Products with purpose.',
    aboutSummary:
      'I combine product thinking, visual care and engineering to create solutions that are great for users and sustainable for those who maintain them.',
    education: 'Continuous learning',
    profileAlt: 'Photo of João Henrique',
    profileKicker: 'Developer • Student • Creator',
    profileTitle: 'Across interfaces and APIs, my focus is always the',
    profileEmphasis: 'complete experience.',
    profileP1:
      "I'm a Full-Stack developer and Information Systems student at IFBA, with a technical degree in Systems Development from SENAI-BA. I have hands-on experience with JavaScript, TypeScript, Angular, React, Node.js and PHP.",
    profileP2:
      'I like to understand the problem before choosing the technology. I am currently deepening my knowledge of Java, Spring Boot, Docker, cloud and artificial intelligence to build increasingly robust systems.',
    resume: 'Résumé',
    journey: 'Career',
    journeyTitle: 'Experience that',
    journeyEmphasis: 'drives impact.',
    journeySummary:
      'End-to-end work, from solution design to deployment, across real products and multidisciplinary teams.',
    selected: 'Selected projects',
    ideas: 'Ideas brought',
    ideasEmphasis: 'to life.',
    projectsSummary:
      'A selection of applications where I explored product thinking, interfaces, architecture and integrations.',
    footerLabel: 'Have a project in mind?',
    footerTitle: "Let's create something",
    footerEmphasis: 'memorable.',
    sendEmail: 'Send an email',
    back: 'Back to top',
  },
} as const;
@Injectable({ providedIn: 'root' })
export class LanguageService {
  language: Language = 'pt-BR';
  readonly languageChanges = new BehaviorSubject<Language>(this.language);
  constructor() {
    const detected: Language =
      typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('pt')
        ? 'pt-BR'
        : 'en';
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('portfolio-language');
    } catch {
      // Storage can be blocked by browser privacy settings.
    }
    this.setLanguage(saved === 'pt-BR' || saved === 'en' ? saved : detected);
  }
  setLanguage(language: Language): void {
    this.language = language;
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      // Keep the selected language in memory when storage is unavailable.
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }

    this.languageChanges.next(language);
  }
  get t() {
    return text[this.language];
  }
  get resumeUrl(): string {
    return this.language === 'pt-BR'
      ? 'assets/curriculo-joao-henrique-pt-br.pdf'
      : 'assets/resume-joao-henrique-en.pdf';
  }
}
