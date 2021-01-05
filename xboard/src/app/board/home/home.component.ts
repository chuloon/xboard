import { Component, OnInit } from '@angular/core';
import { Card } from '../classes/card';
import { Column } from '../classes/column';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columns: Column[] = [
    { id: "backlog", name: "Backlog" },
    { id: "in-progress", name: "In Progress" },
    { id: "blocked", name: "Blocked" },
    { id: "in-review", name: "In Review" },
    { id: "done", name: "Done" },
  ];

  cards: Card[] = [
    new Card(1, "Title", "Description", 2, "backlog"),
    new Card(2, "Title", "Description", 2, "backlog"),
    new Card(3, "Title", "Description", 2, "backlog"),
    new Card(4, "Title", "Description", 2, "in-progress"),
    new Card(5, "Title", "Description", 2, "in-progress"),
    new Card(6, "Title", "Description", 2, "blocked"),
    new Card(7, "Title", "Description", 2, "in-review"),
    new Card(8, "Title", "Description", 2, "in-review"),
    new Card(9, "Title", "Description", 2, "backlog"),
    new Card(0, "Title", "Description", 2, "done"),
  ];

}
