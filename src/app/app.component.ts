import { Component, HostListener } from '@angular/core';
import { ScreenService } from './services/screen-service';
import { ModalService } from './components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private screenService: ScreenService, private modalService: ModalService) {
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenService.dispatchNewScreenSize(window.innerWidth)
  }



  ngOnInit(): void {
    this.screenService.dispatchNewScreenSize(window.innerWidth)
    this.modalService.modalConfigModel.subscribe(() => {
      // this.showModal = true
    })

  }

}
