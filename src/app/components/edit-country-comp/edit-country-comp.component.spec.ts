import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountryCompComponent } from './edit-country-comp.component';

describe('EditCountryCompComponent', () => {
  let component: EditCountryCompComponent;
  let fixture: ComponentFixture<EditCountryCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCountryCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
