import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { SignUpViewModel } from './sign-up-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  private httpClient: HttpClient; 
  constructor(private httpBackend: HttpBackend, private jwtHelperservice: JwtHelperService) 
  { 
  }

  currentUserName: string = null;

  public Login(loginViewModel: LoginViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>("/authenticate", loginViewModel, { responseType: "json", observe: "response" })
    .pipe(map(response => {
      if (response)
      {
        this.currentUserName = response.body.userName;
        sessionStorage.currentUser =JSON.stringify(response.body);
        sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
      }
      return response.body;
    }));
  }

  public Register(signUpViewModel: SignUpViewModel): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>("/register", signUpViewModel, { responseType: "json", observe: "response" })
    .pipe(map(response => {
      if (response)
      {
        this.currentUserName = response.body.userName;
        sessionStorage.currentUser =JSON.stringify(response.body);
        sessionStorage.XSRFRequestToken = response.headers.get("XSRF-REQUEST-TOKEN");
      }
      return response.body;
    }));
  }

  public Logout()
  {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }

  public isAuthenticated(): boolean
  {
    var token = sessionStorage.getItem("currentUser")? JSON.parse(sessionStorage.getItem("currentUser")).token:
    null;
    if(this.jwtHelperservice.isTokenExpired())
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}
