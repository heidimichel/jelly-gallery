import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyNotFoundComponent } from './not-found.component';

describe('JellyNotFoundComponent', () => {
  let component: JellyNotFoundComponent;
  let fixture: ComponentFixture<JellyNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
