import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCityCompComponent } from './delete-city-comp.component';

describe('DeleteCityCompComponent', () => {
  let component: DeleteCityCompComponent;
  let fixture: ComponentFixture<DeleteCityCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCityCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCityCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
