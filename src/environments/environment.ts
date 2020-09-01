// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Theme } from 'src/app/models/theme';

export const environment = {
  production: false,
  defaultTheme: Theme.LIGHT,
  languages: [ { value: 'en', label: 'english' }, { value: 'fr', label: 'francais' } ],
  contactEmail: 'hello@blockbrainers.com',
  emailerApiUrl: 'https://bb-emailer-api.herokuapp.com/email'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
