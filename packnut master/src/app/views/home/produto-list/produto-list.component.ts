import { CalendarOptions } from '@fullcalendar/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-07-01' },
      { title: 'event 2', date: '2020-07-01' },
      { title: 'event 1', date: '2020-07-01' },
      { title: 'event 2', date: '2020-07-01' },
      { title: 'event 1', date: '2020-07-01' },
      { title: 'event 2', date: '2020-07-01' },
      { title: 'event 1', date: '2020-07-01' },
      { title: 'event 2', date: '2020-07-01' },
    ]
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
