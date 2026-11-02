import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthRequest } from '../request/index.request';
import { signal } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.componet.html',
  styleUrl: './auth.componet.css',
})
export class AuthComponet {
  username: string = '';
  password: string = '';
  alertMessage = signal(false);
  fieldsEmpty = signal(false);
  usernameRequired = signal(false);
  passwordRequired = signal(false);
  message: string = '';
  systemError: boolean = false;
  showPassword: boolean = false;

  constructor(private readonly authService: AuthService) { }

  authComponent() {
    const user = [this.username, this.password];

    if (this.validateFields(user)) { return; }
    
    const authRequest: AuthRequest = { Username: this.username.trim(), PasswordHash: this.password.trim() };
    this.authService.postAuthService(authRequest).subscribe({
      next: (response) => {
        /* Handle successful authentication */
      },
      error: (error) => {
        if (error.status === 401) {
          this.alertMessage.set(true);
          this.message = 'Credenciales inválidas';
          this.containerAlert();
        };
        /* Handle other errors */
      }
    });
  }

  validateFields(data: string[]) {
    let confi = false;
    const validate = data.filter(field => field.trim() === '').length;
    validate === 2 ? (this.usernameRequired.set(true), this.passwordRequired.set(true), confi = true) : false;
    if (!confi) {
      if (data[0].trim() === '' && data[1].trim() !== '') {
        this.usernameRequired.set(true);
        confi = true;
      } else if (data[0].trim() !== '' && data[1].trim() === '') {
        this.passwordRequired.set(true);
        confi = true;
      }
    }
    
    return confi;
  }

  isAuthFieldActive(event: Event): void {
    const names = ['username', 'password'];
    const inputElement = event.target as HTMLInputElement;
    switch (inputElement.name) {
      case names[0]:
        this.usernameRequired.set(false);
        break;
      case names[1]:
        this.passwordRequired.set(false);
        break;
    }
  }

  showPasswordTaggle() {
    this.showPassword = !this.showPassword;
  }

  containerAlert() {
    setTimeout(() => {
      this.alertMessage.set(false);
    }, 4000);
  }
}
