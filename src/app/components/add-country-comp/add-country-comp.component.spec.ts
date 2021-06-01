import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryCompComponent } from './add-country-comp.component';

describe('AddCountryCompComponent', () => {
  let component: AddCountryCompComponent;
  let fixture: ComponentFixture<AddCountryCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCountryCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
