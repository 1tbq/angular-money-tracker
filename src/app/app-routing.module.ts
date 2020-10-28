import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';

import { MoneyTrackerComponent } from './components/money-tracker/money-tracker.component';
import { IncomeComponent } from './components/money-tracker/income.component';
import { ExpensesComponent } from './components/money-tracker/expenses.component';


const appRoutes: Routes = [ 
  {path:"",component:LandingPageComponent}, 
  { path: 'home', component: LandingPageComponent },

  {path:'projects',component:ProjectsComponent},


  //Money-tracker
  {path:'moneytracker',component:MoneyTrackerComponent},
  {path:'moneytracker/income',component:IncomeComponent},
  {path:'moneytracker/expenses',component:ExpensesComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


