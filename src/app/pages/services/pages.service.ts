import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResult, ICharacter } from '../models/pages.model';
import { environment } from 'src/environments/environment';

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
}
