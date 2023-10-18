import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CashBreakComponent } from './components/cash-break/cash-break.component';
import { DetailsComponent } from './components/details/details.component';
import { OrderComponent } from './components/order/order.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cash-break', component: CashBreakComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'tables', component: TablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
