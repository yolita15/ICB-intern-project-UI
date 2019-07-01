import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CompanyComponent } from './company/company.component';
import { StructureComponent } from './company/structure/structure.component';
import { ContactsComponent } from './company/contacts/contacts.component';
import { ControlsComponent } from './controls/controls.component';

const routes: Routes = [ 
  { path: 'overview', component: OverviewComponent },
  { 
    path: 'company', component: CompanyComponent,
    children: [
      { path: 'structure', component: StructureComponent },
      { path: 'contacts', component: ContactsComponent },
    ]
  },
  { path: 'controls', component: ControlsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
