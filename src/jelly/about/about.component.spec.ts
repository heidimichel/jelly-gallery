import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyAboutComponent } from './about.component';

describe('JellyAboutComponent', () => {
  let component: JellyAboutComponent;
  let fixture: ComponentFixture<JellyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
