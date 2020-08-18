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
  NbIconLibraries,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [HeaderComponent],
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
    NbMenuModule.forRoot()
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
    NbMenuModule
  ],
})
export class SharedModule {
  
}
