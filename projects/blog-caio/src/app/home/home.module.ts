import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [HomeComponent, ArticleComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
