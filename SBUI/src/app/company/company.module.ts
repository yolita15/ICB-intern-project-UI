import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { WizardComponent } from './wizard/wizard.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyDetailsComponent,
    WizardComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CompanyComponent,
        children: [
          {
            path: 'structure',
            loadChildren: './structure/structure.module#StructureModule'
          },
          { path: 'contacts', component: ContactsComponent }
        ]
      },
    ])
  ]
})
export class CompanyModule { }
