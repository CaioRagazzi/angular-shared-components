import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainTitleComponent } from './main-title.component';

@NgModule({
  declarations: [MainTitleComponent],
  imports: [CommonModule],
  exports: [MainTitleComponent],
})
export class MainTitleModule {}
