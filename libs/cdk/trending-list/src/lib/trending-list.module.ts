import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TrendingListComponent } from './trending-list.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatDividerModule],
  declarations: [TrendingListComponent],
  exports: [TrendingListComponent],
})
export class TrendingListModule {}
