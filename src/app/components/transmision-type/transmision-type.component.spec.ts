import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmisionTypeComponent } from './transmision-type.component';

describe('TransmisionTypeComponent', () => {
  let component: TransmisionTypeComponent;
  let fixture: ComponentFixture<TransmisionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmisionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmisionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
