import { Produto } from './../model/produto.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = 'http://localhost:8080/api/produtos';

  //Será usado para requisições via POST;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

    public getProdutosById(id) {
      // return this.httpClient.get<Produto>(this.apiUrl + '/produtos/' + id);
      return this.httpClient.get(this.apiUrl + '/produtos/' + id);
    }

    public getAll() : Observable<any[]>{
      return this.httpClient.get <any[]> (this.apiUrl + '/produtos/');
    }

    public postProduto(produto : any): Observable<Produto>{
      return this.httpClient.post<any>(this.apiUrl, produto, this.httpOptions);
    }
}
