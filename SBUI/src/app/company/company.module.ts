import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { WizardComponent } from './wizard/wizard.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CompanyResolver } from './company-resolver.service';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DeviationsComponent } from './deviations/deviations.component';
import { OverviewControlsComponent } from './overview-controls/overview-controls.component';

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
    ])
  ]
})
export class CompanyModule { }
