import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MhNgDropdownComponent } from './shared/mh-ng-dropdown/mh-ng-dropdown.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DynNgBootDropdownComponent } from './shared/dyn-ng-boot-dropdown/dyn-ng-boot-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MhNgDropdownComponent,
    DynNgBootDropdownComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
