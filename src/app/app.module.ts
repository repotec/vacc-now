import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { HeaderComponent } from './header/header.component';
import { BranchesComponent } from './branches/branches.component';
import { BranchDetailsComponent } from './branches/branch-details/branch-details.component';
import { BranchListComponent } from './branches/branch-list/branch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportComponent,
    BranchesComponent,
    BranchDetailsComponent,
    BranchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
