import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.COOPERUNIDOS_API_URI;

@Injectable({
  providedIn: 'root'
})
export class CompradoresService {

  constructor(private http: HttpClient) { }
}
