import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Importa BehaviorSubject
import { LoginCredentials } from '../../shared/models/login-credentials.model';
import { User } from './../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AutheService {
  private users: User[] = [
    {
      id: 1,
      firstname: 'John',
      email: 'creador@gmail.com',
      password: 'creador123',
      role: 'CREATOR'
    },
    {
      id: 2,
      firstname: 'Dana',
      email: 'user@gmail.com',
      password: 'user123',
      role: 'USER'
    }
  ];

  private _currentUser: User | null = null;
  // Comportamiento inicial del usuario, null si no está autenticado
  private _authStatus = new BehaviorSubject<User | null>(this._currentUser);

  constructor() { }

  // Getter para acceder al estado de autenticación
  get currentUser$() {
    return this._authStatus.asObservable();  
  }

  register(newUser: User): User | null {
    const existingUser = this.users.find(user => user.email === newUser.email);
    if(existingUser) {
      return null;
    }
    const user: User = {
      ...newUser,
      id: this.users.length + 1
    };

    this.users.push(user);
    return user;
  }

  login(credentials: LoginCredentials): User | null {
    const user = this.users.find(user => user.email === credentials.email && user.password === credentials.password);
    if(user) {
      this._currentUser = user;
      this._authStatus.next(user); // Emite el usuario logueado
      return user;
    } else {
      return null;
    }
  }

  logout(): void {
    this._currentUser = null;
    this._authStatus.next(null); // Emite null cuando el usuario cierra sesión
  }
}
