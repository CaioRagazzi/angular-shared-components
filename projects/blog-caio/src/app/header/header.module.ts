import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, SocialIconsComponent],
  imports: [FontAwesomeModule],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
