import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTransmisionComponent } from './add-edit-transmision.component';

describe('AddEditTransmisionComponent', () => {
  let component: AddEditTransmisionComponent;
  let fixture: ComponentFixture<AddEditTransmisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTransmisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTransmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
