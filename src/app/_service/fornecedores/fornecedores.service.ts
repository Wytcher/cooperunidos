import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor(private http: HttpClient) { }

  createInvoice(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/fornecedores/criar`, data);
  }

}
