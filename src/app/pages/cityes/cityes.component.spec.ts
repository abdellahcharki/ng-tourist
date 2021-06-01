import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityesComponent } from './cityes.component';

describe('CityesComponent', () => {
  let component: CityesComponent;
  let fixture: ComponentFixture<CityesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
