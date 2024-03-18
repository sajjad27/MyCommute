import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AppFieldComponent } from './components/shared/app-input-field/app-input-field.component';
import { AppButtonComponent } from './components/shared/app-button/app-button.component';
import { GlobalMessageComponent } from './components/shared/global-error/global-error.component';
import { BlockUiComponent } from './components/block-ui/block-ui.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    AppFieldComponent,
    GlobalMessageComponent,
    LoginComponent,
    SpinnerComponent,
    HomeComponent,
    BlockUiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
