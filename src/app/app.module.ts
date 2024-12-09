import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/views/login/login.component';
import { ContainerComponent } from './components/container/container.component';
import {NgOptimizedImage} from '@angular/common';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SearchComponent } from './components/common/search/search.component';
import { ActionCardComponent } from './components/common/action-card/action-card.component';
import { CompareAssignmentComponent } from './components/views/compare-assignment/compare-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContainerComponent,
    DashboardComponent,
    SidebarComponent,
    SearchComponent,
    ActionCardComponent,
    CompareAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
