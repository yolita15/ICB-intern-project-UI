import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ControlsComponent } from './controls/controls.component';

const routes: Routes = [ 
  { path: 'overview', component: OverviewComponent },
  { 
    path: 'company',
    loadChildren: './company/company.module#CompanyModule'
  },
  { path: 'controls', component: ControlsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
