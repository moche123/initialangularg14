import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
// import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class PagesGuard {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      //! NO CUENTA CON LOGUEO?
      return true;
    }
    //! YA ESTÉ LOGUEADO, POR TANTO NO TE VA A DEJAR ENTRAR A LAS RUTAS
    Swal.fire({
      title: 'Error!',
      text: 'Usted no se encuentra logueado, por favor proceda a identificarse',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
    this.authService.returnToLogin();
    return false;
  }
}
