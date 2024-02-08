import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ICharacter,
  IDTOFavorite,
  IGetFavoritePayload,
} from '../models/pages.model';
import { PagesService } from '../services/pages.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  public favorites$ = new Observable<IDTOFavorite[]>();
  constructor(private _pagesService: PagesService, private _router: Router) {}

  ngOnInit() {
    this.favorites$ = this._pagesService.getAllFavorites();
  }

  deleteFavorite(character: IDTOFavorite) {
    this._pagesService
      .deleteFavorite(character.IdCharacter, character.IdUser)
      .subscribe((_) => {
        Swal.fire({
          title: 'Enhorabuena!',
          text: 'Favorito retirado correctamente',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this._router.navigateByUrl('/pages/characteres');
      });
  }
}
