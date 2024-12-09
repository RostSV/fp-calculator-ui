import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public login(email: string, password: string): void {
    if (email.endsWith('@teacher.com')) {
      localStorage.setItem('user', 'teacher');
    } else {
      localStorage.setItem('user', 'student');
    }
  }

  public logout(): void {
    localStorage.removeItem('user');
  }
}
