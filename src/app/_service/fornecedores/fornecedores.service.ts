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

  createSuplier(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/fornecedores/cria`, data);
  }

  getSupliers(): Observable<any> {
    return this.http.get<any>(`${url}/fornecedores/busca`)
  }

  getSuplier(id: number): Observable<any> {
    return this.http.get<any>(`${url}/fornecedores/busca/${id}`)
  }

  updateSuplier(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(`${url}/fornecedores/atualiza/${id}`, data);
  }

  deleteSuplier(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/fornecedores/deleta/${id}`)
  }
}
