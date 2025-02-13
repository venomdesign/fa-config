import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { FontAwesomeProvider } from '../config/font-awesome/font-awesome.provider';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideAnimations(),
    FaConfig,
    FaIconLibrary,
    FontAwesomeProvider
  ]
};