import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
})
export class GlobalMessageComponent implements OnInit, OnChanges {

  @Input() messages: string[] = [];
  @Input() errorStatus: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }
}
