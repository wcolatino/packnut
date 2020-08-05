import { Produto } from './../model/produto.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = 'http://localhost:8080/api';

  private _updateList = new Subject<any>();

  constructor(
    private httpClient: HttpClient
  ) { }


  public onUpdateList(): Observable<any> {
    return this._updateList.asObservable();
  }

  public updateList() {
    this._updateList.next();
  }

  public getProdutoById(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.apiUrl + '/produtos/' + id);
  }
    
  public getAll(): Observable<Produto[]>  {
    return this.httpClient.get<Produto[]>(this.apiUrl + '/produtos');
  }

  public postProduto(produto : Produto): Observable<Produto> {
    return this.httpClient.post<any>(this.apiUrl + '/produtos', produto);
  }
}
