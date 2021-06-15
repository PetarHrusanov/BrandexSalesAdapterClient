import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrandexMainComponent} from './brandex-main/brandex-main.component'
// import { ListComponent } from './list/list.component';
// import { CreateComponent } from './create/create.component';
// import { EditComponent } from './edit/edit.component';
// import { ViewComponent } from './view/view.component';

import { 
    AuthGuardService as AuthGuard 
  } from '../shared/auth-guard.service';


const routes: Routes = [
  { path: '', component: BrandexMainComponent },
  // { path:'mine', component: DealerCarsComponent, canActivate: [AuthGuard] },
  // { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  // { path: ':id', component: ViewComponent },
  // { path: ':id/edit', component: EditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class BrandexRoutingModule { } 