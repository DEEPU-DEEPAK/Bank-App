import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisrComponent } from './regisr/regisr.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  // to set path for user defined component
  {
    path:'',component:LoginComponent
  },
  {
    path:'homepage',component:HomepageComponent
  },
  {
    path:'regisr',component:RegisrComponent
  },
  {
    path:'transaction',component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
