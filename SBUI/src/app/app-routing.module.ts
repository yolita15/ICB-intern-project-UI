import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ControlsComponent } from './controls/controls.component';
import { EditComponent } from './company/edit/edit.component';

const routes: Routes = [ 
  { path: 'overview', component: OverviewComponent },
  { 
    path: 'company',
    loadChildren: './company/company.module#CompanyModule'
  },
  { path: 'company/structure/:id/edit', component: EditComponent, pathMatch: 'full' },
  { path: 'controls', component: ControlsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
