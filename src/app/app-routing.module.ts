import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/views/login/login.component';
import {DashboardComponent} from './components/views/dashboard/dashboard.component';
import {
  CompareAssignmentComponent
} from './components/views/compare-assignment/compare-assignment.component';
import {CompareResultComponent} from "./components/views/compare-result/compare-result.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'compare', component: CompareAssignmentComponent},
  {path: 'compare-result', component: CompareResultComponent},
  {path: '**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
