import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './dashboard-menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor() {}

  ngOnInit(): void {}
}
