import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  // directivas de router que el template necesita
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navOpen = false;                 // para el menú hamburguesa

  toggleMenu() {
    this.navOpen = !this.navOpen;
  }
}
