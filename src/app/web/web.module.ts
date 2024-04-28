import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';;


@NgModule({
  declarations: [
    WebComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    MaterialModule
  ]
})
export class WebModule { }
