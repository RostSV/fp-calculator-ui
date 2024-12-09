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
import {TableModule} from "primeng/table";
import { UploadFilesModalComponent } from './components/modals/upload-files-modal/upload-files-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MessagesModule} from "primeng/messages";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastMessagesComponent } from './components/common/toast-messages/toast-messages.component';
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { FileCardComponent } from './components/common/file-card/file-card.component';
import { CompareResultComponent } from './components/views/compare-result/compare-result.component';
import {ChipsModule} from "primeng/chips";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContainerComponent,
    DashboardComponent,
    SidebarComponent,
    SearchComponent,
    ActionCardComponent,
    CompareAssignmentComponent,
    UploadFilesModalComponent,
    ToastMessagesComponent,
    FileCardComponent,
    CompareResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    TableModule,
    NgbModule,
    MessagesModule,
    BrowserAnimationsModule,
    ToastModule,
    ChipsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
