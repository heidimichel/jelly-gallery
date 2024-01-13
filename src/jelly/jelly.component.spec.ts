import { TestBed } from '@angular/core/testing';
import { JellyComponent } from './jelly.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(JellyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'jelly-gallery' title`, () => {
    const fixture = TestBed.createComponent(JellyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jelly-gallery');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(JellyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, jelly-gallery');
    // todo: Fix this test
  });
});
