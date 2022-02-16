import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightbtnComponent } from './fightbtn.component';

describe('FightbtnComponent', () => {
  let component: FightbtnComponent;
  let fixture: ComponentFixture<FightbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
