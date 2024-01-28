import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SocialIconsComponent,
    NavComponent,
  ],
  imports: [FontAwesomeModule, RouterModule],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
