import { ProdutoService } from './../../../shared/service/produto.service';
import { Produto } from 'src/app/shared/model/produto.model';
import { Component, OnInit, Output } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EventEmitter } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-produto-table',
  templateUrl: './produto-table.component.html',
  styleUrls: ['./produto-table.component.css']
})
export class ProdutoTableComponent implements OnInit {
  
  @Output()
  abacaxi = new EventEmitter();
  @Output()
  editarEmitter = new EventEmitter();

  displayedColumns: string[] = ['nome', 'marca', 'dataFabricacao', 'dataVencimento', 'dataEntrada', 'lote', 'responsavel', 'temperatura', 'qtdVendida', 'qtdDescarte', 'acao'];
  produtosTable = [];

  constructor(public produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.atualizardataSource();
  }

  atualizardataSource(){
    //debugger;
    console.log('ENTROU NO ATUALIZAR DATASOURCE');
    this.produtoService.getAll().subscribe(resultado =>{
      this.produtosTable = resultado;
    });
  }

  deleteProduto (id){
    this.produtoService.deleteProduto(id).subscribe(()=>{
      this.atualizardataSource();
      this.abacaxi.emit();
    });
  }

  updateProduto(id){
    this.editarEmitter.emit(id); //COmunicando com o componente ProdutoList parametrizando o ID;
  }
  
  
  

}
