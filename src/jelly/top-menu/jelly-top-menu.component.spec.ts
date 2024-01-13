import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyTopMenuComponent } from './jelly-top-menu.component';

describe('JellyTopMenuComponent', () => {
  let component: JellyTopMenuComponent;
  let fixture: ComponentFixture<JellyTopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyTopMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
