import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlockUiService } from 'src/app/services/block-ui.service';
import { FormHelper } from 'src/app/services/form-helper';
export interface ChipOption {
  label: string;
  icon: string;
  selected: boolean;
}

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {

  constructor(private router: Router,
    private formHelper: FormHelper,
    private blockUiService: BlockUiService) { }


  @ViewChild('f', { static: false }) form!: NgForm;
  @Output() searchClick: EventEmitter<boolean> = new EventEmitter<boolean>();


  selectedSource: any;
  selectedDestination: any;

  // Sample data
  sources = [
    { value: 'Dhahran', viewValue: 'Dhahran' },
    { value: 'Abqaiq', viewValue: 'Abqaiq' },
    { value: 'Riyadh', viewValue: 'Riyadh' },
    { value: 'Jeddah', viewValue: 'Jeddah' }
  ];

  destinations = [
    { value: 'Dhahran', viewValue: 'Dhahran' },
    { value: 'Abqaiq', viewValue: 'Abqaiq' },
    { value: 'Riyadh', viewValue: 'Riyadh' },
    { value: 'Jeddah', viewValue: 'Jeddah' }
  ];

  // trackFn(index: number, item: any) {
  //   return index;
  // }

  options = [
    { label: 'Bus', icon: 'directions_bus', selected: false },
    { label: 'Train', icon: 'directions_railway', selected: false },
    { label: 'Taxi', icon: 'local_taxi', selected: false },
    { label: 'Airplane', icon: 'airplanemode_active', selected: false },
  ];

  toggleSelection(option: any): void {
    option.selected = !option.selected;
  }

  search() {
    if (this.form.invalid) {
      this.formHelper.markAllAsTouched(this.form.form);
      return;
    }
    this.blockUiService.blockWithMessage("Searching ...")
    setTimeout(() => {
      this.blockUiService.unblock();
      this.searchClick.emit(true);
    }, 3500);
  }

}
