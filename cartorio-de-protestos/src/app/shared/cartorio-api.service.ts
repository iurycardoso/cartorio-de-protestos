import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartorioApiService {

  cartoriosUrl = 'http://www.pesquisaprotesto.com.br/serv/cartoriosparticipantes/rs';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.cartoriosUrl}`)
  }
}
