import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/token-storage.service';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  setHeaders () {
    const token = this.tokenStorageService.getToken()
    return {
      'Authorization': `Bearer ${token}`
    }
  }

  createSale(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/vendas/cria`, data, { headers: this.setHeaders() })
  }

  getSales(): Observable<any> {
    return this.http.get<any>(`${url}/vendas/busca`, { headers: this.setHeaders() })
  }

  getSale(id: number): Observable<any> {
    return this.http.get<any>(`${url}/vendas/busca/${id}`, { headers: this.setHeaders() })
  }

  updateSale(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(`${url}/vendas/atualiza/${id}`, data, { headers: this.setHeaders() })
  }

  deleteSale(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/vendas/deleta/${id}`, { headers: this.setHeaders() })
  }
}
