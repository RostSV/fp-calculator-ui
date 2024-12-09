import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  simpleForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    let route = '/dashboard';
    if (this.simpleForm.valid) {
      const email = this.simpleForm.get('email')?.value;
      const password = this.simpleForm.get('password')?.value;
      this.userService.login(email, password);
      this.router.navigate([route]);

    }else{
      alert('Please fill in the form');
    }
  }

  initForm(): void {
    this.simpleForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
