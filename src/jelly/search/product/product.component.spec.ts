import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyProduct } from './product.component';

describe('JellyProduct', () => {
  let component: JellyProduct;
  let fixture: ComponentFixture<JellyProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyProduct]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JellyProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
