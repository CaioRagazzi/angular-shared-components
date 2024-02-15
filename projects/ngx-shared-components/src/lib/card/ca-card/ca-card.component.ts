import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'lib-ca-card',
  templateUrl: './ca-card.component.html',
  styleUrl: './ca-card.component.scss',
})
export class CaCardComponent {
  @Input() title = '';
  @Input() previewText = '';
}
