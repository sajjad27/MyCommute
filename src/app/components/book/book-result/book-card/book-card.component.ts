import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { ModalService } from 'src/app/components/modal/modal.service';
import { BlockUiService } from 'src/app/services/block-ui.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input() timeline!: any[];
  @Input() time!: string;

  constructor(private blockUiService: BlockUiService,
    private router: Router,
    private modalService: ModalService,
    public dialog: MatDialog) { }


  openDialog(): void {
    const ref = this.dialog.open(DialogComponent, {
      width: '250px'
    }).afterClosed().subscribe(result => {
      console.log('The dialog was closed. Result:', result);
      if(result) {
        this.book();
      } 
    });

  }

  book() {
    this.blockUiService.blockWithMessage("Booking in process")
    setTimeout(() => {
      this.blockUiService.unblock();
      this.modalService.openSuccessModal("Submitted", "Your request has been submitted successfully!").subscribe(onClose => {
        this.blockUiService.block()
        setTimeout(() => {
          this.blockUiService.unblock();
          this.router.navigate(['logged/home']);
        }, 1000);
      })
    }, 4000);
  }

}





