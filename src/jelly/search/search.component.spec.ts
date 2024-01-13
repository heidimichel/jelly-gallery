import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellySearchComponent } from './search.component';

describe('JellySearchComponent', () => {
  let component: JellySearchComponent;
  let fixture: ComponentFixture<JellySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
