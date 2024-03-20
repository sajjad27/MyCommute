import { Component, OnInit } from '@angular/core';
import { MatChipOption } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  requests = [
    { building: 'Yanbu Refinery', status: 'Confirmed', time: 'Nov 23 1:00 pm' },
    { building: 'Khurais Oil Field', status: 'Pending', time: 'Sep 23 2:15 pm' },
    { building: 'Dammam Office Park', status: 'Confirmed', time: 'Mar 23 3:30 pm' },
    { building: 'Uthmaniyah Gas Plant', status: 'Cancelled', time: 'Aug 23 4:45 pm' },
    { building: 'Hawiyah Gas Plant', status: 'Confirmed', time: 'Mar 23 6:00 pm' },
    { building: 'Ras Tanura Refinery', status: 'Confirmed', time: 'Jan 23 8:50 pm' },
    { building: 'Abqaiq Gas Plant', status: 'Pending', time: 'May 23 9:15 am' },
    { building: 'Jeddah Office Complex', status: 'Confirmed', time: 'Feb 23 10:30 am' },
    { building: 'Riyadh Refinery', status: 'Cancelled', time: 'Mar 23 11:45 am' },];

    ngOnInit(): void {
      // Initialize filteredRequests with all requests
      this.filteredRequests = this.requests;
    }

  filteredRequests: any[] = [];
  selectedStatus: string = 'All';

  applyFilter(event: any) {
    console.log(`this.selectedStatus`, this.selectedStatus);
    const selectedStatus = event.source.value;
    this.selectedStatus = selectedStatus;

    if (this.selectedStatus === 'All') {
      this.filteredRequests = this.requests;
    } else {
      this.filteredRequests = this.requests.filter(request => request.status === this.selectedStatus);
    }
  }

}
