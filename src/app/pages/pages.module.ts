import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CharacteresComponent } from './characteres/characteres.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagesComponent, CharacteresComponent, FavoritesComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
