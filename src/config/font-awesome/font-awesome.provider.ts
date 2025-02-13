import { APP_INITIALIZER } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { initializeFontAwesome } from './font-awesome.config';

export const FontAwesomeProvider = {
  provide: APP_INITIALIZER,
  useFactory: (config: FaConfig, library: FaIconLibrary) => () => {
    initializeFontAwesome(config, library);
  },
  deps: [FaConfig, FaIconLibrary],
  multi: true
};
