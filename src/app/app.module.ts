import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DrapresizeboxComponent } from './components/drapresizebox/drapresizebox.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IptrackerComponent } from './components/iptracker/iptracker.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ReacttemplateComponent } from './components/react-template/reacttemplate/reacttemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    DrapresizeboxComponent,
    IptrackerComponent,
    ConfigurationComponent,
    ReacttemplateComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
