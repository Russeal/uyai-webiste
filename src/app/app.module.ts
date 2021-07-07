import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './layout/contact/contact.component';
import { FaqComponent } from './layout/faq/faq.component';
import { MainComponent } from './layout/main/main.component';
import { ConnectionService } from './services/connection.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './layout/team/team.component';
import { SapienzaComponent } from './layout/universities/sapienza/sapienza.component';
import { PolimiComponent } from './layout/universities/polimi/polimi.component';
import { UniversitiesComponent } from './layout/universities/universities.component';
import { BolognaComponent } from './layout/universities/bologna/bologna.component';
import { CaFoscariComponent } from './layout/universities/ca-foscari/ca-foscari.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ContactComponent,
    FaqComponent,
    MainComponent,
    TeamComponent,
    SapienzaComponent,
    PolimiComponent,
    UniversitiesComponent,
    BolognaComponent,
    CaFoscariComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
