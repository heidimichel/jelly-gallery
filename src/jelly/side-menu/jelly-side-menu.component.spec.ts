import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellySideMenuComponent } from './jelly-side-menu.component';

describe('JellySideMenuComponent', () => {
  let component: JellySideMenuComponent;
  let fixture: ComponentFixture<JellySideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellySideMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellySideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
