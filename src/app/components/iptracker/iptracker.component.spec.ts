import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptrackerComponent } from './iptracker.component';

describe('IptrackerComponent', () => {
  let component: IptrackerComponent;
  let fixture: ComponentFixture<IptrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IptrackerComponent]
    });
    fixture = TestBed.createComponent(IptrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
