import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHomepageComponent } from './game-homepage.component';

describe('GameHomepageComponent', () => {
  let component: GameHomepageComponent;
  let fixture: ComponentFixture<GameHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
