import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES, Router} from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent, environment } from './app/';

import { PopupComponent } from './app/popup';
import { TransclusionComponent } from './app/transclusion';
import { TabsComponent } from './app/tabs';
import { HooksComponent } from './app/hooks';

if (environment.production) {
  enableProdMode();
}

interface ExampleDef {
  label: string;  // link label
  name: string;   // route name of the example
  path: string;   // route path
  component: any; // component class
  dev?: boolean;  // is it an intermediate step?
}

const examples: ExampleDef[] = [/* tslint:disable:max-line-length */
  {label: 'Popup',                            name: 'Root',                       path: '',                       component: PopupComponent},
  {label: 'Transclusion',                     name: 'Transclusion',               path: 'transclusion',           component: TransclusionComponent},
  {label: 'Tabs',                             name: 'Tabs',                       path: 'tabs',                   component: TabsComponent},
  {label: 'Lifecycle Hooks',                  name: 'Hooks',                      path: 'hooks',                  component: HooksComponent},
]; /* tslint:enable:max-line-length */

const routes: RouterConfig = examples.map(
  (example: ExampleDef) => ({
    path: example.path, component: example.component, terminal: true
  })
);

bootstrap(AppComponent, [
  provideRouter(routes),
  provide('EXAMPLES', {useValue: examples}),
  provide(APP_BASE_HREF, {useValue: '/'}),
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
