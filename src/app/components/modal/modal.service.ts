
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalConfigModel, ModalType } from 'src/app/model/modal-config.model';

// import { ModalConfigModel, ModalType } from '../../../model/modal-config.model';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  modalConfigModel = new Subject<ModalConfigModel>();
  onCloseSuccessfulModal = new Subject<ModalConfigModel | null>();


  openSuccessModal(title: string, message: string) {
    this.modalConfigModel.next({ type: ModalType.Success, title: title, message: message });
    return this.onCloseSuccessfulModal;
  }

  // OnCloseSuccessModal(){
  //   return this.OnCloseModal;
  // }

}