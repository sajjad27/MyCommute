import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ScreenService } from 'src/app/services/screen-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  $isMobile!: Subject<boolean>;
  constructor(private screenService: ScreenService) { }
  
  ngOnInit() {
      this.$isMobile = this.screenService.selectIsMobile();
      console.log(`is Mobile`, true);
  }
}
