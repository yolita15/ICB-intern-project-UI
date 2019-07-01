import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ControlsComponent } from './controls/controls.component';
import { ContactsComponent } from './company/contacts/contacts.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { WizardComponent } from './company/wizard/wizard.component';
import { StructureComponent } from './company/structure/structure.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    OverviewComponent,
    ControlsComponent,
    CompanyDetailsComponent,
    WizardComponent,
    StructureComponent,
    ContactsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
