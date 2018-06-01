import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhNgDropdownComponent } from './mh-ng-dropdown.component';

describe('MhNgDropdownComponent', () => {
  let component: MhNgDropdownComponent;
  let fixture: ComponentFixture<MhNgDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhNgDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhNgDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
