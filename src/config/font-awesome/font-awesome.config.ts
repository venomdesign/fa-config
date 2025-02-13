import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Pro icons (commented out) - uncomment and install packages when using pro
// import { fad } from '@fortawesome/pro-duotone-svg-icons';
// import { fal } from '@fortawesome/pro-light-svg-icons';
// import { fat } from '@fortawesome/pro-thin-svg-icons';
// import { fasr } from '@fortawesome/sharp-regular-svg-icons';
// import { fass } from '@fortawesome/sharp-solid-svg-icons';

export function initializeFontAwesome(config: FaConfig, library: FaIconLibrary): void {
  // Set default icon style (can be changed to 'far' or 'fab' if preferred)
  config.defaultPrefix = 'fas';

  // Add free icon packages
  library.addIconPacks(
    fas,  // Solid icons
    far,  // Regular icons
    fab   // Brands icons
  );

  // Pro icon packages (commented out) - uncomment when using pro
  // library.addIconPacks(
  //   fad,   // Duotone icons
  //   fal,   // Light icons
  //   fat,   // Thin icons
  //   fasr,  // Sharp Regular icons
  //   fass   // Sharp Solid icons
  // );

  // Optional: Configure other settings
  config.fixedWidth = true;      // Make all icons have the same width

  // Pro configuration (commented out) - uncomment when using pro
  // To use pro icons, you'll need to:
  // 1. Install pro packages:
  //    npm install --save @fortawesome/pro-solid-svg-icons
  //    npm install --save @fortawesome/pro-regular-svg-icons
  //    npm install --save @fortawesome/pro-light-svg-icons
  //    npm install --save @fortawesome/pro-thin-svg-icons
  //    npm install --save @fortawesome/pro-duotone-svg-icons
  //    npm install --save @fortawesome/sharp-solid-svg-icons
  //    npm install --save @fortawesome/sharp-regular-svg-icons
  // 2. Configure .npmrc with your Font Awesome Pro token:
  //    @fortawesome:registry=https://npm.fontawesome.com/
  //    //npm.fontawesome.com/:_authToken=YOUR_FONT_AWESOME_TOKEN
}
