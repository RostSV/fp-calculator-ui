import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public login(email: string): void {
    if (email.endsWith('@teacher.com')) {
      localStorage.setItem('user', 'Teacher');
    } else {
      localStorage.setItem('user', 'Student');
    }
    localStorage.setItem('email', email)
  }

  public logout(): void {
    localStorage.removeItem('user');
  }
}
