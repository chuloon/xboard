import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { Card } from '../classes/card';
import { Column } from '../classes/column';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subs = new Subscription;
  columnData: any = {};

  constructor(private dragulaService: DragulaService) { }

  ngOnInit(): void {
    this.columns.forEach(column => {
      this.columnData[column.id] = this.cards.filter(card => {
        card.status == column.id
      });
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  columns: Column[] = [
    { id: "backlog", name: "Backlog" },
    { id: "in-progress", name: "In Progress" },
    { id: "blocked", name: "Blocked" },
    { id: "in-review", name: "In Review" },
    { id: "done", name: "Done" },
  ];

  cards: Card[] = [
    new Card(1, "This is a really long title", "Description", 2, "backlog", "NM-1"),
    new Card(2, "Title", "This is a real description that will be pretty long. It should have multiple lines and stuff", 2, "backlog", "NM-2"),
    new Card(3, "Title", "Description", 2, "backlog", "NM-3"),
    new Card(4, "Title", "Description", 2, "in-progress", "NM-4"),
    new Card(5, "Title", "Description", 2, "in-progress", "NM-5"),
    new Card(6, "Title", "Description", 2, "blocked", "NM-6"),
    new Card(7, "Title", "Description", 2, "in-review", "NM-7"),
    new Card(8, "Title", "Description", 2, "in-review", "NM-8"),
    new Card(9, "Title", "Description", 2, "backlog", "NM-9"),
    new Card(0, "Title", "Description", 2, "done", "NM-0"),
  ];


}
