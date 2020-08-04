import { CalendarOptions } from '@fullcalendar/angular';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoFormDialogComponent } from './produto-form-dialog/produto-form-dialog.component';


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
    public dialog: MatDialog //Inicia a isntancia do MatDialog
  ) { }

  ngOnInit(): void {
  }

  addProduto(): void {
    const dialogRef = this.dialog.open(ProdutoFormDialogComponent, {
      minWidth: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
