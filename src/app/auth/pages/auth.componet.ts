import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthRequest } from '../request/index.request';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.componet.html',
  styleUrl: './auth.componet.css',
})
export class AuthComponet {
  username: string = '';
  password: string = '';
  alertMessage: boolean = false;
  message: string = '';
  systemError: boolean = false;

  constructor(private readonly authService: AuthService) { }

  authComponent() {
    const user = [this.username, this.password];
    this.alertMessage = user.some(field => field?.trim() === '')

    if (this.alertMessage) { this.message = 'Todos los campos son obligatorios'; return; }

    this.message = '';

    const authRequest: AuthRequest = { username: this.username, password: this.password };
    this.authService.postAuthService(authRequest).subscribe({
      next: (response) => {
        if (response.codigo !== '000') {
          this.systemError = true;
        };
        /*Direccion de recepcionista*/
      },
      error: (error) => {
        /*Error si con la peticion del service*/
      }
    });


  }
}
