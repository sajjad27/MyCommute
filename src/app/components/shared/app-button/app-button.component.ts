import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {

  @Input() label!: string;
  @Input() isLoading: boolean = false;
  @Input() class: string = '';
  @Output() OnClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    this.OnClick.emit();
  }

}
