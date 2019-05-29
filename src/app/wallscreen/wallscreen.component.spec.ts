import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallscreenComponent } from './wallscreen.component';

describe('WallscreenComponent', () => {
  let component: WallscreenComponent;
  let fixture: ComponentFixture<WallscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
