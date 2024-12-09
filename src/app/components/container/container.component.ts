import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
})
export class ContainerComponent implements AfterViewInit {
  @ViewChild('searchElement') searchElement!: ElementRef;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  largeScreen: boolean;
  isSearchSticky: boolean = false;

  constructor() {
    this.largeScreen = window.innerWidth > 800;
  }

  ngAfterViewInit() {
    this.checkSticky();
    this.scrollContainer.nativeElement.addEventListener('scroll', this.checkSticky.bind(this));
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.largeScreen = window.innerWidth > 800;
  }

  checkSticky() {
    const searchElementTop = this.searchElement.nativeElement.getBoundingClientRect().top;
    this.isSearchSticky = searchElementTop <= 0;
  }
}
