import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  IApiResult,
  ICharacter,
  IDTOFavorite,
  IFavoritePostDTO,
  IGetFavoritePayload,
} from '../models/pages.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private _http: HttpClient) {} //!INYECTAR DEPENDENCIAS

  getCharacteres(): Observable<ICharacter[]> {
    return this._http
      .get<IApiResult>(environment.apiUrl)
      .pipe(map((data) => data.results));
  }

  addFavorite(body: IDTOFavorite): Observable<boolean | string> {
    return this._http
      .post<IFavoritePostDTO>(
        `${environment.baseUrl}/api/favorite/newFavorite`,
        body
      )
      .pipe(
        map((data) => {
          if (data.ok) {
            return data.ok;
          } else {
            throw new Error('ERROR');
          }
        }),
        catchError((err) => {
          console.log(err.error.msg);
          Swal.fire({
            title: 'ERROR!',
            text: err.error.msg,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
          return of('ERROR');
        })
      );
  }

  getAllFavorites(): Observable<IDTOFavorite[]> {
    let localStorageItem = localStorage.getItem('userId');
    return this._http
      .get<IGetFavoritePayload>(
        `${environment.baseUrl}/api/favorite/${localStorageItem}`
      )
      .pipe(map((data) => data.favorites));
  }

  deleteFavorite(IdCharacter: any, IdUser: any): Observable<any> {
    const url = `${environment.baseUrl}/api/favorite/deleteFavorite`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { IdCharacter, IdUser },
    };
    // const headers = new HttpHeaders().set(IdCharacter.toString(),IdUser)

    return this._http.delete<any>(url, options);
  }
}
