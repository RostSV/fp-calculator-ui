import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,

  templateUrl: './container.component.html'
})
export class ContainerComponent {
  largeScreen: boolean;

  constructor() {
    this.largeScreen = window.innerWidth > 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.largeScreen = window.innerWidth > 800;
  }
}