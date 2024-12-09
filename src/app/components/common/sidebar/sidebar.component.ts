import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  largeScreen: boolean;

  constructor() {
    this.largeScreen = window.innerWidth > 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.largeScreen = window.innerWidth > 800;
  }

}
