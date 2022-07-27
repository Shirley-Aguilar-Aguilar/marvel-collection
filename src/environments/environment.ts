// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'marvel-collection',
    appId: '1:570267597670:web:1f6453840bb7b16eed66a7',
    storageBucket: 'marvel-collection.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBU58NUlvdz4rf0NzcwER2qFnle-aDFEH8',
    authDomain: 'marvel-collection.firebaseapp.com',
    messagingSenderId: '570267597670',
  },
  production: false,
  urlApi: "https://gateway.marvel.com/v1/public/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
