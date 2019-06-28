import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralMenuComponent } from './central-menu.component';

describe('CentralMenuComponent', () => {
  let component: CentralMenuComponent;
  let fixture: ComponentFixture<CentralMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
