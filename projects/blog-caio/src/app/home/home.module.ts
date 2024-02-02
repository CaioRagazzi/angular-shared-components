import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CaCardModule } from '../../../../ngx-shared-components/src/lib/card/card.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CaCardModule],
})
export class HomeModule {}
