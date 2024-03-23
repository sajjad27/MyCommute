import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BlockUiService {

  isBlocking = new Subject<{isBlocking: boolean, loadingMessage?: string}>();

  block() {
    this.isBlocking.next({isBlocking: true, loadingMessage: "Loading"});
  }

  blockWithMessage(message: string) {
    this.isBlocking.next({isBlocking: true, loadingMessage: message});
  }

  unblock(){
    this.isBlocking.next({isBlocking: false})
  }

}