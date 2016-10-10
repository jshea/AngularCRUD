/**
 * Angular 2
 *    Used by webpack.common.js
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

// JIT ng2 compilation
platformBrowserDynamic().bootstrapModule(AppModule);
