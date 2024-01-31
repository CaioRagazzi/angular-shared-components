import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { MainTitleComponent } from './main-title/main-title.component';
import { MainTitleModule } from './main-title/main-title.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, MainTitleModule],
  providers: [HeaderComponent, MainTitleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
