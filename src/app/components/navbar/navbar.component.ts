import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen = false;

  constructor(public lang: LanguageService) {}
  scrolled = false;
  @HostListener('window:scroll') onScroll(): void {
    this.scrolled = window.scrollY > 20;
  }
  closeMenu(): void {
    this.menuOpen = false;
  }
}
