import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NODE_RED_URL, PROXY_URL } from './constants';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: PROXY_URL, useValue: '/proxy' },
    { provide: NODE_RED_URL, useValue: 'NODE_RED_URL' },
  ],
})
export class CoreModule {}
