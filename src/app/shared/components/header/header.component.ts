import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor() {}
}
