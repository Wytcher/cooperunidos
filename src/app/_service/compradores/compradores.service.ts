import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class CompradoresService {

  constructor(private http: HttpClient) { }

  createBuyer(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/compradores/cria`, data)
  }

  getBuyers(): Observable<any> {
    return this.http.get<any>(`${url}/compradores/busca`)
  }
}
