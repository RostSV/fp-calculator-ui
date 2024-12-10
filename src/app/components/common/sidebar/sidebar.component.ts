import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  largeScreen: boolean;
  email: string | null = localStorage.getItem('email');
  user: string | null = localStorage.getItem('user');

  constructor() {
    this.largeScreen = window.innerWidth > 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.largeScreen = window.innerWidth > 800;
  }

}
