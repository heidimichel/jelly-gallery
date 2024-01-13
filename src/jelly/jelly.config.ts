import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './jelly.routes';

export const jellyConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
