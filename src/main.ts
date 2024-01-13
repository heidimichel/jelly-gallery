import { bootstrapApplication } from '@angular/platform-browser';
import { JellyComponent } from './jelly/jelly.component';
import { jellyConfig } from './jelly/jelly.config';

bootstrapApplication(JellyComponent, jellyConfig)
  .catch((err) => console.error(err));
