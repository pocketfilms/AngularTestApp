import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReportsComponent } from './header-reports.component';

describe('HeaderReportsComponent', () => {
  let component: HeaderReportsComponent;
  let fixture: ComponentFixture<HeaderReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
