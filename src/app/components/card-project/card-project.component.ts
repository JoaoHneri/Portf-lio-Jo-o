import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent {
  @Input() index = 1;
  @Input() nameProject = '';
  @Input() tec: string[] = [];
  @Input() descriptionProject = '';
  @Input() linkProject = '';
}
