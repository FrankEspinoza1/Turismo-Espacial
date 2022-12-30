import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarsComponent } from './mars/mars.component';



@NgModule({
  declarations: [
    MarsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MarsComponent]
})
export class DestinoModule { }
