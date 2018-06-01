import { Component, OnInit, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';


@Component({
  selector: 'dyn-ng-boot-dropdown',
  templateUrl: './dyn-ng-boot-dropdown.component.html',
  styleUrls: ['./dyn-ng-boot-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynNgBootDropdownComponent),
      multi: true,
    }],
})
export class DynNgBootDropdownComponent implements OnInit, ControlValueAccessor {

  @Input() options: Array<{name: any, displayText: string}>;
  optionSelected: any;

  constructor() { }

  ngOnInit() { }

  onChangeOption(option) {
    this.optionSelected = option;
    this.propagateChange(option);
  }

  public writeValue(obj: any) {
    console.log(`yel ${obj}`);
    if (obj) {
      console.log(obj);
    }
  }

  // registers 'fn' that will be fired wheb changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // not used, used for touch input
  public registerOnTouched() { }

  // the method set in registerOnChange to emit changes back to the form
  private propagateChange = (_: any) => { };

}
