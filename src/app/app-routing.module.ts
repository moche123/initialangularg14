import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './old/pages/home/home.component';
import { AboutComponent } from './old/pages/about/about.component';

const routes: Routes = [  
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'about',
    component: AboutComponent

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( (e) => e.AuthModule )
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( (e) => e.PagesModule )
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
