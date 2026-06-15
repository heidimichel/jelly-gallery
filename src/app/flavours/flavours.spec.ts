import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flavours } from './flavours';

describe('Flavours', () => {
  let component: Flavours;
  let fixture: ComponentFixture<Flavours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flavours],
    }).compileComponents();

    fixture = TestBed.createComponent(Flavours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
