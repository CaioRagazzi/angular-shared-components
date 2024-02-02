import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CaTemplate } from '../shared/directives/caTemplate';
import { CaCardComponent } from './ca-card/ca-card.component';

@NgModule({
  declarations: [CaCardComponent, CaTemplate],
  imports: [CommonModule],
  exports: [CaCardComponent, CaTemplate],
})
export class CaCardModule {}
