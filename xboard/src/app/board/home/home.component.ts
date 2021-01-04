import { Component, OnInit } from '@angular/core';
import { Status } from '../classes/status';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columns: Status[] = [
    { id: "backlog", name: "Backlog" },
    { id: "in-progress", name: "In Progress" },
    { id: "blocked", name: "Blocked" },
    { id: "in-review", name: "In Review" },
    { id: "done", name: "Done" },
  ]

}
