import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  infoToChild = 5; //! INFORMACION QUE EL PADRE ENVIARA AL HIJO
  dataFromChild = 0;
  sendToChild(){
    this.infoToChild++;
  }

  showChildInfo(data:number){
    this.dataFromChild = data;
  }
}
