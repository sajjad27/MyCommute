import { Component, HostListener } from '@angular/core';
import { ScreenService } from './services/screen-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private screenService: ScreenService) {
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenService.dispatchNewScreenSize(window.innerWidth)
  }



  ngOnInit(): void {
    this.screenService.dispatchNewScreenSize(window.innerWidth)

  }

}
