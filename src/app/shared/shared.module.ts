import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import {DataModule} from '../data/data.module';
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
  NbListModule,
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
    NbCardModule,
    NbListModule,
    DataModule
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
    NbListModule,
    BackButtonDirective,
    DataModule
  ],
})
export class SharedModule {
  
}
