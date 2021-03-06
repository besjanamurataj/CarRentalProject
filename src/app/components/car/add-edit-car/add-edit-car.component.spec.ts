import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCarComponent } from './add-edit-car.component';

describe('AddEditComponent', () => {
  let component: AddEditCarComponent;
  let fixture: ComponentFixture<AddEditCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
