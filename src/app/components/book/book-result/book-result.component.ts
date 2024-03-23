import { Component } from '@angular/core';

@Component({
  selector: 'app-book-result',
  templateUrl: './book-result.component.html',
  styleUrls: ['./book-result.component.css']
})
export class BookResultComponent {

  timeline = [
    { place: 'Jeddah Office Complex', icon: 'local_taxi', time: '09:00' },
    { place: 'Hawiyah Gas Plant', icon: 'directions_railway', time: '13:00' },
    { place: 'Hawiyah Gas Plant', icon: 'local_taxi', time: '19:00' },
    { place: 'Dammam Office Park', icon: 'directions_bus', time: '22:00' }
  ]
  
}
