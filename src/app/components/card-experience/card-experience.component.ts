import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.css'],
})
export class CardExperienceComponent {
  @Input() index = 1;
  @Input() nameCompany = '';
  @Input() tec: string[] = [];
  @Input() descriptionExperience = '';
  @Input() timeExperience = '';
  @Input() role = '';
  @Input() logo = '';
}
