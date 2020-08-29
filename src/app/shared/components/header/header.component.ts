import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private menuService: NbMenuService) {}
  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
