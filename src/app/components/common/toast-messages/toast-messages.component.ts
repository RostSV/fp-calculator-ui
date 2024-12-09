import { Component } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
})
export class ToastMessagesComponent {
  constructor(private messageService: MessageService) {}
}
