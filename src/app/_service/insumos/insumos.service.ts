import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  constructor(private http: HttpClient) { }

  createSupplies(data: FormData): Observable<any> {
    return this.http.post<any>(`${url}/insumos/cria`, data)
  }

  getSupplies(): Observable<any> {
    return this.http.get<any>(`${url}/insumos/busca`)
  }
}
