import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalConfigModel } from 'src/app/model/modal-config.model';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  showModal = false;
  ModalConfigModel: ModalConfigModel | undefined;
  config: ModalConfigModel | undefined
  @ViewChild('btn', { static: false }) closeBtn: ElementRef | undefined;

  ngOnInit(): void {
    this.modalService.modalConfigModel.subscribe(config => {
      this.config = config
      this.showModal = true;
      setTimeout(() => {
        this.closeBtn?.nativeElement.focus();
      }, 100);
    })
  }

  closeModal() {
    this.showModal = false;
    this.modalService.onCloseSuccessfulModal.next(null);
  }
}
