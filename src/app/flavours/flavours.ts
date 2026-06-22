import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'jelly-flavours',
  imports: [],
  templateUrl: './flavours.html',
  styleUrl: './flavours.scss',
})
export class JellyFlavoursComponent implements OnInit {
  private flavours = ['grape','blueberry','sky','kiwi','ananas','orange','cherry','strawberry','peach'];

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const saved = localStorage.getItem('jelly-flavour');
    if (saved && this.flavours.includes(saved)) {
      this.setBodyClass(saved);
    }
  }

  chooseTheme(flavour: string) {
    if (!flavour) return;
    this.setBodyClass(flavour);
    localStorage.setItem('jelly-flavour', flavour);
  }

  private setBodyClass(flavour: string) {
    this.flavours.forEach(f => this.renderer.removeClass(this.document.body, f));
    this.renderer.addClass(this.document.body, flavour);
  }
}
