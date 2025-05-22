import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portifolio-joao';

  experiences = [
    {
      role: 'Desenvolvedor Full-Stack',
      nameCompany: 'WEMIND',
      logo: 'assets/images/wemind_logo.webp', // exemplo, pode deixar vazio se não tiver logo
      timeExperience: 'Abril de 2024 - Mar 2025',
      descriptionExperience: `Como Desenvolvedor Full Stack, desenvolvi rotas seguras e eficientes para consumo de APIs,
        criei layouts responsivos e intuitivos com foco na experiência do usuário, e implementei
        WebSockets para comunicação em tempo real, aprimorando a interatividade das
        aplicações. Utilizei PHP e JavaScript para construir soluções escaláveis, colaborando
        estreitamente com as equipes de design e backend para garantir a integração eficaz e a
        resolução de desafios complexos.`,
      tec: ['PHP', 'JavaScript', 'WebSockets', 'API', 'Layouts Responsivos']
    },
    {
      role: 'Desenvolvedor Full-Stack',
      nameCompany: 'Rekomendo',
      logo: 'assets/images/rekomendo-logo.webp', // exemplo, pode deixar vazio se não tiver logo
      timeExperience: 'Abril de 2024 - Mar 2025',
      descriptionExperience: `Rekomendo, um aplicativo de divulgação e prestação de serviços que circula
        principalmente em minha cidade, Feira de Santana, rekomendo.com.br, onde fui um dos
        dois desenvolvedores, atuando tanto em back e front-end, trazendo um site agradável e
        amplo, com diversas funcionalidades tanto para cliente e prestadores de serviços, utilizando
        Angular.js no front-end, javascript no back-end e Firebase para base de dados.
        `,
      tec: ['Ionic', 'Angular', 'Firebase', 'TypeScript', 'Node.js', 'Express']
    },
    // outras experiências aqui
  ];

  ngOnInit(): void {
    AOS.init()
  }
}
