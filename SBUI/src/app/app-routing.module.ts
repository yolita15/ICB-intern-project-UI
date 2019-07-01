import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ControlsComponent } from './components/controls/controls.component';
import { StructureComponent } from './components/company/structure/structure.component';
import { ContactsComponent } from './components/company/contacts/contacts.component';

const routes: Routes = [ 
  { path: 'overview', component: OverviewComponent },
  { 
    path: 'company', component: CompanyComponent,
    children: [
      { path: 'structure', component: StructureComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'overview', component: OverviewComponent },
    ]
  },
  { path: 'controls', component: ControlsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
