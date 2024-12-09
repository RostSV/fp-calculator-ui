import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-action-card',
  standalone: false,

  templateUrl: './action-card.component.html'
})
export class ActionCardComponent {
  @Input() title!: string;
  @Input() imageName!: string;
}
