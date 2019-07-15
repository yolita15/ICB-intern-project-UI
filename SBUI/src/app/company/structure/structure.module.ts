import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from './structure.component';
import { ObjectOverviewComponent } from '../object-overview/object-overview.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout'
import { CompanyResolver } from '../company-resolver.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    StructureComponent,
    ObjectOverviewComponent
  ],
  imports: [
    FormsModule,
    ButtonsModule,
    PopupModule,
    TreeViewModule,
    InputsModule,
    DropDownsModule,
    CommonModule,
    LayoutModule,
    RouterModule.forChild([
      {
        path: '', component: StructureComponent,
        resolve: { resolvedData: CompanyResolver },
        children: [
          {
            path: ':id',
            resolve: { resolvedData: CompanyResolver },
            component: ObjectOverviewComponent
          },
        ]
      },
    ])
  ]
})
export class StructureModule { }
