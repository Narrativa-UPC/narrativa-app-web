import { Component, inject } from '@angular/core';
import { AutheService } from './../../../core/services/authe.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private AutheService = inject(AutheService);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  controlHasError(control: string, error: string) {
    return this.loginForm.controls[control].hasError(error) && this.loginForm.controls[control].touched;
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      const user = this.AutheService.login(credentials);
      
      if (user) {
        // Si el usuario existe y el login es exitoso
        this.showSnackBar(`Bienvenido, ${user.firstname}`);
        
        if (user.role === 'CREATOR') {
          this.router.navigate(['/homelogged']);
        } else if (user.role === 'USER') {
          this.router.navigate(['/homelogged']);
        }
  
        // Redirige solo después de un login exitoso
        console.log('Credenciales:', credentials);
      } else {
        // Si no se encuentra el usuario o la contraseña es incorrecta
        this.showSnackBar('Correo o contraseña incorrectos.');
      }
    }
  }
}  
