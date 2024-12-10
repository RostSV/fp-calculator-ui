import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  simpleForm!: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    let route = '/dashboard';
    if (this.simpleForm.valid) {
      const email = this.simpleForm.get('email')?.value;
      this.userService.login(email);
      this.router.navigate([route]);

    }else{
      console.log('Invalid data')
      this.messageService.add({severity: 'error', summary: 'Invalid data', detail: 'Please try again', life: 5000});
    }
  }

  initForm(): void {
    this.simpleForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
