import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUiService } from 'src/app/services/block-ui.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input() timeline!: any[];
  constructor(private blockUiService: BlockUiService,
    private router: Router) { }


  onBook() {
    this.blockUiService.blockWithMessage("Booking in process")
    setTimeout(() => {
      this.blockUiService.unblock();
      this.router.navigate(['logged/home']);
    }, 2500);
  }

}


