import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRowComponent } from './place-row.component';

describe('PlaceRowComponent', () => {
  let component: PlaceRowComponent;
  let fixture: ComponentFixture<PlaceRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
