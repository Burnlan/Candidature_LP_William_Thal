import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscuitlistComponent } from './biscuitlist.component';

describe('BiscuitlistComponent', () => {
  let component: BiscuitlistComponent;
  let fixture: ComponentFixture<BiscuitlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiscuitlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiscuitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
