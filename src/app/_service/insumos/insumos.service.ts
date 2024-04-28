import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/token-storage.service';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  setHeaders () {
    const token = this.tokenStorageService.getToken()
    return {
      'Authorization': `Bearer ${token}`
    }
  }

  createSupplies(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/insumos/cria`, data, { headers: this.setHeaders() })
  }

  getSupplies(): Observable<any> {
    return this.http.get<any>(`${url}/insumos/busca`, { headers: this.setHeaders() })
  }

  getSupplie(id: number): Observable<any> {
    return this.http.get<any>(`${url}/insumos/busca/${id}`, { headers: this.setHeaders() })
  }

  updateSupplies(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(`${url}/insumos/atualiza/${id}`, data, { headers: this.setHeaders() })
  }

  deleteSupplie(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/insumos/deleta/${id}`, { headers: this.setHeaders() })
  }
}
