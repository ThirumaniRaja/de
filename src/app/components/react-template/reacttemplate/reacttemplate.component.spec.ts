import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacttemplateComponent } from './reacttemplate.component';

describe('ReacttemplateComponent', () => {
  let component: ReacttemplateComponent;
  let fixture: ComponentFixture<ReacttemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReacttemplateComponent]
    });
    fixture = TestBed.createComponent(ReacttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
