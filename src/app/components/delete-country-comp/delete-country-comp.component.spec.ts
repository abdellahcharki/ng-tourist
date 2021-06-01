import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCountryCompComponent } from './delete-country-comp.component';

describe('DeleteCountryCompComponent', () => {
  let component: DeleteCountryCompComponent;
  let fixture: ComponentFixture<DeleteCountryCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCountryCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCountryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
