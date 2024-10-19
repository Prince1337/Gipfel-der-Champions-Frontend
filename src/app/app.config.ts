import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"evasio-portal","appId":"1:749881701258:web:9f1d32dcc641e261074e73","storageBucket":"evasio-portal.appspot.com","apiKey":"AIzaSyCAriSSXQSvW0DShYSrlM7T3kpxSUu_3n8","authDomain":"evasio-portal.firebaseapp.com","messagingSenderId":"749881701258","measurementId":"G-36KXKHZ1S4"})), provideAnalytics(() => getAnalytics()), ScreenTrackingService],
};
