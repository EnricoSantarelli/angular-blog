import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() theme?: string;
  @Input() title?: string;
  @Input() price?: number;
  @Input() imageUrl? : string;
}
