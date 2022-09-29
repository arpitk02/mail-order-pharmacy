import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllDrugsComponent } from './all-drugs/all-drugs.component';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { FormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { RefillComponent } from './refill/refill.component';
import { RefillStatusComponent } from './refill-status/refill-status.component';
import { HomeComponent } from './home/home.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { RefillDueDateComponent } from './refill-due-date/refill-due-date.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    AllDrugsComponent,
    SearchDrugComponent,
    SubscribeComponent,
    SubscriptionsComponent,
    RefillComponent,
    RefillStatusComponent,
    HomeComponent,
    LoginModuleComponent,
    RefillDueDateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
