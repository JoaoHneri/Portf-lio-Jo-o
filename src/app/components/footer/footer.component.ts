import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(public lang: LanguageService) {}

  readonly currentYear = new Date().getFullYear();
}
