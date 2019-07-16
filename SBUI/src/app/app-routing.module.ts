import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ControlsComponent } from './controls/controls.component';
import { EditComponent } from './company/edit/edit.component';
import { CompanyResolver } from './company/company-resolver.service';
import { CalendarComponent } from './company/calendar/calendar.component';
import { DeviationsComponent } from './company/deviations/deviations.component';
import { OverviewControlsComponent } from './company/overview-controls/overview-controls.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  {
    path: 'company',
    loadChildren: './company/company.module#CompanyModule'
  },
  { path: 'company/structure/:id/edit', component: EditComponent, pathMatch: 'full', resolve: { resolvedData: CompanyResolver } },
  { path: 'company/structure/:id/calendar', component: CalendarComponent },
  { path: 'company/structure/:id/deviations', component: DeviationsComponent },
  { path: 'company/structure/:id/controls', component: OverviewControlsComponent },
  { path: 'controls', component: ControlsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
