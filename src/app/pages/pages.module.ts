import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CharacteresComponent } from './characteres/characteres.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SharedModule } from '../shared/shared.module';
import { PagesGuard } from './guards/pages.guard';

@NgModule({
  declarations: [PagesComponent, CharacteresComponent, FavoritesComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  providers: [PagesGuard],
})
export class PagesModule {}
