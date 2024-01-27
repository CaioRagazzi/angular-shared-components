import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CaCardComponent } from './ca-card/ca-card.component';

@NgModule({
  declarations: [CaCardComponent],
  imports: [CommonModule],
  exports: [CaCardComponent],
})
export class CaCardModule {}
