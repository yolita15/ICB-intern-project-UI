import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ControlsComponent } from './controls/controls.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupModule } from '@progress/kendo-angular-popup';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { EditComponent } from './company/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { UploadModule } from '@progress/kendo-angular-upload';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './company/calendar/calendar.component';
import { DeviationsComponent } from './company/deviations/deviations.component';
import { OverviewControlsComponent } from './company/overview-controls/overview-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ControlsComponent,
    EditComponent,
    CalendarComponent,
    DeviationsComponent,
    OverviewControlsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ButtonsModule,
    BrowserAnimationsModule,
    PopupModule,
    TreeViewModule,
    InputsModule,
    DropDownsModule,
    LayoutModule,
    UploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
