import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[caTemplate]',
  host: {},
})
export class CaTemplate {
  @Input() type: string | undefined;

  @Input('caTemplate') name: string | undefined;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.name!;
  }
}
