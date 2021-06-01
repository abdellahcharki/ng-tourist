import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrysComponent } from './countrys.component';

describe('CountrysComponent', () => {
  let component: CountrysComponent;
  let fixture: ComponentFixture<CountrysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
