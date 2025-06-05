import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapresizeboxComponent } from './drapresizebox.component';

describe('DrapresizeboxComponent', () => {
  let component: DrapresizeboxComponent;
  let fixture: ComponentFixture<DrapresizeboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrapresizeboxComponent]
    });
    fixture = TestBed.createComponent(DrapresizeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
