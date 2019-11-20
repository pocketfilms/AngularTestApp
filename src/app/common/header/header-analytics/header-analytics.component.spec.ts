import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnalyticsComponent } from './header-analytics.component';

describe('HeaderAnalyticsComponent', () => {
  let component: HeaderAnalyticsComponent;
  let fixture: ComponentFixture<HeaderAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
