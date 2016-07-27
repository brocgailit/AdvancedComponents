/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HooksComponent } from './hooks.component';

describe('Component: InitDestroy', () => {
  it('should create an instance', () => {
    let component = new HooksComponent();
    expect(component).toBeTruthy();
  });
});
