import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  getNetworkId(){
    return "ARAMCOU1W"
  }

}
