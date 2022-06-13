import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BalanceCardComponent } from './balance-card.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  declarations: [BalanceCardComponent],
  exports: [BalanceCardComponent],
})
export class BalanceCardModule {}
