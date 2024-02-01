import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}

  public myForm: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.myForm.value; //! DESTRUCTURING => DESTRUCTURACIÓN
    //* const email = this.myForm.email
    //* const password = this.myForm.password

    this._authService.login(email, password).subscribe((response: any) => {
      if (response === true) {
        // localStorage.setItem('token')
        Swal.fire({
          title: 'Enhorabuena!',
          text: `Hola nuevamente ${localStorage.getItem('name')}!!`,
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this._router.navigateByUrl('/pages');
      } else {
        console.log(response);
        //TODO: mostrar mensaje de error
        //valida los errores (validaciones) desde la base de datos
        //*ERRORES DE LÓGICA

        if (response.msg) {
          Swal.fire({
            title: 'Error!',
            text: response.msg,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }

        //* ERRORES DE FORMULARIO

        if (response.errors) {
          let messageFormErrors = 'Datos incorrectos: ';

          if (response.errors?.email) {
            messageFormErrors += response.errors.email.msg + ', ';
          }
          if (response.errors?.password) {
            messageFormErrors += response.errors.password.msg;
          }

          Swal.fire({
            title: 'Error!',
            text: messageFormErrors,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      }
    });
  }

  fieldIsInvalidReactive(field: any) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
}
