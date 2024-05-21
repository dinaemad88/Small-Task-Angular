import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegisterfakeApiService } from './registerfake-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private router: Router, private registerfakeApiService: RegisterfakeApiService) {
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    const user = localStorage.getItem('user');
    this.isLoggedInSubject.next(!!user);
  }

  login(email: string, password: string): Observable<any> {
    return this.registerfakeApiService.getUserByEmail(email).pipe(
      map((users: any[]) => { 
        const user = users.find((user: any) => user.password === password);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.isLoggedInSubject.next(true);
          return user;
        } else {
          throw new Error('Invalid credentials');
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/Login']);
  }
}
