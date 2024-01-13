import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyFooterComponent } from './jelly-footer.component';

describe('JellyFooterComponent', () => {
  let component: JellyFooterComponent;
  let fixture: ComponentFixture<JellyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
