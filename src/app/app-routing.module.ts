import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandexMainComponent } from './brandex/brandex-main/brandex-main.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule)
  },
  {
    path: 'brandex',
    loadChildren: () => import('./brandex/brandex-routing.module').then(m => m.BrandexRoutingModule)
  },

  // { path: 'brandex', component: BrandexMainComponent },
  {
    path: 'dealers',
    loadChildren: () => import('./dealers/dealers-routing.module').then(m => m.DealersRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./shared/shared-routing.module').then(m => m.SharedRoutingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
