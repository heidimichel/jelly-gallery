import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyHomeComponent } from './home';

describe('Home', () => {
  let component: JellyHomeComponent;
  let fixture: ComponentFixture<JellyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JellyHomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
