import { Produto } from './../model/produto.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = 'http://localhost:8080/api';

  //Será usado para requisições via POST;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

    public getProdutosById(id: string): Observable<Produto>{
      return this.httpClient.get<Produto>(this.apiUrl + '/produtos/' + id);
    }
}
