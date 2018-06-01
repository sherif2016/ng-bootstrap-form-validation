import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public result = {};
  public reactiveForm: FormGroup;

  public items = [
    { name: 'action1', displayText: 'Pull inventory' },
    { name: 'action2', displayText: 'Update invetory' },
    { name: 'action3', displayText: 'Delete invetory' },
  ];

  constructor(private fb: FormBuilder) {
    this.result = { "hello": "world" };

    this.reactiveForm = this.fb.group({
      bootDDL1: ['', Validators.required],
      bootDDL2: ['', Validators.required],
      dynDDL1: ['', Validators.required],
    })
  }

  onSubmitForm() {
    
  }


}
