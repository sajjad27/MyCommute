import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  // @ViewChild('username') 
  globalErrorMessages: string[] = [];

  @ViewChild('f', { static: false }) signUpForm!: NgForm;

  isLoading = false;
  token: any

  loginSubscribtion: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   
    console.log(`this.isLoading`, this.isLoading);
  }

  ngOnDestroy(): void {
    this.loginSubscribtion?.unsubscribe();
  }

  signInWithEnter(event: any) {
    if (event.keyCode === 13) {
      this.signIn();
    }
  }

  signIn() {
    
  }
}


