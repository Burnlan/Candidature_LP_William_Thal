import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBiscuitFormComponent } from './add-biscuit-form.component';

describe('AddBiscuitFormComponent', () => {
  let component: AddBiscuitFormComponent;
  let fixture: ComponentFixture<AddBiscuitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBiscuitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBiscuitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
