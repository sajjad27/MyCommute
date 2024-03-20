import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ScreenService {
    private _DEFAULT_MOBILE_SIZE = 600


  

    private $isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private screenWidth: any;

    constructor() {
    }

    dispatchNewScreenSize(screenWidth: number) {
        this.screenWidth = screenWidth
        this.dispatch()
    }

    private dispatch() {
        this.$isMobile.next(innerWidth <= this._DEFAULT_MOBILE_SIZE);
    }
    selectIsMobile() {
        return this.$isMobile;
    }
}