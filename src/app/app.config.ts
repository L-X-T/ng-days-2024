import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withPreloading } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideImageKitLoader } from '@angular/common';
import { quicklinkProviders, QuicklinkStrategy } from 'ngx-quicklink';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideImageKitLoader('https://ik.imagekit.io/LXT'),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withPreloading(QuicklinkStrategy),
      // withDebugTracing(),
      // withEnabledBlockingInitialNavigation()
    ),
    quicklinkProviders, provideClientHydration(),
  ],
};
