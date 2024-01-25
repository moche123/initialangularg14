import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IElement } from '../interfaces/api.interface';


@Injectable()
export class ApiService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor( private _http: HttpClient ) { } //!INYECTAR DEPENDENCIAS


  getInfo( idElement:number ): Observable<IElement>{ //! NATIVOS PARA DEVOLVER OBSERVABLES => of, from (rxjs)
    return this._http.get<IElement[]>( this.url )
    .pipe(
      map( data => data[idElement] ),
      // catchError( (_) => {

      //   // return data
      // }  )
    )
  }



}
