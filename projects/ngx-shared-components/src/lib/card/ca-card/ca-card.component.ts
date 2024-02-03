import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { CaTemplate } from '../../shared/directives/caTemplate';

@Component({
  selector: 'lib-ca-card',
  templateUrl: './ca-card.component.html',
  styleUrl: './ca-card.component.scss',
})
export class CaCardComponent implements AfterContentInit {
  @Input() title = '';
  @Input() previewText = '';

  imageTemplate: TemplateRef<any> | undefined;

  @ContentChildren(CaTemplate) templates: QueryList<CaTemplate> | undefined;

  ngAfterContentInit() {
    (this.templates as QueryList<CaTemplate>).forEach((item) => {
      switch (item.getType()) {
        case 'image':
          this.imageTemplate = item.template;
          break;

        default:
          break;
      }
    });
  }
}
