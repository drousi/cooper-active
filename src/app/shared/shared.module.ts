import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import {
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
  NbSelectModule,
  NbSearchModule,
  NbActionsModule,
  NbThemeModule,
  NbSidebarModule,
  NbMenuModule,
  NbInputModule,
  NbFormFieldModule,
  NbCardModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BackButtonDirective } from './directives/back-button.directive';

@NgModule({
  declarations: [HeaderComponent, BackButtonDirective],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSelectModule,
    NbSearchModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbInputModule,
    NbFormFieldModule,
    NbCardModule
  ],
  exports: [
    CommonModule,
    NbThemeModule,
    HeaderComponent,
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSelectModule,
    NbSearchModule,
    NbActionsModule,
    NbSidebarModule,
    NbMenuModule,
    NbInputModule,
    NbFormFieldModule,
    NbCardModule,
    BackButtonDirective
  ],
})
export class SharedModule {
  
}
