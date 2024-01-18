import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  infoToChild = 5; //! INFORMACION QUE EL PADRE ENVIARA AL HIJO

  sendToChild(){
    this.infoToChild++;
  }
}
