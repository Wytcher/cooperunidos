import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/token-storage.service';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class CompradoresService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  setHeaders () {
    const token = this.tokenStorageService.getToken()
    return {
      'Authorization': `Bearer ${token}`
    }
  }

  createBuyer(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/compradores/cria`, data, { headers: this.setHeaders() })
  }

  getBuyers(): Observable<any> {
    const token = this.tokenStorageService.getToken()
    return this.http.get<any>(`${url}/compradores/busca`, { headers: this.setHeaders() })
  }

  getBuyer(id: number): Observable<any> {
    return this.http.get<any>(`${url}/compradores/busca/${id}`, { headers: this.setHeaders() })
  }

  updateBuyer(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(`${url}/compradores/atualiza/${id}`, data, { headers: this.setHeaders() })
  }

  deleteBuyer(id: number): Observable<any> {
    return this.http.delete<any>(`${url}/compradores/deleta/${id}`, { headers: this.setHeaders() })
  }
}
