import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CashBreakComponent } from './components/cash-break/cash-break.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { OrderComponent } from './components/order/order.component';
import { TablesComponent } from './components/tables/tables.component';
import { BackgroundComponent } from './background/background.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { Observable } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    TablesComponent,
    CashBreakComponent,
    DetailsComponent,
    NavbarComponent,
    BackgroundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
