import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserCompComponent } from './delete-user-comp.component';

describe('DeleteUserCompComponent', () => {
  let component: DeleteUserCompComponent;
  let fixture: ComponentFixture<DeleteUserCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
