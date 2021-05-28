import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLocationComponent } from './layout-location.component';

describe('LayoutLocationComponent', () => {
  let component: LayoutLocationComponent;
  let fixture: ComponentFixture<LayoutLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
