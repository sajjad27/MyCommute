import { Component } from '@angular/core';

@Component({
  selector: 'app-book-result',
  templateUrl: './book-result.component.html',
  styleUrls: ['./book-result.component.css']
})
export class BookResultComponent {

  timeline1 = [
    { place: 'Jeddah Office Complex', icon: 'local_taxi', time: '09:00' },
    { place: 'Hawiyah Gas Plant', icon: 'directions_railway', time: '13:00' },
    { place: 'Hawiyah Gas Plant', icon: 'local_taxi', time: '19:00' },
    { place: 'Dammam Office Park', icon: 'directions_bus', time: '22:00' }
  ]

  timeline2 = [
    { place: 'Yanbu Refinery', icon: 'directions_bus', time: '12:00' },
    { place: 'Khurais Oil Field', icon: 'directions_railway', time: '14:00' },
    { place: 'Dammam Office Park', icon: 'local_taxi', time: '20:00' },
    { place: 'Uthmaniyah Gas Plant', icon: 'airplanemode_active', time: '23:00' }
  ];
  
  timeline3 = [
    { place: 'Hawiyah Gas Plant', icon: 'directions_bus', time: '06:00' },
    { place: 'Ras Tanura Refinery', icon: 'directions_railway', time: '08:00' },
    { place: 'Abqaiq Gas Plant', icon: 'local_taxi', time: '12:00' },
    { place: 'Jeddah Office Complex', icon: 'airplanemode_active', time: '14:00' }
  ];

  timeline4 = [
    { place: 'Riyadh Refinery', icon: 'directions_bus', time: '17:00' },
    { place: 'Yanbu Refinery', icon: 'directions_railway', time: '18:00' },
    { place: 'Khurais Oil Field', icon: 'local_taxi', time: '21:30' },
    { place: 'Dammam Office Park', icon: 'airplanemode_active', time: '23:30' }
  ];

  time1 = "5 hrs 0 min"
  time2 = "7 hrs 0 min"
  time3 = "8 hrs 30 min"
  time4 = "14 hrs 0 min"

  
  
}
