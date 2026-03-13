import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ring-of-fire-df82d',
        appId: '1:923331436036:web:c238d95f1de199fc659f51',
        storageBucket: 'ring-of-fire-df82d.firebasestorage.app',
        apiKey: 'AIzaSyDPquqE-UfWBBcI2kTWxWBB2P7OJBPtsc8',
        authDomain: 'ring-of-fire-df82d.firebaseapp.com',
        messagingSenderId: '923331436036'
      })
    ),
    provideFirestore(() => getFirestore())
  ]
};
