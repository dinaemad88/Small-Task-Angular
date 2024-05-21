import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterfakeApiService {
  private users: any[] = [];

  constructor() {}

  getUserByEmail(email: string): Observable<any[]> {
    const user = this.users.filter(u => u.email === email);
    return of(user).pipe(
      catchError(this.handleError)
    );
  }

  register(user: any): Observable<any> {
    this.users.push(user);
    return of(user).pipe(
      catchError(this.handleError)
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.getUserByEmail(email).pipe(
      map(users => {
        const user = users.find(u => u.email === email);
        if (user) {
          if (user.password === password) {
            return user;
          } else {
            throw new Error('Invalid password');
          }
        } else {
          throw new Error('User not found');
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
