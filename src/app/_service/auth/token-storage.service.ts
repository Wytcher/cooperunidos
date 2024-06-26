import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const TOKEN_KEY_ADMIN = 'auth-token-admin';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) { }

  singOut(): void{
    window.sessionStorage.clear();
    this.router.navigate(["/login"]).then(() => window.location.reload);
  }

  public saveToken(token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUser(user: any): void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getToken(): string | null{
    console.log('aqui')
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public getUser(): any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(user);
    }

    return {};
  }
}
