import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private http: HttpClient, private router: Router) { }

  logIn(username: string, password: string) {
    
  }

  isLoggedIn() {
    return false;
  }

  
}
