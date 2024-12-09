import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',

})
export class FileCardComponent {
  @Input() file!: File;

}
