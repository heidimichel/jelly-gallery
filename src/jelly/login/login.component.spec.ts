import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: JellyLoginComponent;
  let fixture: ComponentFixture<JellyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
