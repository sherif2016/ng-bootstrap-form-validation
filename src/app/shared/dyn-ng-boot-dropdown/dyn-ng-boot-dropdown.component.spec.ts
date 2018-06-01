import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynNgBootDropdownComponent } from './dyn-ng-boot-dropdown.component';

describe('DynNgBootDropdownComponent', () => {
  let component: DynNgBootDropdownComponent;
  let fixture: ComponentFixture<DynNgBootDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynNgBootDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynNgBootDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
