import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './components/company/company.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ControlsComponent } from './components/controls/controls.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { WizardComponent } from './components/company/wizard/wizard.component';
import { StructureComponent } from './components/company/structure/structure.component';
import { ContactsComponent } from './components/company/contacts/contacts.component';

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
