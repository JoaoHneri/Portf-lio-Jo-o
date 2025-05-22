import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.css']
})
export class CardExperienceComponent implements OnInit {

  @Input() nameCompany!: string;
  @Input() tec!: string[];                // tecnologias usadas
  @Input() descriptionExperience!: string;
  @Input() timeExperience!: string;
  @Input() role!: string;                 // cargo/posição
  @Input() logo!: string;                 // URL do logo

  constructor() {}

  ngOnInit(): void {}
}
