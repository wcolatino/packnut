import { Produto } from './../../../shared/model/produto.model';
import { ProdutoService } from './../../../shared/service/produto.service';
import { CalendarOptions } from '@fullcalendar/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[];

  calendarOptions: CalendarOptions;

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  constructor(public produtoService: ProdutoService) { 
  }


  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(){
    this.produtoService.getAll().subscribe(data => {
      console.log(data);
      this.produtos = data;


      const eventos = [];

      data.forEach(produto => {

        eventos.push(...[
          {
            title: produto.nome + '(Entrada)',
            date: produto.dataEntrada
          },
          {
            title: produto.nome + '(Fabricação)',
            date: produto.dataFabricacao
          },
          {
            title: produto.nome + '(Vencimento)',
            date: produto.dataVencimento
          }
        ]);

      })

      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), // bind is important!
        events: [...eventos]
      };
    });
  }
}

