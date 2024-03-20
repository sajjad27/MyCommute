import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {

  @Input() time: string | null = null;
  @Input() location: string | null = null;
  @Input() status: string | null = null;

}
