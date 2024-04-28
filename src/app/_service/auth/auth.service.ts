import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = environment.COOPERUNIDOS_API_URI;
const TOKEN_KEY = 'auth-token';

const headers = new HttpHeaders();
headers.set('Content-Type', 'application/x-www-form-urlencoded');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any>{
    const body = 'username=' + email.trim() +'&password=' + encodeURIComponent(password)
    console.log(body)
    return this.http.post(url + "/login", body, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  }

  public isAuthenticated(): boolean{
    if(!window.sessionStorage.getItem(TOKEN_KEY)){
      return false;
    }
    return true;
  }
}
