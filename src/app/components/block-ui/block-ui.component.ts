import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { BlockUiService } from 'src/app/services/block-ui.service';

@Component({
  selector: 'app-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.css']
})
export class BlockUiComponent {
  
  constructor(private blockUiService: BlockUiService) { }
  isBlocking = false;

  ngOnInit(): void {
    this.blockUiService.isBlocking.subscribe(isBlocking => {
      this.isBlocking = isBlocking
    })
  }

}
