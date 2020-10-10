import { ProdutoTableComponent } from './../produto-table/produto-table.component';
import { Produto } from './../../../shared/model/produto.model';
import { ProdutoService } from './../../../shared/service/produto.service';
import { CalendarOptions, Calendar } from '@fullcalendar/angular';
import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[];

  @Output()
  editarEmitter = new EventEmitter();

  @ViewChild(ProdutoTableComponent)
  produtoTable: ProdutoTableComponent;


  calendarOptions: CalendarOptions;

  // handleDateClick(arg) {
  //   alert('date click! ' + arg.dateStr)
  // }

  constructor(public produtoService: ProdutoService) {
  }


  ngOnInit(): void {
    this.atualizarCalendario();
  } 
  atualizarCalendario() {


    this.produtoService.getAll().subscribe((resultado) => {

      const resultadoMapeado = resultado.map(Produto => {
        return {
          title: Produto.nome,
          date: Produto.dataVencimento
        }
      });

      this.calendarOptions = {
        initialView: 'dayGridMonth',
        //dateClick: this.handleDateClick.bind(this), // bind is important!
        events: resultadoMapeado
      }
    });
  }

  editarProduto(id){
    this.editarEmitter.emit(id);
  }

}

