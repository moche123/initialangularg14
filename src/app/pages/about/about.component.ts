import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IElement } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  // public subscr$ = new Subscription();
  public infoUser$ = new Observable<IElement>();

  public userInfo: IElement = {
    id: 0,
    completed:false,
    title: '',
    userId: 1
  };

  constructor( private _apiService: ApiService ){} //!INYECTAR DEPENDENCIAS

  ngOnInit(){
    // this.subscr$ = this._apiService.getInfo(0).subscribe( res => {
    //   this.userInfo = res;
      
    // } )
   
    this.infoUser$ = this._apiService.getInfo(0);
  }

  ngOnDestroy(): void {
    console.log('UNSUSBSCRIBING')
    // this.subscr$.unsubscribe();
  }

}
