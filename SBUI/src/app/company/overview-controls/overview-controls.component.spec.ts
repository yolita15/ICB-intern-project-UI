import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewControlsComponent } from './overview-controls.component';

describe('OverviewControlsComponent', () => {
  let component: OverviewControlsComponent;
  let fixture: ComponentFixture<OverviewControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
