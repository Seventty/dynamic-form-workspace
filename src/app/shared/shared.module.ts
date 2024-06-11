import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIDebugFormComponent } from './widget/UIDebugForm/UIDebugForm.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UIDebugFormComponent
  ],
  exports: [
    UIDebugFormComponent
  ]
})
export class SharedModule { }
