import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen = false;
  scrolled = false;
  @HostListener('window:scroll') onScroll(): void {
    this.scrolled = window.scrollY > 20;
  }
  closeMenu(): void {
    this.menuOpen = false;
  }
}
