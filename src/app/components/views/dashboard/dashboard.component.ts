import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  largeScreen: boolean;
  constructor(private router: Router) {
    this.largeScreen = window.innerWidth > 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.largeScreen = window.innerWidth > 800;
  }

  goTo(compare: string) {
    this.router.navigate([compare])
  }
}
