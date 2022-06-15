import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WatchlistComponent } from './watchlist.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatDividerModule, MatButtonModule, MatIconModule],
  declarations: [WatchlistComponent],
  exports: [WatchlistComponent],
})
export class WatchlistModule {}
