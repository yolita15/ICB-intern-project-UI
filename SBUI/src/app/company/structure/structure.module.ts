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
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  declarations: [
    StructureComponent,
    ObjectOverviewComponent
  ],
  imports: [
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
        children: [
          { path: ':id', component: ObjectOverviewComponent,   }
        ]
      },
    ])
  ]
})
export class StructureModule { }
