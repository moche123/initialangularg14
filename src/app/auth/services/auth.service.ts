import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}

  public login(email: string, password: string): Observable<any> {
    const url = `${environment.baseUrl}/api/auth`;

    const body = { email, password };

    return this._http.post<any>(url, body).pipe(
      //*TAP ==> NO RETORNA NADA (VOID)
      tap(({ ok, token, uid, name }) => {
        if (ok) {
          localStorage.setItem('token', token!); //*  ! ==> Aseguro que el valor siempre llega
          localStorage.setItem('userId', uid!);
          localStorage.setItem('name', name!);
        } else {
          localStorage.clear();
        }
      }),

      map((resp) => resp.ok),
      catchError((err) => {
        return of(err.error); //! también existe from ==> retorna un observable, El "error" es propio del catchError
      })
    );
  }

  public isLoggedIn(): boolean {
    try {
      const localStorageValue = localStorage.getItem('token');
      return localStorageValue ? true : false;
    } catch (err) {
      return false;
    }
  }

  public returnToLogin() {
    this._router.navigateByUrl('/auth/login');
  }

  public goToPages() {
    this._router.navigateByUrl('/pages/characteres');
  }
}
