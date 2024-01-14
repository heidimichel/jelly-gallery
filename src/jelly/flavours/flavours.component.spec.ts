import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyFlavoursComponent } from './flavours.component';

describe('JellyAboutComponent', () => {
  let component: JellyFlavoursComponent;
  let fixture: ComponentFixture<JellyFlavoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyFlavoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyFlavoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
