import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutenotComponent } from './routenot.component';

describe('RoutenotComponent', () => {
  let component: RoutenotComponent;
  let fixture: ComponentFixture<RoutenotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutenotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutenotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
