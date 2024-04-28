import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/token-storage.service';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  setHeaders () {
    const token = this.tokenStorageService.getToken()
    return {
      'Authorization': `Bearer ${token}`
    }
  }

  createSuplier(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/fornecedores/cria`, data, { headers: this.setHeaders() });
  }

  getSupliers(): Observable<any> {
    return this.http.get<any>(`${url}/fornecedores/busca`, { headers: this.setHeaders() })
  }

  getSuplier(id: number): Observable<any> {
    return this.http.get<any>(`${url}/fornecedores/busca/${id}`, { headers: this.setHeaders() })
  }

  updateSuplier(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(`${url}/fornecedores/atualiza/${id}`, data, { headers: this.setHeaders() });
  }

  deleteSuplier(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/fornecedores/deleta/${id}`, { headers: this.setHeaders() })
  }
}
