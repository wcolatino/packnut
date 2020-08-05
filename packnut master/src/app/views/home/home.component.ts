import { CalendarOptions } from '@fullcalendar/angular';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoFormDialogComponent } from './produto-form-dialog/produto-form-dialog.component';
import { ProdutoService } from 'src/app/shared/service/produto.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor(
    public dialog: MatDialog,
    public produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.produtoService.updateList();
  }

  addProduto(): void {
    const dialogRef = this.dialog.open(ProdutoFormDialogComponent, {
      minWidth: '600px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.produtoService.updateList();
    });
  }
}
