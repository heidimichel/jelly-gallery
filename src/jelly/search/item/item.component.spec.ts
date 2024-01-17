import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyItem } from './item.component';

describe('JellyItem', () => {
  let component: JellyItem;
  let fixture: ComponentFixture<JellyItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyItem]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
