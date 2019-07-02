import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { WizardComponent } from './wizard/wizard.component';
import { StructureComponent } from './structure/structure.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { TreeViewModule } from '@progress/kendo-angular-treeview'
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyDetailsComponent,
    WizardComponent,
    StructureComponent,
    ContactsComponent
  ],
  imports: [
    ButtonsModule,
    PopupModule,
    TreeViewModule,
    InputsModule,
    DropDownsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CompanyComponent, 
      children: [
        { path: 'structure', component: StructureComponent },
        { path: 'contacts', component: ContactsComponent }
      ] },
    ]) 
  ]
})
export class CompanyModule { }
