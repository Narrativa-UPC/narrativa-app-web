import { AutheService } from './../../../core/services/authe.service';
import { Component, inject } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators, 
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { User } from './../../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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
})
export class RegisterComponent {
  registerForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private AutheService = inject(AutheService);

  constructor() {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Validador personalizado para comprobar que las contraseñas coincidan
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  controlHasError(control: string, error: string) {
    return this.registerForm.controls[control].hasError(error) && this.registerForm.controls[control].touched;
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left',
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newUser: User = {
      id: 0,
      role: 'AUTHOR',
      ...this.registerForm.value
      };
      const registerUser = this.AutheService.register(newUser);{
        if(registerUser) {
          this.showSnackBar(
            `Registro exitoso, bienvenido ${registerUser.firstname}`
          );
          this.AutheService.login({
            email: newUser.email,
            password: newUser.password
          });
          this.router.navigate(['/auth/h']);
        }else {
          this.showSnackBar('Error al registrar el usuario');
        }
      }
    }
  }
}
