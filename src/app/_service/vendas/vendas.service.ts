import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private http: HttpClient) { }

  createSale(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/vendas/cria`, data)
  }

  getSales(): Observable<any> {
    return this.http.get<any>(`${url}/vendas/busca`)
  }

  getSale(id: number): Observable<any> {
    return this.http.get<any>(`${url}/vendas/busca/${id}`)
  }

  updateSale(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(`${url}/vendas/atualiza/${id}`, data)
  }

  deleteSale(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/vendas/deleta/${id}`)
  }
}
