import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routes } from './app.routes'
import { employeeReducer } from './store/employee/employee.reducer'
import { provideEffects } from '@ngrx/effects'
import { EmployeeEffects } from './store/employee/employee.effects'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideStore({
      employee: employeeReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideEffects([
      EmployeeEffects,
    ]),
    provideRouter(routes)
  ]
};
