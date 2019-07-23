import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { WizardComponent } from './wizard/wizard.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CompanyResolver } from './company-resolver.service';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './company.service';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyDetailsComponent,
    WizardComponent,
    ContactsComponent,
    CompanyOverviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: CompanyComponent,
        resolve: { resolvedData: CompanyResolver },
        children: [
          {
            path: 'structure',
            loadChildren: './structure/structure.module#StructureModule'
          },
          { path: 'contacts', component: ContactsComponent },
          { path: 'overview', component: CompanyOverviewComponent }
        ]
      },
    ]),
  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
