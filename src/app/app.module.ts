import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockUiComponent } from './components/block-ui/block-ui.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppButtonComponent } from './components/shared/app-button/app-button.component';
import { AppFieldComponent } from './components/shared/app-input-field/app-input-field.component';
import { GlobalMessageComponent } from './components/shared/global-error/global-error.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ContentComponent } from './components/content/content.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { TripCardComponent } from './components/shared/trip-card/trip-card.component';
import { BookComponent } from './components/book/book.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { BookResultComponent } from './components/book/book-result/book-result.component';
import { BookSearchComponent } from './components/book/book-search/book-search.component';
import { BookCardComponent } from './components/book/book-result/book-card/book-card.component';

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
    SidebarComponent,
    ContentComponent,
    BottomBarComponent,
    TripCardComponent,
    BookComponent,
    MobileHeaderComponent,
    BookResultComponent,
    BookSearchComponent,
    BookCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
